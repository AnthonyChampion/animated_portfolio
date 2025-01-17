"use client"

import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo } from "./GridGlobe";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from "@/data/confetti.json";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import { WavyBackgroundDemo } from "./WavyBackground";
import Image from "next/image";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto ",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    id,
    img,
    imgClassName,
    titleClassName,
    spareImg,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    id?: number;
    img?: string;
    imgClassName?: string;
    titleClassName?: string;
    spareImg?: string;
}) => {

    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("anthonychampionrodrigues@gmail.com");
        setCopied(true);
    }

    return (
        <div
            className={cn(
                "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border border-white/[0.4]",
                className
            )}
            style={{
                background: "rgb(2,0,36)",
                backgroundColor: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(59,59,68,1) 26%, rgba(93,108,111,1) 100%",
            }}
        >
            <div className={`${id === 6 && "flex justify-center"} h-full`}>
                <div className="w-full h-full absolute opacity-50 lg:opacity-50">
                    {img && (
                        <Image src={img}
                            alt={img}
                            className={cn(imgClassName, "object-cover, object-center")}
                            height={200}
                            width={200}
                        />
                    )}
                </div>
                <div className={`absolute right-0 -bottom-2 ${id === 4 && "w-full opacity-80"}`}>
                    {spareImg && (
                        <Image
                            src={spareImg}
                            alt={spareImg}
                            className={"object-cover, object-center w-full h-full"}
                            width={200}
                            height={200} />
                    )}
                </div>
                {id === 5 && (
                    <BackgroundGradientAnimation>
                    </BackgroundGradientAnimation>
                )}
                <div className={cn(
                    titleClassName, "group-hover/bento:translate-x-2 transition duration-200 realtive md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
                )}>
                    <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
                        {description}
                    </div>
                    <div className="font-sans font-bold text-lg lg:text-3xl md:text-2xl max-w-96 z-10">
                        {title}
                    </div>

                    {id === 1 && < WavyBackgroundDemo />}

                    {id === 2 && <GlobeDemo />}

                    {id === 3 && (
                        <div className="flex gap-1 lg:gap-2 w-fit absolute -right-3 lg:-right-2 md:-top-2 md:-right-2">
                            <div className="flex flex-col gap-3 md:gap-4 lg:gap-8">
                                {["React.js", "Javascript", "TailwindCss"].map
                                    ((item) => (
                                        <span key={item} className="lg:py-4 lg:px-3 py-2 px-3 md:px-4 md:py-4 text-xs lg:text-base opacity-50 
                                        lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                                            {item}
                                        </span>
                                    ))}
                                <span className="lg:py-4 lg:px-3 py-4 px-3 md:px-4 md:py-5  rounded-lg text-center bg-[#10132E]" />
                            </div>
                            <div className="flex flex-col gap-3 md:gap-4 lg:gap-8">
                                <span className="lg:py-4 lg:px-3 py-4 px-3 md:py-6  rounded-lg text-center bg-[#10132E]" />
                                {["Node.js", "Git", "MySQL"].map
                                    ((item) => (
                                        <span key={item} className="lg:py-4 lg:px-3 py-2 px-3 md:px-4 md:py-4 text-xs lg:text-base opacity-50 
                                        lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                                            {item}
                                        </span>
                                    ))}

                            </div>
                        </div>
                    )}
                    {id === 5 && (
                        <div className="mt-5 relative">
                            <div className={`absolute -bottom-5 right-0`}>
                                <Lottie
                                    options={{
                                        loop: copied,
                                        autoplay: copied,
                                        animationData,
                                        rendererSettings: {
                                            preserveAspectRatio: "xMidYMid slice",
                                        }
                                    }} />
                            </div>
                            <MagicButton
                                title={copied ? "Email copied" : "Copy my email"}
                                icon={<IoCopyOutline />}
                                position="left"
                                otherClasses="!bg-[#161a31]"
                                handleClick={handleCopy}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
