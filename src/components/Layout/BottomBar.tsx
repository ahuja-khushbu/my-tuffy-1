'use client';

import { ModuleName } from '@/types/modules';
import { Button } from '@/components/UI/Button';

export interface BottomBarProps {
    activeModule: ModuleName;
}

/**
 * Bottom Quick Actions Bar
 * Module-specific actions available at the bottom of the content area
 */
export function BottomBar({ activeModule }: BottomBarProps) {
    const actions = getModuleActions(activeModule);

    return (
        <div className="glass-card p-4 m-4 md:m-6 lg:m-8">
            <div className="flex items-center justify-between flex-wrap gap-3">
                <div className="flex items-center gap-2">
                    <span className="text-lg">{actions.icon}</span>
                    <span className="font-medium text-text-primary">
                        {actions.title}
                    </span>
                </div>
                <div className="flex gap-2 flex-wrap">
                    {actions.buttons.map((button, idx) => (
                        <Button
                            key={idx}
                            variant={idx === 0 ? 'primary' : 'secondary'}
                            size="sm"
                            onClick={button.onClick}
                        >
                            {button.label}
                        </Button>
                    ))}
                </div>
            </div>
        </div>
    );
}

interface ModuleActions {
    icon: string;
    title: string;
    buttons: Array<{
        label: string;
        onClick: () => void;
    }>;
}

function getModuleActions(module: ModuleName): ModuleActions {
    const actionsMap: Record<ModuleName, ModuleActions> = {
        meetings: {
            icon: '👥',
            title: 'Meeting Actions',
            buttons: [
                { label: '+ New Meeting', onClick: () => console.log('New meeting') },
                {
                    label: 'Export Minutes',
                    onClick: () => console.log('Export minutes'),
                },
                { label: 'Send Summary', onClick: () => console.log('Send summary') },
            ],
        },
        scheduling: {
            icon: '📅',
            title: 'Schedule Actions',
            buttons: [
                { label: '+ Add Event', onClick: () => console.log('Add event') },
                { label: 'Week View', onClick: () => console.log('Week view') },
                { label: 'Set Reminder', onClick: () => console.log('Set reminder') },
            ],
        },
        finance: {
            icon: '💰',
            title: 'Finance Actions',
            buttons: [
                { label: '+ Add Goal', onClick: () => console.log('Add goal') },
                {
                    label: 'Log Expense',
                    onClick: () => console.log('Log expense'),
                },
                {
                    label: 'View Portfolio',
                    onClick: () => console.log('View portfolio'),
                },
            ],
        },
        learning: {
            icon: '📚',
            title: 'Learning Actions',
            buttons: [
                {
                    label: '+ Add Resource',
                    onClick: () => console.log('Add resource'),
                },
                { label: 'Track Habit', onClick: () => console.log('Track habit') },
                {
                    label: 'View Progress',
                    onClick: () => console.log('View progress'),
                },
            ],
        },
    };

    return actionsMap[module];
}
