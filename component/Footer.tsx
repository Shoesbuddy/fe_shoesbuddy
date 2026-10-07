import { whatsappNumber } from "@/utils/constant";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black px-6 py-12 text-white sm:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Link href="/" className="text-2xl font-black tracking-[0.18em]">
            SHOOZ BUDDY
          </Link>
          <p className="mt-3 max-w-sm text-sm text-white/65">
            Reclaim your sole. Find your next favorite pair.
          </p>
        </div>

        <div className="grid gap-8 text-sm sm:grid-cols-2 sm:gap-12">
          <div>
            <h2 className="mb-3 font-semibold uppercase tracking-wider">Follow us</h2>
            <a
              href="https://www.instagram.com/sh00zbuddy?stkn=Nzk0bHFjcnBwa3Mz"
              target="_blank"
              rel="noreferrer"
              className="text-white/70 transition hover:text-white">
              Instagram ↗
            </a>
          </div>

          <div>
            <h2 className="mb-3 font-semibold uppercase tracking-wider">Get in touch</h2>
            <div className="flex flex-col gap-2 text-white/70">
              <Link
                href={`https://wa.me/${whatsappNumber}`}
                className="transition hover:text-white">
                WhatsApp
              </Link>
              <a href="mailto:" className="transition hover:text-white">
                Email us
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto justify-center flex mt-10 max-w-7xl border-t border-white/15 pt-5 text-xs text-white/50">
        © {new Date().getFullYear()} Shooz Buddy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
