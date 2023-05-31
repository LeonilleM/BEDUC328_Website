import React from 'react';

function Resources() {
  return (
    <div>
      <section className="relative sm:ml-64 flex flex-col justify-center items-center pt-12">
        <div className="container px-2 my-4 mx-auto">
          <div className="lg:w-5/6 mx-auto">
            <div className="mt-4">
              <h1 className="font-lato font-semibold text-4xl text-uw-purple">RESOURCES</h1>
            </div>
            <div className="container xl:flex-row ">
              <div className="flex flex-col sm:flex-row my-10">
                <img
                  className="w-[600px] h-[300px] object-cover rounded-md sm:ml-2 mt-4 sm:mt-0"
                  src="https://mtek3d.com/wp-content/uploads/2018/01/image-placeholder-500x500.jpg"
                  alt="Image"
                />
                <div className="flex flex-col sm:mx-12 font-roboto">
                  <h1 className="text-3xl text-uw-gold">Resource #1</h1>
                  <h1 className="italic">Author</h1>
                  <p>id metus ut, ultrices pharetra libero. Etiam a lacus nec felis posuere lacinia. Ut rhoncus placerat velit.</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row my-10">
                <img
                  className="w-[600px] h-[300px] object-cover rounded-md sm:ml-2 mt-4 sm:mt-0"
                  src="https://mtek3d.com/wp-content/uploads/2018/01/image-placeholder-500x500.jpg"
                  alt="Image"
                />
                <div className="flex flex-col sm:mx-12 font-roboto">
                  <h1 className="text-3xl text-uw-gold">Resource #2</h1>
                  <h1 className="italic">Author</h1>
                  <p>id metus ut, ultrices pharetra libero. Etiam a lacus nec felis posuere lacinia. Ut rhoncus placerat velit.</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row my-10">
                <img
                  className="w-[600px] h-[300px] object-cover rounded-md sm:ml-2 mt-4 sm:mt-0"
                  src="https://mtek3d.com/wp-content/uploads/2018/01/image-placeholder-500x500.jpg"
                  alt="Image"
                />
                <div className="flex flex-col sm:mx-12 font-roboto">
                  <h1 className="text-3xl text-uw-gold">Resource #3</h1>
                  <h1 className="italic">Author</h1>
                  <p>id metus ut, ultrices pharetra libero. Etiam a lacus nec felis posuere lacinia. Ut rhoncus placerat velit.</p>
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
