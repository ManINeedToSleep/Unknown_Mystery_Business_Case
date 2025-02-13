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

interface PomodoroConfig {
  initialTime?: number;        // Initial time in seconds (default: 25 minutes)
  onComplete?: () => void;     // Callback when timer reaches zero
  onTick?: (time: number) => void; // Callback for each second
}

interface PomodoroState {
  time: number;               // Current time in seconds
  isActive: boolean;          // Timer running state
  start: () => void;         // Start/resume timer
  pause: () => void;         // Pause timer
  reset: () => void;         // Reset to initial time
  formattedTime: string;     // Time in MM:SS format
}

export const usePomodoro = ({
  initialTime = 25 * 60,
  onComplete,
  onTick,
}: PomodoroConfig = {}): PomodoroState => {
  const [time, setTime] = useState(initialTime);
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
    setTime(initialTime);
  }, [initialTime]);

  return {
    time,
    isActive,
    start,
    pause,
    reset,
    formattedTime: formatTime(time),
  };
}; 