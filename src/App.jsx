import CommonQuestion from "./landing/pages/CommonQuestion";
import ContactUs from "./landing/pages/ContactUs"
import Home from "./landing/pages/Home";
import { BrowserRouter as Router , Routes , Route } from "react-router-dom"

function App() {
  return (
    <>
     <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/questions" element={<CommonQuestion/>} />
        <Route path="/contact-us" element={<ContactUs/>} />
        </Routes>
     </Router>
    </>
  )
}

export default App
