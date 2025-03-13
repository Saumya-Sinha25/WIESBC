import React, { memo, useRef } from "react"
import Image from "next/image"
import { Linkedin, Github } from "lucide-react"
import { motion } from 'framer-motion';

import A from "../public/1.jpeg";
import B from "../public/2.jpeg";
import C from "../public/3.jpeg";
import D from "../public/4.jpeg";
import E from "../public/5.jpeg";

const TeamSection = memo(() => {
    const teamMembers = [
        {
            name: "Monica Singh",
            role: "Chair",
            image: A,
            linkedin: "https://www.linkedin.com/in/monica-singh-811630261",
            github: "https://github.com/gaurangp22",
        },
        {
            name: "Yashi Katiyar",
            role: "Vice Chair",
            image: B,
            linkedin: "https://www.linkedin.com/in/yashi-katiyar-34ba18251",
            github: "https://github.com/Anant-06/Anant-06",
        },
        {
            name: "Tanisha Bhatnagar",
            role: "Secretary",
            image: C,
            linkedin: "https://www.linkedin.com/in/tanisha-bhatnagar-94a370159",
            github: "https://github.com/kshitijbajpai007",
        },
        {
            name: "Anjali Yadav",
            role: "Treasurer",
            image: D,
            linkedin: "https://www.linkedin.com/in/anjali-yadav-ab951b290",
            github: "https://github.com/MS-Programmer0",
        },
        {
            name: "Arya Amoriya",
            role: "Outreach Lead",
            image: E,
            linkedin: "https://www.linkedin.com/in/arya-amoriya-296646334",
            github: "https://github.com/MS-Programmer0",
        },
    ]

    const sectionRef = useRef<HTMLDivElement>(null);

    return (
        <motion.section
            id="team"
            className="py-16"
            ref={sectionRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="w-[calc(100%-4rem)] mx-auto rounded-md overflow-hidden">
                <div className="bg-black backdrop-blur-sm p-8">
                    <h2 className="text-3xl font-bold mb-8 text-[#752F8A]">Our Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group bg-slate-800/50 rounded-lg p-6 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-[#752F8A]/10 border border-transparent hover:border-[#752F8A]/20"
                            >
                                <div className="relative w-32 h-32 mx-auto mb-4">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        width={128}
                                        height={128}
                                        style={{ width: 'auto', height: 'auto', aspectRatio: '1/1' }}
                                        className="rounded-full object-cover"
                                        priority={index < 2}
                                    />
                                    <div className="absolute inset-0 rounded-full bg-[#752F8A]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                                <h3 className="text-xl font-semibold group-hover:text-[#752F8A] transition-colors">
                                    {member.name}
                                </h3>
                                <p className="text-gray-400">{member.role}</p>
                                <div className="flex justify-center space-x-3 mt-4">
                                    <a href={member.linkedin} className="text-gray-400 hover:text-[#752F8A] transition-colors duration-300" target="_blank" rel="noopener noreferrer">
                                        <Linkedin className="w-5 h-5" />
                                    </a>
                                    <a href={member.github} className="text-gray-400 hover:text-[#752F8A] transition-colors duration-300" target="_blank" rel="noopener noreferrer">
                                        <Github className="w-5 h-5" />
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.section>
    )
});

TeamSection.displayName = 'TeamSection';

export default TeamSection;
