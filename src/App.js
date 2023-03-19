import logo from './logo.svg'
import './App.css'
import { createContext, useState } from 'react'
import ChildComponentForContext from './ChildComponentForContext'

export const DataContext = createContext(null)

function App() {
  const [count, setcount] = useState(1)
  return (
    <DataContext.Provider value={{ count, setcount }}>
      <div className='App'>
        <ChildComponentForContext />
        <header className='App-header'>
          <img
            src={logo}
            className='App-logo'
            alt='logo'
          />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'>
            Learn React
          </a>
        </header>
      </div>{' '}
    </DataContext.Provider>
  )
}

export default App
