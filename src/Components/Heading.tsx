import React from 'react'

interface Props {
    "heading": string
}

const Heading = ({heading} : Props) => {
  return (
    <h1 className='heading'>{heading}</h1>
  )
}

export default Heading