import './App.css'
import { Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage'
import Game from './components/Game'

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/play' element={<Game />} />
      </Routes>
    </div>
  )
}

export default App
