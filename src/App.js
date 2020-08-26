import React, { useState } from 'react'
import './App.scss'
import { Nav } from './components/Nav'
import Results from './components/Results'
import { requests } from './api/requests'
import 'antd/dist/antd.css';

function App() {
  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending)
  return (
    <div className='app'>
      <Nav setSelectedOption={setSelectedOption} />
      <Results selectedOption={selectedOption} />
    </div>
  )
}

export default App
