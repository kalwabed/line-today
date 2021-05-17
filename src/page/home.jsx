import { useEffect, useState } from 'react'
import { Link } from '@reach/router'
import { styled } from '@stitches/react'
import { getAllData } from '../utils/api'
import Card from '../components/Card'

const Wrapper = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '1rem auto'
})

const Container = styled('div', {
  maxWidth: '42rem',
  margin: '.5rem auto'
})

const Home = () => {
  const [categories, setCategories] = useState()

  useEffect(() => {
    async function getData() {
      const res = await getAllData()
      console.log(res.result)
      return res.result
    }
    getData()
  }, [])

  return (
    <Wrapper>
      <p>Home page</p>
      <Link to="bookmarks">to Bookmarks</Link>
      <Container>
        <Card />
        <Card />
      </Container>
    </Wrapper>
  )
}

export default Home
