import React from 'react'

const Main = () => {
  return (
    <>
      <section className='p-10 bg-white w-[50%] h-full'>
        <h1 className='font-bold text-lg'>Education</h1>

        <div className='rounded-xl h-full my-10 '>
          <img src="/src/assets/edu-waec.svg" alt="" className='object-cover rounded-xl w-full h-full' />
        </div>

        <div className='popular-exam mt-10'>
          <h2 className='font-bold text-lg pb-4'>Popular examinations</h2>

          <div className='bg-gray-200 rounded-md mb-3 py-1 flex gap-2'>
            <div className='w-[10%] flex justify-center items-center'>
              <img src="/src/assets/jamb.svg" alt="" className='w-[80%] h-full' />
            </div>
            <div className='w-[90%]'>
              <h3 className='font-bold'>JAMB</h3>
              <p>Joint Admission and Matriculation Board</p>
            </div>
          </div>

          <div className='bg-gray-200 rounded-lg mb-3 py-3 px-2 flex gap-2'>
            <div className='w-[10%] flex justify-center items-center'>
            <img src="/src/assets/jamb.svg" alt="" className='w-[80%] h-full' />
            </div>
            <div className='w-[90%]'>
              <h3 className='font-bold'>POST UTME</h3>
              <p>University Entrance Examinations</p>
            </div>
          </div>

          <div className='bg-gray-200 rounded-lg mb-3 py-3 px-2 flex gap-2'>
            <div className='w-[10%] flex justify-center items-center'>
            <img src="/src/assets/waec.svg" alt="" className='w-[80%] h-full' />
            </div>
            <div className='w-[90%]'>
              <h3 className='font-bold'>WAEC</h3>
              <p>West African Examination Council</p>
            </div>
          </div>

          <div className='bg-gray-200 rounded-lg mb-3 py-3 px-2 flex gap-2'>
            <div className='w-[10%] flex justify-center items-center'>
            <img src="/src/assets/neco.svg" alt="" className='w-[80%] h-full' />
            </div>
            <div className='w-[90%]'>
              <h3 className='font-bold'>NECO</h3>
              <p>National Examinational Council</p>
            </div>
          </div>

        </div>

        <div className='w-full h-44 my-8 flex justify-center items-center'>
          <img src="/src/assets/qatar.jfif" alt="" className='w-full h-full' />
        </div>

        <div className='other-examination'>
          <h2 className='font-bold text-lg'>Other Examinations</h2>
          <div className='flex flex-wrap gap-2 justify-between items-center'>

          <div className='bg-gray-300 rounded-xl mb-5 px-5 py-4 w-[48%] min-h-[25vh] flex flex-col items-center'>
            <div className='w-[25%] mb-2 flex justify-center items-center'>
              <img src="/src/assets/nda.svg" alt="" className='w-[80%] h-full' />
            </div>
            <div className='w-full text-center'>
              <h3 className='font-bold'>NDA</h3>
              <p>Nigeria Defence Academy</p>
            </div>
          </div>

          <div className='bg-gray-300 rounded-xl mb-5 px-5 py-4 w-[48%] min-h-[25vh] flex flex-col items-center'>
            <div className='w-[25%] mb-2 flex justify-center items-center'>
              <img src="/src/assets/nabteb.svg" alt="" className='w-[80%] h-full' />
            </div>
            <div className='w-full text-center'>
              <h3 className='font-bold'>NABTEB</h3>
              <p>National Business and Technical Examinations Board</p>
            </div>
          </div>

          <div className='bg-gray-300 rounded-xl mb-5 px-5 py-4 w-[48%] min-h-[25vh] flex flex-col items-center'>
            <div className='w-[25%] mb-2 flex justify-center items-center'>
              <img src="/src/assets/namasa.svg" alt="" className='w-[80%] h-full' />
            </div>
            <div className='w-full text-center'>
              <h3 className='font-bold'>NIMASA</h3>
              <p>Nigerian Maritime Administration and Safety Agency</p>
            </div>
          </div>

          <div className='bg-gray-300 rounded-xl mb-5 px-5 py-4 w-[48%] min-h-[25vh] flex flex-col items-center'>
            <div className='w-[25%] mb-2 flex justify-center items-center'>
              <img src="/src/assets/TRCN.svg" alt="" className='w-[80%] h-full' />
            </div>
            <div className='w-full text-center'>
              <h3 className='font-bold'>TRCN PQE</h3>
              <p>Teachers' Registration Council of Nigeria Professional Qualifying Examination</p>
            </div>
          </div>

          </div>
        </div>


      </section>
    </>
  )
}

export default Main