import React from 'react'
import Graph from '../Assets/Photos/pi_graph.png'
import Image2 from '../Assets/Photos/img_2.jpg'

function Cause() {
    return (
        <div id="cause-section">
            <section className="relative sm:ml-64 flex flex-col justify-center items-center pb-10">
                <div className="container px-2 my-4 mx-auto flex flex-col">
                    <div className="lg:w-5/6 mx-auto">
                        <div>
                            <h1 className="font-lato font-semibold text-4xl my-4 text-uw-purple">Cause</h1>
                            {/* Image for School to Prison Piepline 1200x500*/}
                            <img
                                className="rounded-md lg:w-[1250px] lg:h-[300px] md:w-auto md:h-auto object-cover"
                                src={Image2}
                                alt="School to Prison Piepline 1200x500"
                            />
                            <p className="font-sans text-xs italic mx-2">Image from the Margaret King</p>
                        </div>
                        <div className="flex flex-col mt-3 mx-2">
                            <h1 className="font-lato text-uw-gold text-4xl mt-6 mb-2">Introduction</h1>
                            <div className="sm:px-5 mt-3">
                                <p className="font-roboto text-lg">
                                    The school-to-prison pipeline is the phenomenon of kids being sent to juvenile detention, occurring more within poorer communities and schools,
                                    particularly in Schools with a higher-density demographic of African American students. This is because there is a growing number of ROTC officers
                                    (<span className="font-roboto font-bold">Police officers stationed on campus</span>) in these poorer schools and there are harsher punishments for students that cause trouble and commit “minor” crimes.
                                    Students are not given access to resources to help themselves and learn from their mistakes. This trend of students being put in this detention system has been known to
                                    result in students engaging in behaviors that will get them put back into these facilities only for them to eventually end up in a conventional prison later on.
                                    We are publishing this website in hopes that the realities of this system reach the eyes and ears of every
                                    student, parent, faculty, and admin so that we might get this system changed so we can give the next generations a better chance of success and happy childhood.
                                </p>
                                <hr className="border-uw-gold mt-4" />
                            </div>
                            <h1 className="font-lato text-uw-gold text-4xl mt-6 mb-2">A closer look</h1>
                            <p className="font-roboto mt-2 text-lg sm:px-5">
                                The symptoms of this phenomenon come in many forms, the most well known being the increased criminalization of behaviors that 
                                would otherwise be disciplined within the school by the faculty. Making contact with the criminal justice system is often a 
                                negative predictor of success in various aspects of life (students who have been incarcerated are less likely to finish high school, 
                                youth who make contact with the criminal justice system are likely to continue criminal activity in the future). 
                                Thus, this increased chance of the criminalization of students is undesirable and should be avoided in order to 
                                facilitate the success of students both in the classroom and the rest of their lives afterward. 
                                This problem can be chased back to its roots in underfunded and segregated communities which feed into their local schools. 
                                For example why are schools primarily funded by household taxation when that can ultimately contribute to poorer schools, 
                                poorer schools having the higher probability of producing more prison bound youth. Such problems like these need to be 
                                addressed through the economic lens.
                            </p>
                            <div className="flex flex-col 2xl:flex-row items-center justify-center my-5 font-roboto sm:px-5 text-lg mb-4 ">
                                <div className="justify-center items-center flex flex-col">
                                    <img
                                        className="sm:w-[600px] sm:h-[350px] h-[250px] rounded-md md:mr-4 mt-4 sm:mt-0"
                                        src={Graph}
                                        alt="Graph of data"
                                    />
                                    <p className="text-sm md:w-[600px] sm:w-auto">
                                        In the Department of Education's 2017-2018 survey of 2762 schools, 36% of them reported having at least one arrest during the school year.
                                        <a href="https://nces.ed.gov/pubs2020/2020054.pdf" target="h_blank" className="text-uw-purple font-semibold"> Learn more here</a>
                                    </p>
                                </div>
                                <div className="sm:w-auto 2xl:w-1/2 mx-2">
                                    <p className="mt-4">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae nunc congue, posuere justo sed, mattis lectus.
                                        Donec cursus sapien ut tellus venenatis, eget accumsan massa malesuada. Nunc aliquam eleifend lacus, vel varius risus porta at.
                                        Aliquam erat volutpat. Sed commodo, arcu hendrerit fermentum mattis, mauris nibh faucibus lectus, quis pellentesque magna massa eget mauris.
                                        Quisque tincidunt vulputate maximus. Ut metus nunc, placerat id metus ut, ultrices pharetra libero.
                                        Etiam a lacus nec felis posuere lacinia. Ut rhoncus placerat velit. Aenean scelerisque semper arcu nec ultricies.
                                        Mauris iaculis, nulla vitae vehicula dapibus, velit nibh feugiat nisi, fermentum blandit erat justo euismod urna.
                                        Pellentesque dictum tincidunt tortor in lacinia.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Cause