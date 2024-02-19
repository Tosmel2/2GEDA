import { useState } from 'react';
import PropTypes from 'prop-types';

export const NoteToBusinessOwner = ({ onComplete, onNextStep }) => {
  return (
  <>
    <div className="mx-auto md:w-[70%] w-[90%] py-8 ">
        <p className="text-[1rem] md:text-[1.2rem]">
          Dear Business Owner,<br/>
          Thank you for your interest in claiming your business on 2geda. To ensure the accuracy and security of our directory, we require that you verify your ownership of the business before proceeding.
        </p>

        <p className="text-[1rem] md:text-[1.2rem] bg-gray-300 px-2 py-4">
          Why Ownership Verification is Important,<br/>
          Verifying ownership helps us maintain the integrity of our directory and ensures that only authorized individuals have control over their business listings. This process helps prevent unauthorized claims and keeps the information up-to-date and accurate for our users.
        </p>

        <div>
          <h3 className="text-[1rem] md:text-[1.2rem]">To claim your business, follow the steps below</h3>

          
            
              <div className="flex flex-col items-start justify-center py-2">
                
                <div className='flex gap-2'>
                    <div className="flex flex-col items-center gap-1 mt-1">
                      <div className="w-6 h-6 shrink-0 mx-[-1px] bg-green-600 p-1 flex items-center justify-center rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-full fill-white" viewBox="0 0 24 24">
                          <path
                            d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                            data-original="#000000" />
                        </svg>
                      </div>
                      <div className="w-1 h-12 bg-green-600"></div>
                    </div>

                    <div className='leading-5'>
                      <h3 className='text-[1rem] font-normal'>STEP 1</h3>
                      <p className='text-[0.8rem] md:text-[1rem] font-semibold'>Provide business information</p>
                    </div>
                </div>

                <div className='flex gap-2'>
                  <div className="flex flex-col items-center gap-1 mt-1">
                    <div className="w-6 h-6 shrink-0 mx-[-1px] bg-green-600 p-1 flex items-center justify-center rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-full fill-white" viewBox="0 0 24 24">
                        <path
                          d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                          data-original="#000000" />
                      </svg>
                    </div>
                    <div className="w-1 h-12 bg-green-600"></div>
                  </div>

                  <div className='leading-5'>
                    <h3 className='text-[1rem] font-normal'>STEP 1</h3>
                    <p className='text-[0.8rem] md:text-[1rem] font-semibold'>Provide business information</p>
                  </div>
                </div>

                <div className='flex gap-2'>
                  <div className="flex flex-col items-center gap-1 mt-1">
                    <div className="w-6 h-6 shrink-0 mx-[-1px] bg-green-600 p-1 flex items-center justify-center rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-full fill-white" viewBox="0 0 24 24">
                        <path
                          d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                          data-original="#000000" />
                      </svg>
                    </div>
                    {/* <div className="w-1 h-12 bg-green-600"></div> */}
                  </div>

                  <div className='-mt-2 leading-5'>
                    <h3 className='text-[1rem] font-normal'>STEP 1</h3>
                    <p className='text-[0.8rem] md:text-[1rem] font-semibold'>Provide business information</p>
                  </div>
                </div>
              
            </div>
            
          


          <p className="text-[1rem] md:text-[1.2rem] pt-3">
            <span className="font-semibold">Important Note:</span> Falsely claiming a business that you do not own is a violation of our terms of service and may result in the removal of your listing. Please only proceed with claiming your business if you are the rightful owner or authorized representative.
          </p>
        </div>
      </div>

      <div className="flex justify-center md:py-8">
        <button 
          type="submit"
          onClick={() => {
            console.log('Button clicked!');
            onComplete();
            onNextStep();
            // You may also want to perform additional actions before navigating
          }}
          className="flex w-[90%] md:w-[20%] justify-center rounded-md bg-[#4F0DA3] px-3 py-2 md:py-3 text-sm font-medium leading-6 text-white shadow hover:bg-[#783cc6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#783cc6]">Proceed to claim</button>
      </div>

  </>
  )

}

NoteToBusinessOwner.propTypes = {
  onComplete: PropTypes.func,
  onNextStep: PropTypes.func, // Add this propType
};

