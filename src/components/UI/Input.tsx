import { InputHTMLAttributes, TextareaHTMLAttributes, forwardRef } from 'react';

interface BaseInputProps {
    label?: string;
    error?: string;
    helpText?: string;
    containerClassName?: string;
}

export interface InputProps
    extends InputHTMLAttributes<HTMLInputElement>,
    BaseInputProps { }

export interface TextareaProps
    extends TextareaHTMLAttributes<HTMLTextAreaElement>,
    BaseInputProps { }

/**
 * Input Component with glassmorphism styling
 * Supports labels, error states, and help text
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
    (
        {
            label,
            error,
            helpText,
            containerClassName = '',
            className = '',
            id,
            ...props
        },
        ref
    ) => {
        const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

        return (
            <div className={`flex flex-col gap-1.5 ${containerClassName}`}>
                {label && (
                    <label
                        htmlFor={inputId}
                        className="text-sm font-medium text-text-secondary"
                    >
                        {label}
                    </label>
                )}
                <input
                    ref={ref}
                    id={inputId}
                    className={`
            px-4 py-2.5 rounded-xl
            bg-white/40 backdrop-blur-sm
            border ${error ? 'border-red-400' : 'border-white/30'}
            text-text-primary placeholder-text-muted/60
            focus:outline-none focus:ring-2 focus:ring-brown-primary focus:border-transparent
            transition-all duration-150
            disabled:opacity-50 disabled:cursor-not-allowed
            ${className}
          `}
                    aria-invalid={error ? 'true' : 'false'}
                    aria-describedby={
                        error
                            ? `${inputId}-error`
                            : helpText
                                ? `${inputId}-help`
                                : undefined
                    }
                    {...props}
                />
                {error && (
                    <p
                        id={`${inputId}-error`}
                        className="text-sm text-red-600"
                        role="alert"
                    >
                        {error}
                    </p>
                )}
                {helpText && !error && (
                    <p id={`${inputId}-help`} className="text-sm text-text-muted">
                        {helpText}
                    </p>
                )}
            </div>
        );
    }
);

Input.displayName = 'Input';

/**
 * Textarea Component with glassmorphism styling
 */
export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
    (
        {
            label,
            error,
            helpText,
            containerClassName = '',
            className = '',
            id,
            rows = 4,
            ...props
        },
        ref
    ) => {
        const textareaId =
            id || `textarea-${Math.random().toString(36).substr(2, 9)}`;

        return (
            <div className={`flex flex-col gap-1.5 ${containerClassName}`}>
                {label && (
                    <label
                        htmlFor={textareaId}
                        className="text-sm font-medium text-text-secondary"
                    >
                        {label}
                    </label>
                )}
                <textarea
                    ref={ref}
                    id={textareaId}
                    rows={rows}
                    className={`
            px-4 py-2.5 rounded-xl
            bg-white/40 backdrop-blur-sm
            border ${error ? 'border-red-400' : 'border-white/30'}
            text-text-primary placeholder-text-muted/60
            focus:outline-none focus:ring-2 focus:ring-brown-primary focus:border-transparent
            transition-all duration-150
            resize-vertical
            disabled:opacity-50 disabled:cursor-not-allowed
            ${className}
          `}
                    aria-invalid={error ? 'true' : 'false'}
                    aria-describedby={
                        error
                            ? `${textareaId}-error`
                            : helpText
                                ? `${textareaId}-help`
                                : undefined
                    }
                    {...props}
                />
                {error && (
                    <p
                        id={`${textareaId}-error`}
                        className="text-sm text-red-600"
                        role="alert"
                    >
                        {error}
                    </p>
                )}
                {helpText && !error && (
                    <p id={`${textareaId}-help`} className="text-sm text-text-muted">
                        {helpText}
                    </p>
                )}
            </div>
        );
    }
);

Textarea.displayName = 'Textarea';
