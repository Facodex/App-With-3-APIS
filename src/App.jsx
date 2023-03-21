import { Route, Routes } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Home } from './components/Home'
import { JsonP } from './components/JsonP'
import { Poke } from './components/Poke'
import { Reqres } from './components/Reqres'

function App() {

  return (
    <div className="App">

      <Header/>

      <div className="container">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/pokeapi' element={<Poke/>}/>
          <Route path='/jsonplaceholder' element={<JsonP/>}/>
          <Route path='/reqres' element={<Reqres/>}/>
          <Route path='*' element={<Home/>}/>
        </Routes>
      </div>

      <Footer/>

    </div>
  )
}

export default App
