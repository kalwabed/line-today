import { styled } from '@stitches/react'

const Wrapper = styled('section', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '1rem auto'
})

const Layout = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}

export default Layout
