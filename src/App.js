import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './components/Home'



// new functional components 
import ThreeWordsHeader from './components/ThreeWordsHeader'
import DannyBrown from './components/DannyBrown'
import HasanAbi from './components/HasanAbi'
import MaryKate from './components/MaryKate'
import Explore from './components/Explore'

function App() {
  return (
    <div className="container">
      
      <BrowserRouter>
        <ThreeWordsHeader />
        <Navigation />
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/dannybrown" element={<DannyBrown/>}/>
            <Route path="/hasanpiker" element={<HasanAbi/>}/>
            <Route path="/marykateolsen" element={<MaryKate/>}/>
            <Route path="/explore" element={<Explore/>}/>
          </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
