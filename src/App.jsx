import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./component/home";
import Landing from "./component/landing";
import Skills from "./component/skills";

function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Home/>}>
         <Route path="/" element={<Landing/>}/>
         <Route path="/skills" element={<Skills/>}/>
        </Route>
        
      </Routes>
    </Router>
    </>
  )
}

export default App
