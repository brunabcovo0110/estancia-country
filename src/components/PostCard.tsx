import { Link } from "react-router-dom";

import type { Post } from "@/data/posts";
import { cn, unsplash } from "@/lib/utils";

interface PostCardProps {
  post: Post;
  className?: string;
  large?: boolean;
}

export function PostCard({ post, className, large }: PostCardProps) {
  return (
    <Link to={`/blog/${post.slug}`} className={cn("group block", className)}>
      <div className={cn("overflow-hidden bg-cream-deep", large ? "aspect-[4/3] md:aspect-[16/10]" : "aspect-[4/5]")}>
        <img
          src={unsplash(post.cover, large ? 1600 : 900)}
          alt={post.title}
          loading="lazy"
          className="img-mono h-full w-full object-cover transition-all duration-1400 ease-editorial group-hover:scale-[1.04] group-hover:grayscale-[0.4]"
        />
      </div>
      <div className="mt-6">
        <p className="eyebrow flex items-center gap-3 text-[0.6rem]">
          {post.category}
          <span className="h-px w-6 bg-caramel/50" />
          <span className="text-earth/50">{post.date}</span>
        </p>
        <h3
          className={cn(
            "mt-3 font-serif leading-[1.1] text-earth transition-colors duration-500 group-hover:text-caramel",
            large ? "text-3xl md:text-5xl" : "text-2xl md:text-[1.7rem]",
          )}
        >
          {post.title}
        </h3>
        <p className={cn("mt-4 leading-relaxed text-earth/70", large ? "max-w-xl text-base" : "text-sm")}>{post.excerpt}</p>
        <span className="link-underline mt-5 inline-block font-sans text-[0.65rem] font-medium uppercase tracking-[0.25em] text-earth">
          Ler artigo
        </span>
      </div>
    </Link>
  );
}
