import { products } from "@/utils/constant";

export default function ShopPage() {
  const shopifyUrl = products.find((product) => product.shopifyUrl)?.shopifyUrl;
  const amazonUrl = products.find((product) => product.amazonUrl)?.amazonUrl;

  return (
    <section className="min-h-[calc(100vh-5rem)] bg-[#f7f6f2] text-[#1b1b19]">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl flex-col items-center justify-center px-6 py-16 text-center sm:px-10 lg:py-24">
        <div className="mb-12 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e45e36]">
            Shooz Buddy shop
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-[-0.06em] sm:text-5xl">
            Shop with our retail partners.
          </h1>
          <p className="mt-4 text-sm leading-7 text-[#77766f] sm:text-base">
            Our products are available on Shopify and Amazon.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6">
          {shopifyUrl && (
            <a
              href={shopifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Shop Shooz Buddy on Shopify"
              title="Shop Shooz Buddy on Shopify"
              className="grid h-28 w-44 place-items-center rounded-md bg-[#008060] shadow-sm transition-[transform,background] hover:-translate-y-1 hover:bg-[#006e52] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#008060]">
              <svg aria-hidden="true" viewBox="0 0 160 64" className="h-14 w-36" fill="none">
                <path
                  d="M51 18h58l5 38H46l5-38Z"
                  fill="white"
                  fillOpacity=".15"
                  stroke="white"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                />
                <path
                  d="M65 19c0-11 6-17 15-17s15 6 15 17"
                  stroke="white"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                />
                <text
                  x="80"
                  y="46"
                  fill="white"
                  fontFamily="Arial, sans-serif"
                  fontSize="24"
                  fontWeight="700"
                  textAnchor="middle">
                  shopify
                </text>
              </svg>
            </a>
          )}
          {amazonUrl && (
            <a
              href={amazonUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Shop Shooz Buddy on Amazon"
              title="Shop Shooz Buddy on Amazon"
              className="grid h-28 w-44 place-items-center rounded-md bg-[#ff9900] shadow-sm transition-[transform,background] hover:-translate-y-1 hover:bg-[#e88b00] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff9900]">
              <svg aria-hidden="true" viewBox="0 0 160 64" className="h-14 w-36" fill="none">
                <text
                  x="80"
                  y="34"
                  fill="#1b1b19"
                  fontFamily="Arial, sans-serif"
                  fontSize="34"
                  fontWeight="700"
                  textAnchor="middle">
                  amazon
                </text>
                <path
                  d="M43 47c22 10 54 10 77-1"
                  stroke="#1b1b19"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                />
                <path
                  d="m113 42 8 4-7 5"
                  stroke="#1b1b19"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                />
              </svg>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
