import React, { useState } from 'react';

function About() {
  const [activeTab, setActiveTab] = useState('who_are_we');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
            <div className="p-4 rounded-lg flex flex-row" id="contacts" role="tabpanel" aria-labelledby="contacts-tab">
             <h1 className="text-lg te">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Morbi vitae nunc congue, posuere justo sed, mattis lectus. Donec cursus sapien ut tellus venenatis, eget accumsan massa malesuada. Nunc aliquam eleifend lacus, vel varius risus porta at. Aliquam erat volutpat. Sed commodo, arcu hendrerit fermentum mattis, mauris nibh faucibus lectus, quis pellentesque magna massa eget mauris. Quisque tincidunt vulputate maximus. Ut metus nunc, placerat id metus ut, ultrices pharetra libero. 
            Etiam a lacus nec felis posuere lacinia. Ut rhoncus placerat velit. Aenean scelerisque semper arcu nec ultricies. Mauris iaculis, nulla vitae vehicula dapibus, velit nibh feugiat nisi, 
            fermentum blandit erat justo euismod urna. Pellentesque dictum tincidunt tortor in lacinia.</h1>
          </div>
        );
      case 'goal':
        return (
            <div className="p-4 rounded-lg flex flex-row" id="contacts" role="tabpanel" aria-labelledby="contacts-tab">
             <h1 className="text-lg te">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Morbi vitae nunc congue, posuere justo sed, mattis lectus. Donec cursus sapien ut tellus venenatis, eget accumsan massa malesuada. Nunc aliquam eleifend lacus, vel varius risus porta at. Aliquam erat volutpat. Sed commodo, arcu hendrerit fermentum mattis, mauris nibh faucibus lectus, quis pellentesque magna massa eget mauris. Quisque tincidunt vulputate maximus. Ut metus nunc, placerat id metus ut, ultrices pharetra libero. 
            Etiam a lacus nec felis posuere lacinia. Ut rhoncus placerat velit. Aenean scelerisque semper arcu nec ultricies. Mauris iaculis, nulla vitae vehicula dapibus, velit nibh feugiat nisi, 
            fermentum blandit erat justo euismod urna. Pellentesque dictum tincidunt tortor in lacinia.</h1>
          </div>
        );
      default:
        return (
            <div className="p-4 rounded-lg" id="contacts" role="tabpanel" aria-labelledby="contacts-tab">
            <h1 className="font-lato text-2xl font-semibold">A group of diverse students, with inspirations within leadership</h1>
            <div className="flex flex-row py-2">
            <h1 className="text-lg te">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Morbi vitae nunc congue, posuere justo sed, mattis lectus. Donec cursus sapien ut tellus venenatis, eget accumsan massa malesuada. Nunc aliquam eleifend lacus, vel varius risus porta at. Aliquam erat volutpat. Sed commodo, arcu hendrerit fermentum mattis, mauris nibh faucibus lectus, quis pellentesque magna massa eget mauris. Quisque tincidunt vulputate maximus. Ut metus nunc, placerat id metus ut, ultrices pharetra libero. 
            Etiam a lacus nec felis posuere lacinia. Ut rhoncus placerat velit. Aenean scelerisque semper arcu nec ultricies. Mauris iaculis, nulla vitae vehicula dapibus, velit nibh feugiat nisi, 
            fermentum blandit erat justo euismod urna. Pellentesque dictum tincidunt tortor in lacinia.</h1>
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
                      className={`inline-block p-4 border-b-2 rounded-t-md ${
                        activeTab === 'who_are_we' ? 'border-uw-purple bg-uw-gold/50' : 'border-transparent'
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
                      className={`inline-block p-4 border-b-2 rounded-t-lg ${
                        activeTab === 'dashboard' ? 'border-uw-purple bg-uw-gold/50' : 'border-transparent'
                      }`}
                      id="dashboard-tab"
                      onClick={() => handleTabClick('dashboard')}
                      type="button"
                      role="tab"
                      aria-controls="dashboard"
                      aria-selected={activeTab === 'dashboard'}
                    >
                      Why did we do this?
                    </button>
                  </li>
                  <li className="mr-2" role="presentation">
                    <button
                      className={`inline-block p-4 border-b-2 rounded-t-lg ${
                        activeTab === 'goal' ? 'border-uw-purple bg-uw-gold/50' : 'border-transparent'
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
