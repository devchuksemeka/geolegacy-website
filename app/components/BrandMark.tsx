import Image from "next/image";

export default function BrandMark({ className }: { className?: string }) {
  return (
    <Image
      src="/logo.png"
      alt=""
      aria-hidden="true"
      width={34}
      height={34}
      className={className}
      priority
    />
  );
}
