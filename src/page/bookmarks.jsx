import { Link } from '@reach/router'
import { useEffect, useState } from 'react'
import Card from '../components/Card'
import Container from '../components/Container'
import Layout from '../components/Layout'
import { getDataFromStorage, removeBookmark } from '../utils/storage'

const Bookmarks = () => {
  const [bookmarks, setBookmarks] = useState([])

  useEffect(() => {
    setBookmarks(getDataFromStorage())
  }, [])

  const removeHandler = postId => {
    const result = removeBookmark(postId)
    setBookmarks(result)
  }

  return (
    <Layout>
      <p>My bookmarks</p>
      <Link to="/">go home</Link>
      <Container>
        {bookmarks?.length === 0 && <p>empty</p>}
        {bookmarks?.map(bm => (
          <Card {...bm} variant="remove" key={bm.postId || bm.url.url} handler={removeHandler} />
        ))}
      </Container>
    </Layout>
  )
}

export default Bookmarks
