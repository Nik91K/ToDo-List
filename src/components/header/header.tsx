import { useState } from 'react'
import GetGreeting from './greetingsTypes/greetingsTypes'
import './header.css'

const Header = (props: 
    { 
        userName: string 
    }
) => {

  return (
    <>
      <h2 className="greetings-h2">{GetGreeting()}, {props.userName}!</h2>
    </>
  )
}

export default Header