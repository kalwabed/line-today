import { useEffect, useState, lazy, Suspense } from 'react'
import { Link } from '@reach/router'
import { styled } from '@stitches/react'

import { getAllData } from '../utils/api'
import Card from '../components/Card'
import Layout from '../components/Layout'
import Container from '../components/Container'
import { create } from '../utils/storage'

const Home = () => {
  const [categories, setCategories] = useState()

  useEffect(() => {
    async function getData() {
      const res = await getAllData()
      setCategories(res.result.categories)
    }
    getData()
  }, [])

  const addBookmarkHandler = props => {
    create(props)
  }

  return (
    <Layout>
      <p>Home page</p>
      <Link to="bookmarks">my bookmarks</Link>
      <Container>
        {!categories && <p>loading...</p>}
        {categories?.map(
          (cat, index) =>
            index === 1 && // to reduce browser load, load only categories with an index 1
            cat.templates.map(temp =>
              temp.sections[0].articles?.map(article => (
                <Card {...article} key={article.postId || article.id} variant="create" handler={addBookmarkHandler} />
              ))
            )
        )}
      </Container>
    </Layout>
  )
}

export default Home
