import { Link } from "react-router-dom";

import { Longhorn } from "@/components/brand";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="container flex min-h-[80vh] flex-col items-center justify-center pb-20 pt-40 text-center">
      <Longhorn className="mb-10 h-12 w-24 text-caramel" />
      <p className="eyebrow mb-6">Erro 404</p>
      <h1 className="display text-5xl text-earth md:text-7xl">
        Essa trilha <em>não leva a lugar nenhum</em>
      </h1>
      <p className="mt-6 max-w-md text-earth/70">A página que você procura não existe ou mudou de endereço.</p>
      <Button asChild className="mt-12">
        <Link to="/">Voltar ao início</Link>
      </Button>
    </section>
  );
}
