import { ReactNode, HTMLAttributes } from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    variant?: 'default' | 'hover' | 'active';
    padding?: 'sm' | 'md' | 'lg';
    className?: string;
}

/**
 * Glassmorphism Card Component
 * Provides a beautiful glass-effect card with cream/brown theme
 */
export function Card({
    children,
    variant = 'default',
    padding = 'md',
    className = '',
    ...props
}: CardProps) {
    const paddingClasses = {
        sm: 'p-3',
        md: 'p-5',
        lg: 'p-6',
    };

    const variantClasses = {
        default: 'glass-card',
        hover: 'glass-card glass-card-hover cursor-pointer',
        active: 'glass-card bg-white/40',
    };

    return (
        <div
            className={`${variantClasses[variant]} ${paddingClasses[padding]} ${className}`}
            {...props}
        >
            {children}
        </div>
    );
}
