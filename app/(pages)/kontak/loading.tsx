import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

export default function Loading() {
  return (
    <div className="min-h-screen">
      {/* Hero Section Skeleton */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Skeleton className="h-12 w-64 bg-white/20 rounded mx-auto mb-6" />
            <Skeleton className="h-6 w-96 bg-white/20 rounded mx-auto" />
          </div>
        </div>
      </section>

      {/* Contact Info & Form Section Skeleton */}
      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info Skeleton */}
            <div>
              <Skeleton className="h-8 w-48 mb-6" />
              <div className="space-y-6">
                {Array.from({ length: 4 }).map((_, i) => (
                  <Card key={i}>
                    <CardContent className="flex items-center space-x-4 p-6">
                      <Skeleton className="h-12 w-12 rounded-full" />
                      <div className="flex-1">
                        <Skeleton className="h-5 w-32 mb-2" />
                        <Skeleton className="h-4 w-48" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Operational Hours Skeleton */}
              <div className="mt-8">
                <Skeleton className="h-6 w-32 mb-4" />
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      {Array.from({ length: 6 }).map((_, i) => (
                        <div key={i} className="flex justify-between items-center">
                          <Skeleton className="h-4 w-20" />
                          <Skeleton className="h-4 w-24" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form Skeleton */}
            <div>
              <Skeleton className="h-8 w-48 mb-6" />
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <Skeleton className="h-4 w-16 mb-2" />
                      <Skeleton className="h-10 w-full" />
                    </div>
                    <div>
                      <Skeleton className="h-4 w-16 mb-2" />
                      <Skeleton className="h-10 w-full" />
                    </div>
                    <div>
                      <Skeleton className="h-4 w-16 mb-2" />
                      <Skeleton className="h-10 w-full" />
                    </div>
                    <div>
                      <Skeleton className="h-4 w-16 mb-2" />
                      <Skeleton className="h-24 w-full" />
                    </div>
                    <Skeleton className="h-10 w-32" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section Skeleton */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <Skeleton className="h-8 w-32 mx-auto mb-4" />
            <Skeleton className="h-6 w-64 mx-auto" />
          </div>
          <Skeleton className="h-96 w-full rounded-lg" />
        </div>
      </section>
    </div>
  );
}