import { FacilityCardSkeleton, StatCardSkeleton } from "@/components/ui/loading-skeletons";

export default function Loading() {
  return (
    <div className="min-h-screen">
      {/* Hero Section Skeleton */}
      <section className="bg-gradient-to-r from-green-900 to-green-700 text-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="h-12 w-64 bg-white/20 rounded mx-auto mb-6 animate-pulse" />
            <div className="h-6 w-96 bg-white/20 rounded mx-auto animate-pulse" />
          </div>
        </div>
      </section>

      {/* Statistics Skeleton */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <StatCardSkeleton key={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Grid Skeleton */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <div className="h-10 w-64 bg-gray-200 rounded mx-auto mb-4 animate-pulse" />
            <div className="h-6 w-96 bg-gray-200 rounded mx-auto animate-pulse" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <FacilityCardSkeleton key={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}