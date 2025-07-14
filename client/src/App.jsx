      import React, { useContext } from 'react'
      import { Route, Routes }from 'react-router-dom'
      import Home from './pages/Home'
      import ApplyJob from './pages/ApplyJob'
      import Application from './pages/Application'
import RecruiterLogin from './components/RecruiterLogin'
import { AppContexte } from './context/AppContext'
      const App = () => {
        const {showRecruiterLogin} = useContext(AppContexte)
        return (
          <div>
            {showRecruiterLogin && <RecruiterLogin /> }
            <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/apply-job/:id' element={<ApplyJob/>}></Route>
            <Route path='/applications' element={<Application/>}></Route>


            </Routes>
          </div>
        )
      }

      export default App