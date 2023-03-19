import React, { useContext } from 'react'
import { DataContext } from './App'

export default function ChildComponentForContext() {
  const { count, setcount } = useContext(DataContext)
  return (
    <div>
      <h1>ChildComponentForContext</h1>
      data={count}
      <button
        onClick={() => {
          setcount(10000)
        }}>
        add
      </button>
    </div>
  )
}
