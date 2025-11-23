/**
 * Mock Data for MyTuffy AI Personal Assistant
 * All data structures follow the specification requirements
 */

// Meetings Mock Data
export const mockMeetings = [
    {
        id: 'm1',
        title: 'Q4 Planning Session',
        time: '2025-11-24T10:00:00Z',
        duration: 90, // minutes
        agenda: [
            'Review Q3 performance',
            'Set Q4 OKRs',
            'Budget allocation',
            'Team resource planning',
        ],
        members: [
            { name: 'Sarah Chen', role: 'Product Lead' },
            { name: 'Mike Johnson', role: 'Engineering Manager' },
            { name: 'Lisa Park', role: 'Design Director' },
            { name: 'You', role: 'Team Lead' },
        ],
        notes: 'Quarterly planning meeting with key stakeholders.',
        tags: ['planning', 'quarterly', 'important'],
        mom: '', // Minutes of Meeting - empty initially
    },
    {
        id: 'm2',
        title: 'Client Demo - Acme Corp',
        time: '2025-11-25T14:00:00Z',
        duration: 60,
        agenda: [
            'Product walkthrough',
            'Feature requests discussion',
            'Timeline review',
            'Q&A session',
        ],
        members: [
            { name: 'John Davis', role: 'Client - CTO' },
            { name: 'Emma Wilson', role: 'Client - Product Manager' },
            { name: 'You', role: 'Solutions Architect' },
        ],
        notes: 'Important client demo for new features.',
        tags: ['client', 'demo', 'sales'],
        mom: '',
    },
    {
        id: 'm3',
        title: 'Weekly Team Sync',
        time: '2025-11-26T09:00:00Z',
        duration: 30,
        agenda: [
            'Sprint progress update',
            'Blockers discussion',
            'Next week priorities',
        ],
        members: [
            { name: 'Team Members', role: 'Engineering' },
            { name: 'You', role: 'Scrum Master' },
        ],
        notes: 'Regular weekly sync with the engineering team.',
        tags: ['recurring', 'team', 'standup'],
        mom: '',
    },
    {
        id: 'm4',
        title: 'Design Review - Mobile App',
        time: '2025-11-27T15:30:00Z',
        duration: 45,
        agenda: [
            'Review updated mockups',
            'Discuss user feedback',
            'Finalize color palette',
            'Next iteration planning',
        ],
        members: [
            { name: 'Alex Kim', role: 'Senior Designer' },
            { name: 'Rachel Green', role: 'UX Researcher' },
            { name: 'You', role: 'Product Manager' },
        ],
        notes: 'Review session for the new mobile app design.',
        tags: ['design', 'mobile', 'review'],
        mom: '',
    },
    {
        id: 'm5',
        title: '1:1 with Manager',
        time: '2025-11-28T11:00:00Z',
        duration: 30,
        agenda: [
            'Career development',
            'Current project updates',
            'Feedback and concerns',
        ],
        members: [
            { name: 'David Brown', role: 'Engineering Director' },
            { name: 'You', role: 'Senior Engineer' },
        ],
        notes: 'Bi-weekly one-on-one with manager.',
        tags: ['1:1', 'career', 'recurring'],
        mom: '',
    },
    {
        id: 'm6',
        title: 'Security Audit Review',
        time: '2025-11-29T13:00:00Z',
        duration: 60,
        agenda: [
            'Review audit findings',
            'Discuss remediation plan',
            'Assign action items',
            'Set timeline for fixes',
        ],
        members: [
            { name: 'Chris Taylor', role: 'Security Engineer' },
            { name: 'Nina Patel', role: 'DevOps Lead' },
            { name: 'You', role: 'Tech Lead' },
        ],
        notes: 'Important security audit review meeting.',
        tags: ['security', 'audit', 'important'],
        mom: '',
    },
];