const ClaimBusiness = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [stepsCompletion, setStepsCompletion] = useState({
    noteToBusinessOwner: false,
    businessDetails: false,
    uploadDocuments: false,
    verifyIdentity: false,
    thankYouBusiness:false,
  });

  const handleStepCompletion = (step) => {
    setStepsCompletion((prevCompletion) => ({ ...prevCompletion, [step]: true }));
  };

  const navigateToNextStep = () => {
    console.log('Current Step:', currentStep);

    const steps = ['noteToBusinessOwner', 'businessDetails', 'uploadDocuments', 'verifyIdentity', 'thankYouBusiness'];
    
    const currentIndex = steps.indexOf(currentStep);

    if (currentIndex < steps.length - 1) {
      // const nextStep = steps[currentIndex + 1];

      if (stepsCompletion[steps[currentStep]]) {
        setCurrentStep(currentStep + 1);
      } else {
        alert(`Please complete the ${currentStep} step before proceeding.`);
      }
    } else {
      alert('You have reached the end');
      // You have reached the end, handle as needed
    }
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 0:
        return <NoteToBusinessOwner onComplete={() => handleStepCompletion('noteToBusinessOwner')} onNextStep={navigateToNextStep} />;
      case 1:
        return <BusinessDetails onComplete={() => handleStepCompletion('businessDetails')} />;
      case 2:
        return <UploadDocuments onComplete={() => handleStepCompletion('uploadDocuments')} />;
      case 3:
        return <VerifyIdentity onComplete={() => handleStepCompletion('verifyIdentity')} />;
      case 4:
      return <ThankYouBusiness onComplete={() => handleStepCompletion('thankYouBusiness')} />;
      default:
        return null;
    }
  };


  return (
    <>
      <section className="w-full min-h-screen py-3 md:h-full">
      <div className="flex items-center justify-between px-6 py-2 text-center border-b-2 border-gray-300 md:px-10">

        <a href="/">
        <i className="text-lg md:text-2xl fa-solid fa-arrow-left"></i>
        </a>

          <h1 className="text-[1.5rem] md:text-[2rem] font-medium">Claim business</h1>

          <img src="/src/assets/logo.svg" height={50} width={50} alt="2geda-logo" />
        </div>

        {renderCurrentStep()}
          {/* <NoteToBusinessOwner /> */}
          {/* <BusinessDetails /> */}
          {/* <UploadDocuments /> */}
          {/* <VerifyIdentity /> */}

          {currentStep !== 0 && <ProgressBar currentStep={currentStep} stepsCompletion={stepsCompletion} onContinue={navigateToNextStep} />}
        
      </section>

    </>
  )
}



export default ClaimBusiness


export const BusinessDetails = () => {
  return (
  <>
    <div className="flex flex-col items-center py-6 text-center">
      <h1 className="md:text-[1.6rem] text-[1.2rem] font-medium">Provide business information</h1>
      <p className="text-[1rem] md:text-[1.2rem]">Enter business details for ownership claim</p>
    </div>
    <form noValidate="" className="w-[95%] md:w-[80%] flex flex-col mx-auto space-y-12">
      <fieldset className="grid grid-cols-2 gap-4 p-3">

        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
          <div className="w-full md:my-2 col-span-full sm:col-span-3">
            <label htmlFor="businessName" className="text-sm">Business name</label>
            <input id="businessName" type="text" placeholder="Enter business name" className="w-full p-3 border-0 rounded-md shadow sm:text-sm sm:leading-6 focus:outline-none" />
          </div>

          <div className="md:my-2 col-span-full sm:col-span-3">
            <label htmlFor="businessName" className="text-sm">Business address</label>
            <input id="businessAddress" type="text" placeholder="Enter business address" className="w-full p-3 border-0 rounded-md shadow sm:text-sm sm:leading-6 focus:outline-none" />
          </div>

          <div className="md:my-2 col-span-full sm:col-span-3">
            <label htmlFor="businessDesc" className="text-sm">Business description</label>
            <input id="businessDesc" type="text" placeholder="start typing" className="w-full p-3 border-0 rounded-md shadow sm:text-sm sm:leading-6 focus:outline-none" />
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

          <div className="md:my-2 col-span-full sm:col-span-3">
            <label htmlFor="email" className="text-sm">Email address</label>
            <input id="email" type="email" placeholder="Enter email address" className="w-full p-3 border-0 rounded-md shadow sm:text-sm sm:leading-6 focus:outline-none" />
          </div>

          <div className="md:my-2 col-span-full sm:col-span-3">
            <label htmlFor="websiteLink" className="text-sm">Website(optional)</label>
            <input id="websiteLink" type="text" placeholder="Enter website link" className="w-full p-3 border-0 rounded-md shadow sm:text-sm sm:leading-6 focus:outline-none" />
          </div>

        </div>
      </fieldset>
    </form>

    {/* <ProgressBar /> */}
  </>
  )
}

