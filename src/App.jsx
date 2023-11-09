import './App.css'

// import Header from "./components/Header"
import Resources from "./components/Resources"
import Sidebar from "./components/Sidebar"
import Main from "./components/main"

function App() {

  return (
    <>
    <div className="flex justify-between gap-5 bg-gray-100 w-full h-full">
      {/* <Header /> */}
      <Sidebar />
      <Main />
      <Resources />
    </div>      
    </>
  )
}

export default App
