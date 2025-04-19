import React from 'react'
import TitleHeader from '../components/TitleHeader'

const Contacts = () => {
  return (
    <section id="contact" className="flex-center section-padding">
        <div className="w-full h-full md:px-10 px-5">
            <TitleHeader title="Get In Touch With Me"
            sub="🔎 contact Information"/>

            <div className="mt-16 grid-12-cols">
                {/* Contact Form - Left Side*/}
                <div className="xl:col-span-5">
                    <div className="flex">

                    </div>
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contacts