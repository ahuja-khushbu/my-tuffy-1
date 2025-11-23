'use client';

import { useState, useMemo } from 'react';
import { Card } from '@/components/UI/Card';
import { Input } from '@/components/UI/Input';

interface Meeting {
    id: string;
    title: string;
    time: string;
    duration: number;
    tags: string[];
}

export interface MeetingListProps {
    meetings: Meeting[];
    selectedId?: string;
    onSelect: (id: string) => void;
}

/**
 * Meeting List Component
 * Search, sort, and select meetings
 */
export function MeetingList({
    meetings,
    selectedId,
    onSelect,
}: MeetingListProps) {
    const [searchQuery, setSearchQuery] = useState('');
    const [sortBy, setSortBy] = useState<'date' | 'name'>('date');

    // Filter and sort meetings
    const filteredMeetings = useMemo(() => {
        let filtered = meetings.filter(
            m =>
                m.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                m.tags.some(tag =>
                    tag.toLowerCase().includes(searchQuery.toLowerCase())
                )
        );

        filtered.sort((a, b) => {
            if (sortBy === 'date') {
                return new Date(a.time).getTime() - new Date(b.time).getTime();
            } else {
                return a.title.localeCompare(b.title);
            }
        });

        return filtered;
    }, [meetings, searchQuery, sortBy]);

    const formatDateTime = (isoString: string) => {
        const date = new Date(isoString);
        return {
            date: date.toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
            }),
            time: date.toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
            }),
        };
    };

    return (
        <div className="h-full flex flex-col">
            {/* Search and Sort */}
            <div className="mb-4 space-y-3">
                <Input
                    type="search"
                    placeholder="Search meetings..."
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    aria-label="Search meetings"
                />
                <div className="flex gap-2">
                    <button
                        onClick={() => setSortBy('date')}
                        className={`px-3 py-1.5 rounded-lg text-sm transition-all ${sortBy === 'date'
                                ? 'bg-brown-primary text-white'
                                : 'bg-white/30 text-text-secondary hover:bg-white/40'
                            }`}
                    >
                        By Date
                    </button>
                    <button
                        onClick={() => setSortBy('name')}
                        className={`px-3 py-1.5 rounded-lg text-sm transition-all ${sortBy === 'name'
                                ? 'bg-brown-primary text-white'
                                : 'bg-white/30 text-text-secondary hover:bg-white/40'
                            }`}
                    >
                        By Name
                    </button>
                </div>
            </div>

            {/* Meeting List */}
            <div className="flex-1 space-y-2 overflow-y-auto">
                {filteredMeetings.length === 0 ? (
                    <Card padding="md">
                        <p className="text-center text-text-muted">No meetings found</p>
                    </Card>
                ) : (
                    filteredMeetings.map(meeting => {
                        const { date, time } = formatDateTime(meeting.time);
                        const isSelected = meeting.id === selectedId;
                        return (
                            <Card
                                key={meeting.id}
                                variant={isSelected ? 'active' : 'hover'}
                                padding="md"
                                onClick={() => onSelect(meeting.id)}
                                className={`cursor-pointer ${isSelected ? 'ring-2 ring-brown-primary' : ''
                                    }`}
                                role="button"
                                tabIndex={0}
                                aria-pressed={isSelected}
                                onKeyDown={e => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        e.preventDefault();
                                        onSelect(meeting.id);
                                    }
                                }}
                            >
                                <div className="flex items-start justify-between gap-3">
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-semibold text-text-primary mb-1 truncate">
                                            {meeting.title}
                                        </h3>
                                        <p className="text-sm text-text-secondary mb-2">
                                            {date} at {time} • {meeting.duration} min
                                        </p>
                                        <div className="flex flex-wrap gap-1">
                                            {meeting.tags.slice(0, 3).map((tag, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-2 py-0.5 text-xs rounded-full bg-brown-primary/20 text-brown-dark"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    {isSelected && (
                                        <div className="text-brown-primary">
                                            <svg
                                                className="w-5 h-5"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                    )}
                                </div>
                            </Card>
                        );
                    })
                )}
            </div>
        </div>
    );
}
