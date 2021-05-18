const KEY = 'bookmarks'
const storage = localStorage

/**
 *
 * @param props - {title, publisher, postId, url}
 *
 */
export const create = props => {
  const { title, publisher, url, postId } = props
  const str = getDataFromStorage()
  str.push({ publisher, postId, title, url: url })
  storage.setItem(KEY, JSON.stringify(str))
}

export const getDataFromStorage = () => {
  const items = storage.getItem(KEY)
  return items ? JSON.parse(items) : []
}

export const removeBookmark = postId => {
  const result = getDataFromStorage().filter(bookmark => bookmark.postId !== postId)
  storage.setItem(KEY, JSON.stringify(result))
  return result
}
