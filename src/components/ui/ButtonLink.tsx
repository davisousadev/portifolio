import type { AnchorHTMLAttributes, ReactNode } from 'react';

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
}

const variantClasses: Record<NonNullable<ButtonLinkProps['variant']>, string> = {
  primary: 'bg-accent text-surface hover:bg-accent-strong',
  secondary: 'border border-border bg-surface text-ink hover:border-accent',
};

function ButtonLink({ children, variant = 'primary', className = '', ...props }: ButtonLinkProps) {
  return (
    <a
      className={`inline-flex min-h-11 items-center justify-center rounded-md px-5 py-3 font-semibold transition-colors ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}

export default ButtonLink;