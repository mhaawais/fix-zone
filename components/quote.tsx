"use client";

import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const Quote = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    zip: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/sendQuote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log("Server response:", data);

      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: "", phone: "", email: "", zip: "", message: "" });
      } else {
        alert("Failed to send email: " + data.error);
      }
    } catch (error) {
      console.error("❌ Submission failed", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-[#7ed956] flex items-center justify-center px-4 py-12">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-10 w-full max-w-6xl">

        {/* Google Rating Badge */}
        <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
          <div className="bg-white rounded-2xl shadow-xl flex items-center gap-5 px-6 py-4 max-w-sm hover:scale-105 transition-transform duration-300">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUMpg8WEe4HGO_hLANPpFgk4J6pvxVr5zh40lJt8rzHaIHYCzyS2qRSxlK9cW6qupizZU&usqp=CAU"
              alt="Google Logo"
              className="w-16 h-24 object-contain"
            />
            <div className="text-black">
              <p className="text-lg font-semibold">Google Rating</p>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xl font-bold">4.9</span>
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} size={18} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="bg-white p-10 rounded-xl w-full lg:w-2/3 shadow-xl">
          {submitted && (
            <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6 rounded">
              ✅ Your quote request has been sent successfully
            </div>
          )}
          <h2 className="text-3xl font-bold text-center text-[#0a114f] mb-8">
            Get Free Quote
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 bg-blue-50 rounded-md focus:outline-none focus:border-red-700 border-2 border-transparent"
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Your phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 bg-blue-50 rounded-md focus:outline-none focus:border-red-700 border-2 border-transparent"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 bg-blue-50 rounded-md focus:outline-none focus:border-red-700 border-2 border-transparent"
              required
            />
            <input
              type="text"
              name="zip"
              placeholder="Your zip code"
              value={formData.zip}
              onChange={handleChange}
              className="w-full p-3 bg-blue-50 rounded-md focus:outline-none focus:border-red-700 border-2 border-transparent"
            />
            <textarea
              name="message"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 bg-blue-50 rounded-md focus:outline-none focus:border-red-700 border-2 border-transparent"
              rows={3}
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#7ed956] text-white p-3 rounded-md hover:bg-green-600 transition"
            >
              Get A Quote
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Quote;












// "use client";

// import React, { useState } from "react";
// import { FaStar } from "react-icons/fa";
// import Image from "next/image";

// const Quote = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     zip: "",
//     message: "",
//   });

//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     try {
//       const res = await fetch("/api/sendQuote", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await res.json();
//       console.log("Server response:", data);

//       if (res.ok) {
//         setSubmitted(true);
//         setFormData({ name: "", phone: "", email: "", zip: "", message: "" });
//       } else {
//         alert("Failed to send email: " + data.error);
//       }
//     } catch (error) {
//       console.error("❌ Submission failed", error);
//       alert("An error occurred. Please try again.");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#7ed956] flex items-center justify-center px-4 py-12">
//       <div className="flex flex-col-reverse lg:flex-row items-center lg:items-center gap-10 w-full max-w-6xl">

//         {/* Google Rating Badge (Code-based with external logo) */}
//           {/* Enhanced Google Rating Badge */}
// <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
//   <div className="bg-white rounded-xl shadow-lg flex items-center gap-4 px-6 py-3 w-fit">
//     <Image
//       src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUMpg8WEe4HGO_hLANPpFgk4J6pvxVr5zh40lJt8rzHaIHYCzyS2qRSxlK9cW6qupizZU&usqp=CAU"
//       alt="Google Logo"
//        width={600}
//        height={400}
//        className="object-cover w-full h-auto"
//     />
//     <div className="flex flex-col justify-center text-black leading-tight">
//       <span className="text-base font-semibold lg:text-lg">Google rating</span>
//       <div className="flex items-center gap-2 mt-1">
//         <span className="text-lg font-bold">4.9</span>
//         <div className="flex text-yellow-500">
//           {[...Array(5)].map((_, i) => (
//             <FaStar key={i} size={18} />
//           ))}
//         </div>
//       </div>
//     </div>
//   </div>
// </div>



//         {/* Google Rating Badge (React Icons) */}
//         {/* <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
//           <div className="bg-white p-4 px-6 rounded-lg shadow-md flex flex-col items-start gap-2">
//             <div className="flex items-center gap-2">
//               <SiGoogle size={24} className="text-[#4285F4]" />
//               <span className="text-black font-semibold text-sm">
//                 Google rating
//               </span>
//             </div>
//             <div className="flex items-center gap-2">
//               <span className="text-sm font-bold text-black">4.9</span>
//               <div className="flex text-yellow-500">
//                 {[...Array(5)].map((_, i) => (
//                   <FaStar key={i} size={16} />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div> */}

//         {/* Form Section */}
//         <div className="bg-white p-10 rounded-xl w-full lg:w-2/3 shadow-xl">
//           {submitted && (
//             <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6 rounded">
//               ✅ Your quote request has been sent successfully
//             </div>
//           )}
//           <h2 className="text-3xl font-bold text-center text-[#0a114f] mb-8">
//             Get Free Quote
//           </h2>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <input
//               type="text"
//               name="name"
//               placeholder="Your name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full p-3 bg-blue-50 rounded-md focus:outline-none"
//               required
//             />
//             <input
//               type="text"
//               name="phone"
//               placeholder="Your phone"
//               value={formData.phone}
//               onChange={handleChange}
//               className="w-full p-3 bg-blue-50 rounded-md focus:outline-none"
//               required
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Your email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full p-3 bg-blue-50 rounded-md focus:outline-none"
//               required
//             />
//             <input
//               type="text"
//               name="zip"
//               placeholder="Your zip code"
//               value={formData.zip}
//               onChange={handleChange}
//               className="w-full p-3 bg-blue-50 rounded-md focus:outline-none"
//             />
//             <textarea
//               name="message"
//               placeholder="Your message"
//               value={formData.message}
//               onChange={handleChange}
//               className="w-full p-3 bg-blue-50 rounded-md focus:outline-none"
//               rows={3}
//             ></textarea>
//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition"
//             >
//               Get A Quote
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Quote;
