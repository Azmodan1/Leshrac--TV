import React from 'react'
import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux'
import { ContainerStyles } from './StyledComponents'

export default function ContainerContent() {
  const url = useSelector((state) => state.url.url)

  return (
    <ContainerStyles>
      <ReactPlayer
        style={{
          paddingTop: '50px',
        }}
        width="inherit"
        height="770px"
        url={url}
      />
    </ContainerStyles>
  )
}
