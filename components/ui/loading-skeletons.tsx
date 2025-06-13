import { Skeleton } from "./skeleton";
import { Card, CardContent, CardHeader } from "./card";

export function CardSkeleton() {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
      </CardHeader>
      <CardContent>
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-2/3" />
      </CardContent>
    </Card>
  );
}

export function NewsCardSkeleton() {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <Skeleton className="h-48 w-full rounded-t-lg" />
      <CardContent className="p-6">
        <div className="flex items-center space-x-2 mb-3">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-20" />
        </div>
        <Skeleton className="h-6 w-full mb-2" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-3/4" />
      </CardContent>
    </Card>
  );
}

export function GalleryCardSkeleton() {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <Skeleton className="h-48 w-full" />
      <CardContent className="p-4">
        <Skeleton className="h-5 w-3/4 mb-2" />
        <Skeleton className="h-4 w-1/2" />
      </CardContent>
    </Card>
  );
}

export function StatCardSkeleton() {
  return (
    <Card className="text-center">
      <CardContent className="p-6">
        <Skeleton className="h-12 w-12 mx-auto mb-4 rounded-full" />
        <Skeleton className="h-6 w-16 mx-auto mb-2" />
        <Skeleton className="h-4 w-20 mx-auto" />
      </CardContent>
    </Card>
  );
}

export function HeroSkeleton() {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <Skeleton className="h-12 w-3/4 mx-auto mb-6 bg-white/20" />
          <Skeleton className="h-6 w-2/3 mx-auto mb-8 bg-white/20" />
          <div className="grid md:grid-cols-4 gap-4 mt-12">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="bg-white/10 rounded-lg p-4">
                <Skeleton className="h-8 w-8 mx-auto mb-2 bg-white/20" />
                <Skeleton className="h-5 w-20 mx-auto mb-2 bg-white/20" />
                <Skeleton className="h-4 w-16 mx-auto bg-white/20" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function TeacherCardSkeleton() {
  return (
    <Card className="text-center hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <Skeleton className="h-24 w-24 mx-auto mb-4 rounded-full" />
        <Skeleton className="h-6 w-32 mx-auto mb-2" />
        <Skeleton className="h-4 w-40 mx-auto mb-2" />
        <Skeleton className="h-4 w-36 mx-auto" />
      </CardContent>
    </Card>
  );
}

export function FacilityCardSkeleton() {
  return (
    <Card className="hover:shadow-lg transition-all duration-300">
      <Skeleton className="h-48 w-full rounded-t-lg" />
      <CardContent className="p-6">
        <Skeleton className="h-6 w-3/4 mb-3" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-2/3 mb-4" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-4/5" />
        </div>
      </CardContent>
    </Card>
  );
}

export function ExtracurricularSkeleton() {
  return (
    <Card className="border-2 hover:shadow-lg transition-all duration-300">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <Skeleton className="h-6 w-32" />
          <Skeleton className="h-5 w-16" />
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center gap-2">
          <Skeleton className="h-4 w-4" />
          <Skeleton className="h-4 w-24" />
        </div>
        <div className="flex items-start gap-2">
          <Skeleton className="h-4 w-4" />
          <Skeleton className="h-4 w-40" />
        </div>
      </CardContent>
    </Card>
  );
}