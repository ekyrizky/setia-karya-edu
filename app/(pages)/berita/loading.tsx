import { NewsCardSkeleton, HeroSkeleton } from "@/components/ui/loading-skeletons";

export default function Loading() {
  return (
    <div className="min-h-screen">
      {/* Hero Section Skeleton */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="h-12 w-64 bg-white/20 rounded mx-auto mb-6 animate-pulse" />
            <div className="h-6 w-96 bg-white/20 rounded mx-auto animate-pulse" />
          </div>
        </div>
      </section>

      {/* News Grid Skeleton */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 9 }).map((_, i) => (
              <NewsCardSkeleton key={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}