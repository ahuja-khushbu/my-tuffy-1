'use client';

import { useState, useEffect } from 'react';
import { MeetingList } from './MeetingList';
import { MeetingDetail } from './MeetingDetail';
import { MeetingMOMEditor } from './MeetingMOMEditor';
import { mockMeetings } from '@/lib/mocks';
import { getStorageItem, setStorageItem, STORAGE_KEYS } from '@/lib/storage';

/**
 * Main Meetings Module
 * Combines meeting list, detail view, and MOM editor
 */
export function MeetingsModule() {
    const [meetings, setMeetings] = useState(mockMeetings);
    const [selectedMeetingId, setSelectedMeetingId] = useState<string | null>(
        null
    );

    // Load meetings from localStorage on mount
    useEffect(() => {
        const saved = getStorageItem(STORAGE_KEYS.MEETINGS, mockMeetings);
        setMeetings(saved);
        if (saved.length > 0 && !selectedMeetingId) {
            setSelectedMeetingId(saved[0].id);
        }
    }, []);

    // Save meetings to localStorage when they change
    useEffect(() => {
        setStorageItem(STORAGE_KEYS.MEETINGS, meetings);
    }, [meetings]);

    const selectedMeeting = meetings.find(m => m.id === selectedMeetingId);

    return (
        <div className="h-full">
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-text-primary mb-2">
                    📅 Meetings
                </h1>
                <p className="text-text-secondary">
                    Manage your meetings, agendas, and minutes all in one place.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100%-100px)]">
                {/* Left: Meeting List */}
                <div className="lg:col-span-1 h-full">
                    <MeetingList
                        meetings={meetings}
                        selectedId={selectedMeetingId || undefined}
                        onSelect={setSelectedMeetingId}
                    />
                </div>

                {/* Center: Meeting Detail */}
                <div className="lg:col-span-1 h-full overflow-y-auto">
                    {selectedMeeting ? (
                        <MeetingDetail meeting={selectedMeeting} />
                    ) : (
                        <div className="glass-card p-6 text-center text-text-muted">
                            Select a meeting to view details
                        </div>
                    )}
                </div>

                {/* Right: MOM Editor */}
                <div className="lg:col-span-1 h-full">
                    {selectedMeeting ? (
                        <MeetingMOMEditor
                            meetingId={selectedMeeting.id}
                            meetingTitle={selectedMeeting.title}
                        />
                    ) : (
                        <div className="glass-card p-6 text-center text-text-muted h-full flex items-center justify-center">
                            Select a meeting to edit minutes
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
