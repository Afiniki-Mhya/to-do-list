import { gsap } from "gsap";
import { Search } from "lucide-react";
import Image from "next/image";
import Sidebarpage from "./sidebar/page";
import HeroCardPage from "./Components/hero-card";
import RoutineCards from "./Components/routine-cards";
import LineUpCards from "./line-up-cards";

export default function Home() {
  return (
    <main className="bg-[#E4E0E1] min-h-screen flex  overflow-y-hidden">
  <div className="flex-1">
    <Sidebarpage />
  </div>
  <div className="flex flex-col pt-7 px-4 w-full ml-16 ">
    <div className="flex  justify-between pb-10 ">
      <div className="text-[#3F2305]">
        <h1 className="font-extrabold text-lg">Hello</h1>
        <p className="font-bold">Good Morning</p>
      </div>
      <div className="relative w-28">
        <Search
          className="absolute left-3 top-2 text-gray-600"
          size={14}
        />
        <input
          placeholder="search"
          className="pl-7 outline-none bg-[#D6C0B3] py-1 px-2 w-full text-sm rounded-2xl"
        />
      </div>
    </div>
     <span className="pb-10">
       <HeroCardPage />
     </span>

     <div className="-mb-80 ">
     <h1 className="text-[#3F2305] font-bold  ">Line Ups:</h1>
      <LineUpCards />
     </div>

     <div className="-mb-[180%] ">
      <h1 className="text-[#3F2305] font-bold pb- ">Routine Tasks:</h1>
      <RoutineCards />
     </div>
  </div>
 
</main>
  )
}
