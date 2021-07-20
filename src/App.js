import React from 'react'
import { useState } from 'react'
import SearchInput from './components/shared/searchInput/index'
import Button from './components/shared/button/index'
import Profile from './components/shared/profile/index'
import InitialPage from './components/shared/initialPage/index'
import Footer from './components/shared/footer/index'
import './App.css'

const App = () => {

  const [inputName, setInputName] = useState('')
  const [user, setUser] = useState({})
  const [repositorys, setRepositorys] = useState([])

  const viewProfileState = (res) => {
    if (res.message === 'Not Found') {
      setUser({})
    } else {
      setUser(res)
      fetchRepository()
    }
  }

  const fetchData = async () => {
    const data = await fetch(`https://api.github.com/users/${inputName}`)
    const response = await data.json()
    viewProfileState(response)
  }

  const fetchRepository = async () => {
      const data = await fetch(`https://api.github.com/users/${inputName}/repos`)
      const response = await data.json()
      const responseFilter = response.slice(0,6)
      setRepositorys(responseFilter)     
  }

  return (
      <>
        <header className="bg-header">
          <div className="container">
            <SearchInput onChange={(e) => setInputName(e.target.value)} />
            <Button onClick={fetchData}>Procurar</Button>
          </div> 
        </header>
        {user.id 
        ? <Profile data={user} repositorys={repositorys} /> 
        : <InitialPage />} 
        <Footer />
      </>
  )
}

export default App
