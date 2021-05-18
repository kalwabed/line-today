import { styled } from '@stitches/react'

const _Container = styled('div', {
  maxWidth: '42rem',
  margin: '.5rem auto'
})

const Container = ({ children }) => {
  return <_Container>{children}</_Container>
}

export default Container
