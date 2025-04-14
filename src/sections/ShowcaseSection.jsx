import React from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    
  return (
    <section id="work" className="app-showcase">
        <div className="w-full">
            <div className="showcaselayout">
                {/* LEFT */}
                <div className="first-project-wrapper">
                    <div className="image-wrapper">
                        <img src="/images/project1.png" alt="Ryde" className="src" />
                    </div>
                    <div className="text-content">
                        <h2>On-Demand Rides Made Simple with a Powerful, User-Friendly App called Ryde</h2>
                        <p className="text-white-50 md:text-xl">
                            App built from react native, Expo and TailwindCSS for a fast, user-friendly experience.
                        </p>
                    </div>
                </div>
                {/* RIGHT */}
                <div className="project-list-wrapper overflow-hidden">
                    <div className="project">
                        <div className="image-wrapper bg-[#ffefdb]">
                            <img src="/images/project2.png" alt="Library-Management" className="src" />
                        </div>
                        <h2>Library Management Platform</h2>
                    </div>

                    <div className="project">
                        <div className="image-wrapper bg-[#ffe7eb]">
                            <img src="/images/project3.png" alt="YC Directory" className="src" />
                        </div>
                        <h2>Startup showcase</h2>
                    </div>
                </div> 
            </div>
        </div>
    </section>
  )
}

export default ShowcaseSection