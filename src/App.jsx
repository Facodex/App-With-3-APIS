import { Footer } from './components/Footer'
import { Header } from './components/Header'
import './App.css';
import { PrincipalRouter } from './routes/PrincipalRouter';

function App() {

  return (
    <div className="App">

      <Header/>

      <div className="container h-100">
        <PrincipalRouter/>
      </div>
      
      <Footer className='navbar navbar-fixed-bottom'/>

    </div>
  )
}

export default App;
