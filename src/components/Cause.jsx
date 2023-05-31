import React from 'react'
import Image2 from '../Assets/Photos/img_2.jpg'

function Cause() {
    return (
        <div  id="cause-section">
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
                        </div>
                        <div className="flex flex-col mt-3 mx-2">
                            <div className="sm:px-5 mt-3">
                                <p className="font-roboto text-lg">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae nunc congue, posuere justo sed, mattis lectus.
                                    Donec cursus sapien ut tellus venenatis, eget accumsan massa malesuada. Nunc aliquam eleifend lacus, vel varius risus porta at.
                                    Aliquam erat volutpat. Sed commodo, arcu hendrerit fermentum mattis, mauris nibh faucibus lectus, quis pellentesque magna massa eget mauris.
                                    Quisque tincidunt vulputate maximus. Ut metus nunc, placerat id metus ut, ultrices pharetra libero.
                                    Etiam a lacus nec felis posuere lacinia. Ut rhoncus placerat velit. Aenean scelerisque semper arcu nec ultricies.
                                    Mauris iaculis, nulla vitae vehicula dapibus, velit nibh feugiat nisi, fermentum blandit erat justo euismod urna.
                                    Pellentesque dictum tincidunt tortor in lacinia.
                                </p>
                                <hr className="border-uw-gold mt-3" />
                            </div>
                            <h1 className="font-lato text-uw-gold text-4xl mt-6 mb-2">Lorem Ipsum</h1>
                            <p className="font-roboto mt-2 text-lg sm:px-5">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae nunc congue, posuere justo sed, mattis lectus.
                                Donec cursus sapien ut tellus venenatis, eget accumsan massa malesuada. Nunc aliquam eleifend lacus, vel varius risus porta at.
                                Aliquam erat volutpat. Sed commodo, arcu hendrerit fermentum mattis, mauris nibh faucibus lectus, quis pellentesque magna massa eget mauris.
                                Quisque tincidunt vulputate maximus. Ut metus nunc, placerat id metus ut, ultrices pharetra libero.
                                Etiam a lacus nec felis posuere lacinia. Ut rhoncus placerat velit. Aenean scelerisque semper arcu nec ultricies.
                                Mauris iaculis, nulla vitae vehicula dapibus, velit nibh feugiat nisi, fermentum blandit erat justo euismod urna.
                                Pellentesque dictum tincidunt tortor in lacinia.
                            </p>
                            <div className="flex flex-col 2xl:flex-row items-center justify-center my-5 font-roboto sm:px-5 text-lg mb-4 ">
                                <p className="mt-4">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae nunc congue, posuere justo sed, mattis lectus.
                                    Donec cursus sapien ut tellus venenatis, eget accumsan massa malesuada. Nunc aliquam eleifend lacus, vel varius risus porta at.
                                    Aliquam erat volutpat. Sed commodo, arcu hendrerit fermentum mattis, mauris nibh faucibus lectus, quis pellentesque magna massa eget mauris.
                                    Quisque tincidunt vulputate maximus. Ut metus nunc, placerat id metus ut, ultrices pharetra libero.
                                    Etiam a lacus nec felis posuere lacinia. Ut rhoncus placerat velit. Aenean scelerisque semper arcu nec ultricies.
                                    Mauris iaculis, nulla vitae vehicula dapibus, velit nibh feugiat nisi, fermentum blandit erat justo euismod urna.
                                    Pellentesque dictum tincidunt tortor in lacinia.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae nunc congue, posuere justo sed, mattis lectus.
                                    Donec cursus sapien ut tellus venenatis, eget accumsan massa malesuada. Nunc aliquam eleifend lacus, vel varius risus porta at.
                                    Aliquam erat volutpat. Sed commodo, arcu hendrerit fermentum mattis, mauris nibh faucibus lectus, quis pellentesque magna massa eget mauris.
                                    Quisque tincidunt vulputate maximus. Ut metus nunc, placerat id metus ut, ultrices pharetra libero.
                                    Etiam a lacus nec felis posuere lacinia. 
                                </p>
                                <img
                                    className="w-[450px] h-[450px] object-cover rounded-md sm:ml-2 mt-4"
                                    src="https://mtek3d.com/wp-content/uploads/2018/01/image-placeholder-500x500.jpg"
                                    alt="Placeholder"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Cause