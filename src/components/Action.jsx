import React from 'react'
import ActionIMG from '../Assets/Photos/action_img_1.jpg'
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
              <p className="font-roboto text-justify text-uw-gray mt-3">In building and sharing this site, we wanted to make an effort to spread awareness of this issue with as many people
                as possible. It is important that we aim to empower individual students, faculty, parents,
                and others to explore and research how the school to prison pipeline may affect their local school district, and also help them
                understand that all of us have the means to band together in collective action in order to make a difference.
              </p>
                {/*DIV FOR Sectiona with Image, Caption and short paragraph*/}
              <div className="flex flex-col 2xl:flex-row items-center justify-center my-5 font-roboto sm:px-5 text-lg mb-4 ">
                <div className="justify-center items-center flex flex-col">
                <img
                    className="sm:w-[600px] sm:h-[350px] h-[250px] rounded-md md:mr-4 mt-4 sm:mt-0"
                    src={ActionIMG}
                    alt="Graph of data"
                  />
                  <p className ="text-sm md:w-[600px] sm:w-auto">
                  Imagine from the HuffingtonPost, which covered the topic on School to Prison Pipeline.
                  <a href="https://www.huffpost.com/entry/little-black-girls-are-th_b_2871120" target= "h_blank"className="text-uw-purple font-semibold"> Read more here</a>
                  </p>
                </div>
                 <div className="sm:w-auto 2xl:w-1/2">
                 <p className ="mt-4">
                    The School To Prison Pipeline is a framework for analysis of a situation, and because of this, the way in which it acts can vary significantly from place to place.
                    For instance, the students at an expensive private school may almost never come into contact with a pipeline as a result of factors such as economic status
                    and the level of funding available for the school to take disciplinary action on its own, while the local public high school in an economically
                    disadvantaged area will struggle with issues like increased likelihood of misbehavior by students and increased police presence. Depending on the popular
                    politics of the location, the local school board and politicians may be very open to taking action or incredibly hostile to it
                    <span className="italic font-bold font-roboto">
                      (for instance, people in power may want students who take illegal actions to be expelled regardless of the crime in order to give off a “tough on crime” appearance)
                    </span>.
                    This is why it is so important for us as individuals to make an effort to understand what is going on in our local communities
                    and figuring out what the best course of action is in that specific situation.
                  </p>
              
                 </div>
              </div>
              <hr className="border-uw-gold my-2" />
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