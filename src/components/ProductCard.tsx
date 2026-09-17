import { Link } from "react-router-dom";

import { categoryLabel, type Product } from "@/data/products";
import { cn, unsplash } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  className?: string;
  aspect?: string;
  index?: number;
}

export function ProductCard({ product, className, aspect = "aspect-[3/4]", index }: ProductCardProps) {
  const [cover, second] = product.images;
  return (
    <Link to={`/colecao/${product.slug}`} className={cn("group block", className)}>
      <div className={cn("relative overflow-hidden bg-cream-deep", aspect)}>
        <img
          src={unsplash(cover, 900, 1200)}
          alt={product.name}
          loading="lazy"
          className="img-earthy absolute inset-0 h-full w-full object-cover transition-all duration-1400 ease-editorial group-hover:scale-[1.04] group-hover:opacity-0"
        />
        {second && (
          <img
            src={unsplash(second, 900, 1200)}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="img-earthy absolute inset-0 h-full w-full scale-[1.04] object-cover opacity-0 transition-all duration-1400 ease-editorial group-hover:scale-100 group-hover:opacity-100"
          />
        )}
        {index !== undefined && (
          <span className="absolute left-4 top-4 font-serif text-sm italic text-cream drop-shadow">
            {String(index + 1).padStart(2, "0")}
          </span>
        )}
      </div>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <p className="eyebrow mb-2 text-[0.6rem] text-earth/50">{categoryLabel(product.category)}</p>
          <h3 className="font-serif text-2xl leading-tight text-earth transition-colors duration-500 group-hover:text-caramel">
            {product.name}
          </h3>
        </div>
        <span className="mt-6 whitespace-nowrap font-sans text-sm text-earth/70">{product.price}</span>
      </div>
    </Link>
  );
}
