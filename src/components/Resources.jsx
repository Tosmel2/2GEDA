import { resources, latestNews } from "../data"


const Resources = () => {
  return (
    <>
      <section className='Resources-wrapper px-7 bg-white w-[30%] min-h-full'>

        <div className='pt-10 Resources'>
            <h2 className='pb-5 text-lg font-bold'>Resources</h2>

            <div className='flex gap-2 px-2 py-3 mb-3 bg-gray-200 rounded-lg'>
              <div className='w-[20%] flex justify-center items-center'>
                <img src="/src/assets/nda.svg" alt="" className='w-[80%] h-full' />
              </div>
              <div className='w-[90%] flex items-center'>
                <p>Nigerian Defence Academy entrance examination past questions 2012 to 2022</p>
              </div>
            </div>

                {
                  resources.map(resource => {
                    const {id, about, img} = resource
                    return (
                      <div key={id} className='flex gap-2 px-2 py-3 mb-3 bg-gray-200 rounded-lg'>
                      <div className='w-[20%] flex justify-center items-center'>
                        <img src={img} alt="" className='w-[80%] h-full' />
                      </div>
                      <div className='w-[90%] flex items-center'>
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
                      <div key={id} className='flex gap-2 px-2 py-3 mb-3 bg-gray-200 rounded-lg'>
                      <div className='w-[20%] flex justify-center items-center'>
                        <img src={img} alt="" className='w-[80%] h-full' />
                      </div>
                      <div className='w-[90%] flex items-center'>
                        <p>{about}</p>
                      </div>
                    </div>
                    )
                  })

                }
        </div>

      </section>

    </>
  )
}

export default Resources