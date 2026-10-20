import type { Product } from "@/utils/type";

export default function ProductPurchaseLinks({
  product,
  iconOnly = false,
}: {
  product: Product;
  iconOnly?: boolean;
}) {
  if (!product.shopifyUrl && !product.amazonUrl) {
    return (
      <p className="inline-flex rounded-full bg-[#f1eee7] px-5 py-3 text-sm font-semibold text-[#77766f]">
        Coming soon
      </p>
    );
  }

  return (
    <div className="flex flex-wrap gap-3">
      {product.shopifyUrl && (
        <a
          href={product.shopifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Shop on Shopify"
          title="Shop on Shopify"
          className="inline-flex items-center rounded-full bg-[#008060] px-5 py-3 text-sm font-medium text-white transition-[background,transform] duration-300 hover:-translate-y-0.5 hover:bg-[#006e52] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#008060]">
          {iconOnly ? (
            <svg aria-hidden="true" viewBox="0 0 40 40" className="h-7 w-7" fill="none">
              <path
                d="M12 13h16l2 22H10l2-22Z"
                fill="white"
                fillOpacity=".18"
                stroke="white"
                strokeLinejoin="round"
                strokeWidth="2"
              />
              <path
                d="M15 14c0-4 2-7 5-7s5 3 5 7"
                stroke="white"
                strokeLinecap="round"
                strokeWidth="2"
              />
              <text
                x="20"
                y="29"
                fill="white"
                fontFamily="Arial, sans-serif"
                fontSize="17"
                fontWeight="700"
                textAnchor="middle">
                S
              </text>
            </svg>
          ) : (
            "Shop on Shopify"
          )}
        </a>
      )}
      {product.amazonUrl && (
        <a
          href={product.amazonUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Shop on Amazon"
          title="Shop on Amazon"
          className="inline-flex items-center rounded-full bg-[#ff9900] px-5 py-3 text-sm font-medium text-[#1b1b19] transition-[background,transform] duration-300 hover:-translate-y-0.5 hover:bg-[#e88b00] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff9900]">
          {iconOnly ? (
            <svg aria-hidden="true" viewBox="0 0 90 36" className="h-7 w-16" fill="none">
              <text
                x="44"
                y="22"
                fill="#1b1b19"
                fontFamily="Arial, sans-serif"
                fontSize="22"
                fontWeight="700"
                textAnchor="middle">
                amazon
              </text>
              <path
                d="M19 27c14 7 37 7 52-1"
                stroke="#1b1b19"
                strokeLinecap="round"
                strokeWidth="2"
              />
              <path
                d="m66 23 6 3-5 4"
                stroke="#1b1b19"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          ) : (
            "Buy on Amazon"
          )}
        </a>
      )}
    </div>
  );
}
