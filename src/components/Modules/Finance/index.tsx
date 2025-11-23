'use client';

import { useState, useEffect } from 'react';
import { Card } from '@/components/UI/Card';
import { Button } from '@/components/UI/Button';
import { Modal } from '@/components/UI/Modal';
import { Input } from '@/components/UI/Input';
import {
    mockExpenseBreakdown,
    mockPortfolio,
    mockFinancialGoals,
} from '@/lib/mocks';
import { getStorageItem, setStorageItem, STORAGE_KEYS } from '@/lib/storage';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';

/**
 * Finance Module
 * Expense tracking, portfolio, and financial goals
 */
export function FinanceModule() {
    const [goals, setGoals] = useState(mockFinancialGoals);
    const [isAddGoalOpen, setIsAddGoalOpen] = useState(false);
    const [newGoalTitle, setNewGoalTitle] = useState('');
    const [newGoalTarget, setNewGoalTarget] = useState('');

    useEffect(() => {
        const saved = getStorageItem(
            STORAGE_KEYS.FINANCIAL_GOALS,
            mockFinancialGoals
        );
        setGoals(saved);
    }, []);

    useEffect(() => {
        setStorageItem(STORAGE_KEYS.FINANCIAL_GOALS, goals);
    }, [goals]);

    const handleAddGoal = () => {
        if (!newGoalTitle || !newGoalTarget) return;
        const newGoal = {
            id: `g${Date.now()}`,
            title: newGoalTitle,
            description: '',
            target: parseFloat(newGoalTarget),
            saved: 0,
            progressPct: 0,
            deadline: '',
            priority: 'medium' as const,
        };
        setGoals([...goals, newGoal]);
        setNewGoalTitle('');
        setNewGoalTarget('');
        setIsAddGoalOpen(false);
    };

    const expenseChartData = mockExpenseBreakdown.categories.map(cat => ({
        name: cat.name,
        amount: cat.amount,
    }));

    return (
        <div className="h-full">
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-text-primary mb-2">
                    💰 Finance
                </h1>
                <p className="text-text-secondary">
                    Track expenses, manage investments, and achieve financial goals.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Expense Breakdown */}
                <div>
                    <h2 className="text-xl font-semibold text-text-primary mb-4">
                        📊 Monthly Expenses
                    </h2>
                    <Card>
                        <div className="mb-4">
                            <p className="text-sm text-text-muted">Total Spending</p>
                            <p className="text-3xl font-bold text-text-primary">
                                ${mockExpenseBreakdown.total.toLocaleString()}
                            </p>
                        </div>
                        <div className="h-64">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={expenseChartData}>
                                    <XAxis
                                        dataKey="name"
                                        tick={{ fontSize: 10 }}
                                        angle={-45}
                                        textAnchor="end"
                                        height={80}
                                    />
                                    <YAxis tick={{ fontSize: 10 }} />
                                    <Tooltip />
                                    <Bar dataKey="amount" fill="#7A4B2A" radius={[8, 8, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="mt-4 space-y-2">
                            {mockExpenseBreakdown.categories.slice(0, 5).map((cat, idx) => (
                                <div key={idx} className="flex items-center justify-between">
                                    <span className="text-sm text-text-secondary">
                                        {cat.name}
                                    </span>
                                    <span className="font-semibold text-text-primary">
                                        ${cat.amount}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>

                {/* Portfolio */}
                <div>
                    <h2 className="text-xl font-semibold text-text-primary mb-4">
                        📈 Investment Portfolio
                    </h2>
                    <div className="space-y-3">
                        {mockPortfolio.slice(0, 4).map(stock => (
                            <Card key={stock.id} variant="hover">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <p className="font-semibold text-text-primary">
                                            {stock.ticker}
                                        </p>
                                        <p className="text-sm text-text-muted">{stock.name}</p>
                                        <p className="text-xs text-text-secondary mt-1">
                                            {stock.quantity} shares @ ${stock.entryPrice}
                                        </p>
                                    </div>
                                    <div className="text-right">
                                        <p
                                            className={`font-semibold ${stock.actualReturnPct >= 0
                                                    ? 'text-green-600'
                                                    : 'text-red-600'
                                                }`}
                                        >
                                            {stock.actualReturnPct >= 0 ? '+' : ''}
                                            {stock.actualReturnPct.toFixed(2)}%
                                        </p>
                                        <p className="text-sm text-text-muted">
                                            ${stock.currentPrice}
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Financial Goals */}
                <div className="lg:col-span-2">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-semibold text-text-primary">
                            🎯 Financial Goals
                        </h2>
                        <Button
                            variant="primary"
                            size="sm"
                            onClick={() => setIsAddGoalOpen(true)}
                        >
                            + Add Goal
                        </Button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {goals.map(goal => (
                            <Card key={goal.id}>
                                <div className="flex items-start justify-between mb-3">
                                    <h3 className="font-semibold text-text-primary">
                                        {goal.title}
                                    </h3>
                                    <span className="text-xs px-2 py-1 rounded-full bg-brown-primary/20 text-brown-dark">
                                        {goal.priority}
                                    </span>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-text-muted">Progress</span>
                                        <span className="font-semibold text-brown-primary">
                                            {goal.progressPct}%
                                        </span>
                                    </div>
                                    <div className="h-2 bg-white/40 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-brown-primary rounded-full transition-all"
                                            style={{ width: `${goal.progressPct}%` }}
                                        ></div>
                                    </div>
                                    <div className="flex justify-between text-sm text-text-secondary">
                                        <span>${goal.saved.toLocaleString()} saved</span>
                                        <span>${goal.target.toLocaleString()} target</span>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>

            {/* Add Goal Modal */}
            <Modal
                isOpen={isAddGoalOpen}
                onClose={() => setIsAddGoalOpen(false)}
                title="Add Financial Goal"
                footer={
                    <>
                        <Button variant="secondary" onClick={() => setIsAddGoalOpen(false)}>
                            Cancel
                        </Button>
                        <Button variant="primary" onClick={handleAddGoal}>
                            Add Goal
                        </Button>
                    </>
                }
            >
                <div className="space-y-4">
                    <Input
                        label="Goal Title"
                        value={newGoalTitle}
                        onChange={e => setNewGoalTitle(e.target.value)}
                        placeholder="e.g. New Car Fund"
                    />
                    <Input
                        label="Target Amount"
                        type="number"
                        value={newGoalTarget}
                        onChange={e => setNewGoalTarget(e.target.value)}
                        placeholder="25000"
                    />
                </div>
            </Modal>
        </div>
    );
}
