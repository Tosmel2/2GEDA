
const ClaimBusiness = () => {
  return (
    <>
      <section className="w-full h-full py-3 border-2 border-red-700 md:h-screen">
      <div className="flex items-center justify-between px-6 py-2 text-center border-b-2 border-gray-300 md:px-10">

        <a href="/">
        <i className="text-lg md:text-2xl fa-solid fa-arrow-left"></i>
        </a>

          <h1 className="text-[1.5rem] md:text-[2rem] font-medium">Claim business</h1>

          <img src="/src/assets/logo.svg" height={50} width={50} alt="2geda-logo" />
        </div>

        <div className="flex flex-col items-center py-6 text-center">
          <h1 className="md:text-[1.6rem] text-[1.2rem] font-medium">Upload Ownership Documents</h1>
          <p className="text-[1rem] md:text-[1.2rem]">Verify identify for secure ownership confirmation</p>
        </div>
        <form noValidate="" action="" className="w-[95%] md:w-[80%] flex flex-col mx-auto space-y-12">
          <fieldset className="grid grid-cols-2 gap-4 p-3">

            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="w-full md:my-2 col-span-full sm:col-span-3">
                <label htmlFor="firstname" className="text-sm">First name</label>
                <input id="firstname" type="text" placeholder="Enter your first name" className="w-full p-3 border-0 rounded-md shadow sm:text-sm sm:leading-6 focus:outline-none" />
              </div>

              <div className="md:my-2 col-span-full sm:col-span-3">
                <label htmlFor="lastname" className="text-sm">Last name</label>
                <input id="lastname" type="text" placeholder="Enter your last name" className="w-full p-3 border-0 rounded-md shadow sm:text-sm sm:leading-6 focus:outline-none" />
              </div>

              <div className="md:my-2 col-span-full sm:col-span-3">
                <label htmlFor="email" className="text-sm">Email</label>
                <input id="email" type="email" placeholder="Enter email address" className="w-full p-3 border-0 rounded-md shadow sm:text-sm sm:leading-6 focus:outline-none" />
              </div>

              <div className="md:my-2 col-span-full sm:col-span-3">
                    <label htmlFor="phoneNumber" className="text-sm">Phone number</label>
                    <div className="flex items-center">
                      <select id="countryCode" className="px-2 md:w-[15%] py-4 rounded-l-md sm:text-sm sm:leading-6 outline-none focus:outline-none shadow hidden md:inline-block">
                        <option value="+1">(US)</option>
                        <option value="+234">(NG)</option>
                        <option value="+44">(UK)</option>
                      </select>
                      <input id="phoneNumber" type="number" placeholder="+1 (555) 000-0000" className="w-full shadow md:w-[85%] p-3 border-0 rounded-r-md sm:text-sm sm:leading-6 focus:outline-none" />
                    </div>
                  </div>

              {/* <div className="md:my-2 col-span-full sm:col-span-3">
                <label htmlFor="phoneNumber" className="text-sm">Phone number</label>
                <input id="phoneNumber" type="number" placeholder="+1 (555) 000-0000" className="w-full p-3 border-0 rounded-md sm:text-sm sm:leading-6 focus:outline-none" />
              </div> */}

              <div className="md:my-2 col-span-full">
                <label htmlFor="document" className="text-sm">Identification Document</label>
                <select id="document" className="w-full px-4 py-4 border-0 rounded-md shadow sm:text-sm sm:leading-6 focus:outline-none" defaultValue="">
                  <option value="" disabled>Select one</option>
                  <option value="passport">Passport</option>
                  <option value="driverLicense">Driver{"'"}s License</option>
                  <option value="idCard">ID Card</option>
                  {/* Add more options as needed */}
                </select>
              </div>

              {/* <div className="md:my-2 col-span-full">
                <label htmlFor="document" className="text-sm">Identification Document</label>
                <input id="Document" type="text" placeholder="Select one" className="w-full px-3 py-2 border-0 rounded-md sm:text-sm sm:leading-6 focus:outline-none" />
              </div> */}

              {/* <div className="md:my-2 col-span-full sm:col-span-3">
                <label htmlFor="lastname" className="text-sm">Last name</label>
                <input id="lastname" type="text" placeholder="Last name" className="w-full px-3 py-2 border-0 rounded-md shadow sm:text-sm sm:leading-6 focus:outline-none" />
              </div> */}







              {/* <div className="col-span-full sm:col-span-3">
                <label htmlFor="email" className="text-sm">Email</label>
                <input id="email" type="email" placeholder="Email" className="w-full px-3 py-2 border-0 rounded-md sm:text-sm sm:leading-6" />
              </div> */}

              {/* <div className="col-span-full">
                <label htmlFor="address" className="text-sm">Address</label>
                <input id="address" type="text" placeholder="" className="w-full px-3 py-2 border-0 rounded-md sm:text-sm sm:leading-6 " />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="city" className="text-sm">City</label>
                <input id="city" type="text" placeholder="" className="w-full rounded-md " />
              </div> */}
              {/* <div className="col-span-full sm:col-span-2">
                <label htmlFor="state" className="text-sm">State / Province</label>
                <input id="state" type="text" placeholder="" className="w-full rounded-md " />
              </div> */}
              {/* <div className="col-span-full sm:col-span-2">
                <label htmlFor="zip" className="text-sm">ZIP / Postal</label>
                <input id="zip" type="text" placeholder="" className="w-full rounded-md " />
              </div> */}
            </div>
          </fieldset>
        </form>

        <div className="flex justify-center md:py-8">
          <button type="submit" className="flex w-[90%] md:w-[20%] justify-center rounded-md bg-[#4F0DA3] px-3 py-2 md:py-3 text-sm font-medium leading-6 text-white shadow hover:bg-[#783cc6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#783cc6]">Continue</button>
        </div>

        <div className="flex justify-center p-4 mt-2 space-y-4">
          <div className="flex max-w-xs space-x-3 ">
            <span className="w-12 h-2 bg-[#4F0DA3] rounded-sm"></span>
            <span className="w-12 h-2 bg-[#4F0DA3] rounded-sm"></span>
            <span className="w-12 h-2 bg-[#4F0DA3] rounded-sm"></span>
          </div>
        </div>
</section>

    </>
  )
}

export default ClaimBusiness

export const BusinessDetails = () => {}
export const UploadDocuments = () => {}
export const VerifyIdentity = () => {}



        {/* <div>
          <label htmlFor="fullName" className="block text-sm font-medium leading-6 text-gray-900">Full Name</label>
          <div className="mt-2">
            <input id="fullname" name="fullname" type="text"  required className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#4291B0] sm:text-sm sm:leading-6" />
          </div>
        </div> */}