import React from 'react'
import Header from '../Header'
import TinderCards from '../TinderCards'
import SwipeButtons from '../SwipeButtons'
import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie'
import axios from 'axios'

const Dashboard = () => {

  const [user, setUser] = useState(null)
  const [cookies, setCookie, removeCookie] = useCookies(['user'])
 
  const userId = cookies.UserId

  const getUser = async () => {
    try {
        const response = await axios.get('http://localhost:8000/user', {
            params: {userId}
        })
        setUser(response.data)
    } catch (error) {
        console.log(error)
    }
}

useEffect(() => {
  getUser()

}, [])
console.log('user',user)


  return (
    <div>
          <Header/>
           <TinderCards />
           <SwipeButtons />

    </div>
  )
}

export default Dashboard