// Scheduling Mock Data
export const mockEvents = [
    {
        id: 'e1',
        title: 'Morning Workout',
        start: '2025-11-25T06:00:00Z',
        end: '2025-11-25T07:00:00Z',
        tags: ['health', 'personal'],
        recurring: true,
        recurringPattern: 'Daily (Mon-Fri)',
    },
    {
        id: 'e2',
        title: 'Deep Work - Feature Development',
        start: '2025-11-25T09:00:00Z',
        end: '2025-11-25T12:00:00Z',
        tags: ['work', 'focus'],
        recurring: false,
    },
    {
        id: 'e3',
        title: 'Lunch Break',
        start: '2025-11-25T12:30:00Z',
        end: '2025-11-25T13:30:00Z',
        tags: ['personal'],
        recurring: true,
        recurringPattern: 'Daily',
    },
    {
        id: 'e4',
        title: 'Team Collaboration Time',
        start: '2025-11-26T14:00:00Z',
        end: '2025-11-26T16:00:00Z',
        tags: ['work', 'team'],
        recurring: false,
    },
    {
        id: 'e5',
        title: 'Language Learning - Spanish',
        start: '2025-11-27T18:00:00Z',
        end: '2025-11-27T19:00:00Z',
        tags: ['learning', 'personal'],
        recurring: true,
        recurringPattern: 'Mon, Wed, Fri',
    },
    {
        id: 'e6',
        title: 'Code Review Session',
        start: '2025-11-28T10:00:00Z',
        end: '2025-11-28T11:00:00Z',
        tags: ['work', 'review'],
        recurring: true,
        recurringPattern: 'Weekly (Thu)',
    },
];

// Finance Mock Data
export const mockExpenseBreakdown = {
    month: '2025-11',
    categories: [
        { name: 'Housing', amount: 1800, percentage: 36 },
        { name: 'Food & Dining', amount: 600, percentage: 12 },
        { name: 'Transportation', amount: 400, percentage: 8 },
        { name: 'Utilities', amount: 250, percentage: 5 },
        { name: 'Entertainment', amount: 300, percentage: 6 },
        { name: 'Healthcare', amount: 200, percentage: 4 },
        { name: 'Shopping', amount: 450, percentage: 9 },
        { name: 'Savings & Investments', amount: 1000, percentage: 20 },
    ],
    total: 5000,
};

export const mockPortfolio = [
    {
        id: 'p1',
        ticker: 'AAPL',
        name: 'Apple Inc.',
        entryDate: '2024-03-15',
        entryPrice: 170.5,
        currentPrice: 195.2,
        quantity: 15,
        expectedReturnPct: 8.5,
        actualReturnPct: 14.5,
    },
    {
        id: 'p2',
        ticker: 'MSFT',
        name: 'Microsoft Corp.',
        entryDate: '2024-05-20',
        entryPrice: 380.0,
        currentPrice: 425.8,
        quantity: 8,
        expectedReturnPct: 10.0,
        actualReturnPct: 12.1,
    },
    {
        id: 'p3',
        ticker: 'GOOGL',
        name: 'Alphabet Inc.',
        entryDate: '2024-07-10',
        entryPrice: 175.3,
        currentPrice: 168.9,
        quantity: 12,
        expectedReturnPct: 12.0,
        actualReturnPct: -3.6,
    },
    {
        id: 'p4',
        ticker: 'NVDA',
        name: 'NVIDIA Corp.',
        entryDate: '2024-02-01',
        entryPrice: 220.0,
        currentPrice: 485.5,
        quantity: 10,
        expectedReturnPct: 15.0,
        actualReturnPct: 120.7,
    },
    {
        id: 'p5',
        ticker: 'TSLA',
        name: 'Tesla Inc.',
        entryDate: '2024-08-15',
        entryPrice: 245.0,
        currentPrice: 238.5,
        quantity: 6,
        expectedReturnPct: 18.0,
        actualReturnPct: -2.65,
    },
];

export const mockFinancialGoals = [
    {
        id: 'g1',
        title: 'Emergency Fund',
        description: '6 months of expenses saved',
        target: 30000,
        saved: 22500,
        progressPct: 75,
        deadline: '2025-12-31',
        priority: 'high',
    },
    {
        id: 'g2',
        title: 'Home Down Payment',
        description: '20% down payment for home purchase',
        target: 100000,
        saved: 45000,
        progressPct: 45,
        deadline: '2026-12-31',
        priority: 'high',
    },
    {
        id: 'g3',
        title: 'Retirement Savings',
        description: 'Long-term retirement fund',
        target: 500000,
        saved: 125000,
        progressPct: 25,
        deadline: '2045-12-31',
        priority: 'medium',
    },
    {
        id: 'g4',
        title: 'Vacation Fund',
        description: 'European vacation with family',
        target: 8000,
        saved: 6400,
        progressPct: 80,
        deadline: '2025-06-30',
        priority: 'low',
    },
];

