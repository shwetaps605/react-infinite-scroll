import React, { useEffect, useState } from 'react'

const CardList = () => {
  const [characters, setCharacters] = useState([]);
  const [pageInfo, setPageInfo] = useState(null);

  useEffect(()=>{
    const baseUrl = "https://rickandmortyapi.com/api"
    async function fetchData() {
      await fetch(`${baseUrl}/character`)
      .then(res => res.json())
      .then(data => {
        setCharacters(prev => [...data.results])
        setPageInfo(data.info)
      })
    }
    fetchData();
  },[])

  console.log(pageInfo)
  return (
    <div>
      {characters.map(character => <p key={character.id}>{character.name}</p>)}
    </div>
  )
}

export default CardList