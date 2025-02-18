# Unknown Mystery Business Case (Work in Progress)

Why is it a mystery? Why is it unknown? It is due to the fact that... I do not have the full scope of what needs to be done for the project and therefore do not have an idea of what might this be used for. So! I've decded to keep tis name for now until I find the true prpose of this web application other than to learn the sage of React.

## Current Status

The project, as far as it has gone now, focuses on:
- A Working Pomodoro Timer

## Current Features

- Pomodoro Timer with three modes:
  - Focus Timer (25 minutes)
  - Short Break (5 minutes)
  - Long Break (15 minutes)
- Simeple Start, Pause, and Reset
- Responsive design that works on all devices (Moreso the side effect of using Tailwind CSS)
- Soothing cherry blossom animations

## Tech Stack

- **Framework:** Next.js 15
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **State Management:** React Context + Custom Hooks
- **Type Safety:** TypeScript

## Getting Started

1. Clone the repository:

bash
git clone https://github.com/yourusername/focus-timer.git

2. Install dependencies:

bash
npm install

3. Run the development server:

bash
npm run dev

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure (Important Ones)

```
src/
├── app/                          # Next.js app router pages
├── components/           
│   ├── Background.tsx            # Animated background effects
│   ├── TimerDisplay.tsx          # Timer display component
│   ├── TimerControls.tsx         # Timer control buttons
│   └── TimerProvider.tsx         # Timer state management
│   └── TimerTypeSelection.tsx    # Timer Type Selection
├── utils/                        # Utility functions
└── styles/                       # Global styles
```

## Current Design Features (Cause I wanted it to look cool)

- Animated cherry blossom petals that float across the screen
- Responsive card layouts
- Carefully chosen color palette for visual comfort

## Responsive Design

The application is fully responsive and works beautifully on:
- Desktop computers
- Tablets

## 🔮 Future Development

This project is part of a larger business case that will be revealed over time. The current implementation serves as a foundation for future features and requirements.

## 🤝 Contributing

As this is an evolving project with upcoming business requirements, please check with the project maintainers before making significant changes.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