// Learning Mock Data
export const mockLearningGoals = [
    {
        id: 'l1',
        title: 'Master React & Next.js',
        description: 'Advanced web development with modern frameworks',
        progressPct: 65,
        category: 'Programming',
        resources: [
            {
                id: 'r1',
                title: 'Next.js Official Documentation',
                url: 'https://nextjs.org/docs',
                type: 'documentation',
                completed: true,
            },
            {
                id: 'r2',
                title: 'React Advanced Patterns',
                url: 'https://www.freecodecamp.org/news/advanced-react-patterns',
                type: 'article',
                completed: true,
            },
            {
                id: 'r3',
                title: 'Full Stack Next.js Course',
                url: 'https://www.coursera.org/learn/nextjs',
                type: 'course',
                completed: false,
            },
        ],
        deadline: '2025-12-31',
    },
    {
        id: 'l2',
        title: 'Learn Spanish (B2 Level)',
        description: 'Conversational fluency in Spanish',
        progressPct: 40,
        category: 'Language',
        resources: [
            {
                id: 'r4',
                title: 'Duolingo Spanish Course',
                url: 'https://www.duolingo.com',
                type: 'app',
                completed: false,
            },
            {
                id: 'r5',
                title: 'Spanish Grammar Guide',
                url: 'https://www.spanishdict.com/guide',
                type: 'reference',
                completed: true,
            },
        ],
        deadline: '2026-06-30',
    },
    {
        id: 'l3',
        title: 'Financial Literacy & Investing',
        description: 'Understanding markets and investment strategies',
        progressPct: 55,
        category: 'Finance',
        resources: [
            {
                id: 'r6',
                title: 'The Intelligent Investor',
                url: 'https://www.amazon.com/Intelligent-Investor',
                type: 'book',
                completed: true,
            },
            {
                id: 'r7',
                title: 'Yale Financial Markets Course',
                url: 'https://www.coursera.org/learn/financial-markets',
                type: 'course',
                completed: false,
            },
            {
                id: 'r8',
                title: 'Investopedia Academy',
                url: 'https://www.investopedia.com/academy',
                type: 'course',
                completed: false,
            },
        ],
        deadline: '2025-09-30',
    },
];

export const mockHabits = [
    {
        id: 'h1',
        name: 'Morning Meditation',
        description: '10 minutes of mindfulness',
        frequency: 'daily',
        currentStreak: 24,
        longestStreak: 45,
        completedToday: true,
        category: 'Wellness',
    },
    {
        id: 'h2',
        name: 'Read for 30 minutes',
        description: 'Daily reading habit',
        frequency: 'daily',
        currentStreak: 18,
        longestStreak: 30,
        completedToday: false,
        category: 'Learning',
    },
    {
        id: 'h3',
        name: 'Exercise',
        description: 'Physical activity for 45+ minutes',
        frequency: 'daily',
        currentStreak: 12,
        longestStreak: 28,
        completedToday: true,
        category: 'Health',
    },
    {
        id: 'h4',
        name: 'Code Practice',
        description: 'Solve coding challenges',
        frequency: 'weekdays',
        currentStreak: 7,
        longestStreak: 15,
        completedToday: false,
        category: 'Skill',
    },
    {
        id: 'h5',
        name: 'Journal Writing',
        description: 'Reflect on the day',
        frequency: 'daily',
        currentStreak: 9,
        longestStreak: 22,
        completedToday: false,
        category: 'Personal',
    },
];

export const mockProductivityMetrics = {
    weeklyScore: 82, // out of 100
    weekOverWeekChange: 5, // percentage
    focusHours: 32.5,
    tasksCompleted: 28,
    habitsCompleted: 21,
    goalsProgress: 12, // percentage points gained this week
    suggestions: [
        'Great week! Your focus hours increased by 15%.',
        'Consider adding a short break between deep work sessions.',
        'You\'re on track to complete "Master React" goal ahead of schedule!',
        'Meditation streak is impressive - keep it up!',
    ],
};

// Mock user profile
export const mockUser = {
    name: 'Alex Johnson',
    email: 'alex@mytuffy.app',
    avatar: '', // Will be generated or use placeholder
    role: 'Product Manager',
    timezone: 'America/New_York',
    preferences: {
        theme: 'warm',
        notifications: true,
        weekStartsOn: 'monday',
    },
};
