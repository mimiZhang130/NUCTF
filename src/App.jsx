import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./Home";
import Writeups from "./Writeups";
import Team from "./Team";
import Resources from "./Resources";
import Blog from "./Blog";
import Writeup from "./components/Writeup"

import writeups from "./assets/Writeups.json";

function App() {
  return (
    <div>
      <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/writeups" element={<Writeups/>}/>
        { writeups.map((writeup, index) => (
            <Route key={index} path={"/writeups/" + writeup.title} element={<Writeup title={writeup.title} date={writeup.date} source={writeup.source}/>}/>
        ))}
        
        <Route path="/team" element={<Team/>}/>
        <Route path="/resources" element={<Resources/>}/>
        <Route path="/blog" element={<Blog/>}/>
      </Routes>
    </Router>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Abel"></link>
    </div>
    
    
  )
}

export default App
