import Header from '../components/Header'
import Footer from '../components/Footer'

function Layout({children}) {
  return (
    <div className='flex flex-col h-screen'>
      <Header/>
       {children}
      <Footer/>
    </div>
  )
}

export default Layout