'use client';

import { ReactNode } from 'react';

export interface MainShellProps {
    children: ReactNode;
    leftNav: ReactNode;
    rightPanel: ReactNode;
    bottomBar?: ReactNode;
}

/**
 * Main Shell Layout
 * Desktop: Three-column layout (LeftNav | Content | RightPanel)
 * Mobile: Stacked layout with collapsible nav
 */
export function MainShell({
    children,
    leftNav,
    rightPanel,
    bottomBar,
}: MainShellProps) {
    return (
        <div className="min-h-screen flex flex-col lg:flex-row">
            {/* Left Navigation - Fixed on desktop, collapsible on mobile */}
            <aside className="lg:w-64 xl:w-72 lg:fixed lg:left-0 lg:top-0 lg:h-screen lg:overflow-y-auto">
                {leftNav}
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 lg:ml-64 xl:ml-72 lg:mr-80 xl:mr-96 relative">
                <div className="min-h-screen flex flex-col">
                    {/* Content */}
                    <div className="flex-1 p-4 md:p-6 lg:p-8">{children}</div>

                    {/* Bottom Bar - Sticky at bottom of content area */}
                    {bottomBar && (
                        <div className="sticky bottom-0 left-0 right-0 z-20">
                            {bottomBar}
                        </div>
                    )}
                </div>
            </main>

            {/* Right Panel (TL;DR) - Fixed on desktop, collapsible on mobile */}
            <aside className="lg:w-80 xl:w-96 lg:fixed lg:right-0 lg:top-0 lg:h-screen lg:overflow-y-auto">
                {rightPanel}
            </aside>
        </div>
    );
}
