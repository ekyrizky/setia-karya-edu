import { ExtracurricularSkeleton, StatCardSkeleton, CardSkeleton } from "@/components/ui/loading-skeletons";

export default function Loading() {
  return (
    <div className="min-h-screen">
      {/* Hero Section Skeleton */}
      <section className="bg-gradient-to-r from-purple-900 to-purple-700 text-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="h-12 w-64 bg-white/20 rounded mx-auto mb-6 animate-pulse" />
            <div className="h-6 w-96 bg-white/20 rounded mx-auto mb-8 animate-pulse" />
            <div className="grid md:grid-cols-4 gap-4 mt-12">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="bg-white/10 rounded-lg p-4">
                  <div className="h-8 w-8 bg-white/20 rounded mx-auto mb-2 animate-pulse" />
                  <div className="h-5 w-20 bg-white/20 rounded mx-auto mb-2 animate-pulse" />
                  <div className="h-4 w-16 bg-white/20 rounded mx-auto animate-pulse" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Overview Stats Skeleton */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <StatCardSkeleton key={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Ekstrakurikuler Categories Skeleton */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <div className="h-10 w-64 bg-gray-200 rounded mx-auto mb-4 animate-pulse" />
            <div className="h-6 w-96 bg-gray-200 rounded mx-auto animate-pulse" />
          </div>

          <div className="space-y-12">
            {Array.from({ length: 3 }).map((categoryIndex) => (
              <div key={categoryIndex}>
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-8 w-8 bg-gray-200 rounded animate-pulse" />
                  <div>
                    <div className="h-7 w-32 bg-gray-200 rounded mb-2 animate-pulse" />
                    <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <ExtracurricularSkeleton key={i} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Skeleton */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <div className="h-10 w-64 bg-gray-200 rounded mx-auto mb-4 animate-pulse" />
            <div className="h-6 w-96 bg-gray-200 rounded mx-auto animate-pulse" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <CardSkeleton key={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}