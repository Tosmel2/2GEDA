import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import PageLayout from './components/PageLayout';
import ClaimBusiness from './components/Business/ClaimBusiness';
import BusinessDirectory from './components/Business/BusinessDirectory';
import Education from './components/Education/Education';
import PostAdModal from "./components/Education/PostAdModal";

function App() {
  return (
    <Router>
      {/* Main Routes with PageLayout */}
      <Routes>
        <Route path='/business' element={<PageLayout><BusinessDirectory /></PageLayout>} />
        <Route path='/' element={<PageLayout><BusinessDirectory /></PageLayout>} />
        <Route path='/education' element={<PageLayout><Education /></PageLayout>} />
      </Routes>

      {/* ClaimBusiness Route without PageLayout */}
      <Routes>
        <Route path='/business/claim-business' element={<ClaimBusiness />} />

        <Route path='/ads' element={<PostAdModal />} />
      </Routes>
    </Router>
  );
}

export default App;



// import { Route, Routes } from "react-router-dom";
// import './App.css'
// import PageLayout from './components/PageLayout'
// import ClaimBusiness from './components/Business/ClaimBusiness'
// import BusinessDirectory from './components/Business/BusinessDirectory'
// import Education from './components/Education/Education'

// function App() {

//   return (
//     <>
//     {/* <div className="flex justify-between w-full h-full gap-5 bg-gray-100"> */}
//       <PageLayout>
//         <Routes>
//           <Route path='/business' element={<BusinessDirectory />} />
//           <Route path='/business/claim-business' element={<ClaimBusiness/>} />
//           <Route path='/education' element={<Education />} />
//         </Routes>
//       </PageLayout>
//     {/* </div>       */}
//     </>
//   )
// }

// export default App
