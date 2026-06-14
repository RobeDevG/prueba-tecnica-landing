"use client";

import Skeleton from "@mui/material/Skeleton";

export function NavbarSkeleton() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#173c2d]/10 bg-[#fbfaf3]/88 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <SkeletonBlock className="h-8 w-52" />
        <div className="hidden items-center gap-4 md:flex">
          <SkeletonBlock className="h-7 w-24" />
          <SkeletonBlock className="h-7 w-24" />
          <SkeletonBlock className="h-7 w-36" />
          <SkeletonBlock className="h-7 w-24" />
        </div>
        <SkeletonBlock className="h-11 w-11 md:hidden" />
      </div>
    </header>
  );
}

export function HeroSkeleton() {
  return (
    <section className="min-h-[84svh] bg-[#eef2df] pt-28">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-16 sm:px-8 lg:px-10">
        <SkeletonBlock className="h-5 w-48" />
        <SkeletonBlock className="h-16 w-full max-w-2xl sm:h-24" />
        <SkeletonBlock className="h-7 w-full max-w-xl" />
        <SkeletonBlock className="h-12 w-44" />
      </div>
    </section>
  );
}

export function ProductSkeleton({ even = true }: { even?: boolean }) {
  return (
    <article className="grid overflow-hidden rounded-lg border border-[#153c2d]/10 bg-[#2f6b4f]/[0.06] md:grid-cols-2">
      <div className={`order-1 px-5 py-8 sm:px-8 lg:px-12 ${even ? "md:order-1" : "md:order-2"}`}>
        <SkeletonBlock className="h-5 w-28" />
        <SkeletonBlock className="mt-5 h-12 w-64" />
        <SkeletonBlock className="mt-5 h-6 w-full max-w-lg" />
        <div className="mt-8 space-y-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <SkeletonBlock className="h-9 w-full" key={index} />
          ))}
        </div>
      </div>
      <div className={`order-2 flex min-h-[320px] items-center p-5 sm:min-h-[420px] ${even ? "md:order-2" : "md:order-1"}`}>
        <SkeletonBlock className="h-72 w-full sm:h-96" />
      </div>
    </article>
  );
}

export function AboutUsSkeleton() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 md:grid-cols-[0.9fr_1.1fr] lg:px-10">
        <div>
          <SkeletonBlock className="h-5 w-44" />
          <SkeletonBlock className="mt-5 h-14 w-72" />
        </div>
        <div>
          <SkeletonBlock className="h-9 w-full" />
          <SkeletonBlock className="mt-5 h-28 w-full" />
        </div>
      </div>
    </section>
  );
}

export function ClientsCarouselSkeleton() {
  return (
    <section className="bg-[#f4f1e6] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SkeletonBlock className="mx-auto h-5 w-48" />
        <SkeletonBlock className="mx-auto mt-3 h-10 w-72" />
        <div className="mt-11 flex gap-5 overflow-hidden">
          {Array.from({ length: 5 }).map((_, index) => (
            <SkeletonBlock className="h-28 w-[220px] shrink-0" key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function FooterSkeleton() {
  return (
    <footer className="bg-[#153c2d] px-5 py-10 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
        <SkeletonBlock className="h-5 w-72" />
        <div className="flex gap-3">
          {Array.from({ length: 4 }).map((_, index) => (
            <SkeletonBlock className="h-11 w-11" key={index} />
          ))}
        </div>
      </div>
    </footer>
  );
}

export function LandingSkeleton() {
  return (
    <>
      <NavbarSkeleton />
      <main>
        <HeroSkeleton />
        <section className="bg-[#fbfaf3] py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl space-y-10 px-5 sm:px-8 lg:px-10">
            <SkeletonBlock className="h-12 w-72" />
            <ProductSkeleton />
            <ProductSkeleton even={false} />
          </div>
        </section>
        <AboutUsSkeleton />
        <ClientsCarouselSkeleton />
      </main>
      <FooterSkeleton />
    </>
  );
}

function SkeletonBlock({ className }: { className: string }) {
  return (
    <Skeleton
      animation="wave"
      className={className}
      variant="rounded"
      sx={{
        bgcolor: "rgba(47, 107, 79, 0.14)",
        borderRadius: "8px",
        transform: "none",
      }}
    />
  );
}
