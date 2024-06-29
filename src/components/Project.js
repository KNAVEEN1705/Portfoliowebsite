import React, { useState } from 'react';
import proone from '../assests/proone.png';
import protwo from '../assests/protwo.png'
import prothree from '../assests/prothree.png';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export default function Project() {
  const slides = [proone, protwo, prothree];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
  };

  return (
    <section id='project' className='w-full  font-Home-font'>
      <div className='flex flex-col pt-16'>
        <h1 className='text-4xl mb-5 text-center'>
          <span className='border-b-4 border-[#318445]'>PROJECT</span>
        </h1>
      </div>
      <div className='flex w-full px-6 py-5 flex-wrap md:flex-nowrap'>
        <div className='w-full md:w-1/2 '>
          <div className='flex flex-col items-center'>
            <h1 className='text-4xl mb-5 px-6 font-bold border-b-4 border-[#318445] w-46 text-center'>
              Description
            </h1>
          </div>
          <p className='py-3 px-6 text-justify' >Parkinson's disease is a complex condition with multiple risk factors, making early diagnosis challenging. Our project aims to improve the accuracy of predicting Parkinson's disease using machine learning techniques. By identifying effective models and selecting relevant features, we achieved an evaluation accuracy of 98% on 195 samples. Early diagnosis is crucial for better patient outcomes, and our research aims to enhance predictive capabilities. Future work will focus on hybridization to further increase accuracy and decrease error rates.</p>
        </div>
        <div className='w-full md:w-1/2 flex justify-center'>
          <div className='max-w-[600px] h-[300px] w-full m-auto py-8 px-8 relative'>
            <img className='w-full h-full rounded-2xl bg-center duration-500' src={slides[currentIndex]} alt={`Image ${currentIndex + 1}`} />
            <div className='absolute top-1/2 left-5 transform -translate-y-1/2 text-2xl rounded-full p-2 bg-black text-white cursor-pointer'>
              <FaArrowLeft onClick={handlePrev} />
            </div>
            <div className='absolute top-1/2 right-5 transform -translate-y-1/2 text-2xl rounded-full p-2 bg-black text-white cursor-pointer'>
              <FaArrowRight onClick={handleNext} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}