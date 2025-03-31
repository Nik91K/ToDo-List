import { useState } from 'react'
import Header from './components/header/header'
import ToDoList from'./components/mainPage/mainPage'
import './App.css'

const App = () => {

  return (
    <>
      <Header userName='User' />
      <div className='todo-list'>
        <ToDoList />
      </div>
    </>
  )
}

export default App
