"use client";

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  error?: string;
};

export default function ShopNowButton({ children, className, error, ...restProps }: ButtonProps) {
  return (
    <div>
      <button
        {...restProps}
        className={`inline-flex items-center rounded-full bg-[#1b1b19] px-5 py-3 text-sm font-medium text-white transition-[background,transform] duration-300 hover:-translate-y-0.5 hover:bg-[#e45e36] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e45e36] ${className}`}>
        {children}
      </button>
      {error && (
        <p role="alert" className="mt-3 text-sm text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}
