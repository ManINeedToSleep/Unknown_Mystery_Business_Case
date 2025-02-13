import { Button } from "./Button";
import { useTimer } from "./TimerProvider";
import { cn } from "@/utils/cn";

export const TimerTypeSelect = () => {
  const { timerType, changeTimerType, isActive } = useTimer();

  return (
    <div className="flex justify-center gap-2 mb-8">
      <Button
        onClick={() => changeTimerType('pomodoro')}
        className={cn(
          'px-4 py-2 rounded-full',
          timerType === 'pomodoro' ? 'bg-sakuraPink text-white' : 'bg-opacity-50'
        )}
        disabled={isActive}
      >
        Pomodoro
      </Button>
      <Button
        onClick={() => changeTimerType('shortBreak')}
        className={cn(
          'px-4 py-2 rounded-full',
          timerType === 'shortBreak' ? 'bg-sakuraPink text-white' : 'bg-opacity-50'
        )}
        disabled={isActive}
      >
        Short Break
      </Button>
      <Button
        onClick={() => changeTimerType('longBreak')}
        className={cn(
          'px-4 py-2 rounded-full',
          timerType === 'longBreak' ? 'bg-sakuraPink text-white' : 'bg-opacity-50'
        )}
        disabled={isActive}
      >
        Long Break
      </Button>
    </div>
  );
}; 