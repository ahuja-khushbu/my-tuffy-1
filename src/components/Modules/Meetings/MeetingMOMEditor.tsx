'use client';

import { useState, useEffect } from 'react';
import { Card } from '@/components/UI/Card';
import { Textarea } from '@/components/UI/Input';
import { Button } from '@/components/UI/Button';
import { getStorageItem, setStorageItem, STORAGE_KEYS } from '@/lib/storage';

export interface MeetingMOMEditorProps {
    meetingId: string;
    meetingTitle: string;
}

/**
 * Minutes of Meeting (MOM) Editor
 * Auto-saves to localStorage
 */
export function MeetingMOMEditor({
    meetingId,
    meetingTitle,
}: MeetingMOMEditorProps) {
    const [mom, setMom] = useState('');
    const [lastSaved, setLastSaved] = useState<Date | null>(null);
    const [isSaving, setIsSaving] = useState(false);

    // Load MOM from localStorage
    useEffect(() => {
        const savedMOMs = getStorageItem<Record<string, string>>(
            STORAGE_KEYS.MEETINGS_MOM,
            {}
        );
        setMom(savedMOMs[meetingId] || '');
    }, [meetingId]);

    // Auto-save functionality
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (mom !== '') {
                handleSave();
            }
        }, 1000);

        return () => clearTimeout(timeoutId);
    }, [mom]);

    const handleSave = () => {
        setIsSaving(true);
        const savedMOMs = getStorageItem<Record<string, string>>(
            STORAGE_KEYS.MEETINGS_MOM,
            {}
        );
        savedMOMs[meetingId] = mom;
        setStorageItem(STORAGE_KEYS.MEETINGS_MOM, savedMOMs);
        setLastSaved(new Date());
        setTimeout(() => setIsSaving(false), 300);
    };

    const handleExport = () => {
        const content = `# Minutes of Meeting: ${meetingTitle}\n\n${mom}`;
        const blob = new Blob([content], { type: 'text/markdown' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `MOM-${meetingTitle.replace(/\s+/g, '-')}.md`;
        a.click();
        URL.revokeObjectURL(url);
    };

    return (
        <Card className="h-full flex flex-col">
            <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-text-primary">
                    📄 Minutes of Meeting
                </h3>
                <div className="flex items-center gap-2">
                    {isSaving && (
                        <span className="text-xs text-text-muted">Saving...</span>
                    )}
                    {lastSaved && !isSaving && (
                        <span className="text-xs text-text-muted">
                            Saved{' '}
                            {lastSaved.toLocaleTimeString('en-US', {
                                hour: '2-digit',
                                minute: '2-digit',
                            })}
                        </span>
                    )}
                </div>
            </div>

            <Textarea
                value={mom}
                onChange={e => setMom(e.target.value)}
                placeholder="Type meeting minutes here... Auto-saves as you type."
                rows={12}
                className="flex-1 mb-4 font-mono text-sm"
                aria-label="Minutes of meeting editor"
            />

            <div className="flex gap-2">
                <Button variant="primary" size="sm" onClick={handleExport}>
                    <span className="mr-1">📥</span>
                    Export as .md
                </Button>
                <Button variant="secondary" size="sm" onClick={() => setMom('')}>
                    Clear
                </Button>
            </div>

            <div className="mt-4 p-3 bg-white/20 rounded-lg">
                <p className="text-xs text-text-secondary">
                    <strong>💡 Tip:</strong> Your minutes are automatically saved to
                    browser storage. Use Markdown formatting for better organization.
                </p>
            </div>
        </Card>
    );
}
