import { useState, type ChangeEvent, type FormEvent } from "react";
import { Check, Loader2 } from "lucide-react";

import { Star } from "@/components/brand";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/lib/supabase";
import { cn } from "@/lib/utils";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};
type FormErrors = Partial<Record<keyof FormValues, string>>;
type Status = "idle" | "sending" | "success" | "error";

const initialValues: FormValues = { name: "", email: "", phone: "", subject: "", message: "" };

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  if (values.name.trim().length < 2) errors.name = "Informe o seu nome.";
  else if (values.name.trim().length > 120) errors.name = "Use no máximo 120 caracteres.";
  if (!values.email.trim()) errors.email = "Informe o seu e-mail.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) errors.email = "Digite um e-mail válido.";
  const digits = values.phone.replace(/\D/g, "");
  if (values.phone && (digits.length < 10 || digits.length > 11)) errors.phone = "Digite um telefone com DDD.";
  if (!values.subject) errors.subject = "Escolha um assunto.";
  if (values.message.trim().length < 10) errors.message = "Escreva uma mensagem com pelo menos 10 caracteres.";
  return errors;
}

function formatPhone(value: string) {
  const d = value.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d.length ? `(${d}` : "";
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

/** Grava a mensagem na tabela contact_messages do Supabase (inserção pública, sem leitura). */
async function sendMessage(values: FormValues) {
  const { error } = await supabase.from("contact_messages").insert({
    name: values.name.trim(),
    email: values.email.trim().toLowerCase(),
    phone: values.phone.trim() || null,
    subject: values.subject,
    message: values.message.trim(),
  });
  if (error) throw error;
}

function FieldError({ id, message }: { id: string; message?: string }) {
  return (
    <p id={id} role={message ? "alert" : undefined} className={cn("min-h-[1.25rem] pt-2 text-xs text-wine transition-opacity", message ? "opacity-100" : "opacity-0")}>
      {message}
    </p>
  );
}

export function ContactForm({ subjects }: { subjects: string[] }) {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormValues, boolean>>>({});
  const [status, setStatus] = useState<Status>("idle");
  // Campo invisível para pessoas; robôs de spam costumam preenchê-lo.
  const [honeypot, setHoneypot] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const next = { ...values, [name]: name === "phone" ? formatPhone(value) : value };
    setValues(next);
    if (touched[name as keyof FormValues]) setErrors(validate(next));
  };

  const handleBlur = (name: keyof FormValues) => {
    setTouched((t) => ({ ...t, [name]: true }));
    setErrors(validate(values));
  };

  const setSubject = (subject: string) => {
    const next = { ...values, subject };
    setValues(next);
    setTouched((t) => ({ ...t, subject: true }));
    setErrors(validate(next));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    setTouched({ name: true, email: true, phone: true, subject: true, message: true });
    if (Object.keys(found).length > 0) {
      const first = Object.keys(found)[0];
      document.getElementById(first === "subject" ? "subject-group" : first)?.focus();
      return;
    }
    setStatus("sending");
    try {
      if (!honeypot) await sendMessage(values);
      setStatus("success");
    } catch (err) {
      console.error("Erro ao enviar mensagem:", err);
      setStatus("error");
    }
  };

  const reset = () => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
    setStatus("idle");
  };

  const shown = (field: keyof FormValues) => (touched[field] ? errors[field] : undefined);

  if (status === "success") {
    return (
      <div className="flex flex-col items-start border border-earth/15 p-8 md:p-12" role="status" aria-live="polite">
        <span className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-earth text-cream">
          <Check className="h-5 w-5" strokeWidth={1.5} />
        </span>
        <h3 className="display text-4xl text-earth">
          Mensagem enviada, <em>{values.name.trim().split(" ")[0]}</em>.
        </h3>
        <p className="mt-5 leading-relaxed text-earth/75">
          Obrigada pelo contato! Vamos responder no e-mail <strong className="font-medium text-earth">{values.email}</strong> em até um dia útil.
        </p>
        <Star className="my-8 h-3 w-3 text-gold" />
        <Button variant="outline" onClick={reset}>
          Enviar outra mensagem
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="website">Deixe este campo em branco</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">Nome *</Label>
          <Input id="name" name="name" autoComplete="name" placeholder="Seu nome" maxLength={120} value={values.name} onChange={handleChange} onBlur={() => handleBlur("name")} aria-invalid={!!shown("name")} aria-describedby="name-error" />
          <FieldError id="name-error" message={shown("name")} />
        </div>
        <div>
          <Label htmlFor="phone">Telefone</Label>
          <Input id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="(00) 00000-0000" value={values.phone} onChange={handleChange} onBlur={() => handleBlur("phone")} aria-invalid={!!shown("phone")} aria-describedby="phone-error" />
          <FieldError id="phone-error" message={shown("phone")} />
        </div>
      </div>

      <div>
        <Label htmlFor="email">E-mail *</Label>
        <Input id="email" name="email" type="email" autoComplete="email" placeholder="voce@email.com" value={values.email} onChange={handleChange} onBlur={() => handleBlur("email")} aria-invalid={!!shown("email")} aria-describedby="email-error" />
        <FieldError id="email-error" message={shown("email")} />
      </div>

      <fieldset>
        <legend className="mb-4 font-sans text-[0.65rem] font-medium uppercase tracking-[0.25em] text-earth/70">Assunto *</legend>
        <div id="subject-group" tabIndex={-1} role="radiogroup" aria-describedby="subject-error" className="flex flex-wrap gap-2 outline-none">
          {subjects.map((s) => (
            <button
              key={s}
              type="button"
              role="radio"
              aria-checked={values.subject === s}
              onClick={() => setSubject(s)}
              className={cn(
                "border px-4 py-2.5 text-xs transition-colors duration-300",
                values.subject === s ? "border-earth bg-earth text-cream" : "border-earth/20 text-earth/80 hover:border-earth",
                shown("subject") && values.subject !== s && "border-wine/40",
              )}
            >
              {s}
            </button>
          ))}
        </div>
        <FieldError id="subject-error" message={shown("subject")} />
      </fieldset>

      <div>
        <Label htmlFor="message">Mensagem *</Label>
        <Textarea id="message" name="message" placeholder="Conte como podemos ajudar…" value={values.message} onChange={handleChange} onBlur={() => handleBlur("message")} aria-invalid={!!shown("message")} aria-describedby="message-error" maxLength={1000} />
        <div className="flex justify-between">
          <FieldError id="message-error" message={shown("message")} />
          <span className="pt-2 text-xs text-earth/40">{values.message.length}/1000</span>
        </div>
      </div>

      {status === "error" && (
        <p role="alert" className="border-l-2 border-wine bg-wine/5 px-4 py-3 text-sm text-wine">
          Não foi possível enviar agora. Tente novamente ou fale com a gente pelo WhatsApp.
        </p>
      )}

      <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-earth/50">* Campos obrigatórios</p>
        <Button type="submit" size="lg" disabled={status === "sending"} className="sm:min-w-[220px]">
          {status === "sending" ? (
            <>
              <Loader2 className="animate-spin" /> Enviando…
            </>
          ) : (
            "Enviar mensagem"
          )}
        </Button>
      </div>
    </form>
  );
}
