interface PlaceholderPageProps {
  title: string;
}

export function PlaceholderPage({ title }: PlaceholderPageProps) {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 pt-16 lg:pt-20">
      <div className="text-center">
        <p className="mb-3 font-sans text-sm uppercase tracking-[0.2em] text-muted">
          Coming soon
        </p>
        <h1 className="font-display text-3xl text-foreground md:text-5xl">{title}</h1>
      </div>
    </main>
  );
}