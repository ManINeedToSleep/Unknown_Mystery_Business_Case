"use client";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card } from "@/components/Card";
import { Background } from "@/components/Background";
import { TimerProvider } from "@/components/TimerProvider";
import { TimerDisplay } from "@/components/TimerDisplay";
import { TimerControls } from "@/components/TimerControls";

export default function Timer() {
  return (
    <DashboardLayout>
      <Background />
      <div className="relative flex flex-col items-center justify-start gap-8 w-full max-w-6xl mx-auto pt-8">
        <Card className="w-full max-w-lg px-4">
          <h2 className="text-2xl font-semibold text-center mb-6">Focus Timer</h2>
          <TimerProvider>
            <TimerDisplay />
            <TimerControls />
          </TimerProvider>
        </Card>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl px-4 mb-8">
          <Card>
            <h3 className="text-lg font-semibold mb-2">Today&apos;s Focus</h3>
            <p className="text-3xl">2 hours</p>
            <p className="text-sm opacity-75">4 sessions completed</p>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold mb-2">Weekly Progress</h3>
            <p className="text-3xl">8 hours</p>
            <p className="text-sm opacity-75">15 sessions completed</p>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
