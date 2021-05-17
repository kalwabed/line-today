import React, { useEffect, useState } from 'react'
import { Link } from '@reach/router'
import { styled } from '@stitches/react'
import { getAllData } from '../utils/api'

const Wrapper = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '1rem auto'
})

const Home = () => {
  const [data, setData] = useState()

  useEffect(() => {
    async function getData() {
      const result = await getAllData()
      console.log(result)
      return result
    }
    getData()
  }, [])

  return (
    <Wrapper>
      <p>Home page</p>
      <Link to="bookmarks">to Bookmarks</Link>
    </Wrapper>
  )
}

export default Home
