import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import NavBar from './components/NavBar';
import One from './components/one'
import Two from './components/Two'
import Three from './components/Three'
import Four from './components/Four'
import Five from './components/Five'
import Six from './components/Six'
import Seven from './components/Seven'
import Eight from './components/Eight'
import Nine from './components/Nine'
import Ten from './components/Ten'
import Eleven from './components/Eleven';
import Twelve from './components/Twelve';
import Thirteen from './components/Thirteen';
import Fourteen from './components/Fourteen';
import Fifteen from './components/Fifteen';
import Sixteen from './components/Sixteen';
import Seventeen from './components/Seventeen';
import Eighteen from './components/Eighteen';
import Nineteen from './components/Nineteen';
import Twenty from './components/Twenty';
import TwentyOne from './components/TwentyOne';
import TwentyTwo from './components/TwentyTwo';
import TwentyThree from './components/TwentyThree';
import TwentyFour from './components/TwentyFour';
import TwentyFive from './components/TwentyFive';

function App() {
  return (<>
    <BrowserRouter basename='scroll-charrette'>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/one" element={<One />} />
        <Route path="/two" element={<Two />} />
        <Route path="/three" element={<Three />} />
        <Route path="/four" element={<Four />} />
        <Route path="/five" element={<Five />} />
        <Route path="/six" element={<Six />} />
        <Route path="/seven" element={<Seven />} />
        <Route path="/eight" element={<Eight />} />
        <Route path="/nine" element={<Nine />} />
        <Route path="/ten" element={<Ten />} />
        <Route path="/eleven" element={<Eleven />} />
        <Route path="/twelve" element={<Twelve />} />
        <Route path="/thirteen" element={<Thirteen />} />
        <Route path="/fourteen" element={<Fourteen />} />
        <Route path="/fifteen" element={<Fifteen />} />
        <Route path="/sixteen" element={<Sixteen />} />
        <Route path="/seventeen" element={<Seventeen />} />
        <Route path="/eighteen" element={<Eighteen />} />
        <Route path="/nineteen" element={<Nineteen />} />
        <Route path="/twenty" element={<Twenty />} />
        <Route path="/twentyone" element={<TwentyOne />} />
        <Route path="/twentytwo" element={<TwentyTwo />} />
        <Route path="/twentythree" element={<TwentyThree />} />
        <Route path="/twentyfour" element={<TwentyFour />} />
        <Route path="/twentyfive" element={<TwentyFive />} />

      </Routes>
    </BrowserRouter>
    </>);
}

export default App;
