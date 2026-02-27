import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center section-padding">
      <p className="text-gold-500 dark:text-gold-400 font-display text-6xl md:text-8xl font-light">
        404
      </p>
      <h1 className="font-display text-2xl md:text-3xl text-charcoal-800 dark:text-cream-100 mt-4">
        Page not found
      </h1>
      <p className="mt-4 text-charcoal-600 dark:text-cream-400 text-center max-w-md">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <div className="mt-10 flex gap-4">
        <Button href="/">Home</Button>
        <Button href="/products" variant="outline">
          Shop
        </Button>
      </div>
    </div>
  );
}
