'use client';

import { ModuleName } from '@/types/modules';
import { Card } from '@/components/UI/Card';
import { mockMeetings } from '@/lib/mocks';

export interface RightTLDRProps {
    activeModule: ModuleName;
}

/**
 * Right TL;DR Panel
 * Context-aware summary that changes based on active module
 */
export function RightTLDR({ activeModule }: RightTLDRProps) {
    // Get next meeting
    const upcomingMeetings = mockMeetings
        .filter(m => new Date(m.time) > new Date())
        .sort((a, b) => new Date(a.time).getTime() - new Date(b.time).getTime());
    const nextMeeting = upcomingMeetings[0];

    // Format date helper
    const formatDate = (isoString: string) => {
        const date = new Date(isoString);
        return date.toLocaleDateString('en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        });
    };

    return (
        <div className="h-full p-4 md:p-6 space-y-4">
            {/* Module Context */}
            <Card>
                <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-brown-primary/20 flex items-center justify-center">
                        <span className="text-lg">📋</span>
                    </div>
                    <h2 className="text-xl font-semibold text-text-primary capitalize">
                        {activeModule} Overview
                    </h2>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">
                    {getModuleDescription(activeModule)}
                </p>
            </Card>

            {/* Next Meeting */}
            {nextMeeting && (
                <Card variant="hover">
                    <h3 className="text-sm font-semibold text-text-primary mb-2 flex items-center gap-2">
                        <span>⏰</span> Next Meeting
                    </h3>
                    <p className="font-medium text-text-primary mb-1">
                        {nextMeeting.title}
                    </p>
                    <p className="text-sm text-text-secondary">
                        {formatDate(nextMeeting.time)}
                    </p>
                    <p className="text-xs text-text-muted mt-2">
                        {nextMeeting.duration} minutes • {nextMeeting.members.length}{' '}
                        attendees
                    </p>
                </Card>
            )}

            {/* Today's Focus */}
            <Card>
                <h3 className="text-sm font-semibold text-text-primary mb-3 flex items-center gap-2">
                    <span>🎯</span> Today's Focus
                </h3>
                <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-text-secondary">
                        <span className="text-brown-primary mt-0.5">•</span>
                        <span>Complete project review</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-text-secondary">
                        <span className="text-brown-primary mt-0.5">•</span>
                        <span>Update financial goals</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-text-secondary">
                        <span className="text-brown-primary mt-0.5">•</span>
                        <span>30min learning session</span>
                    </li>
                </ul>
            </Card>

            {/* Quick Shortcuts */}
            <Card>
                <h3 className="text-sm font-semibold text-text-primary mb-3 flex items-center gap-2">
                    <span>⚡</span> Quick Actions
                </h3>
                <div className="space-y-2">
                    <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-white/30 transition-colors text-sm text-text-secondary">
                        <span className="mr-2">➕</span>
                        Add new meeting
                    </button>
                    <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-white/30 transition-colors text-sm text-text-secondary">
                        <span className="mr-2">📊</span>
                        View analytics
                    </button>
                    <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-white/30 transition-colors text-sm text-text-secondary">
                        <span className="mr-2">💾</span>
                        Export data
                    </button>
                </div>
            </Card>

            {/* Productivity Insight */}
            <Card>
                <h3 className="text-sm font-semibold text-text-primary mb-2 flex items-center gap-2">
                    <span>📈</span> This Week
                </h3>
                <div className="space-y-3">
                    <div>
                        <div className="flex justify-between text-xs mb-1">
                            <span className="text-text-muted">Weekly Progress</span>
                            <span className="text-brown-primary font-semibold">82%</span>
                        </div>
                        <div className="h-2 bg-white/40 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-brown-primary rounded-full"
                                style={{ width: '82%' }}
                            ></div>
                        </div>
                    </div>
                    <p className="text-xs text-text-secondary">
                        You're having a great week! 🎉 Keep up the momentum.
                    </p>
                </div>
            </Card>
        </div>
    );
}

function getModuleDescription(module: ModuleName): string {
    const descriptions = {
        meetings:
            'Manage your meetings, track agendas, and maintain minutes of meetings. Stay organized with all your important discussions.',
        scheduling:
            'Plan your week with ease. Manage events, set recurring schedules, and never miss an important task.',
        finance:
            'Track your expenses, monitor investments, and work towards your financial goals with confidence.',
        learning:
            'Achieve your personal growth goals. Track habits, manage learning resources, and measure your progress.',
    };
    return descriptions[module];
}
