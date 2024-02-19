import Header from "./Header"
import Sidebar from "./Sidebar"
import PropTypes from 'prop-types';


const PageLayout = ({children}) => {
  return (
    <>
      <main className="flex ">
        <Sidebar />
        <section className="w-[80%]">
          <Header />
          <div className="bg-[#f5f5f5] px-2 md:px-4 py-6">
            {children}
          </div>
        </section>
      </main>
    </>
  )
}



export default PageLayout
PageLayout.propTypes = {
  children: PropTypes.node.isRequired, 
}