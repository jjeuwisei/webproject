import './App.css'
import Sidebar from './components/Sidebar.jsx'
import Feed from './components/Feed.jsx'
import RightPanel from './components/RightPanel.jsx'
import Game from './components/Game.jsx'
import Front from './components/Front.jsx'
import Projects from './components/Projects.jsx'
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <div className='layout'>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Feed endpoint="/"/>} />
          <Route path="/projects" element={<Feed endpoint="/api/projects" />} />
          <Route path="/me" element={<Feed endpoint="/api/me" />} />
        </Routes>
          <RightPanel />
      </div>
    </BrowserRouter>
  );
}

export default App
