"use client";

import Link from "next/link";

type GlobalErrorProps = {
  error: Error & { digest?: string };
  retry: () => void;
};

export default function GlobalError({ error }: GlobalErrorProps) {
  return (
    <html lang="en">
      <body className="m-0 min-h-screen bg-[#f7f7f5] font-sans text-[#20231f] ">
        <main className="box-border grid min-h-screen place-items-center px-5 py-8">
          <section aria-labelledby="error-title" className="w-full max-w-120 text-center">
            <div
              aria-hidden="true"
              className="mx-auto mb-7 grid size-16 place-items-center rounded-[20px] bg-[#e8eee7] text-[28px] text-[#46634c]">
              !
            </div>

            <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[#647064]">
              Something went wrong
            </p>

            <h1
              id="error-title"
              className="mb-4 text-[clamp(32px,7vw,46px)] font-semibold leading-[1.1] tracking-[-0.045em]">
              We hit a snag.
            </h1>

            <p className="mx-auto mb-7.5 max-w-97.5 text-base leading-[1.7] text-[#687068]">
              This page ran into an unexpected problem. Please try again, or head back and continue
              browsing.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <button
                type="button"
                onClick={() => window.location.reload()}
                className="min-h-12 rounded-full border-0 bg-[#263d2c] px-5.5 text-sm font-semibold text-white transition-colors hover:bg-[#1d3022] focus:outline-none focus:ring-2 focus:ring-[#263d2c] focus:ring-offset-2">
                Try again
              </button>

              <Link
                href="/"
                className="inline-flex min-h-12 items-center rounded-full border border-[#d9ded8] px-5.5 text-sm font-semibold text-[#263d2c] no-underline transition-colors hover:bg-[#e8eee7] focus:outline-none focus:ring-2 focus:ring-[#263d2c] focus:ring-offset-2">
                Back to home
              </Link>
            </div>

            {error.digest ? (
              <p className="mt-7 text-xs text-[#929890]">Error reference: {error.digest}</p>
            ) : null}
          </section>
        </main>
      </body>
    </html>
  );
}
