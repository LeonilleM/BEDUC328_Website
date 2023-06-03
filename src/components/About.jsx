import React, { useState } from 'react';

function About() {
  const [activeTab, setActiveTab] = useState('who_are_we');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'why':
        return (
          <div className="p-4 rounded-lg" id="contacts" role="tabpanel" aria-labelledby="contacts-tab">
            <h1 className="font-lato text-2xl font-semibold">Our reasoning</h1>
            <div className="flex flex-row py-2">
              <h1 className="text-lg te">Upon research and observation of general public schools,
                we discovered the long-standing issue of the school-to-prison pipeline. We found this to be one of the primary sources of injustice within our public school system and sought to inform stakeholders
                within this system of this troubling phenomenon. Injustice towards students of color and harsh punishments like
                Juvenile detention is too much for kids of that age and we believe they deserve a chance as well as the opportunity to learn and improve instead of being forced to suffer these draconian punishments.</h1>
            </div>
          </div>
        );
      case 'goal':
        return (
          <div className="p-4 rounded-lg" id="contacts" role="tabpanel" aria-labelledby="contacts-tab">
            <h1 className="font-lato text-2xl font-semibold">Intentions within the project</h1>
            <div className="flex flex-row py-2">
              <h1 className="text-lg te">To keep this issue in the eyes of the public and provide an educational medium to further educate others of this issue. 
              Hopefully, this website can and will be browsed by many stakeholders within the community and there will be some clamor for reform to change this system. 
              Though we do not have a concrete solution for this issue, the goal of this website is to raise awareness of the issue which will result in work to resolve it in the future.
              </h1>
            </div>
          </div>
        );
      default:
        return (
          <div className="p-4 rounded-lg" id="contacts" role="tabpanel" aria-labelledby="contacts-tab">
            <h1 className="font-lato text-2xl font-semibold">A group of diverse students, with inspirations within leadership</h1>
            <div className="flex flex-row py-2">
              <h1 className="text-lg te">We are a group of students who attend the University of Washington
                who as part of our own curiosity and part of our studies have observed troubling trends within our education system.
                And we have decided to take action, and create a platform that others can use to help themselves and others.
              </h1>
            </div>
          </div>
        );
    }
  };

  return (
    <div>
      <section className="relative sm:ml-64 flex flex-col justify-center items-center pt-12">
        <div className="container px-2 my-4 mx-auto flex flex-col">
          <div className="lg:w-5/6 mx-auto">
            <div className="my-4">
              <h1 className="font-lato font-semibold text-4xl text-uw-purple">ABOUT US</h1>
            </div>
            <div className="flex flex-col mt-3 mx-2">
              <div className="mb-4 border-b-2 border-uw-gold">
                <ul className="flex justify-between -mb-px md:text-xl sm:text-sm font-medium text-center px-4" id="myTab" role="tablist">
                  <li className="mr-2" role="presentation">
                    <button
                      className={`inline-block p-4 border-b-2 rounded-t-md ${activeTab === 'who_are_we' ? 'border-uw-purple bg-uw-gold/50' : 'border-transparent'
                        }`}
                      id="who_are_we-tab"
                      onClick={() => handleTabClick('who_are_we')}
                      type="button"
                      role="tab"
                      aria-controls="who_are_we"
                      aria-selected={activeTab === 'who_are_we'}
                    >
                      Who are we?
                    </button>
                  </li>
                  <li className="mr-2" role="presentation">
                    <button
                      className={`inline-block p-4 border-b-2 rounded-t-lg ${activeTab === 'why' ? 'border-uw-purple bg-uw-gold/50' : 'border-transparent'
                        }`}
                      id="why-tab"
                      onClick={() => handleTabClick('why')}
                      type="button"
                      role="tab"
                      aria-controls="why"
                      aria-selected={activeTab === 'why'}
                    >
                      Why did we do this?
                    </button>
                  </li>
                  <li className="mr-2" role="presentation">
                    <button
                      className={`inline-block p-4 border-b-2 rounded-t-lg ${activeTab === 'goal' ? 'border-uw-purple bg-uw-gold/50' : 'border-transparent'
                        }`}
                      id="goal-tab"
                      onClick={() => handleTabClick('goal')}
                      type="button"
                      role="tab"
                      aria-controls="goal"
                      aria-selected={activeTab === 'goal'}
                    >
                      Our Goal
                    </button>
                  </li>
                </ul>
              </div>
              <div id="myTabContent">{renderTabContent()}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
