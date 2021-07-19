import React from 'react'
import { useState } from 'react'
import SearchInput from './components/shared/searchInput/index'
import Button from './components/shared/button/index'
import Profile from './components/shared/profile/index'

const App = () => {

  const [inputName, setInputName] = useState('')
  const [user, setUser] = useState([])
  const [stateSearch, setStateSearch] = useState(false)
  
  const fetchData = async () => {
    const data = await fetch(`https://api.github.com/users/${inputName}`)
    const response = await data.json()
    setUser([response])
    setStateSearch(true)
  }
  
  console.log(stateSearch)

  return (
    <>
      <SearchInput onChange={(e) => setInputName(e.target.value)} />
      <Button onClick={() => fetchData()}/> 
      <button onClick={() => console.log(inputName, user)}>Verificar</button>
      {stateSearch && <Profile data={user}/>}  
    </>
  )
}

export default App
