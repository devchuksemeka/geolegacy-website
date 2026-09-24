import Image from "next/image";
import Reveal from "./Reveal";

export default function PhotoBand({
  src,
  alt,
  caption,
  variant = "wide",
  priority = false,
  className = "",
}: {
  src: string;
  alt: string;
  caption?: string;
  variant?: "wide" | "boxed";
  priority?: boolean;
  className?: string;
}) {
  return (
    <Reveal variant="scale" className={className}>
      <div className={`photo-band photo-band--${variant}`}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={
            variant === "wide"
              ? "(max-width: 768px) 100vw, 1184px"
              : "(max-width: 768px) 100vw, 560px"
          }
          style={{ objectFit: "cover" }}
        />
        {caption && (
          <span className="photo-band-caption">{caption}</span>
        )}
      </div>
    </Reveal>
  );
}
