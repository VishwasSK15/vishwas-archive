import Image from "next/image";

interface ArchiveLogoProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  className?: string;
  priority?: boolean;
}

const sizeConfig = {
  xs: { px: 20, containerClass: "w-5 h-5" },
  sm: { px: 28, containerClass: "w-7 h-7" },
  md: { px: 36, containerClass: "w-9 h-9" },
  lg: { px: 56, containerClass: "w-14 h-14" },
  xl: { px: 88, containerClass: "w-20 h-20 sm:w-24 sm:h-24" },
};

export function ArchiveLogo({
  size = "md",
  className = "",
  priority = false,
}: ArchiveLogoProps) {
  const { px, containerClass } = sizeConfig[size];

  return (
    <div
      className={`relative inline-flex items-center justify-center flex-shrink-0 ${containerClass} ${className}`}
      aria-hidden="true"
    >
      <Image
        src="/images/vsk-mark.png"
        alt="VSK Personal Monogram"
        width={px}
        height={px}
        priority={priority}
        className="w-full h-full object-contain select-none transition-all duration-300 drop-shadow-[0_2px_6px_rgba(0,0,0,0.12)] dark:drop-shadow-[0_0_12px_rgba(59,130,246,0.35)]"
      />
    </div>
  );
}
