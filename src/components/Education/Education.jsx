import { popularExaminations, otherExaminations, resources, latestNews } from "../../data"
import { useState } from 'react';
import PostAdModal from "./PostAdModal";
// import { Carousel } from 'flowbite-react';

const Education = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  
  return (
    <>
    {isModalOpen && <PostAdModal closeModal={closeModal} />}
      <section className={`gap-2 md:flex md:justify-between ${isModalOpen ? 'modal-open' : ''}`}>
        
      <div className='p-5 md:p-10 bg-white md:w-[65%] h-full'>
        <h1 className='text-lg font-bold'>Education</h1>

        <div className='h-full my-5 md:my-8 rounded-xl '>
            <img src="/src/assets/advertise.svg" onClick={openModal} alt="" className='object-cover w-full h-full cursor-pointer rounded-xl' />
          
        {/* <Carousel slideInterval={5000}>
          <img src="/src/assets/edu-waec.svg" alt="" className='object-cover w-full h-full rounded-xl' />

          <a href="/">
            <img src="/src/assets/advertise.svg" alt="" className='object-cover w-full h-full rounded-xl' />
          </a>
      </Carousel> */}
          {/* <img src="/src/assets/edu-waec.svg" alt="" className='object-cover w-full h-full rounded-xl' /> */}
        </div>
        <marquee className="text-purple-900" direction="left">Click on post ads to advertise your school and exams!</marquee>

        <div className='mt-5 md:mt-10 popular-exam'>
          <h2 className='pb-4 text-lg font-bold'>Popular examinations</h2>
            {
                popularExaminations.map(popularExamination => {
                  const {id, acronomy, examBody, img} = popularExamination
                  return (
                      <div key={id} className='gap-1 px-2 py-3 mb-3 leading-7 text-center bg-gray-200 rounded-lg md:flex'>
                        <div className='md:w-[20%] flex justify-center items-center'>
                        <img src={img} alt="" className='md:w-[80%] h-full' />
                        </div>
                        <div className='md:w-[80%]'>
                          <h3 className='font-bold'>{acronomy}</h3>
                          <p>{examBody}</p>
                        </div>
                      </div>
                  )
              })
            }

        </div>

        <div className='flex items-center justify-center w-full my-8 h-44'>
          <img src="./src/assets/qatar.jfif" alt="" className='w-full h-full' />
        </div>

        <div className='other-examination'>
          <h2 className='text-lg font-bold'>Other Examinations</h2>
          <div className='flex flex-wrap items-center justify-between gap-2'>
            {
              otherExaminations.map(otherExamination => {
                const {id, acronomy, examBody, img} = otherExamination
                return (
                  <div key={id} className='bg-gray-300 rounded-lg mb-2 md:mb-5 md:px-5 px-2 md:min-h-[20vh] justify-center py-2 md:w-[48%] w-full flex flex-col items-center'>
                  <div className='w-[25%] mb-2 flex justify-center items-center'>
                    <img src={img} alt="" className='w-[80%] h-full' />
                  </div>
                  <div className='w-full text-center'>
                    <h3 className='font-bold'>{acronomy}</h3>
                    <p>{examBody}</p>
                  </div>
                </div>
                )
              })

            }

          </div>
        </div>


      </div>

      <div className='Resources-wrapper md:px-4 lg:px-6 px-2 bg-white md:w-[35%] min-h-full'>

        <div className='pt-10 Resources'>
            <h2 className='pb-5 text-lg font-bold'>Resources</h2>

                {
                  resources.map(resource => {
                    const {id, about, img} = resource
                    return (
                      <div key={id}  className='flex flex-col items-center justify-center gap-2 px-2 py-3 mb-3 bg-gray-200 rounded-lg lg:justify-between lg:flex-row'>
                      <div className='md:w-[20%] w-full flex justify-center items-center'>
                        <img src={img} alt="" className='md:w-[80%] h-full' />
                      </div>
                      <div className='w-[80%] flex items-center'>
                        <p>{about}</p>
                      </div>
                    </div>
                    )
                  })

                }

        </div>

        <div className='pt-10 Latest News'>
            <h2 className='pb-5 text-lg font-bold'>Latest news</h2>
                {
                  latestNews.map(latestNew => {
                    const {id, about, img} = latestNew
                    return (
                      <div key={id} className='flex flex-col items-center justify-center gap-2 px-2 py-3 mb-3 bg-gray-200 rounded-lg lg:justify-between lg:flex-row'>
                      <div className='md:w-[20%] w-full flex justify-center items-center'>
                        <img src={img} alt="" className='md:w-[80%] h-full' />
                      </div>
                      <div className='w-[80%] flex items-center'>
                        <p>{about}</p>
                      </div>
                    </div>
                    )
                  })

                }
        </div>

      </div>
      
      </section>
      

    </>
  )
}

export default Education