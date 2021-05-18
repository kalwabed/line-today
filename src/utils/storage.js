const KEY = 'bookmarks'
const storage = localStorage

/**
 *
 * @param props - {title, publisher, postId, url}
 *
 */
export const create = props => {
  const { postId, title, publisher, url } = props
  const str = get()
  str.push({ publisher, postId, title, url: url.url })
  storage.setItem(KEY, JSON.stringify(str))
}

const get = () => {
  const items = storage.getItem(KEY) || []
  return JSON.parse(items)
}

const remove = postId => {
  const result = get().filter(bookmark => bookmark.postId !== postId)
  storage.removeItem(KEY)
}
