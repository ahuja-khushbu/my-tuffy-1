/**
 * LocalStorage utility functions for MyTuffy
 * Handles state persistence with error handling
 */

const STORAGE_PREFIX = 'mytuffy_';

/**
 * Get an item from localStorage
 * @param key Storage key
 * @param defaultValue Default value if key doesn't exist
 * @returns Parsed value or default
 */
export function getStorageItem<T>(key: string, defaultValue: T): T {
    if (typeof window === 'undefined') {
        return defaultValue;
    }

    try {
        const item = window.localStorage.getItem(STORAGE_PREFIX + key);
        return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
        console.error(`Error reading from localStorage (${key}):`, error);
        return defaultValue;
    }
}

/**
 * Set an item in localStorage
 * @param key Storage key
 * @param value Value to store
 * @returns Success status
 */
export function setStorageItem<T>(key: string, value: T): boolean {
    if (typeof window === 'undefined') {
        return false;
    }

    try {
        window.localStorage.setItem(STORAGE_PREFIX + key, JSON.stringify(value));
        return true;
    } catch (error) {
        // Handle quota exceeded errors
        if (
            error instanceof DOMException &&
            (error.code === 22 ||
                error.code === 1014 ||
                error.name === 'QuotaExceededError' ||
                error.name === 'NS_ERROR_DOM_QUOTA_REACHED')
        ) {
            console.error('localStorage quota exceeded');
        } else {
            console.error(`Error writing to localStorage (${key}):`, error);
        }
        return false;
    }
}

/**
 * Remove an item from localStorage
 * @param key Storage key
 */
export function removeStorageItem(key: string): void {
    if (typeof window === 'undefined') {
        return;
    }

    try {
        window.localStorage.removeItem(STORAGE_PREFIX + key);
    } catch (error) {
        console.error(`Error removing from localStorage (${key}):`, error);
    }
}

/**
 * Clear all MyTuffy items from localStorage
 */
export function clearAllStorage(): void {
    if (typeof window === 'undefined') {
        return;
    }

    try {
        const keys = Object.keys(window.localStorage);
        keys.forEach(key => {
            if (key.startsWith(STORAGE_PREFIX)) {
                window.localStorage.removeItem(key);
            }
        });
    } catch (error) {
        console.error('Error clearing localStorage:', error);
    }
}

/**
 * Check if localStorage is available
 * @returns Boolean indicating availability
 */
export function isStorageAvailable(): boolean {
    if (typeof window === 'undefined') {
        return false;
    }

    try {
        const testKey = '__storage_test__';
        window.localStorage.setItem(testKey, 'test');
        window.localStorage.removeItem(testKey);
        return true;
    } catch {
        return false;
    }
}

// Storage keys constants
export const STORAGE_KEYS = {
    MEETINGS: 'meetings',
    MEETINGS_MOM: 'meetings_mom',
    SCHEDULE_EVENTS: 'schedule_events',
    FINANCIAL_GOALS: 'financial_goals',
    PORTFOLIO: 'portfolio',
    EXPENSES: 'expenses',
    LEARNING_GOALS: 'learning_goals',
    HABITS: 'habits',
    SELECTED_MODULE: 'selected_module',
    USER_PREFERENCES: 'user_preferences',
} as const;
