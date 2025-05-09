"use client";

import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';

const reviews = [
  {
    name: 'Emily Ross',
    date: 'November 2024',
    review: 'Nichole made everything so easy. I was in and out with my phone fixed in under 30 minutes. Highly recommended!',
  },
  {
    name: 'Carlos Vega',
    date: 'December 2024',
    review: 'Fast, friendly, and reliable. I was really impressed with the service quality. Five stars from me.',
  },
  // existing reviews plus some additions
  {
    name: 'Vince Panell',
    date: 'December 2024',
    review: 'Nichole is a pleasure to work with. Very helpful and repaired my old Galxis S10 in about 20 minutes. Keep her happy.',
  },
  {
    name: 'Valores Desormeaux',
    date: 'December 2024',
    review: 'Nichole is awesome. She was very professional and was able to fix a phone for a friend of mine. Phone was smashed by a DV situation and she was able to fix it and also helped get screen protector and case and everything.',
  },
  {
    name: 'Tasha Allen',
    date: 'December 2024',
    review: 'Nicole was extremely helpful and professional. I had an extremely cracked case which she fixed fast and provided so much help to prevent it from happening again. Highly recommend coming here.',
  },
  {
    name: 'Christian Munoz',
    date: 'December 2024',
    review: 'Awesome service! Nichole was amazing! Definitely coming back for all my phone repairs. Dropped in for a repair I thought was unfixable, turns out Nichole was able to fix it and saved the day!',
  },
  {
    name: 'Javier Hernandez',
    date: 'December 2024',
    review: 'Nicole knows how to serve you, she is very professional and does the job quite quickly, very nice place, I am grateful.',
  },
  {
    name: 'Babar Muhammad',
    date: 'December 2024',
    review: 'Service was excellent very time efficient and Great customer service.',
  },
  {
    name: 'Kevin Zapata',
    date: 'December 2024',
    review: 'Nicole did a amazing job fixing my screen very fast!',
  },
  {
    name: 'Jakiyra Taylor',
    date: 'December 2024',
    review: 'Very helpful and quick.',
  },
  {
    name: 'grecia lemoine',
    date: 'January 2025',
    review: 'Second time visiting. Great customer service. My go-to spot to fix any issues with my phone.',
  },
  {
    name: 'Anil Mangru',
    date: 'January 2025',
    review: 'Walked on a spur of the moment. The lady upfront assisted me quickly and was able to offer a battery and screen protector on the spot with parts on hand. Was complete in 20 minutes. Quick service and will see how long the new battery lasts. Thanks for the excellent customer service.',
  },
  {
    name: 'Kaesha Wooten',
    date: 'January 2025',
    review: 'Friendly and efficient!',
  },
  {
    name: 'Abby Kieffer',
    date: 'December 2024',
    review: 'Everyone here is so nice and accommodating! 10/10 recommend.',
  },
  {
    name: 'John Doe',
    date: 'November 2024',
    review: 'Quick service and great attitude. Would definitely return again!',
  },
  {
    name: 'Sarah Miller',
    date: 'October 2024',
    review: 'Very knowledgeable staff. Helped me understand the issue and fixed it fast.',
  },
];

const Testimonial = () => {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prevIndex) => (prevIndex + 4) % reviews.length);
  };

  const prev = () => {
    setIndex((prevIndex) =>
      prevIndex - 4 < 0 ? reviews.length - (reviews.length % 4 || 4) : prevIndex - 4
    );
  };

  const visibleReviews = reviews.slice(index, index + 4);

  return (
    <div className="bg-[#d6e9da] py-10 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="text-center mb-12">
          <h2 className="text-black text-4xl lg:text-5xl font-bold mb-8">CUSTOMER TESTIMONIALS</h2>
          <p className="text-black text-lg lg:text-xl">
            See what our happy customers are saying about us!
          </p>
        </div>

        <div className="flex justify-between items-center mb-6 px-6">
          <button onClick={prev}>
            <MdNavigateBefore size={32} className="text-black" />
          </button>
          <button onClick={next}>
            <MdNavigateNext size={32} className="text-black" />
          </button>
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-6">
          {visibleReviews.map((review, i) => (
            <div key={i} className="bg-white hover:bg-green-200 transition duration-300 rounded-lg p-6 shadow-md text-left">
              <div className="flex flex-col gap-1 mb-2">
                <span className="font-bold text-black capitalize text-lg">{review.name}</span>
                <span className="text-gray-500 text-sm">{review.date}</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, idx) => (
                  <FaStar key={idx} className="text-yellow-400 text-sm mr-1" />
                ))}
                <FcGoogle size={20} className="ml-2" />
              </div>
              <p className="text-gray-700 text-sm leading-snug">{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
