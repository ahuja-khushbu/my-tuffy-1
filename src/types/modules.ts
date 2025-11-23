/**
 * Module type definitions for MyTuffy
 */

export type ModuleName = 'meetings' | 'scheduling' | 'finance' | 'learning';

export interface Module {
    id: ModuleName;
    name: string;
    icon: string;
    description: string;
}

export const MODULES: Module[] = [
    {
        id: 'meetings',
        name: 'Meetings',
        icon: '👥',
        description: 'Manage meetings and minutes',
    },
    {
        id: 'scheduling',
        name: 'Scheduling',
        icon: '📅',
        description: 'Plan your week and events',
    },
    {
        id: 'finance',
        name: 'Finance',
        icon: '💰',
        description: 'Track expenses and investments',
    },
    {
        id: 'learning',
        name: 'Learning',
        icon: '📚',
        description: 'Goals, habits, and growth',
    },
];
