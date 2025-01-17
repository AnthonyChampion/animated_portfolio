import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa6'
import Image from 'next/image'

const RecentProjects = () => {
    return (
        <div className="py-32" id="projects">
            <h1 className="heading">
                My {" "}
                <span className="text-purple">recent projects</span>
            </h1>
            <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 lg:mt-4 mt-8 md:mt-0">
                {projects.map(({ id, title, des, img, iconLists, link }) => (
                    <div key={id} className="lg:h-[41rem] h-[20rem] flex items-center justify-center md:h-[70vh] sm:w-[570px] w-[80vw]">
                        <PinContainer title={title} href={link}>
                            <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[20vh] mb-10">
                                <div className="relative w-full h-full overflow-hidden rounded-3xl bg-[#13162d]">
                                    <Image src="/bg.png" alt="bg-img" width={100} height={100} />
                                </div>
                                <Image src={img} alt={title}
                                    className="z-10 absolute w-[16rem] h-[11rem] lg:w-[28rem] lg:h-[20rem] md:h-[22rem] md:w-[28rem] rotate-3 -bottom-12 lg:-bottom-8 "
                                    width={200} height={200} />
                            </div>
                            <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                                {title}
                            </h1>
                            <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                                {des}
                            </p>

                            <div className="flex items-center justify-between mt-7 mb-3">
                                <div className="flex items-center">
                                    {iconLists.map((icon, index) => (
                                        <div key={icon} className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 h-8 w-8 flex justify-center items-center"
                                            style={{
                                                transform: `translateX(-${5 * index * 2}px)`
                                            }}>
                                            <Image src={icon} alt={icon}
                                                className="p-2" width={50} height={50} />
                                        </div>
                                    ))}
                                </div>
                                <div className="flex justify-center items-center">
                                    <a href={link}>
                                        <p className="flex lg:text-xl md:text-xs text-sm text-purple">Check Live site</p>
                                    </a>
                                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                                </div>
                            </div>
                        </PinContainer>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RecentProjects