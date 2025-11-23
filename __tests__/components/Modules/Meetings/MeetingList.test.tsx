import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MeetingList } from '@/components/Modules/Meetings/MeetingList';

const mockMeetings = [
    {
        id: 'm1',
        title: 'Team Standup',
        time: '2025-11-24T10:00:00Z',
        duration: 30,
        tags: ['team', 'recurring'],
    },
    {
        id: 'm2',
        title: 'Client Demo',
        time: '2025-11-25T14:00:00Z',
        duration: 60,
        tags: ['client', 'important'],
    },
];

describe('MeetingList Component', () => {
    const mockOnSelect = jest.fn();

    beforeEach(() => {
        mockOnSelect.mockClear();
    });

    it('renders all meetings', () => {
        render(
            <MeetingList
                meetings={mockMeetings}
                onSelect={mockOnSelect}
            />
        );

        expect(screen.getByText('Team Standup')).toBeInTheDocument();
        expect(screen.getByText('Client Demo')).toBeInTheDocument();
    });

    it('calls onSelect when meeting is clicked', async () => {
        const user = userEvent.setup();
        render(
            <MeetingList
                meetings={mockMeetings}
                onSelect={mockOnSelect}
            />
        );

        const meetingCard = screen.getByText('Team Standup').closest('div');
        if (meetingCard) {
            await user.click(meetingCard);
            expect(mockOnSelect).toHaveBeenCalledWith('m1');
        }
    });

    it('filters meetings by search query', async () => {
        const user = userEvent.setup();
        render(
            <MeetingList
                meetings={mockMeetings}
                onSelect={mockOnSelect}
            />
        );

        const searchInput = screen.getByPlaceholderText(/Search meetings/i);
        await user.type(searchInput, 'Client');

        expect(screen.getByText('Client Demo')).toBeInTheDocument();
        expect(screen.queryByText('Team Standup')).not.toBeInTheDocument();
    });

    it('sorts meetings by date and name', async () => {
        const user = userEvent.setup();
        render(
            <MeetingList
                meetings={mockMeetings}
                onSelect={mockOnSelect}
            />
        );

        const nameButton = screen.getByText('By Name');
        await user.click(nameButton);

        expect(nameButton).toHaveClass('bg-brown-primary');
    });

    it('shows empty state when no meetings found', () => {
        render(
            <MeetingList
                meetings={[]}
                onSelect={mockOnSelect}
            />
        );

        expect(screen.getByText('No meetings found')).toBeInTheDocument();
    });
});
