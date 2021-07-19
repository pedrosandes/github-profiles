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
  const [viewProfileSearch, setViewProfileSearch] = useState(false)
  const [viewInitialPage, setInitialPage] = useState(true)

  const viewProfileState = (res) => {
    if (res.message === 'Not Found') {
      setInitialPage(true)
      setViewProfileSearch(false)
    } else {
      setInitialPage(false)
      setViewProfileSearch(true)
      fetchRepository()
    }
  }

  const fetchData = async () => {
    const data = await fetch(`https://api.github.com/users/${inputName}`)
    const response = await data.json()
    viewProfileState(response)
    setUser(response) 
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
            <Button onClick={fetchData}/>
          </div> 
        </header>
        {viewInitialPage && <InitialPage />}
        {viewProfileSearch && <Profile data={user} repositorys={repositorys}/>}  
        <Footer />
      </>
  )
}

export default App
