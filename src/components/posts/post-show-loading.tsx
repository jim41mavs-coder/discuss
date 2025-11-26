import { Skeleton } from "@nextui-org/react";

export default function PostShowLoading() {
  return (
    <div className="space-y-3">
      <Skeleton className="h-8 w-32" />
      <div className="space-y-2"></div>
      <Skeleton className="h-6 w-full" />
      <Skeleton className="h-6 w-5/6" />
      <Skeleton className="h-6 w-4/6" />
      <Skeleton className="h-6 w-3/6" />
      <div />
    </div>
  );
}
