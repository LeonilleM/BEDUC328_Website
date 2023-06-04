import React from 'react'
import Graph from '../Assets/Photos/pi_graph.png'
import Image3 from '../Assets/Photos/img_3.jpeg'

function Action() {
  return (
    <div id="action-section">
      <section className="relative sm:ml-64 flex flex-col justify-center items-center pb-8">
        <div className="container px-2 py-2 mx-auto flex flex-col">
          <div className="lg:w-5/6 mx-auto">
            <div>
              <h1 className="font-lato font-semibold text-4xl my-4 text-uw-purple">Action</h1>
              {/* Image for School to Prison Piepline 1200x500*/}
              <img alt="content" className="rounded-md lg:w-[1250px] lg:h-[300px] md:w-auto md:h-auto object-cover" src={Image3} />
              <p className="font-sans text-xs italic mx-2">Image from Massachusetts Advocates for Children</p>
              <h1 className="font-lato text-4xl my-3 text-uw-gold">How can we tackle this?</h1>
            </div>
            <div className="flex flex-col mt-4 mx-2 text-lg sm:px-5">
              <p className="font-roboto text-justify text-uw-gray mt-3">TIn building and sharing this site, we wanted to make an effort to spread awareness of this issue with as many people
                as possible. It is important that we aim to empower individual students, faculty, parents,
                and others to explore and research how the school to prison pipeline may affect their local school district, and also help them
                understand that all of us have the means to band together in collective action in order to make a difference.
              </p>
              <div className="flex justify-center items-center flex-col md:flex-row font-roboto my-5">
                <div className="mx-4">
                  <img
                    className="rounded-md md:mr-4 mt-4 sm:mt-0"
                    src={Graph}
                    alt="Graph of data"
                  />
                  <p className="text-sm md:mt-0">2017-2018 survey on crime & safety from students</p>
                </div>
                <div className="mt-4">
                  <p>
                    The School To Prison Pipeline is a framework for analysis of a situation, and because of this, the way in which it acts can vary significantly from place to place.
                    For instance, the students at an expensive private school may almost never come into contact with a pipeline as a result of factors such as economic status
                    and the level of funding available for the school to take disciplinary action on its own, while the local public high school in an economically
                    disadvantaged area will struggle with issues like increased likelihood of misbehavior by students and increased police presence. Depending on the popular
                    politics of the location, the local school board and politicians may be very open to taking action or incredibly hostile to it
                    <span className="italic font-semibold">
                      (for instance, people in power may want students who take illegal actions to be expelled regardless of the crime in order to give off a “tough on crime” appearance)
                    </span>.
                    This is why it is so important for us as individuals to make an effort to understand what is going on in our local communities
                    and figuring out what the best course of action is in that specific situation.
                  </p>
                </div>
              </div>
              <p className="mt-4 font-roboto">
                It is also important that we share and emphasize the importance of this situation with the people around us, in order to encourage and build the will for change in our local communities.
                All of us have the ability to form movements, taking cues from the leaders before us in our approach. Together, we can help dismantle this pipeline.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Action