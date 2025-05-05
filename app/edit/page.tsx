"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

function EditIconpage() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("urgent");
  const [time, setTime] = useState("");
  const [isDone, setIsDone] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log({ title, category, time, isDone });
  };

  return (
    <main className="bg-[#E4E0E1] min-h-screen pt-4">
         <Link href="/">
          <ArrowLeft />
        </Link>
        <div className="p-6  flex flex-col justify-center items-center">
          <form
            onSubmit={handleSubmit}
            className="bg-[#D6C0B3] rounded-lg p-6 w-full max-w-md shadow-md"
          >
            <h2 className="text-[#493628] font-bold text-xl mb-4 text-center">
              Edit Task
            </h2>
            <div className="mb-4">
              <label className="block text-[#493628] font-semibold mb-1">
                Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-3 py-2 rounded-lg outline-none"
                placeholder="Enter task title"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-[#493628] font-semibold mb-1">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3 py-2 rounded-lg outline-none"
              >
                <option value="urgent">Urgent</option>
                <option value="chores">Chores</option>
                <option value="work">Work</option>
                <option value="social">Social</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-[#493628] font-semibold mb-1">
                Time
              </label>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full px-3 py-2 rounded-lg outline-none bg-white text-[#493628]"
                required
              />
            </div>
            <div className="mb-4 flex items-center gap-2">
              <input
                type="checkbox"
                checked={isDone}
                onChange={() => setIsDone(!isDone)}
                id="done"
                className="accent-[#493628]"
              />
              <label htmlFor="done" className="text-[#493628] font-medium">
                Mark as Done
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-[#493628] text-white font-semibold py-2 rounded-lg"
            >
              Save Task
            </button>
          </form>
        </div>
    </main>
  );
}

export default EditIconpage;
