import './assets/css/App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

//import { Session } from './pages/Session/Session'
//import { MyProvider } from './contexts/UserDataContext'

import { Home } from './pages/Home/Home'
import { Characters } from './pages/Characters/Characters'


function App() {

  return (
    <>
      {/*<MyProvider>*/}
    {/* BrowserRouter -> Activando la funcionalidad de Enrutamiento*/}
      <BrowserRouter>
          {/* Routes -> Definir rutas */}
          <Routes>
            {/* Route -> Generamos todas las rutas que necesitemos */ }
            <Route  path='/' element={<Home />}/>
            {/* <Route  path='/session' element={<Session />}/> */}
            <Route path='/Characters' element={<Characters />}/>
          
          </Routes>
      </BrowserRouter>
      {/*</MyProvider>*/}
    </>
  )
}

export default App
