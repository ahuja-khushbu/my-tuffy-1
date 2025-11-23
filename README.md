# MyTuffy - AI Personal Assistant

<div align="center">
  <h3>🎯 Your Personal Assistant for Meetings, Scheduling, Finance & Learning</h3>
  <p>A beautiful, production-ready Next.js application with glassmorphism design</p>
</div>

---

## ✨ Features

### 🎨 **Beautiful Design**
- Warm cream, peach & brown gradient theme
- Glassmorphism cards throughout the UI
- Smooth transitions and micro-animations
- Fully responsive desktop-first layout

### 📅 **Four Powerful Modules**

1. **Meetings** 👥
   - Meeting list with search & sort
   - Detailed agenda and attendee views
   - Minutes of Meeting (MOM) editor with auto-save
   - Export minutes as Markdown (.md)

2. **Scheduling** 📆
   - Weekly calendar view
   - Quick event planner
   - Recurring events support
   - Reminder alerts (mocked)

3. **Finance** 💰
   - Expense breakdown with chart visualization
   - Investment portfolio tracker
   - Financial goals with progress bars
   - Add/manage goals with modal

4. **Learning & Growth** 📚
   - Learning goals with resources
   - Habit tracker with streaks
   - Productivity insights
   - Weekly progress metrics

### 🎯 **Core Capabilities**
- ✅ LocalStorage persistence for all data
- ✅ Keyboard accessible with ARIA labels
- ✅ Mock data mode (no backend required)
- ✅ Fully tested with Jest & React Testing Library
- ✅ ESLint + Prettier for code quality
- ✅ TypeScript for type safety

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone or download the repository**
   ```bash
   cd my-tuffy-1
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

🎉 **That's it!** The app is now running with mock data.

---

## 📜 Available Scripts

```bash
npm run dev         # Start development server
npm run build       # Build for production
npm start           # Start production server
npm test            # Run tests
npm run test:watch  # Run tests in watch mode
npm run test:coverage # Run tests with coverage
npm run lint        # Lint code with ESLint
npm run format      # Format code with Prettier
```

---

## 🏗️ Project Structure

```
my-tuffy-1/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── globals.css         # Global styles & Tailwind config
│   │   ├── layout.tsx          # Root layout
│   │   └── page.tsx            # Main page
│   ├── components/
│   │   ├── Layout/             # Layout components
│   │   │   ├── MainShell.tsx   # Main 3-column layout
│   │   │   ├── LeftNav.tsx     # Module navigation
│   │   │   ├── RightTLDR.tsx   # Context panel
│   │   │   └── BottomBar.tsx   # Quick actions
│   │   ├── Modules/            # Feature modules
│   │   │   ├── Meetings/
│   │   │   ├── Scheduling/
│   │   │   ├── Finance/
│   │   │   └── Learning/
│   │   └── UI/                 # Reusable components
│   │       ├── Card.tsx
│   │       ├── Button.tsx
│   │       ├── Modal.tsx
│   │       └── Input.tsx
│   ├── lib/
│   │   ├── mocks.ts            # Mock data
│   │   └── storage.ts          # LocalStorage helpers
│   └── types/
│       └── modules.ts          # Type definitions
├── __tests__/                  # Test files
├── jest.config.js              # Jest configuration
├── jest.setup.js               # Jest setup
├── .prettierrc                 # Prettier config
└── package.json
```

---

## 🎨 Design System

### Colors
| Name | Hex | Usage |
|------|-----|-------|
| Brown Primary | `#7A4B2A` | Primary buttons, active states |
| Brown Dark | `#5A3520` | Hover states |
| Cream Primary | `#FFF7EF` | Backgrounds, accents |
| Cream Secondary | `#F4E6DA` | Secondary accents |

### Gradient Background
```css
linear-gradient(135deg, #FFF5E6 0%, #FFE9D6 35%, #F4E0D0 60%, #E6D6C3 100%)
```

### Glassmorphism Style
- `backdrop-filter: blur(12px)`
- `background: rgba(255, 255, 255, 0.3)`
- `border: 1px solid rgba(255, 255, 255, 0.2)`
- `border-radius: 16px`

---

## 💾 Data Persistence