export const UploadDocuments = () => {

  const handleFileInputChange = (event) => {
    // Handle file input change here
    const file = event.target.files[0];
    // Do something with the selected file
    console.log(file);
  };
  return (
  <>
    <div className="flex flex-col items-center py-6 text-center">
      <h1 className="md:text-[1.6rem] text-[1.2rem] font-medium">Upload Ownership Documents</h1>
      <p className="text-[1rem] md:text-[1.2rem]">Upload documents for ownership verification process</p>
    </div>
    <form noValidate="" action="" className="w-[95%] md:w-[80%] flex flex-col mx-auto space-y-12">
      <fieldset className="grid grid-cols-2 gap-4 p-3">

        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">

          <div className="relative w-full md:my-2 col-span-full">
          <label  className="text-sm">Business license or registration certificate</label>
             <input id="businessLicense" type="file" placeholder="Choose file to upload" className="w-full p-3 bg-white border-0 rounded-md shadow sm:text-sm sm:leading-6 focus:outline-none" onChange={handleFileInputChange}/>

             <label htmlFor="businessLicense" className="absolute px-2 py-1 text-white bg-[#4F0DA3] text-sm rounded-md cursor-pointer right-2 top-9 hidden md:inline-block">Select file</label>
          </div>

          <div className="md:my-2 col-span-full">
            <label htmlFor="taxId" className="text-sm">Tax ID Number</label>
            <input id="taxId" type="number" placeholder="Enter tax identification number" className="w-full p-3 border-0 rounded-md shadow sm:text-sm sm:leading-6 focus:outline-none" />
          </div>

          <div className="relative md:my-2 col-span-full">
            <label  className="text-sm">Utility Bill or lease agreement</label>
             <input id="utilityBill" type="file" placeholder="Choose file to upload" className="w-full p-3 bg-white border-0 rounded-md shadow sm:text-sm sm:leading-6 focus:outline-none" onChange={handleFileInputChange}/>

             <label htmlFor="utilityBill" className="absolute px-2 py-1 text-white bg-[#4F0DA3] text-sm rounded-md cursor-pointer right-2 top-9 hidden md:inline-block">Select file</label>
          </div>


        </div>
      </fieldset>
    </form>

    <ProgressBar />
  </>
  )
}
export const VerifyIdentity = () => {
  return (
  <>
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

            </div>
          </fieldset>
        </form>

        <ProgressBar />
  </>
  )
}

export const ThankYouBusiness = () => {
  return (
  <>
    <div className="flex flex-col items-center p-6 text-center">
      <img src="/src/assets/thankyou.svg" alt="Thankyou svg" />

      <p className="text-[1rem] md:text-[1.2rem] md:w-[60%] pt-4">Thank you for submitting your business claim. We are reviewing your details for accuracy and security. Watch your email for confirmation and further instructions.</p>
    </div>
        
      <div className="flex justify-center md:py-8">
          <button 
          type="submit"
          className="flex w-[90%] md:w-[30%] justify-center rounded-md bg-[#4F0DA3] px-3 py-2 md:py-3 text-sm font-medium leading-6 text-white shadow hover:bg-[#783cc6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#783cc6]">Continue to business directory</button>
      </div>


  </>
  )
}





export const ProgressBar = ({ currentStep, stepsCompletion,  onContinue }) => {
  const steps = ['noteToBusinessOwner', 'businessDetails', 'uploadDocuments', 'verifyIdentity'];
  return (
    <>
      <div className="flex justify-center md:py-8">
        <button 
        type="submit" 
        onClick={onContinue}
        className="flex w-[90%] md:w-[20%] justify-center rounded-md bg-[#4F0DA3] px-3 py-2 md:py-3 text-sm font-medium leading-6 text-white shadow hover:bg-[#783cc6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#783cc6]">Continue</button>
      </div>

      <div className="flex justify-center p-4 mt-2 space-y-4">
        <div className="flex max-w-xs space-x-3 ">
          {steps.map((step, index) => (
            <span
              key={index}
              className={`w-12 h-2 rounded-sm ${
                currentStep === index || stepsCompletion[step]
                  ? 'bg-[#4F0DA3]'
                  : 'bg-gray-300'
              }`}
            ></span>
          ))}
        </div>
      </div>

    </>
  )
}

ProgressBar.propTypes = {
  currentStep: PropTypes.string, // Add PropTypes import if needed
  stepsCompletion: PropTypes.object.isRequired,
  onContinue: PropTypes.func.isRequired,
};

ProgressBar.defaultProps = {
  currentStep: '', // Set a default value
};