import React, { useState } from 'react'
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'
import '../CSS/nav.css'
import {
  ContainerSVG,
  Input,
  NavContainer,
  NavTitle,
  SvgButtons,
  StyledTooltip,
} from './StyledComponents'
import { CollapseNav, ExpandNav } from './svg/SvgComponents'

export default function Navigation() {
  const [isActive, setActive] = useState('false')

  const toggle = () => {
    setActive(!isActive)
  }

  return (
    <div>
      {isActive ? (
        <NavContainer>
          <NavTitle>
            <div>ОТСЛЕЖИВАЕМЫЕ КАНАЛЫ</div>
            <StyledTooltip title='Свернуть' placement='right' arrow>
              <SvgButtons onClick={toggle}>
                <ContainerSVG>
                  <CollapseNav />
                </ContainerSVG>
              </SvgButtons>
            </StyledTooltip>
          </NavTitle>
          <div
            style={{
              textAlign: 'center',
              maxHeight: '785px',
            }}
          >
            <SimpleBar style={{ maxHeight: 'inherit' }}>
              <div> </div>
            </SimpleBar>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'fixed',
              bottom: '0px',
              borderTop: '1px solid grey',
              width: '240px',
              height: '50px',
              backgroundColor: 'transparent',
            }}
          >
            <Input
              width='210px'
              height='20px'
              fontsize='15px'
              placeholder='Найти и добавить друзей'
            />
          </div>
        </NavContainer>
      ) : (
        <StyledTooltip title='Развернуть' placement='right' arrow>
          <SvgButtons
            style={{
              marginTop: '60px',
            }}
            onClick={toggle}
          >
            <ContainerSVG>
              <ExpandNav />
            </ContainerSVG>
          </SvgButtons>
        </StyledTooltip>
      )}
    </div>
  )
}
