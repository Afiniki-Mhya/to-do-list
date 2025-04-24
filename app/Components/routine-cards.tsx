'use client';
import React, { useState } from 'react';
import { Sun, Moon, Coffee } from 'lucide-react';

const RoutineCard = ({
  title,
  time,
  Icon,
}: {
  title: string;
  time: string;
  Icon?: React.ComponentType<{ size?: number }>;
}) => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="bg-[#705c539c] rounded-lg px-4 py-3 flex items-center justify-between text-white gap-2 w-72 h-16">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
          className="accent-[#FEBA17] w-4 h-4"
        />
        {Icon && <Icon size={20} />}
        <div className="flex flex-col">
          <h1 className={`font-bold text-sm ${checked ? 'line-through opacity-60' : ''}`}>
            {title}
          </h1>
          <p className="text-[#FEBA17] text-xs font-bold">{time}</p>
        </div>
      </div>
    </div>
  );
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#E4E0E1] py-3 flex flex-col gap-4 items-start ">
      <RoutineCard title="Respond to Emails" time="12:30PM" Icon={Sun} />
      <RoutineCard title="Evening Walk" time="6:45PM" Icon={Moon} />
      <RoutineCard title="Morning Coffee" time="8:00AM" Icon={Coffee} />
    </main>
  );
}
