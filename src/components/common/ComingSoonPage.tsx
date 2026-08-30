import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface ComingSoonPageProps {
  title: string;
}

export function ComingSoonPage({ title }: ComingSoonPageProps) {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 pt-16 lg:pt-20">
      <div className="max-w-md text-center">
        <p className="mb-3 font-sans text-sm uppercase tracking-[0.2em] text-primary">
          Coming Soon
        </p>
        <h1 className="font-display text-3xl text-foreground md:text-4xl">{title}</h1>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          We&apos;re putting the finishing touches on this page. Please check back soon.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-sans text-sm font-medium text-foreground transition-colors duration-200 hover:border-primary/50 hover:text-primary focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
        >
          <ArrowLeft size={16} strokeWidth={1.75} />
          Back to Home
        </Link>
      </div>
    </main>
  );
}