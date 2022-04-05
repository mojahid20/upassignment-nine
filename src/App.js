import { Routes, Route } from "react-router-dom";
import './App.css';
import About from "./component/About/About";
import Blogs from "./component/Blogs/Blogs";
import Dashboard from "./component/Dashboard/Dashboard";
import Header from "./component/Header/Header";
import Hompage from "./component/Hompage/Hompage";

import NotFound from "./component/NotFound/NotFound";
import Revews from "./component/Revews/Revews";

function App() {
  return (
    <div>
      
      <Header />
    
       <Routes>
         <Route path="/" element={<Hompage />} />
         <Route path="/About" element={<About/>} />
         <Route path="/Dashboard" element={<Dashboard />} />
         <Route path="/Blogs" element={<Blogs />} />
         <Route path="/Revews" element={<Revews />} />
         <Route path="*" element={<NotFound />} />
       </Routes>
       
    </div>
  );
}

export default App;
