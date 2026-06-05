export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
          error_404
        </p>

        <h1 className="mt-3 font-display text-5xl font-semibold">
          Page not found
        </h1>

        <p className="mt-3 text-sm text-muted-foreground">
          The route you requested doesn't exist or has moved.
        </p>

        <a
          href="/"
          className="mt-6 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
        >
          Return home
        </a>
      </div>
    </div>
  );
}