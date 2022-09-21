import Footer from '../Footer'
import Header from '../Header'
// import Subscribe from '../Subscribe'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      {/* <Subscribe /> */}
      <Footer />
    </>
  )
}

export default Layout
