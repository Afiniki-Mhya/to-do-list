import { ArrowLeft, MessageCircleMore, Plus } from "lucide-react";
import Link from "next/link";
import React from "react";

function Thoughtspage() {
  return (
    <div className="bg-[#E4E0E1] min-h-screen flex flex-col px-4">
      {/* Top Bar */}
      <div className="flex justify-between items-center py-4">
        <Link href="/">
          <ArrowLeft />
        </Link>
        <h1 className="flex items-center gap-2 font-bold text-lg text-[#493628]">
          Thoughts...
          <MessageCircleMore />
        </h1>
        <Link href="">
          <Plus
            size={16}
            className="border-2 rounded-full text-white bg-[#493628] border-[#493628] w-7 h-7"
          />
        </Link>
      </div>

      {/* Centered Content */}
      <div className="flex-1 flex items-center justify-center">
        <div className="flex flex-col items-center justify-center text-center gap-4 px-4">
          <p className="text-gray-600 max-w-md">
            Every moment counts. Capture and organise your uncut thoughts as they come.
          </p>
          <Link
            href=""
            className="text-[#493628] bg-[#D6C0B3] px-4 py-2 w-40 rounded-lg flex items-center justify-center gap-2"
          >
            <span className="bg-[#49362868] text-white rounded-full px-2 py-0.5 font-bold">+</span>{" "}
            New Thought
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Thoughtspage;
