import React from 'react'
import Image3 from '../Assets/Photos/img_3.jpeg'

function Action() {
  return (
    <div>
      <section className="relative sm:ml-64 flex flex-col justify-center items-center">
        <div className="container px-2 py-2 mx-auto flex flex-col">
          <div className="lg:w-5/6 mx-auto">
            <div className="rounded-lg">
              <h1 className="font-lato font-semibold sm:text-2xl md:text-4xl my-4 text-uw-purple">Action</h1>
              {/* Image for School to Prison Piepline 1200x500*/}
              <img alt="content" className="rounded-md lg:w-[1250px] lg:h-[300px] md:w-auto md:h-auto object-cover" src={Image3} />
              <h1 className="font-lato text-4xl my-3 text-uw-gold">How can we tackle this?</h1>
            </div>
            <div className="flex flex-col mt-5 mx-2">
              <div className="px-5 mt-3">
                <p className="font-roboto text-justify text-uw-gray">The School to Prison Pipeline is a system of policies and practices that pushes
                  students out of school and into the criminal justice system. This system disproportionately affects students of color and students with disabilities.
                  The School to Prison Pipeline is a system of policies and practices that pushes students out of school and into the criminal justice system. This system disproportionately affects students of color and students with disabilities. The School to Prison Pipeline is a system of policies and practices that pushes students out of school and into the criminal justice system.
                  This system disproportionately affects students of color and students with disabilities.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row justify-center mt-3 font-roboto text-lg px-5">
              <img
                  className="w-[450px] h-[450px] object-cover rounded-md md:mr-2 mt-4 sm:mt-0"
                  src="https://mtek3d.com/wp-content/uploads/2018/01/image-placeholder-500x500.jpg"
                  alt="Image"
                />
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
      </section>
    </div>
  )
}

export default Action