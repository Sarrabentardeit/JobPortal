      import React from 'react'
      import { Route, Routes }from 'react-router-dom'
      import Home from './pages/Home'
      import ApplyJob from './pages/ApplyJob'
      import Application from './pages/Application'
      const App = () => {
        return (
          <div>
            <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/apply-job/:id' element={<ApplyJob/>}></Route>
            <Route path='/applications' element={<Application/>}></Route>


            </Routes>
          </div>
        )
      }

      export default App