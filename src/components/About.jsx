import React from 'react'

const About = () => {
  return (
    <div 
      name='About' 
      className='w-full h-screen bg-gradient-to-b from-gray-900 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
               <p className='text-4xl font-extrabold inline border-b-4 border-gray-600'>About</p> 
            </div>

            <p className='text-xl mt-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi vel explicabo provident delectus tenetur dignissimos laboriosam cumque iure fugiat quae error reprehenderit culpa numquam sapiente accusantium soluta, ullam modi. Cumque!
            </p>

            <br />

            <p className='text-xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum libero earum ducimus eligendi officiis aspernatur dolores, vero perspiciatis cupiditate harum, voluptatem tenetur debitis modi explicabo quae eaque ipsum sapiente fuga?
            </p>
        </div>
    </div>
  );
};

export default About