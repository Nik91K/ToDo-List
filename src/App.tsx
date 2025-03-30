import { useState } from 'react'
import Header from './components/header/header'
import ToDoList from'./components/mainPage/mainPage'
import './App.css'

const App = () => {

  return (
    <>
      <Header userName='User' />
      <ToDoList />
    </>
  )
}

export default App
