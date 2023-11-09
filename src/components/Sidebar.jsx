import React from 'react'

const Sidebar = () => {
  return (
    <>
      <section className='border-2 border-emerald-700 w-[20%] bg-[#4F0DA3] min-h-full'>
      <div className="h-full p-3 space-y-2 w-60 dark:bg-gray-900 dark:text-gray-100">
        {/* <div className="flex items-center p-2 space-x-4">
          <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="w-12 h-12 rounded-full dark:bg-gray-500" />
          <div>
            <h2 className="text-lg font-semibold">Leroy Jenkins</h2>
            <span className="flex items-center space-x-1">
              <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-400">View profile</a>
            </span>
          </div>
        </div> */}

        <div className="divide-y divide-gray-700">

          <ul className="pt-2 pb-4 space-y-1 text-sm">
            <li className="text-white">
              <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-400">
                  <path d="M68.983,382.642l171.35,98.928a32.082,32.082,0,0,0,32,0l171.352-98.929a32.093,32.093,0,0,0,16-27.713V157.071a32.092,32.092,0,0,0-16-27.713L272.334,30.429a32.086,32.086,0,0,0-32,0L68.983,129.358a32.09,32.09,0,0,0-16,27.713V354.929A32.09,32.09,0,0,0,68.983,382.642ZM272.333,67.38l155.351,89.691V334.449L272.333,246.642ZM256.282,274.327l157.155,88.828-157.1,90.7L99.179,363.125ZM84.983,157.071,240.333,67.38v179.2L84.983,334.39Z"></path>
                </svg>
                <span>Home</span>
              </a>
            </li>
            <li  className='text-[#C47EFB]'>
              <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
              <svg className='w-5 h-5' viewBox="0 0 48 48" id="b" xmlns="http://www.w3.org/2000/svg" fill="#C47EFB"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path id="c" class="e" d="m24.9697,39.04v-3.7188c2.9742-2.9742,5.4671-3.9181,9.2651-3.9181h0c3.798,0,6.2909.9439,9.2651,3.9181v3.7188h-18.5303Z"></path><circle class="e" cx="34.2349" cy="22.8928" r="4.9752"></circle><path id="d" class="e" d="m24.9697,39.04H4.5v-6.2886c5.0295-5.0295,9.2451-6.6257,15.6678-6.6257h0c5.7656,0,9.7526,1.2863,14.1465,5.188"></path><circle class="e" cx="20.1678" cy="15.8085" r="6.8485"></circle></g></svg>
                <span>Connect</span>
              </a>
            </li>
            <li className='text-[#C47EFB]'>
              <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
               <svg className='w-5 h-5' viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 17.45V26C6 26.2652 6.10536 26.5195 6.29289 26.7071C6.48043 26.8946 6.73478 27 7 27H25C25.2652 27 25.5196 26.8946 25.7071 26.7071C25.8946 26.5195 26 26.2652 26 26V17.45" stroke="#C47EFB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6.75 5H25.25C25.4669 5.00179 25.6776 5.0732 25.8508 5.20373C26.0241 5.33425 26.1509 5.51698 26.2125 5.725L28 12H4L5.7875 5.725C5.84909 5.51698 5.97587 5.33425 6.14916 5.20373C6.32244 5.0732 6.53306 5.00179 6.75 5V5Z" stroke="#C47EFB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 12V14C12 15.0609 11.5786 16.0783 10.8284 16.8284C10.0783 17.5786 9.06087 18 8 18C6.93913 18 5.92172 17.5786 5.17157 16.8284C4.42143 16.0783 4 15.0609 4 14V12" stroke="#C47EFB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M20 12V14C20 15.0609 19.5786 16.0783 18.8284 16.8284C18.0783 17.5786 17.0609 18 16 18C14.9391 18 13.9217 17.5786 13.1716 16.8284C12.4214 16.0783 12 15.0609 12 14V12" stroke="#C47EFB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M28 12V14C28 15.0609 27.5786 16.0783 26.8284 16.8284C26.0783 17.5786 25.0609 18 24 18C22.9391 18 21.9217 17.5786 21.1716 16.8284C20.4214 16.0783 20 15.0609 20 14V12" stroke="#C47EFB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>Commerce</span>
              </a>
            </li>
            <li className='text-[#C47EFB]'>
              <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                <svg className="w-5 h-5" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.016 24.3333H28V5.66661C28 4.95936 27.719 4.28108 27.219 3.78099C26.7189 3.28089 26.0406 2.99994 25.3333 2.99994H8C6.392 2.99994 4 4.06527 4 6.99994V25.6666C4 28.6013 6.392 29.6666 8 29.6666H28V26.9999H8.016C7.4 26.9839 6.66667 26.7399 6.66667 25.6666C6.66667 24.5933 7.4 24.3493 8.016 24.3333ZM10.6667 8.33327H22.6667V10.9999H10.6667V8.33327Z" fill="#C47EFB"/>
                </svg>
                <span>Business Directory</span>
              </a>
            </li>
            <li className='text-[#C47EFB]'>
              <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
              <svg className="w-5 h-5" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 17.5C18.8284 17.5 19.5 16.8284 19.5 16C19.5 15.1716 18.8284 14.5 18 14.5C17.1716 14.5 16.5 15.1716 16.5 16C16.5 16.8284 17.1716 17.5 18 17.5Z" fill="#C47EFB"/>
                <path d="M12 17.5C12.8284 17.5 13.5 16.8284 13.5 16C13.5 15.1716 12.8284 14.5 12 14.5C11.1716 14.5 10.5 15.1716 10.5 16C10.5 16.8284 11.1716 17.5 12 17.5Z" fill="#C47EFB"/>
                <path d="M24 17.5C24.8284 17.5 25.5 16.8284 25.5 16C25.5 15.1716 24.8284 14.5 24 14.5C23.1716 14.5 22.5 15.1716 22.5 16C22.5 16.8284 23.1716 17.5 24 17.5Z" fill="#C47EFB"/>
                <path d="M7.67534 22.0998C6.18645 19.5878 5.66565 16.6187 6.21072 13.75C6.75579 10.8812 8.32925 8.31004 10.6357 6.51918C12.9421 4.72831 15.823 3.8409 18.7373 4.02355C21.6517 4.20619 24.3992 5.44632 26.464 7.51113C28.5288 9.57594 29.7689 12.3234 29.9516 15.2378C30.1342 18.1522 29.2468 21.033 27.4559 23.3394C25.6651 25.6459 23.0939 27.2193 20.2252 27.7644C17.3564 28.3095 14.3873 27.7887 11.8753 26.2998V26.2998L7.72534 27.4748C7.55531 27.5245 7.37503 27.5276 7.20341 27.4837C7.03178 27.4398 6.87513 27.3505 6.74986 27.2252C6.6246 27.1 6.53534 26.9433 6.49144 26.7717C6.44753 26.6001 6.45061 26.4198 6.50034 26.2498L7.67534 22.0998Z" stroke="#C47EFB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                <span>Chat</span>
              </a>
            </li>
            <li className='text-[#C47EFB]'>
              <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                <svg className="w-5 h-5" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" stroke="#C47EFB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16 20C18.7614 20 21 17.7614 21 15C21 12.2386 18.7614 10 16 10C13.2386 10 11 12.2386 11 15C11 17.7614 13.2386 20 16 20Z" stroke="#C47EFB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7.9751 24.925C8.72749 23.4431 9.87555 22.1984 11.292 21.3289C12.7085 20.4595 14.3381 19.9993 16.0001 19.9993C17.6621 19.9993 19.2917 20.4595 20.7082 21.3289C22.1246 22.1984 23.2727 23.4431 24.0251 24.925" stroke="#C47EFB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>Profile</span>
              </a>
            </li>
            
            <li className='text-[#C47EFB]'>
              <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
              <svg className="w-5 h-5" viewBox="0 0 32 32" fill="#C47EFB" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.9993 20.3333C21.9993 20.3333 23.3327 21.5867 23.3327 23H27.3327V3H23.3327C23.3327 4.33333 21.9993 5.66667 19.9993 5.66667C17.9993 5.66667 16.666 4.33333 16.666 3H12.666V12.3333" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M19.9997 29.668H15.9997C15.9997 28.2546 14.6663 27.0013 12.6663 27.0013C10.6663 27.0013 9.33301 28.2546 9.33301 29.668H5.33301V9.66797H9.33301C9.33301 11.0013 10.6663 12.3346 12.6663 12.3346C14.6663 12.3346 15.9997 11.0013 15.9997 9.66797H19.9997V29.668Z" fill="white" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M9.33333 17.6667C10.0697 17.6667 10.6667 17.0697 10.6667 16.3333C10.6667 15.597 10.0697 15 9.33333 15C8.59695 15 8 15.597 8 16.3333C8 17.0697 8.59695 17.6667 9.33333 17.6667Z" fill="black"/>
                  <path d="M12.6663 17.6667C13.4027 17.6667 13.9997 17.0697 13.9997 16.3333C13.9997 15.597 13.4027 15 12.6663 15C11.93 15 11.333 15.597 11.333 16.3333C11.333 17.0697 11.93 17.6667 12.6663 17.6667Z" fill="black"/>
                  <path d="M15.9993 17.6667C16.7357 17.6667 17.3327 17.0697 17.3327 16.3333C17.3327 15.597 16.7357 15 15.9993 15C15.263 15 14.666 15.597 14.666 16.3333C14.666 17.0697 15.263 17.6667 15.9993 17.6667Z" fill="black"/>
                </svg>
                <span>Tickets</span>
              </a>
            </li>
            <li className='text-[#C47EFB]'>
              <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
              <svg className="w-5 h-5" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.667 20.6667L22.0003 14.6667L12.667 8.66673V20.6667ZM10.667 28.0001V25.3334H2.66699V4.00006H29.3337V25.3334H21.3337V28.0001H10.667Z" fill="#C47EFB"/>
              </svg>

                <span>Live</span>
              </a>
            </li>
            <li className='text-[#C47EFB]'>
              <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
              <svg className="w-5 h-5" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 28.0001C10.2091 28.0001 12 26.2092 12 24.0001C12 21.7909 10.2091 20.0001 8 20.0001C5.79086 20.0001 4 21.7909 4 24.0001C4 26.2092 5.79086 28.0001 8 28.0001Z" fill="#C47EFB" stroke="#C47EFB" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M24 26.668C26.2091 26.668 28 24.8772 28 22.668C28 20.4589 26.2091 18.668 24 18.668C21.7909 18.668 20 20.4589 20 22.668C20 24.8772 21.7909 26.668 24 26.668Z" fill="#C47EFB" stroke="#C47EFB" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M28 4.00006L12 8.00006V13.3334L28 9.33339V4.00006Z" fill="#C47EFB"/>
                <path d="M12 24.0001V13.3334M12 13.3334V8.00006L28 4.00006V9.33339M12 13.3334L28 9.33339M28 22.6667V9.33339" stroke="#C47EFB" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>

                <span>Stereo</span>
              </a>
            </li>
            <li className='text-[#C47EFB]'>
              <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
              <svg className="w-5 h-5" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.667 20.6667L22.0003 14.6667L12.667 8.66673V20.6667ZM10.667 28.0001V25.3334H2.66699V4.00006H29.3337V25.3334H21.3337V28.0001H10.667Z" fill="#C47EFB"/>
              </svg>

                <span>TV</span>
              </a>
            </li>
            <li className='text-[#C47EFB]'>
              <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
              <svg className="w-5 h-5" viewBox="0 0 32 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30.4 14.4H27.2V17.6H28.32C28.585 17.6 28.8 17.78 28.8 18V18.8C28.8 19.02 28.585 19.2 28.32 19.2H3.68C3.415 19.2 3.2 19.02 3.2 18.8V18C3.2 17.78 3.415 17.6 3.68 17.6H4.8V14.4H1.6C0.715 14.4 0 15.115 0 16V20.8C0 21.685 0.715 22.4 1.6 22.4H30.4C31.285 22.4 32 21.685 32 20.8V16C32 15.115 31.285 14.4 30.4 14.4ZM25.6 17.6V1.61497C25.6 0.71997 24.875 -3.05176e-05 23.985 -3.05176e-05H8.02C7.125 -3.05176e-05 6.4 0.72497 6.4 1.61497V17.6H25.6ZM10.56 8.49997L11.835 7.23497C12.045 7.02497 12.385 7.02497 12.595 7.23997L14.66 9.31997L19.42 4.59997C19.63 4.38997 19.97 4.38997 20.18 4.60497L21.445 5.87997C21.655 6.08997 21.655 6.42997 21.44 6.63997L15.025 13C14.815 13.21 14.475 13.21 14.265 12.995L10.56 9.25997C10.345 9.04997 10.35 8.70997 10.56 8.49997Z" fill="#C47EFB"/>
              </svg>
                <span>Voting</span>
              </a>
            </li>
            <li className='text-[#C47EFB]'>
              <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
              <svg className="w-5 h-5" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 6.86267C3.77 6.12267 6.308 5.32467 8.776 5.07667C11.436 4.80867 13.692 5.20267 15 6.58067V26.0727C13.13 25.0127 10.76 24.8667 8.574 25.0867C6.214 25.3267 3.834 26.0087 2 26.7087V6.86267ZM17 6.58067C18.308 5.20267 20.564 4.80867 23.224 5.07667C25.692 5.32467 28.23 6.12267 30 6.86267V26.7087C28.164 26.0087 25.786 25.3247 23.426 25.0887C21.238 24.8667 18.87 25.0107 17 26.0727V6.58067ZM16 4.77267C14.03 3.07867 11.174 2.82667 8.574 3.08667C5.546 3.39267 2.49 4.43067 0.586 5.29667C0.411298 5.37613 0.263151 5.50418 0.159242 5.66554C0.0553334 5.8269 5.31428e-05 6.01475 0 6.20667L0 28.2067C4.6324e-05 28.374 0.0420743 28.5386 0.122234 28.6855C0.202394 28.8323 0.318123 28.9568 0.458822 29.0473C0.59952 29.1378 0.760689 29.1916 0.927567 29.2038C1.09444 29.2159 1.2617 29.1859 1.414 29.1167C3.178 28.3167 6.02 27.3547 8.774 27.0767C11.592 26.7927 13.954 27.2507 15.22 28.8307C15.3137 28.9475 15.4324 29.0417 15.5674 29.1065C15.7024 29.1713 15.8503 29.2049 16 29.2049C16.1497 29.2049 16.2976 29.1713 16.4326 29.1065C16.5676 29.0417 16.6863 28.9475 16.78 28.8307C18.046 27.2507 20.408 26.7927 23.224 27.0767C25.98 27.3547 28.824 28.3167 30.586 29.1167C30.7383 29.1859 30.9056 29.2159 31.0724 29.2038C31.2393 29.1916 31.4005 29.1378 31.5412 29.0473C31.6819 28.9568 31.7976 28.8323 31.8778 28.6855C31.9579 28.5386 32 28.374 32 28.2067V6.20667C31.9999 6.01475 31.9447 5.8269 31.8408 5.66554C31.7368 5.50418 31.5887 5.37613 31.414 5.29667C29.51 4.43067 26.454 3.39267 23.426 3.08667C20.826 2.82467 17.97 3.07867 16 4.77267Z" fill="#C47EFB"/>
              </svg>
                <span>Education</span>
              </a>
            </li>
          </ul>

          <ul className="pt-4 pb-2 space-y-1 text-sm">
            <li className='text-[#C47EFB]'>
              <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-400">
                  <path d="M245.151,168a88,88,0,1,0,88,88A88.1,88.1,0,0,0,245.151,168Zm0,144a56,56,0,1,1,56-56A56.063,56.063,0,0,1,245.151,312Z"></path>
                  <path d="M464.7,322.319l-31.77-26.153a193.081,193.081,0,0,0,0-80.332l31.77-26.153a19.941,19.941,0,0,0,4.606-25.439l-32.612-56.483a19.936,19.936,0,0,0-24.337-8.73l-38.561,14.447a192.038,192.038,0,0,0-69.54-40.192L297.49,32.713A19.936,19.936,0,0,0,277.762,16H212.54a19.937,19.937,0,0,0-19.728,16.712L186.05,73.284a192.03,192.03,0,0,0-69.54,40.192L77.945,99.027a19.937,19.937,0,0,0-24.334,8.731L21,164.245a19.94,19.94,0,0,0,4.61,25.438l31.767,26.151a193.081,193.081,0,0,0,0,80.332l-31.77,26.153A19.942,19.942,0,0,0,21,347.758l32.612,56.483a19.937,19.937,0,0,0,24.337,8.73l38.562-14.447a192.03,192.03,0,0,0,69.54,40.192l6.762,40.571A19.937,19.937,0,0,0,212.54,496h65.222a19.936,19.936,0,0,0,19.728-16.712l6.763-40.572a192.038,192.038,0,0,0,69.54-40.192l38.564,14.449a19.938,19.938,0,0,0,24.334-8.731L469.3,347.755A19.939,19.939,0,0,0,464.7,322.319Zm-50.636,57.12-48.109-18.024-7.285,7.334a159.955,159.955,0,0,1-72.625,41.973l-10,2.636L267.6,464h-44.89l-8.442-50.642-10-2.636a159.955,159.955,0,0,1-72.625-41.973l-7.285-7.334L76.241,379.439,53.8,340.562l39.629-32.624-2.7-9.973a160.9,160.9,0,0,1,0-83.93l2.7-9.972L53.8,171.439l22.446-38.878,48.109,18.024,7.285-7.334a159.955,159.955,0,0,1,72.625-41.973l10-2.636L222.706,48H267.6l8.442,50.642,10,2.636a159.955,159.955,0,0,1,72.625,41.973l7.285,7.334,48.109-18.024,22.447,38.877-39.629,32.625,2.7,9.972a160.9,160.9,0,0,1,0,83.93l-2.7,9.973,39.629,32.623Z"></path>
                </svg>
                <span>Settings</span>
              </a>
            </li>
            <li className='text-white'>
              <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-400">
                  <path d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z"></path>
                  <rect width="32" height="64" x="256" y="232"></rect>
                </svg>
                <span>Sign out</span>
              </a>
            </li>
          </ul>

        </div>
      </div>

      </section>

    </>
  )
}

export default Sidebar


