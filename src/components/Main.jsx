import { popularExaminations, otherExaminations } from "../data"

const Main = () => {
  return (
    <>
      <section className='p-10 bg-white w-[50%] h-full'>
        <h1 className='text-lg font-bold'>Education</h1>

        <div className='h-full my-10 rounded-xl '>
          <img src="/src/assets/edu-waec.svg" alt="" className='object-cover w-full h-full rounded-xl' />
        </div>

        <div className='mt-10 popular-exam'>
          <h2 className='pb-4 text-lg font-bold'>Popular examinations</h2>
            {
                popularExaminations.map(popularExamination => {
                  const {id, acronomy, examBody, img} = popularExamination
                  return (
                      <div key={id} className='flex gap-2 px-2 py-3 mb-3 bg-gray-200 rounded-lg'>
                        <div className='w-[10%] flex justify-center items-center'>
                        <img src={img} alt="" className='w-[80%] h-full' />
                        </div>
                        <div className='w-[90%]'>
                          <h3 className='font-bold'>{acronomy}</h3>
                          <p>{examBody}</p>
                        </div>
                      </div>
                  )
              })
            }

        </div>

        <div className='flex items-center justify-center w-full my-8 h-44'>
          <img src="/src/assets/qatar.jfif" alt="" className='w-full h-full' />
        </div>

        <div className='other-examination'>
          <h2 className='text-lg font-bold'>Other Examinations</h2>
          <div className='flex flex-wrap items-center justify-between gap-2'>
            {
              otherExaminations.map(otherExamination => {
                const {id, acronomy, examBody, img} = otherExamination
                return (
                  <div key={id} className='bg-gray-300 rounded-xl mb-5 px-5 py-4 w-[48%] min-h-[25vh] flex flex-col items-center'>
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


      </section>
    </>
  )
}

export default Main
