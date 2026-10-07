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
        className={`inline-flex items-center rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-amber-500 ${className}`}>
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
