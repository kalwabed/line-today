import { useEffect, useState, lazy, Suspense } from 'react'
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
      setCategories(res.result.categories)
    }
    getData()
  }, [])

  return (
    <Wrapper>
      <p>Home page</p>
      <Link to="bookmarks">my bookmarks</Link>
      <Container>
        {!categories && <p>loading...</p>}
        {categories &&
          categories.map(cat =>
            cat.templates.map(temp =>
              temp.sections[0].articles?.map(article => <Card {...article} key={article.postId} />)
            )
          )}
      </Container>
    </Wrapper>
  )
}

export default Home
