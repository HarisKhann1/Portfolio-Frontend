import { Outlet } from 'react-router-dom'
import Header from './Header.tsx'
import Footer from './Footer.tsx'
function MainLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default MainLayout