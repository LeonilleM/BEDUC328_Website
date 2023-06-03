import React from 'react';
import Resource from '../Assets/Photos/resource1.jpg';
import Resource2 from '../Assets/Photos/resource2.jpg';
import Resource3 from '../Assets/Photos/resource3.jpg';



function Resources() {
    const bookURL = 'https://orbiscascade-washington.primo.exlibrisgroup.com/discovery/fulldisplay?docid=cdi_proquest_journals_2674023092&context=PC&vid=01ALLIANCE_UW:UW&lang=en&search_scope=UW_EVERYTHING&adaptor=Primo%20Central&tab=UW_default&query=any,contains,school%20to%20prison%20pipeline%20economic&offset=10'
    const bookURL2 = 'https://orbiscascade-washington.primo.exlibrisgroup.com/discovery/fulldisplay?docid=cdi_proquest_miscellaneous_837450774&context=PC&vid=01ALLIANCE_UW:UW&lang=en&search_scope=UW_EVERYTHING&adaptor=Primo%20Central&tab=UW_default&query=any,contains,school%20to%20prison%20pipeline'
    const bookURL3 = 'https://orbiscascade-washington.primo.exlibrisgroup.com/discovery/fulldisplay?context=PC&vid=01ALLIANCE_UW:UW&search_scope=UW_EVERYTHING&tab=UW_default&docid=cdi_proquest_miscellaneous_2136026559';
 
  return (
    <div>
      <section className="relative sm:ml-64 flex flex-col justify-center items-center pt-12">
        <div className="container px-2 my-4 mx-auto">
          <div className="lg:w-5/6 mx-auto">
            <div className="mt-4">
              <h1 className="font-lato font-semibold text-4xl text-uw-purple">RESOURCES</h1>
            </div>
            <div className="container xl:flex-row ">
              <div className="flex flex-col sm:flex-row my-8">
                <a href={bookURL} target="_blank" rel="noopener noreferrer">
                <img
                  className="w-[600px] h-[300px] object-scale-down rounded-md sm:ml-2 mt-4 sm:mt-0 mb-2"
                  src={Resource}
                  alt="Placeholder"
                />
                  </a>
               
                <div className="flex flex-col sm:mx-12 font-roboto md:w-96 sm:w-auto space-y-1">
                  <h1 className="text-3xl text-uw-gold">Continuation High School: Disrupting the School-to-Prison Pipeline</h1>
                  <h1 className="font-semibold">By: <span className="italic">Robles, Monica</span></h1>
                  <p>Dissertation about numerous different aspects of the school to prison pipeline, from causes to false narratives and other topics.</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row my-10">
              <a href={bookURL2} target="_blank" rel="noopener noreferrer">
              <img
                  className="w-[600px] h-[300px] object-scale-down rounded-md sm:ml-2 mt-4 sm:mt-0 mb-2"
                  src={Resource2}
                  alt="Book cover"
                />
                </a>
                
               <div className="flex flex-col sm:mx-12 font-roboto md:w-96 sm:w-auto space-y-1">
                  <h1 className="text-3xl text-uw-gold">The school-to-prison pipeline: Structuring legal reform</h1>
                  <h1 className="font-semibold">By: <span className ="italic">Kim, Catherine Y; Losen, Daniel J; Hewitt, Damon T</span></h1>
                  <p>Book that analyzes the school to prison pipeline, covering topics like discrimination, application of suspensions and expulsions, the criminalization of school misbehavior, among others.</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row my-10">
              <a href={bookURL3} target="_blank" rel="noopener noreferrer">
              <img
                  className="w-[600px] h-[300px] object-scale-down rounded-md sm:ml-2 mt-4 sm:mt-0 mb-2"
                  src={Resource3}
                  alt="Book cover"
                />
                  </a>
               <div className="flex flex-col sm:mx-12 font-roboto md:w-96 sm:w-auto space-y-1">
                  <h1 className="text-3xl text-uw-gold">The School to Prison Pipeline: The Role of Culture and Discipline in School</h1>
                  <h1 className="font-semibold">By: <span className="italic"> Nathern Okilwa, Muhammad Khalifa, Felecia Briscoe / Nathern Okilwa, Muhammad Khalifa, Felecia Briscoe </span></h1>
                  <p>This book explores the school to prison pipeline with a focus on students of color. 
                    Topics covered include items such as restorative discipline, how the pipeline has been constructed, 
                    and the lived experiences of students who have been through it.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resources;
