import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import {Routes, Route} from 'react-router-dom'
import Navbar from "./Components/Navbar/navbar";
import Header from "./Components/Header/header";
import About from "./Components/about/about";
import Classes from "./Components/classes/class";
import SecondHeader from "./Components/second_header/second";
import Pricing from "./Components/pricing/pricing";
import Custom from "./Components/custom/custom";
import Team from "./Components/team/team";
import Footer from "./Components/Footer/footer";
const App = () => {
  return (
    <>
    {/* <div>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/header" element={<Header />} />
      </Routes>
    </div> */}
      <Router>
        <Navbar />
        <Header />
        <About />
        <Classes />
        <SecondHeader />
        <Pricing />
        <Custom />
        <Team />
        <Footer />
      </Router>
    </>
  );
};
export default App;
