"use client";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card } from "@/components/Card";
import { Background } from "@/components/Background";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <Background />
      <div className="flex flex-col items-center justify-start gap-8 w-full max-w-6xl mx-auto pt-8">
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

        {/* Additional dashboard content can go here */}
      </div>
    </DashboardLayout>
  );
}
