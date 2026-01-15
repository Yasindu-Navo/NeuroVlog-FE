import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import BlogPage from './pages/BlogPage'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/blog' element={<BlogPage/>} />
      </Routes>
    </div>
  )
}

export default App