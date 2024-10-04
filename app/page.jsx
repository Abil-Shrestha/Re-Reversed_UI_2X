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
    <div className="min-h-screen bg-neutral-900  flex items-center flex-col justify-center gap-20 p-28">
      <h1 className="text-6xl font-sans text-white tracking-tight">
        Re - Reversed UI - 2x
      </h1>
      <SectionContainer
        className="text-white shadow-sauceDark bg-neutral-900"
        title="Orbit thing"
        link="https://github.com/sauce-dev/orbit"
      >
        <Orbit />
      </SectionContainer>
      <SectionContainer
        className="bg-white shadow-sauceLight text-black"
        title="Cloud Tuah"
      >
        <SyncingComponent actionText="Sync Tuah" />
      </SectionContainer>
      <SectionContainer
        className="bg-white shadow-sauceLight text-black"
        title="Laptop Thing"
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
        className=" bg-white shadow-sauceLight"
        link="https://github.com/sauce-dev/animated-graph"
      >
        <AnimatedGraph />
      </SectionContainer>
    </div>
  );
}