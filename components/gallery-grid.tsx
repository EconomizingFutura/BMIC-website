import { ductingImages } from "@/utils/ductingObjects";
import Image from "next/image";

type GalleryGridProps = {
  onImageClick: (index: number) => void;
};

export function GalleryGrid({ onImageClick }: GalleryGridProps) {
  const items = ductingImages;

  if (items.length === 0) {
    return (
      <div className="rounded-md border bg-card p-6 text-center text-sm text-muted-foreground">
        No projects found for this filter.
      </div>
    );
  }

  return (
    <ul
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      aria-label="Project gallery"
    >
      {items.map((item, idx) => (
        <li
          key={item.name}
          className="group relative overflow-hidden rounded-md border bg-muted/10 cursor-pointer"
          onClick={() => onImageClick(idx)}
        >
          <div className="relative aspect-[4/3] w-full">
            <Image
              src={item.src || "/placeholder.svg"}
              alt={`${item.type} project image`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            />
          </div>

          <div className="pointer-events-none absolute left-2 top-2">
            <span className="rounded-full bg-background/85 px-2 py-1 text-xs font-medium ring-1 ring-black/5 backdrop-blur-sm dark:ring-white/10">
              {item.type}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
}
