'use client';

import { MODULES, ModuleName } from '@/types/modules';
import { mockUser } from '@/lib/mocks';

export interface LeftNavProps {
    activeModule: ModuleName;
    onModuleChange: (module: ModuleName) => void;
}

/**
 * Left Navigation Panel
 * Shows module navigation, user profile, and tips
 */
export function LeftNav({ activeModule, onModuleChange }: LeftNavProps) {
    return (
        <nav
            className="h-full p-4 md:p-6 space-y-6"
            aria-label="Main navigation"
        >
            {/* Logo & App Name */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-brown-primary">MyTuffy</h1>
                <p className="text-sm text-text-muted mt-1">AI Personal Assistant</p>
            </div>

            {/* User Profile */}
            <div className="glass-card p-4 mb-6">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-brown-primary/20 flex items-center justify-center text-2xl">
                        {mockUser.name
                            .split(' ')
                            .map(n => n[0])
                            .join('')}
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="font-semibold text-text-primary truncate">
                            {mockUser.name}
                        </p>
                        <p className="text-sm text-text-muted truncate">{mockUser.role}</p>
                    </div>
                </div>
            </div>

            {/* Module Navigation */}
            <div className="space-y-2">
                <h2 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">
                    Modules
                </h2>
                {MODULES.map(module => (
                    <button
                        key={module.id}
                        onClick={() => onModuleChange(module.id)}
                        className={`
              w-full flex items-center gap-3 px-4 py-3 rounded-xl
              transition-all duration-200
              ${activeModule === module.id
                                ? 'bg-brown-primary text-white shadow-md'
                                : 'text-text-secondary hover:bg-white/30'
                            }
            `}
                        aria-label={`Navigate to ${module.name}`}
                        aria-current={activeModule === module.id ? 'page' : undefined}
                    >
                        <span className="text-2xl">{module.icon}</span>
                        <div className="flex-1 text-left">
                            <p className="font-medium">{module.name}</p>
                            <p
                                className={`text-xs ${activeModule === module.id
                                        ? 'text-white/80'
                                        : 'text-text-muted'
                                    }`}
                            >
                                {module.description}
                            </p>
                        </div>
                    </button>
                ))}
            </div>

            {/* Quick Tips */}
            <div className="glass-card p-4 mt-6">
                <h3 className="text-sm font-semibold text-text-primary mb-2">
                    💡 Quick Tip
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed">
                    Use keyboard shortcuts to navigate between modules. Press{' '}
                    <kbd className="px-1.5 py-0.5 bg-white/40 rounded text-xs">Tab</kbd>{' '}
                    to move around faster.
                </p>
            </div>
        </nav>
    );
}
