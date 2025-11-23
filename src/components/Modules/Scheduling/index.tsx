'use client';

import { useState, useEffect } from 'react';
import { Card } from '@/components/UI/Card';
import { mockEvents } from '@/lib/mocks';
import { getStorageItem, setStorageItem, STORAGE_KEYS } from '@/lib/storage';

interface Event {
    id: string;
    title: string;
    start: string;
    end: string;
    tags: string[];
    recurring?: boolean;
    recurringPattern?: string;
}

/**
 * Scheduling Module
 * Week view and event planner
 */
export function SchedulingModule() {
    const [events, setEvents] = useState<Event[]>(mockEvents);

    useEffect(() => {
        const saved = getStorageItem(STORAGE_KEYS.SCHEDULE_EVENTS, mockEvents);
        setEvents(saved);
    }, []);

    useEffect(() => {
        setStorageItem(STORAGE_KEYS.SCHEDULE_EVENTS, events);
    }, [events]);

    // Group events by day
    const eventsByDay = events.reduce(
        (acc, event) => {
            const day = new Date(event.start).toLocaleDateString('en-US', {
                weekday: 'short',
                month: 'short',
                day: 'numeric',
            });
            if (!acc[day]) acc[day] = [];
            acc[day].push(event);
            return acc;
        },
        {} as Record<string, Event[]>
    );

    const formatTime = (isoString: string) => {
        return new Date(isoString).toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
        });
    };

    return (
        <div className="h-full">
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-text-primary mb-2">
                    📅 Scheduling
                </h1>
                <p className="text-text-secondary">
                    Plan your week and manage events effortlessly.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Week View */}
                <div>
                    <h2 className="text-xl font-semibold text-text-primary mb-4">
                        📆 This Week
                    </h2>
                    <div className="space-y-4">
                        {Object.entries(eventsByDay)
                            .slice(0, 7)
                            .map(([day, dayEvents]) => (
                                <Card key={day}>
                                    <h3 className="font-semibold text-text-primary mb-3">
                                        {day}
                                    </h3>
                                    <div className="space-y-2">
                                        {dayEvents.map(event => (
                                            <div
                                                key={event.id}
                                                className="p-3 rounded-lg bg-white/20 border-l-4 border-brown-primary"
                                            >
                                                <div className="flex items-start justify-between gap-2">
                                                    <div className="flex-1">
                                                        <p className="font-medium text-text-primary">
                                                            {event.title}
                                                        </p>
                                                        <p className="text-sm text-text-secondary mt-1">
                                                            {formatTime(event.start)} -{' '}
                                                            {formatTime(event.end)}
                                                        </p>
                                                        {event.recurring && (
                                                            <p className="text-xs text-text-muted mt-1">
                                                                🔄 {event.recurringPattern}
                                                            </p>
                                                        )}
                                                    </div>
                                                    <div className="flex flex-wrap gap-1">
                                                        {event.tags.map((tag, idx) => (
                                                            <span
                                                                key={idx}
                                                                className="px-2 py-0.5 text-xs rounded-full bg-brown-primary/20 text-brown-dark"
                                                            >
                                                                {tag}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </Card>
                            ))}
                    </div>
                </div>

                {/* Event Planner */}
                <div>
                    <h2 className="text-xl font-semibold text-text-primary mb-4">
                        ➕ Quick Add Event
                    </h2>
                    <Card>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-text-secondary mb-1">
                                    Event Title
                                </label>
                                <input
                                    type="text"
                                    placeholder="eg. Team Meeting"
                                    className="w-full px-4 py-2 rounded-lg bg-white/40 border border-white/30 text-text-primary"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-sm font-medium text-text-secondary mb-1">
                                        Start Time
                                    </label>
                                    <input
                                        type="datetime-local"
                                        className="w-full px-3 py-2 rounded-lg bg-white/40 border border-white/30 text-text-primary text-sm"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-text-secondary mb-1">
                                        End Time
                                    </label>
                                    <input
                                        type="datetime-local"
                                        className="w-full px-3 py-2 rounded-lg bg-white/40 border border-white/30 text-text-primary text-sm"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="flex items-center gap-2">
                                    <input type="checkbox" className="rounded" />
                                    <span className="text-sm text-text-secondary">
                                        Recurring event
                                    </span>
                                </label>
                            </div>
                            <button className="w-full px-4 py-2 bg-brown-primary text-white rounded-lg hover:bg-brown-dark transition-colors">
                                Add Event
                            </button>
                        </div>
                    </Card>

                    {/* Reminders UI */}
                    <div className="mt-6">
                        <h2 className="text-xl font-semibold text-text-primary mb-4">
                            🔔 Upcoming Reminders
                        </h2>
                        <Card>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3 p-3 bg-white/20 rounded-lg">
                                    <span className="text-2xl">⏰</span>
                                    <div>
                                        <p className="font-medium text-text-primary">
                                            Team Meeting in 30 min
                                        </p>
                                        <p className="text-sm text-text-secondary">
                                            Don't forget to prepare slides
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-white/20 rounded-lg">
                                    <span className="text-2xl">📝</span>
                                    <div>
                                        <p className="font-medium text-text-primary">
                                            Submit report today
                                        </p>
                                        <p className="text-sm text-text-secondary">
                                            Due by 5:00 PM
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
