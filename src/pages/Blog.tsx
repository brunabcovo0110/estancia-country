import { PageHeader } from "@/components/PageHeader";
import { PostCard } from "@/components/PostCard";
import { Reveal } from "@/components/Reveal";
import { posts } from "@/data/posts";

export default function Blog() {
  const [first, ...rest] = posts;

  return (
    <>
      <PageHeader
        eyebrow="Journal"
        title={
          <>
            Histórias do <em>campo</em>
          </>
        }
        description="Estilo de vida country, moda, cuidados com as peças e tudo o que inspira a mulher do agro."
      />

      <section className="container pb-24 md:pb-40">
        <Reveal>
          <PostCard post={first} large />
        </Reveal>

        <div className="mt-24 grid gap-x-10 gap-y-20 border-t border-earth/10 pt-20 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((post, i) => (
            <Reveal key={post.slug} delay={(i % 3) * 120}>
              <PostCard post={post} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
