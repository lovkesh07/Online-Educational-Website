// import Home from "./pages/Home";

// function App() {
//   return <Home />;
// }

// export default App;



import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './pages/Home'
import Contact from './pages/Contact'
import Sponsors from './pages/Sponsors';
import About from './pages/About'

import Navbar from "./components/Header/Header"
import Footer from "./components/Footer/Footer";


const App = () => {
  return (

    <>
       <Router>

        <Navbar />
        
         <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/sponsors" element={<Sponsors />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
         </Routes>

       </Router>

       <Footer />
     </>


  );
}


export default App;
