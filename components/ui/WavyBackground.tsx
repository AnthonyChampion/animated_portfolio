"use client";
import React from "react";
import { WavyBackground } from "./wavy-background";

export function WavyBackgroundDemo() {
    return (
        <WavyBackground className="max-w-4xl mx-auto lg:pb-40 pb-[30rem]">
            <p className="text-2xl md:text-2xl lg:text-6xl text-white font-bold inter-var text-center">
                I love to make
            </p>
            <p className="text-base md:text-2xl mt-4 text-white font-normal inter-var text-center">
                beautiful and optimised sites
            </p>
        </WavyBackground>
    );
}
