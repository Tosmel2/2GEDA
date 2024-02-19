import { Link } from 'react-router-dom';
import { businessDirectories } from "../../data"

const BusinessDirectory = () => {
  const advertStyle = {
    backgroundImage: 'url("/src/assets/ads.svg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const advertStyle2 = {
    backgroundImage: 'url("/src/assets/ads.svg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <>
      <section className="gap-2 md:flex md:justify-between">
        <div className="md:w-[65%] bg-white shadow-md px-2 md:px-4">
          <h1 className="text-[1rem] md:text-[1.2rem] font-semibold p-4">Business directory</h1>
        {
          businessDirectories.map(businessDirectory => {
            const {id, title, address, mail, about, call, view, claimBusiness, visitPage, img} = businessDirectory
            return (
              <div key={id} className="p-4 mb-4 bg-orange-400 border-2 border-purple-800 rounded-lg">
                <div className="flex gap-4 mb-3">
                    <img src={img} alt="" />
                    <span>
                      <h3 className="font-semibold">{title}</h3>
                      <p>{address}</p>
                    </span>
                </div>
                <p>{about}</p>

                <div className="flex justify-between gap-2 my-4">
                  <button className="w-[30%] text-center py-2 text-purple-500 bg-gray-200 border-none rounded-lg outline-none">
                    <a href={mail}>Mail</a>
                  </button>
                  <button className="w-[30%] text-center py-2 text-purple-500 bg-gray-200 border-none rounded-lg outline-none">
                    <a href={call}>Call</a>
                  </button>
                  <button className="w-[30%] text-center py-2 text-purple-500 bg-gray-200 border-none rounded-lg outline-none">
                    <a href={view}>View</a>
                  </button>
                </div>

                <div className="flex justify-between gap-2 py-2">
                  {/* <button className="w-[48%] text-center py-2 text-white bg-black border-none rounded-lg outline-none">
                    <a href={claimBusiness}>Claim business</a>
                  </button> */}
                  <Link to={claimBusiness} className="w-[48%] text-center py-2 text-white bg-black border-none rounded-lg outline-none">
                    Claim business
                  </Link>
                  <button className="w-[48%] text-center py-2 text-white bg-purple-600 border-none rounded-lg outline-none">
                    <a href={visitPage}>Visit page</a>
                  </button>
                </div>

              </div>
            )
          })

            }
        </div>

          {/* Adverts; this can be made component later for reusability */}
        <div className="md:w-[15%] w-full md:min-h-screen overflow-y-hidden">
          <div className="min-h-[50%] mb-2 md:mb-4" style={advertStyle}></div>
          <div className="min-h-[50%]" style={advertStyle2}></div>
        </div>

        <div className="md:w-[20%] bg-white shadow-md px-2">
          <h1 className="font-semibold text-[1.2rem] text-center py-2">Businesses around you </h1>
          {
            businessDirectories.map(businessDirectory => {
              const {id, title, img} = businessDirectory
              return (
                <div key={id} className="p-2 mb-4 bg-orange-400 border-2 border-purple-800 rounded-lg md:p-4">
                  <div className="flex flex-col items-center justify-center leading-8 text-center">
                      <img src={img} alt="" />
                        <p className="font-medium text-[1rem]">{title}</p>
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

export default BusinessDirectory