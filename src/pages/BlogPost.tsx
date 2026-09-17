import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import { DiamondStar } from "@/components/brand";
import { PostCard } from "@/components/PostCard";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { getPost, posts, type Block } from "@/data/posts";
import { unsplash } from "@/lib/utils";
import NotFound from "@/pages/NotFound";

function renderBlock(block: Block, i: number) {
  switch (block.type) {
    case "h2":
      return <h2 key={i}>{block.text}</h2>;
    case "quote":
      return <blockquote key={i}>{block.text}</blockquote>;
    case "ul":
      return (
        <ul key={i}>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    default:
      return <p key={i}>{block.text}</p>;
  }
}

export default function BlogPost() {
  const { slug = "" } = useParams();
  const post = getPost(slug);

  if (!post) return <NotFound />;

  const more = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <article>
      <header className="container pb-14 pt-32 md:pb-20 md:pt-44">
        <Link to="/blog" className="mb-12 inline-flex items-center gap-3 font-sans text-[0.65rem] font-medium uppercase tracking-[0.25em] text-earth/60 transition-colors hover:text-earth">
          <ArrowLeft className="h-3.5 w-3.5" strokeWidth={1.3} /> Journal
        </Link>
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="eyebrow mb-8 flex items-center justify-center gap-3">
            {post.category}
            <span className="h-px w-6 bg-caramel/50" />
            <span className="text-earth/50">
              {post.date} · {post.readingTime} de leitura
            </span>
          </p>
          <h1 className="display text-4xl text-earth sm:text-5xl md:text-7xl">{post.title}</h1>
          <p className="mx-auto mt-8 max-w-2xl font-serif text-xl italic leading-relaxed text-earth/70 md:text-2xl">{post.excerpt}</p>
        </Reveal>
      </header>

      <Reveal className="container">
        <div className="aspect-[4/3] overflow-hidden md:aspect-[21/9]">
          <img src={unsplash(post.cover, 2200)} alt="" className="img-mono h-full w-full object-cover" />
        </div>
      </Reveal>

      <div className="container py-20 md:py-28">
        <div className="prose-estancia mx-auto max-w-2xl first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-7xl first-letter:leading-[0.8] first-letter:text-caramel">
          {post.content.map(renderBlock)}
        </div>
        <DiamondStar className="mx-auto mt-16 h-10 w-10 text-caramel" />
      </div>

      <section className="border-t border-earth/10 bg-cream-deep/50">
        <div className="container py-24 md:py-32">
          <SectionHeading eyebrow="Continue lendo" title={<>Mais do <em>Journal</em></>} className="mb-14" />
          <div className="grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {more.map((p, i) => (
              <Reveal key={p.slug} delay={i * 120}>
                <PostCard post={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
