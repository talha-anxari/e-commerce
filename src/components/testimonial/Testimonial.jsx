// import React, { useContext } from 'react'
// import myContext from '../../context/data/myContext'

// function Testimonial() {
//     const context = useContext(myContext);
//     const { mode } = context;
//   return (
//     <div>
//         <section className="text-gray-600 body-font mb-10">
//             <div className="container px-5 py-10 mx-auto">
//                 <h1
//                     className="text-center text-3xl font-bold"
//                     style={{ color: mode === 'dark' ? 'white' : '#000' }}
//                 >
//                     Location
//                 </h1>
//                 <h2
//                     className="text-center text-2xl font-semibold mb-10"
//                     style={{ color: mode === 'dark' ? 'white' : '#000' }}
//                 >
//                     What our <span className="text-green-600">customers</span> are saying
//                 </h2>
//                 <div className="flex flex-wrap -m-4">
//                     {/* Testimonial 1 */}
//                     <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
//                         <div className="h-full text-center">
//                             <img
//                                 alt="testimonial"
//                                 className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
//                                 src="https://example.com/customer1.jpg" // Replace with a suitable customer image
//                             />
//                             <p
//                                 style={{ color: mode === 'dark' ? 'white' : '#555' }}
//                                 className="leading-relaxed"
//                             >
//                                 "The quality of the rice is amazing! I have never tasted anything
//                                 like it. Highly recommend to all rice lovers."
//                             </p>
//                             <span className="inline-block h-1 w-10 rounded bg-green-600 mt-6 mb-4" />
//                             <h2
//                                 style={{ color: mode === 'dark' ? '#ff4162' : '#333' }}
//                                 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase"
//                             >
//                                 Rajesh Kumar
//                             </h2>
//                             <p
//                                 style={{ color: mode === 'dark' ? 'white' : '#777' }}
//                                 className="text-gray-500"
//                             >
//                                 Food Blogger
//                             </p>
//                         </div>
//                     </div>

//                     {/* Testimonial 2 */}
//                     <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
//                         <div className="h-full text-center">
//                             <img
//                                 alt="testimonial"
//                                 className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
//                                 src="https://example.com/customer2.jpg" // Replace with a suitable customer image
//                             />
//                             <p
//                                 style={{ color: mode === 'dark' ? 'white' : '#555' }}
//                                 className="leading-relaxed"
//                             >
//                                 "I love the variety of rice available. Each type has a distinct
//                                 flavor and texture, perfect for every dish I make!"
//                             </p>
//                             <span className="inline-block h-1 w-10 rounded bg-green-600 mt-6 mb-4" />
//                             <h2
//                                 style={{ color: mode === 'dark' ? '#ff4162' : '#333' }}
//                                 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase"
//                             >
//                                 Meena Sharma
//                             </h2>
//                             <p
//                                 style={{ color: mode === 'dark' ? 'white' : '#777' }}
//                                 className="text-gray-500"
//                             >
//                                 Home Chef
//                             </p>
//                         </div>
//                     </div>

//                     {/* Testimonial 3 */}
//                     <div className="lg:w-1/3 lg:mb-0 p-4">
//                         <div className="h-full text-center">
//                             <img
//                                 alt="testimonial"
//                                 className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
//                                 src="https://example.com/customer3.jpg" // Replace with a suitable customer image
//                             />
//                             <p
//                                 style={{ color: mode === 'dark' ? 'white' : '#555' }}
//                                 className="leading-relaxed"
//                             >
//                                 "The aromatic basmati rice has become a staple in our home. It's
//                                 fragrant, fluffy, and always cooks perfectly."
//                             </p>
//                             <span className="inline-block h-1 w-10 rounded bg-green-600 mt-6 mb-4" />
//                             <h2
//                                 style={{ color: mode === 'dark' ? '#ff4162' : '#333' }}
//                                 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase"
//                             >
//                                 Anil Verma
//                             </h2>
//                             <p
//                                 style={{ color: mode === 'dark' ? 'white' : '#777' }}
//                                 className="text-gray-500"
//                             >
//                                 Restaurant Owner
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//         </div>
//   )
// }

// export default Testimonial

import React, { useContext } from 'react';
import myContext from '../../context/data/myContext';

function Location() {
  const context = useContext(myContext);
  const { mode } = context;

  return (
    // <div>
    //   <section className="text-gray-600 body-font mb-10">
    //     <div className="container px-5 py-10 mx-auto">
    //       <h1
    //         className="text-center text-3xl font-bold"
    //         style={{ color: mode === 'dark' ? 'white' : '#000' }}
    //       >
    //         Our Location
    //       </h1>
    //       <h2
    //         className="text-center text-2xl font-semibold mb-10"
    //         style={{ color: mode === 'dark' ? 'white' : '#000' }}
    //       >
    //         Visit Us At <span className="text-green-600">Disco Bakers</span>
    //       </h2>
    //       <div className="flex justify-center">
    //         <iframe
    //           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24340.79495176611!2d67.07817605629046!3d24.922501731280782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb339495dfdd887%3A0x8886124e7ba579c7!2sDisco%20bakers%20zail!5e0!3m2!1sen!2s!4v1725377187768!5m2!1sen!2s"
    //           max-width={1200}
    //           height={500}
    //           style={{ border: 0 }}
    //           allowFullScreen=""
    //           loading="lazy"
    //           referrerPolicy="no-referrer-when-downgrade"
    //         />
    //       </div>
    //     </div>
    //   </section>
    // </div>
    <div>
      <section className="text-gray-600 body-font mb-10">
        <div className="container px-5 py-10 mx-auto">
          <h1
            className="text-center text-3xl font-bold"
            style={{ color: mode === 'dark' ? 'white' : '#000' }}
          >
            Our Location
          </h1>
          <h2
            className="text-center text-2xl font-semibold mb-10"
            style={{ color: mode === 'dark' ? 'white' : '#000' }}
          >
            Visit Us At <span className="text-green-600">Chawal Wala POS</span>
          </h2>
          <div className="flex justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.474825556861!2d67.05337528053896!3d24.915889370892017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f0e0068e189%3A0xfd11fe0887cb0c98!2sHussainabad%20Gulberg%20Town%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1725378227491!5m2!1sen!2s"
              width="100%"
              height={500}
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Location;
