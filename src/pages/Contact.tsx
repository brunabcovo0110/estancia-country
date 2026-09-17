import { useState, type ChangeEvent, type FormEvent } from "react";
import { Check, Instagram, Loader2, Mail, MessageCircle } from "lucide-react";

import { DiamondStar, Star } from "@/components/brand";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn, contact, instagramLink, unsplash, whatsappLink } from "@/lib/utils";

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

const subjects = ["Dúvida sobre uma peça", "Tamanhos e medidas", "Pedido e entrega", "Parcerias", "Outro assunto"];

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  if (values.name.trim().length < 2) errors.name = "Informe o seu nome.";
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

/**
 * Envia a mensagem. Se VITE_FORM_ENDPOINT estiver definido (ex.: Formspree),
 * faz um POST real; caso contrário, simula o envio para demonstração.
 */
async function sendMessage(values: FormValues) {
  const endpoint = import.meta.env.VITE_FORM_ENDPOINT as string | undefined;
  if (!endpoint) {
    await new Promise((resolve) => setTimeout(resolve, 1200));
    return;
  }
  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(values),
  });
  if (!res.ok) throw new Error("Falha no envio");
}

function FieldError({ id, message }: { id: string; message?: string }) {
  return (
    <p id={id} role={message ? "alert" : undefined} className={cn("min-h-[1.25rem] pt-2 text-xs text-wine transition-opacity", message ? "opacity-100" : "opacity-0")}>
      {message}
    </p>
  );
}

export default function Contact() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormValues, boolean>>>({});
  const [status, setStatus] = useState<Status>("idle");

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
      await sendMessage(values);
      setStatus("success");
    } catch {
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

  return (
    <>
      <PageHeader
        eyebrow="Contato"
        title={
          <>
            Vamos <em>conversar</em>
          </>
        }
        description="Dúvidas sobre medidas, pedidos ou parcerias? Escreva para a gente — respondemos em até um dia útil."
      />

      <section className="container grid gap-16 pb-24 md:grid-cols-12 md:gap-10 md:pb-40">
        {/* Informações */}
        <aside className="md:col-span-4">
          <Reveal>
            <div className="mb-12 hidden aspect-[4/5] overflow-hidden md:block">
              <img src={unsplash("1775563622960-b2cfe13d495d", 800, 1000)} alt="Mulher segurando um chapéu de cowboy ao ar livre" className="img-earthy h-full w-full object-cover" />
            </div>
            <ul className="space-y-8">
              <li>
                <p className="mb-2 font-sans text-[0.62rem] font-medium uppercase tracking-[0.3em] text-earth/50">WhatsApp</p>
                <a href={whatsappLink("Olá! Vim pelo site da Estância Country.")} target="_blank" rel="noreferrer" className="flex items-center gap-3 font-serif text-2xl text-earth transition-colors hover:text-caramel">
                  <MessageCircle className="h-4 w-4" strokeWidth={1.3} /> {contact.whatsappLabel}
                </a>
              </li>
              <li>
                <p className="mb-2 font-sans text-[0.62rem] font-medium uppercase tracking-[0.3em] text-earth/50">Instagram</p>
                <a href={instagramLink} target="_blank" rel="noreferrer" className="flex items-center gap-3 font-serif text-2xl text-earth transition-colors hover:text-caramel">
                  <Instagram className="h-4 w-4" strokeWidth={1.3} /> @{contact.instagram}
                </a>
              </li>
              <li>
                <p className="mb-2 font-sans text-[0.62rem] font-medium uppercase tracking-[0.3em] text-earth/50">E-mail</p>
                <a href={`mailto:${contact.email}`} className="flex items-center gap-3 break-all font-serif text-xl text-earth transition-colors hover:text-caramel md:text-2xl">
                  <Mail className="h-4 w-4 shrink-0" strokeWidth={1.3} /> {contact.email}
                </a>
              </li>
              <li className="border-t border-earth/15 pt-8 text-sm leading-relaxed text-earth/70">
                <p className="mb-2 font-sans text-[0.62rem] font-medium uppercase tracking-[0.3em] text-earth/50">Atendimento</p>
                Segunda a sexta, das 9h às 18h
                <br />
                Sábados, das 9h às 13h
                <br />
                <span className="mt-3 flex items-center gap-2 font-serif text-base italic text-caramel">
                  <Star className="h-2 w-2" /> Loja 100% online · Envio para todo o Brasil
                </span>
              </li>
            </ul>
          </Reveal>
        </aside>

        {/* Formulário */}
        <div className="md:col-span-7 md:col-start-6 lg:col-span-6 lg:col-start-7">
          <Reveal delay={150}>
            {status === "success" ? (
              <div className="flex min-h-[520px] flex-col items-start justify-center border border-earth/15 p-8 md:p-14" role="status" aria-live="polite">
                <span className="mb-10 flex h-14 w-14 items-center justify-center rounded-full bg-earth text-cream">
                  <Check className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <h2 className="display text-4xl text-earth md:text-5xl">
                  Mensagem enviada, <em>{values.name.trim().split(" ")[0]}</em>.
                </h2>
                <p className="mt-6 max-w-md leading-relaxed text-earth/75">
                  Obrigada pelo contato! Nossa equipe vai responder no e-mail <strong className="font-medium text-earth">{values.email}</strong> em até um dia útil.
                </p>
                <DiamondStar className="my-10 h-8 w-8 text-caramel" />
                <Button variant="outline" onClick={reset}>
                  Enviar outra mensagem
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6" aria-describedby="form-note">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="name">Nome *</Label>
                    <Input id="name" name="name" autoComplete="name" placeholder="Seu nome" value={values.name} onChange={handleChange} onBlur={() => handleBlur("name")} aria-invalid={!!shown("name")} aria-describedby="name-error" />
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
                          shown("subject") && "border-wine/50",
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

                <div className="flex flex-col gap-5 pt-4 sm:flex-row sm:items-center sm:justify-between">
                  <p id="form-note" className="text-xs text-earth/50">
                    * Campos obrigatórios
                  </p>
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
            )}
          </Reveal>
        </div>
      </section>
    </>
  );
}
