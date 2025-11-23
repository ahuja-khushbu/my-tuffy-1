'use client';

import { useState, useEffect } from 'react';
import { Card } from '@/components/UI/Card';
import { Button } from '@/components/UI/Button';
import {
    mockLearningGoals,
    mockHabits,
    mockProductivityMetrics,
} from '@/lib/mocks';
import { getStorageItem, setStorageItem, STORAGE_KEYS } from '@/lib/storage';

/**
 * Learning & Growth Module
 * Goals, habits, resources, and productivity tracking
 */
export function LearningModule() {
    const [habits, setHabits] = useState(mockHabits);

    useEffect(() => {
        const saved = getStorageItem(STORAGE_KEYS.HABITS, mockHabits);
        setHabits(saved);
    }, []);

    const toggleHabit = (habitId: string) => {
        setHabits(prev =>
            prev.map(habit =>
                habit.id === habitId
                    ? { ...habit, completedToday: !habit.completedToday }
                    : habit
            )
        );
    };

    useEffect(() => {
        setStorageItem(STORAGE_KEYS.HABITS, habits);
    }, [habits]);

    return (
        <div className="h-full">
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-text-primary mb-2">
                    📚 Learning & Growth
                </h1>
                <p className="text-text-secondary">
                    Track your learning goals, habits, and personal development.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Learning Goals */}
                <div className="lg:col-span-2">
                    <h2 className="text-xl font-semibold text-text-primary mb-4">
                        🎯 Learning Goals
                    </h2>
                    <div className="space-y-4">
                        {mockLearningGoals.map(goal => (
                            <Card key={goal.id}>
                                <div className="flex items-start justify-between mb-3">
                                    <div>
                                        <h3 className="font-semibold text-text-primary mb-1">
                                            {goal.title}
                                        </h3>
                                        <p className="text-sm text-text-secondary">
                                            {goal.description}
                                        </p>
                                    </div>
                                    <span className="text-xs px-2 py-1 rounded-full bg-brown-primary/20 text-brown-dark">
                                        {goal.category}
                                    </span>
                                </div>
                                <div className="mb-3">
                                    <div className="flex justify-between text-sm mb-1">
                                        <span className="text-text-muted">Progress</span>
                                        <span className="font-semibold text-brown-primary">
                                            {goal.progressPct}%
                                        </span>
                                    </div>
                                    <div className="h-2 bg-white/40 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-brown-primary rounded-full"
                                            style={{ width: `${goal.progressPct}%` }}
                                        ></div>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-text-secondary mb-2">
                                        Resources:
                                    </p>
                                    <div className="space-y-1">
                                        {goal.resources.slice(0, 3).map(resource => (
                                            <a
                                                key={resource.id}
                                                href={resource.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-sm text-brown-primary hover:text-brown-dark transition-colors"
                                            >
                                                <span>
                                                    {resource.completed ? '✓' : '○'}
                                                </span>
                                                <span className="hover:underline">{resource.title}</span>
                                                <span className="text-xs text-text-muted">
                                                    ({resource.type})
                                                </span>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Habits Tracker */}
                <div>
                    <h2 className="text-xl font-semibold text-text-primary mb-4">
                        ✅ Habits Tracker
                    </h2>
                    <div className="space-y-3">
                        {habits.map(habit => (
                            <Card key={habit.id} variant="hover">
                                <div className="flex items-start gap-3">
                                    <button
                                        onClick={() => toggleHabit(habit.id)}
                                        className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all ${habit.completedToday
                                                ? 'bg-brown-primary border-brown-primary text-white'
                                                : 'border-brown-primary/40 hover:border-brown-primary'
                                            }`}
                                        aria-label={`Mark ${habit.name} as ${habit.completedToday ? 'incomplete' : 'complete'}`}
                                    >
                                        {habit.completedToday && (
                                            <svg
                                                className="w-4 h-4"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={3}
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path d="M5 13l4 4L19 7" />
                                            </svg>
                                        )}
                                    </button>
                                    <div className="flex-1">
                                        <p className="font-medium text-text-primary">
                                            {habit.name}
                                        </p>
                                        <p className="text-xs text-text-muted">
                                            {habit.description}
                                        </p>
                                        <div className="flex items-center gap-2 mt-2">
                                            <span className="text-xs text-brown-primary font-semibold">
                                                🔥 {habit.currentStreak} day streak
                                            </span>
                                            <span className="text-xs text-text-muted">
                                                Best: {habit.longestStreak}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>

                    {/* Productivity Insights */}
                    <div className="mt-6">
                        <h2 className="text-xl font-semibold text-text-primary mb-4">
                            📈 This Week's Insights
                        </h2>
                        <Card>
                            <div className="text-center mb-4">
                                <div className="text-5xl font-bold text-brown-primary mb-2">
                                    {mockProductivityMetrics.weeklyScore}
                                </div>
                                <p className="text-sm text-text-muted">Weekly Score</p>
                                <p className="text-xs text-green-600 mt-1">
                                    +{mockProductivityMetrics.weekOverWeekChange}% from last week
                                </p>
                            </div>
                            <div className="space-y-2 mb-4">
                                <div className="flex justify-between text-sm">
                                    <span className="text-text-muted">Focus Hours</span>
                                    <span className="font-semibold text-text-primary">
                                        {mockProductivityMetrics.focusHours}h
                                    </span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-text-muted">Tasks Completed</span>
                                    <span className="font-semibold text-text-primary">
                                        {mockProductivityMetrics.tasksCompleted}
                                    </span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-text-muted">Habits Completed</span>
                                    <span className="font-semibold text-text-primary">
                                        {mockProductivityMetrics.habitsCompleted}
                                    </span>
                                </div>
                            </div>
                            <div className="pt-4 border-t border-white/20">
                                <p className="text-xs font-semibold text-text-primary mb-2">
                                    💡 Suggestions:
                                </p>
                                <ul className="space-y-1">
                                    {mockProductivityMetrics.suggestions
                                        .slice(0, 2)
                                        .map((suggestion, idx) => (
                                            <li key={idx} className="text-xs text-text-secondary">
                                                • {suggestion}
                                            </li>
                                        ))}
                                </ul>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
