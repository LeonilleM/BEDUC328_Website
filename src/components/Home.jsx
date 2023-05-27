import React from 'react'
import HomeImage from '../Assets/Photos/img_1.jpg'

function Home() {
  return (
    <div>
         <div>
            <section className="relative sm:ml-64 flex flex-col justify-center items-center">
                <div className="container px-2 pt-32 pb-24 mx-auto flex flex-col">
                    <div className="lg:w-5/6 mx-auto">
                        <div className="rounded-lg">
                            <h1 className="font-lato text-uw-purple font-semibold sm:text-2xl md:text-4xl my-4">The School to Prison Pipeline</h1>
                      {/* Image for School to Prison Piepline 1200x500*/}
                      <img alt="content" className="w-full h-full sm:w-screen" src={HomeImage} />
                        </div>
                        <div className="flex flex-col mt-3 mx-2">
                          <h1 className ="font-roboto text-xl">How can we tackle this social phenomenon within the structures of our public schools in America?</h1>
                          <p className ="text-sm font-roboto italic font-bold">Created by UWB Students</p>
                          </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
  )
}

export default Home