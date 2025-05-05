'use client';
import React, { useState } from 'react';
import { AlarmClock } from 'lucide-react';

const tasks = [
  { category: 'Priority', color: 'bg-red-500', time: '9:00AM' },
  { category: 'Chores', color: 'bg-green-500', time: '10:30AM' },
  { category: 'Work', color: 'bg-yellow-400', time: '1:00PM' },
  { category: 'Social', color: 'bg-white', time: '7:30PM', dotBorder: 'border border-gray-300' },
  { category: 'Priority', color: 'bg-red-500', time: '4:00PM' },
  { category: 'Work', color: 'bg-yellow-400', time: '2:15PM' },
  { category: 'Social', color: 'bg-white', time: '8:00PM', dotBorder: 'border border-gray-300' },
];

const LineUpCards = () => {
  const [checked, setChecked] = useState(new Array(tasks.length).fill(false));

  const toggleChecked = (index: number) => {
    const updated = [...checked];
    updated[index] = !updated[index];
    setChecked(updated);
  };

  return (
    <div className="pt-6 bg-[#E4E0E1] min-h-screen flex flex-col md:grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {tasks.map((task, i) => (
        <div
          key={i}
          className={`bg-[#705c539c] h-20 rounded-lg p-4 flex justify-between items-center text-white ${
            i > 4 ? 'hidden md:flex' : 'flex'
          }`}
        >
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={checked[i]}
              onChange={() => toggleChecked(i)}
              className="accent-[#FEBA17] w-4 h-4"
            />
            <div
              className={`w-3 h-3 rounded-full ${task.color} ${
                task.dotBorder || ''
              }`}
            ></div>
            <div>
              <h2
                className={`font-bold text-sm ${
                  checked[i] ? 'line-through opacity-60' : ''
                }`}
              >
                {task.category}
              </h2>
              <p className="text-xs text-[#FEBA17] font-semibold flex items-center gap-1">
                <AlarmClock size={14} /> {task.time}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LineUpCards;
