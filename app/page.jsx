"use client";
import AnimatedGraph from "@/app/components/animated-graph";
import AnimatedLaptop from "@/app/components/animated-laptop";
import Orbit from "@/app/components/orbit";
import SyncingComponent from "@/app/components/sync";
import Timeline from "@/app/components/timeline";
import AnimatedCardStack from "./components/animated-dashboard";
import SectionContainer from "./components/section-container";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-900  flex items-center flex-col justify-center gap-20 px-2 md:p-28">
      <h1 className="text-6xl font-sans text-white tracking-tight p-8">
        Re-Reversed UI - 2X
      </h1>
      <SectionContainer
        className="text-white shadow-sauceDark bg-neutral-900"
        title="Orbit thing"
        link="https://github.com/Abil-Shrestha/Re-Reversed_UI_2X/blob/main/app/components/orbit.jsx"
      >
        <Orbit />
      </SectionContainer>
      <SectionContainer
        className="bg-white shadow-sauceLight text-black"
        title="Cloud Tuah"
        link="https://github.com/Abil-Shrestha/Re-Reversed_UI_2X/blob/main/app/components/sync.js"
      >
        <SyncingComponent actionText="Sync Tuah" />
      </SectionContainer>
      <SectionContainer
        className="bg-white shadow-sauceLight text-black"
        title="Laptop Thing"
        link="https://github.com/Abil-Shrestha/Re-Reversed_UI_2X/blob/main/app/components/animated-laptop.jsx"
      >
        <AnimatedLaptop />
      </SectionContainer>
      <div className="w-full max-w-xl h-fit rounded-md">
        <AnimatedCardStack />
      </div>
      <SectionContainer
        title="Timeline"
        link=" https://ibelick.com/lab/timeline"
        className="shadow-sauceDark text-white"
      >
        <Timeline />
      </SectionContainer>
      <SectionContainer
        title="Animated linechart"
        className=" bg-white shadow-sauceLight text-black"
        link="https://github.com/Abil-Shrestha/Re-Reversed_UI_2X/blob/main/app/components/animated-graph.jsx"
      >
        <AnimatedGraph />
      </SectionContainer>
    </div>
  );
}
