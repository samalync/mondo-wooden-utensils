import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-cream-100 dark:bg-charcoal-900 pt-[56px]">
      <div className="flex flex-col items-center gap-6">
        <div className="relative h-14 w-14">
          <Image
            src="/logo.png"
            alt=""
            fill
            className="object-contain"
            sizes="56px"
          />
        </div>
        <div className="w-12 h-12 border-2 border-gold-300 border-t-transparent rounded-full animate-spin" />
        <span className="font-display text-gold-500 text-lg">Mondo Wood</span>
      </div>
    </div>
  );
}
