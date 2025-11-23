import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LeftNav } from '@/components/Layout/LeftNav';

describe('LeftNav Component', () => {
    const mockOnModuleChange = jest.fn();

    beforeEach(() => {
        mockOnModuleChange.mockClear();
    });

    it('renders all modules', () => {
        render(
            <LeftNav activeModule="meetings" onModuleChange={mockOnModuleChange} />
        );

        expect(screen.getByText('Meetings')).toBeInTheDocument();
        expect(screen.getByText('Scheduling')).toBeInTheDocument();
        expect(screen.getByText('Finance')).toBeInTheDocument();
        expect(screen.getByText('Learning')).toBeInTheDocument();
    });

    it('highlights active module', () => {
        render(
            <LeftNav activeModule="meetings" onModuleChange={mockOnModuleChange} />
        );

        const meetingsButton = screen.getByRole('button', {
            name: /Navigate to Meetings/i,
        });
        expect(meetingsButton).toHaveClass('bg-brown-primary');
    });

    it('calls onModuleChange when module is clicked', async () => {
        const user = userEvent.setup();
        render(
            <LeftNav activeModule="meetings" onModuleChange={mockOnModuleChange} />
        );

        const schedulingButton = screen.getByRole('button', {
            name: /Navigate to Scheduling/i,
        });
        await user.click(schedulingButton);

        expect(mockOnModuleChange).toHaveBeenCalledWith('scheduling');
    });

    it('displays user profile information', () => {
        render(
            <LeftNav activeModule="meetings" onModuleChange={mockOnModuleChange} />
        );

        expect(screen.getByText('Alex Johnson')).toBeInTheDocument();
        expect(screen.getByText('Product Manager')).toBeInTheDocument();
    });

    it('shows quick tip section', () => {
        render(
            <LeftNav activeModule="meetings" onModuleChange={mockOnModuleChange} />
        );

        expect(screen.getByText(/Quick Tip/i)).toBeInTheDocument();
    });
});
