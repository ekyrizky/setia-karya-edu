import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function Loading() {
  return (
    <div className="min-h-screen">
      {/* Hero Section Skeleton */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Skeleton className="h-12 w-80 bg-white/20 rounded mx-auto mb-6" />
            <Skeleton className="h-6 w-96 bg-white/20 rounded mx-auto" />
          </div>
        </div>
      </section>

      {/* Article Content Section */}
      <section className="py-16">
        <div className="container">
          {/* Back Button Skeleton */}
          <div className="mb-6">
            <Skeleton className="h-9 w-40" />
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content Skeleton */}
            <div className="lg:col-span-3">
              <article>
                {/* Header Skeleton */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Skeleton className="h-6 w-20" />
                    <Skeleton className="h-4 w-24" />
                  </div>

                  {/* Title Skeleton */}
                  <Skeleton className="h-10 w-full mb-2" />
                  <Skeleton className="h-10 w-3/4 mb-6" />

                  {/* Author & Meta Skeleton */}
                  <div className="flex items-center gap-6 text-sm mb-6">
                    <div className="flex items-center gap-1">
                      <Skeleton className="h-4 w-4" />
                      <Skeleton className="h-4 w-20" />
                    </div>
                  </div>

                  {/* Featured Image Skeleton */}
                  <Skeleton className="aspect-video w-full rounded-lg mb-8" />
                </div>

                {/* Content Skeleton */}
                <div className="space-y-4 mb-8">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i}>
                      <Skeleton className="h-4 w-full mb-2" />
                      <Skeleton className="h-4 w-full mb-2" />
                      <Skeleton className="h-4 w-3/4 mb-4" />
                    </div>
                  ))}
                </div>

                {/* Share Buttons Skeleton */}
                <div className="mt-8 pt-8 border-t">
                  <div className="flex items-center gap-4">
                    <Skeleton className="h-4 w-16" />
                    <div className="flex gap-2">
                      <Skeleton className="h-8 w-8" />
                      <Skeleton className="h-8 w-8" />
                      <Skeleton className="h-8 w-8" />
                    </div>
                  </div>
                </div>
              </article>
            </div>

            {/* Sidebar Skeleton */}
            <div className="lg:col-span-1">
              <div className="sticky top-4 space-y-6">
                {/* Related Articles Skeleton */}
                <Card>
                  <CardHeader>
                    <Skeleton className="h-6 w-32" />
                    <Skeleton className="h-4 w-48" />
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div key={i} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                        <div className="flex gap-3">
                          <Skeleton className="w-16 h-16 rounded-lg flex-shrink-0" />
                          <div className="flex-1 space-y-2">
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-3/4" />
                            <Skeleton className="h-3 w-20" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Quick Navigation Skeleton */}
                <Card>
                  <CardHeader>
                    <Skeleton className="h-6 w-32" />
                    <Skeleton className="h-4 w-48" />
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 rounded-lg">
                        <Skeleton className="w-8 h-8 rounded-lg" />
                        <div className="flex-1">
                          <Skeleton className="h-4 w-24 mb-1" />
                          <Skeleton className="h-3 w-32" />
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}