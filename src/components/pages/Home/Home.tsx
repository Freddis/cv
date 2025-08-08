import {FC} from 'react';
import {Heading1} from '../../elements/Heading1';
import {FaClock, FaFlag, FaHeartCircleCheck, FaStar} from 'react-icons/fa6';
import {GiFlyingFlag} from 'react-icons/gi';
import {IoStorefrontSharp} from 'react-icons/io5';
import {GoPencil} from 'react-icons/go';
import {LiaLaptopSolid} from 'react-icons/lia';


export const Home: FC = () => {
  return (
<div className="flex flex-col w-full justify-start items-start bg-main text-on-main px-20 py-20">
  <div className="grid grid-cols-12 items-start justify-center gap-10 mt-15 mb-20">
    <div className='col-span-5 h-full flex flex-col justify-center relative'>
      <div className='relative'>
        <div className='rounded-full relative z-1 overflow-hidden border-[18px] border-surface border-solid' 
        style={{boxShadow: '0px 0px 25px 0px rgba(0,0,0,.8)'}}>
          <img className='filter-[grayscale(0.3)] bg-size-[100%] scale-120 relative top-8' src='/images/photo-real.jpg'/>
        </div>
        <div 
          className='absolute left-[-7%] bg-size-[18px_18px] w-[45%] h-3/6 top-[-4%] z-0 opacity-5'
          style={{backgroundImage: '-webkit-repeating-radial-gradient(center center, #fff, #fff 3px, transparent 0px, transparent 100%)'}}
          >
        </div>
      </div>
    </div>
    <div className='col-span-7'>
      <h2 className='text-on-main-3 text-[16px]'>Full-Stack Web Developer</h2>
      <Heading1 className='text-on-main text-[48px] font-[600] mb-2'>Alex Sarychev</Heading1>
      <p className='text-on-main-2 text-[15px]/7 mb-5'>
   With over 14 years of experience in web and mobile development, I have consistently worked on complex, high-impact projects throughout my career. Passionate about technology, I stay up-to-date with industry-leading solutions and best practices in modern software development.
      </p>
            <p className='text-on-main-2 text-[15px]/7 mb-5'>
I have strong expertise in multiple programming languages, including PHP, JavaScript, Typescript, Java, C#, and Swift, and am proficient in developing production-grade applications across these technologies. My technical knowledge, problem-solving skills, and commitment to high-quality code make me a reliable choice for challenging development tasks.
      </p>
      <div className='flex gap-2'>
        <button className='border-accent border-solid border-2 rounded-full px-6 py-2'>
          Download CV
        </button>
        <button className='border-white border-solid border-2 rounded-full px-6 py-2'>
          Contact
        </button>
      </div>
    </div>
  </div>

  <div className='mb-20'>  
    <div className='z-1 relative overflow-visible mb-10'>
      <div className='absolute top-[-2px] left-[-7px] z-0 w-5 h-5 bg-radial from-accent from-20%  to-transparent to-20% bg-size-[7px_7px] opacity-50'>
      </div>
      <h3 className='text-xl font-semibold'>What <span className='text-accent'>I Do</span></h3>
    </div>
    <div className='grid grid-cols-2 gap-5'>
      <div>
        <IoStorefrontSharp className='text-5xl text-accent mb-2' />
        <h4 className='text-lg font-semibold mb-2'>Ecommerce</h4>
        <p className='text-on-main-2'>
          Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales.sit amet ultricies ex lectus scelerisque nibh. Ut non sodales.
        </p>
      </div>
       <div>
        <GoPencil className='text-5xl text-accent mb-2' />
        <h4 className='text-lg font-semibold mb-2'>Copywriting</h4>
        <p className='text-on-main-2'>
          Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales.
        </p>
      </div>
       <div>
        <LiaLaptopSolid  className='text-5xl text-accent mb-2' />
        <h4 className='text-lg font-semibold mb-2'>Web Design</h4>
        <p className='text-on-main-2'>
          Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales.
        </p>
      </div>
       <div>
        <GiFlyingFlag className='text-5xl text-accent mb-2' />
        <h4 className='text-lg font-semibold mb-2'>Management</h4>
        <p className='text-on-main-2'>
          Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales.
        </p>
      </div>
    </div>
  </div>
  
  {/* <div className='w-full'>
    <div className='z-1 relative overflow-visible mb-10'>
      <div className='absolute top-[-2px] left-[-7px] z-0 w-5 h-5 bg-radial from-accent from-20%  to-transparent to-20% bg-size-[7px_7px] opacity-50'>
      </div>
      <h3 className='text-xl font-semibold'>Fun <span className='text-accent'>Facts</span></h3>
    </div>
    <div className='grid grid-cols-3 gap-5'> 
      <div className='bg-surface-2 p-10 max-full flex  flex-col items-center border-around-surface-2 border-solid border-2 rounded-xl'>
        <FaHeartCircleCheck className='text-4xl text-accent' />
        <h3 className='font-semibold text-base mt-5 mb-5'>Happy Clients</h3>
        <h4 className='text-on-main-3 text-4xl'>532</h4>
      </div>
      <div className='bg-surface-2 p-10 max-full flex  flex-col items-center border-around-surface-2 border-solid border-2 rounded-xl'>
        <FaClock className='text-4xl text-accent' />
        <h3 className='font-semibold text-base mt-5 mb-5'>Working Hours</h3>
        <h4 className='text-on-main-3 text-4xl'>10,234</h4>
      </div>
      <div className='bg-surface-2 p-10 max-full flex  flex-col items-center border-around-surface-2 border-solid border-2 rounded-xl'>
        <FaStar className='text-4xl text-accent' />
        <h3 className='font-semibold text-base mt-5 mb-5'>Awards Won</h3>
        <h4 className='text-on-main-3 text-4xl'>5</h4>
      </div>
    </div>
  </div> */}

</div>
  );
};
