'use client';

import { Card } from '@/components/UI/Card';

interface Meeting {
    id: string;
    title: string;
    time: string;
    duration: number;
    agenda: string[];
    members: Array<{ name: string; role: string }>;
    notes: string;
    tags: string[];
}

export interface MeetingDetailProps {
    meeting: Meeting;
}

/**
 * Meeting Detail Component
 * Shows full meeting information
 */
export function MeetingDetail({ meeting }: MeetingDetailProps) {
    const formatDateTime = (isoString: string) => {
        const date = new Date(isoString);
        return date.toLocaleString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        });
    };

    return (
        <div className="space-y-4">
            {/* Header */}
            <Card>
                <h2 className="text-2xl font-bold text-text-primary mb-2">
                    {meeting.title}
                </h2>
                <div className="flex flex-wrap gap-4 text-sm text-text-secondary mb-3">
                    <div className="flex items-center gap-1">
                        <span>📅</span>
                        <span>{formatDateTime(meeting.time)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <span>⏱️</span>
                        <span>{meeting.duration} minutes</span>
                    </div>
                </div>
                <div className="flex flex-wrap gap-2">
                    {meeting.tags.map((tag, idx) => (
                        <span
                            key={idx}
                            className="px-3 py-1 text-sm rounded-full bg-brown-primary/20 text-brown-dark"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </Card>

            {/* Notes */}
            {meeting.notes && (
                <Card>
                    <h3 className="font-semibold text-text-primary mb-2">📝 Notes</h3>
                    <p className="text-text-secondary leading-relaxed">{meeting.notes}</p>
                </Card>
            )}

            {/* Agenda */}
            <Card>
                <h3 className="font-semibold text-text-primary mb-3">📋 Agenda</h3>
                <ul className="space-y-2">
                    {meeting.agenda.map((item, idx) => (
                        <li
                            key={idx}
                            className="flex items-start gap-2 text-text-secondary"
                        >
                            <span className="text-brown-primary font-semibold mt-0.5">
                                {idx + 1}.
                            </span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </Card>

            {/* Attendees */}
            <Card>
                <h3 className="font-semibold text-text-primary mb-3">
                    👥 Attendees ({meeting.members.length})
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {meeting.members.map((member, idx) => (
                        <div
                            key={idx}
                            className="flex items-center gap-3 p-3 rounded-lg bg-white/20"
                        >
                            <div className="w-10 h-10 rounded-full bg-brown-primary/20 flex items-center justify-center text-brown-primary font-semibold">
                                {member.name
                                    .split(' ')
                                    .map(n => n[0])
                                    .join('')}
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="font-medium text-text-primary truncate">
                                    {member.name}
                                </p>
                                <p className="text-sm text-text-muted truncate">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Card>
        </div>
    );
}
