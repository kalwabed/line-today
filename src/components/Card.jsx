import { styled } from '@stitches/react'
import { memo } from 'react'

import { create, removeBookmark } from '../utils/storage'

const _Card = styled('div', {
  overflow: 'hidden',
  width: '100%',
  marginTop: '10px',
  borderRadius: '.25rem',
  boxShadow: '0 1px 2px 0 rgba(0,0,0,0.06), 0 1px 2px 0 rgba(0,0,0,0.06)',
  backgroundColor: 'white',
  padding: '1rem',
  display: 'flex',
  '&:hover': {
    backgroundColor: 'rgba(229,231,235)'
  },
  '& img': {
    borderRadius: '.25rem',
    height: '100%'
  },
  '& .title': {
    fontSize: '1.125rem',
    margin: 0,
    lineHeight: '1.75rem'
  },
  '& .source': {
    color: '#6B7280'
  }
})

const Column = styled('div', {
  display: 'flex',
  marginLeft: '.8rem',
  width: '70%',
  flexDirection: 'column'
})

const Button = styled('button', {
  padding: '.75rem',
  cursor: 'pointer',
  height: '.5rem',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '.25rem',
  width: '20%',
  transitionProperty: 'background-color',
  transitionDuration: '200ms',
  outline: 'none',
  '&:hover': {
    backgroundColor: '#d4d1d1'
  }
})

const Card = props => {
  if (!props?.title) {
    return null
  }

  return (
    <_Card>
      <img src={`https://picsum.photos/seed/${props.url?.hash}/100/150`} alt="random" width="100" height="80" />
      <Column>
        <a href={props.url?.url} className="title">
          {props.title}
        </a>
        <p className="source">{props.publisher}</p>
        {props.variant === 'create' ? (
          <Button onClick={() => props.handler(props)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000000" viewBox="0 0 256 256">
              <rect width="256" height="256" fill="none"></rect>
              <path
                d="M192,224l-64.0074-40L64,224V48a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8Z"
                fill="none"
                stroke="#000000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              ></path>
            </svg>
          </Button>
        ) : (
          <Button onClick={() => props.handler(props.postId)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000000" viewBox="0 0 256 256">
              <rect width="256" height="256" fill="none"></rect>
              <line
                x1="215.99609"
                y1="56"
                x2="39.99609"
                y2="56.00005"
                fill="none"
                stroke="#000000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              ></line>
              <line
                x1="88"
                y1="24"
                x2="168"
                y2="24"
                fill="none"
                stroke="#000000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              ></line>
              <path
                d="M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56"
                fill="none"
                stroke="#000000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              ></path>
            </svg>
          </Button>
        )}
      </Column>
    </_Card>
  )
}

export default memo(Card)
