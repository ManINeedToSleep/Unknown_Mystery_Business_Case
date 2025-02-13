/**
 * Pomodoro Timer Hook
 * 
 * A flexible hook for managing a Pomodoro timer with configurable duration
 * and optional callbacks for timer events.
 * 
 * Features:
 * - Configurable initial time
 * - Start/pause/reset functionality
 * - Optional callbacks for timer completion and tick
 * - Auto-pause when time reaches zero
 * - Time formatting utilities
 * 
 * @example
 * ```tsx
 * const {
 *   time,
 *   isActive,
 *   start,
 *   pause,
 *   reset,
 *   formattedTime
 * } = usePomodoro({
 *   initialTime: 25 * 60,
 *   onComplete: () => console.log('Timer finished!'),
 * });
 * ```
 */

import { useState, useEffect, useCallback } from 'react';

export type TimerType = 'pomodoro' | 'shortBreak' | 'longBreak';

const TIMER_PRESETS = {
  pomodoro: 25 * 60,    // 25 minutes
  shortBreak: 5 * 60,   // 5 minutes
  longBreak: 15 * 60    // 15 minutes
} as const;

interface PomodoroConfig {
  timerType?: TimerType;
  onComplete?: () => void;
  onTick?: (time: number) => void;
}

interface PomodoroState {
  time: number;               // Current time in seconds
  isActive: boolean;          // Timer running state
  start: () => void;         // Start/resume timer
  pause: () => void;         // Pause timer
  reset: () => void;         // Reset to initial time
  formattedTime: string;     // Time in MM:SS format
  timerType: TimerType;
  changeTimerType: (newType: TimerType) => void;
}

export const usePomodoro = ({
  timerType = 'pomodoro',
  onComplete,
  onTick,
}: PomodoroConfig = {}): PomodoroState => {
  const [currentTimerType, setCurrentTimerType] = useState<TimerType>(timerType);
  const [time, setTime] = useState(TIMER_PRESETS[timerType]);
  const [isActive, setIsActive] = useState(false);

  // Format time as MM:SS
  const formatTime = useCallback((timeInSeconds: number): string => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((currentTime) => {
          const newTime = currentTime - 1;
          
          // Call onTick callback if provided
          onTick?.(newTime);

          // Handle timer completion
          if (newTime === 0) {
            setIsActive(false);
            onComplete?.();
          }

          return newTime;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isActive, time, onComplete, onTick]);

  const start = useCallback(() => {
    if (time > 0) {
      setIsActive(true);
    }
  }, [time]);

  const pause = useCallback(() => {
    setIsActive(false);
  }, []);

  const reset = useCallback(() => {
    setIsActive(false);
    setTime(TIMER_PRESETS[timerType]);
  }, [timerType]);

  const changeTimerType = useCallback((newType: TimerType) => {
    setIsActive(false);
    setCurrentTimerType(newType);
    setTime(TIMER_PRESETS[newType]);
  }, []);

  return {
    time,
    isActive,
    start,
    pause,
    reset,
    formattedTime: formatTime(time),
    timerType: currentTimerType,
    changeTimerType,
  };
}; 