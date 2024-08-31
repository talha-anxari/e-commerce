import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'

function Testimonial() {
    const context = useContext(myContext);
    const { mode } = context;
  return (
    <div>
        <section className="text-gray-600 body-font mb-10">
            <div className="container px-5 py-10 mx-auto">
                <h1
                    className="text-center text-3xl font-bold"
                    style={{ color: mode === 'dark' ? 'white' : '#000' }}
                >
                    Testimonials
                </h1>
                <h2
                    className="text-center text-2xl font-semibold mb-10"
                    style={{ color: mode === 'dark' ? 'white' : '#000' }}
                >
                    What our <span className="text-green-600">customers</span> are saying
                </h2>
                <div className="flex flex-wrap -m-4">
                    {/* Testimonial 1 */}
                    <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                        <div className="h-full text-center">
                            <img
                                alt="testimonial"
                                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                src="https://example.com/customer1.jpg" // Replace with a suitable customer image
                            />
                            <p
                                style={{ color: mode === 'dark' ? 'white' : '#555' }}
                                className="leading-relaxed"
                            >
                                "The quality of the rice is amazing! I have never tasted anything
                                like it. Highly recommend to all rice lovers."
                            </p>
                            <span className="inline-block h-1 w-10 rounded bg-green-600 mt-6 mb-4" />
                            <h2
                                style={{ color: mode === 'dark' ? '#ff4162' : '#333' }}
                                className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase"
                            >
                                Rajesh Kumar
                            </h2>
                            <p
                                style={{ color: mode === 'dark' ? 'white' : '#777' }}
                                className="text-gray-500"
                            >
                                Food Blogger
                            </p>
                        </div>
                    </div>

                    {/* Testimonial 2 */}
                    <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                        <div className="h-full text-center">
                            <img
                                alt="testimonial"
                                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                src="https://example.com/customer2.jpg" // Replace with a suitable customer image
                            />
                            <p
                                style={{ color: mode === 'dark' ? 'white' : '#555' }}
                                className="leading-relaxed"
                            >
                                "I love the variety of rice available. Each type has a distinct
                                flavor and texture, perfect for every dish I make!"
                            </p>
                            <span className="inline-block h-1 w-10 rounded bg-green-600 mt-6 mb-4" />
                            <h2
                                style={{ color: mode === 'dark' ? '#ff4162' : '#333' }}
                                className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase"
                            >
                                Meena Sharma
                            </h2>
                            <p
                                style={{ color: mode === 'dark' ? 'white' : '#777' }}
                                className="text-gray-500"
                            >
                                Home Chef
                            </p>
                        </div>
                    </div>

                    {/* Testimonial 3 */}
                    <div className="lg:w-1/3 lg:mb-0 p-4">
                        <div className="h-full text-center">
                            <img
                                alt="testimonial"
                                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                src="https://example.com/customer3.jpg" // Replace with a suitable customer image
                            />
                            <p
                                style={{ color: mode === 'dark' ? 'white' : '#555' }}
                                className="leading-relaxed"
                            >
                                "The aromatic basmati rice has become a staple in our home. It's
                                fragrant, fluffy, and always cooks perfectly."
                            </p>
                            <span className="inline-block h-1 w-10 rounded bg-green-600 mt-6 mb-4" />
                            <h2
                                style={{ color: mode === 'dark' ? '#ff4162' : '#333' }}
                                className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase"
                            >
                                Anil Verma
                            </h2>
                            <p
                                style={{ color: mode === 'dark' ? 'white' : '#777' }}
                                className="text-gray-500"
                            >
                                Restaurant Owner
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
  )
}

export default Testimonial
