import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./Home";
import Writeups from "./Writeups";
import Team from "./Team";
import Resources from "./Resources";
import Blog from "./Blog";
import Writeup from "./components/Writeup"

function App() {
  return (
    <div>
      <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/writeups" element={<Writeups/>}/>
        <Route path="/writeups/FunnyLogin" element={<Writeup title="FunnyLogin CTF" date="11/25/2023" source="../../src/assets/FunnyLogin.pdf"/>}/>
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