All module data is automatically saved to browser localStorage:
- Meetings and Minutes of Meeting
- Schedule events
- Financial goals
- Learning habits

**Note:** Data is stored locally in your browser and will persist across sessions.

---

## ♿ Accessibility

MyTuffy is built with accessibility in mind:
- ✅ Full keyboard navigation support
- ✅ ARIA labels on all interactive elements
- ✅ Focus states with brown accent color
- ✅ Screen reader friendly
- ✅ Proper semantic HTML

### Keyboard Shortcuts
- `Tab` - Navigate between elements
- `Enter` / `Space` - Select items
- `Escape` - Close modals

---

## 🧪 Testing

Tests are written with Jest and React Testing Library:

```bash
npm test                 # Run all tests
npm run test:watch       # Watch mode
npm run test:coverage    # Coverage report
```

**Test Coverage:**
- ✅ LeftNav component
- ✅ MeetingList component
- ✅ FinanceModule component
- Unit test stubs for other core components

---

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file (see `env.example`):

```env
NEXT_PUBLIC_USE_MOCKS=true
```

**Note:** Currently only mock mode is supported. Future versions will add API integration.

---

## 🚢 Production Build

To build for production:

```bash
npm run build
npm start
```

The optimized build will be in the `.next` folder.

---

## 🎯 Module Details

### Meetings Module
- **Search & Sort**: Find meetings by title or tags
- **Meeting Details**: View agenda, attendees, notes
- **MOM Editor**: Auto-save minutes with localStorage
- **Export**: Download minutes as `.md` file

### Scheduling Module
- **Week View**: See all events organized by day
- **Event Planner**: Quick add form for events
- **Recurring**: Support for recurring event patterns
- **Reminders**: Mock notification system

### Finance Module
- **Expense Chart**: Visual breakdown using Recharts
- **Portfolio**: Track investments with returns
- **Goals**: Set and monitor financial targets
- **Progress Bars**: Visual goal tracking

### Learning Module
- **Goals**: Track learning objectives with progress
- **Resources**: Links to courses, docs, books
- **Habits**: Daily habit tracker with streaks
- **Insights**: Weekly productivity metrics

---

## 🛠️ Technology Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **State**: React Hooks + localStorage
- **Charts**: Recharts
- **Animation**: Framer Motion
- **Testing**: Jest + React Testing Library
- **Linting**: ESLint + Prettier

---

## 📦 Dependencies

### Production
- `next` - React framework
- `react` & `react-dom` - UI library
- `tailwindcss` - Utility-first CSS
- `framer-motion` - Animations
- `recharts` - Charts & visualizations

### Development
- `typescript` - Type safety
- `jest` - Testing framework
- `@testing-library/react` - React testing utilities
- `eslint` - Code linting
- `prettier` - Code formatting

---

## 🐛 Known Limitations

- No backend API integration (mock data only)
- No authentication system
- Data stored only in browser localStorage
- No real-time collaboration
- Charts are mocked with static data

---

## 🔮 Future Enhancements

- [ ] Backend API integration
- [ ] User authentication
- [ ] Real-time sync across devices
- [ ] Push notifications
- [ ] Export data to CSV/PDF
- [ ] Dark mode toggle
- [ ] Mobile app (React Native)
- [ ] AI-powered insights

---

## 📝 License

This project is created as a production-ready scaffold. Feel free to use it for your projects.

---

## 🤝 Contributing

This is a standalone project scaffold. For improvements:
1. Test thoroughly
2. Follow the existing code style
3. Update tests for new features
4. Run linting before committing

---

## 💡 Tips

### Customizing the Theme
Edit `src/app/globals.css` to change colors and gradients.

### Adding Mock Data
Edit `src/lib/mocks.ts` to add more sample data.

### Creating New Modules
Follow the pattern in `src/components/Modules/` directories.

---

## 📞 Support

For issues or questions about the codebase:
1. Check the code comments (well-documented)
2. Review the component tests
3. Refer to Next.js and React documentation

---

<div align="center">
  <p>Built with ❤️ using Next.js, React, and Tailwind CSS</p>
  <p><strong>MyTuffy</strong> - Your AI Personal Assistant</p>
</div>
