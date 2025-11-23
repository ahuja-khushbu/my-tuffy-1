import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FinanceModule } from '@/components/Modules/Finance';

// Mock recharts to avoid rendering issues in tests
jest.mock('recharts', () => ({
    ResponsiveContainer: ({ children }: any) => (
        <div data-testid="recharts-container">{children}</div>
    ),
    BarChart: ({ children }: any) => <div data-testid="bar-chart">{children}</div>,
    Bar: () => <div data-testid="bar" />,
    XAxis: () => <div data-testid="x-axis" />,
    YAxis: () => <div data-testid="y-axis" />,
    Tooltip: () => <div data-testid="tooltip" />,
}));

describe('FinanceModule Component', () => {
    it('renders finance module title', () => {
        render(<FinanceModule />);

        expect(screen.getByText('💰 Finance')).toBeInTheDocument();
    });

    it('displays expense breakdown', () => {
        render(<FinanceModule />);

        expect(screen.getByText(/Monthly Expenses/i)).toBeInTheDocument();
        expect(screen.getByText(/Total Spending/i)).toBeInTheDocument();
    });

    it('shows portfolio investments', () => {
        render(<FinanceModule />);

        expect(screen.getByText(/Investment Portfolio/i)).toBeInTheDocument();
    });

    it('displays financial goals with progress', () => {
        render(<FinanceModule />);

        expect(screen.getByText(/Financial Goals/i)).toBeInTheDocument();
        expect(screen.getByText('Emergency Fund')).toBeInTheDocument();
    });

    it('opens add goal modal when button clicked', async () => {
        const user = userEvent.setup();
        render(<FinanceModule />);

        const addButton = screen.getByRole('button', { name: /Add Goal/i });
        await user.click(addButton);

        expect(screen.getByText('Add Financial Goal')).toBeInTheDocument();
    });

    it('adds new financial goal', async () => {
        const user = userEvent.setup();
        render(<FinanceModule />);

        // Open modal
        const addButton = screen.getByRole('button', { name: /Add Goal/i });
        await user.click(addButton);

        // Fill form
        const titleInput = screen.getByLabelText(/Goal Title/i);
        await user.type(titleInput, 'New Car');

        const targetInput = screen.getByLabelText(/Target Amount/i);
        await user.type(targetInput, '30000');

        // Submit
        const submitButton = screen.getByRole('button', { name: /^Add Goal$/i });
        await user.click(submitButton);

        // Check if new goal appears
        expect(screen.getByText('New Car')).toBeInTheDocument();
    });
});
