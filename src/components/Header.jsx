import React, { useRef, useState } from 'react'
import firebase from 'firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useDispatch, useSelector } from 'react-redux'

import { changeStream } from '../redux/action'
import UserAvatar from './UserAccount'

import '../CSS/header.css'
import leshrac from '../images/leshrac.png'

import { Crown, Direct, Notifications, Bits, MoreInfo, UserIcon } from './svg/SvgComponents'

import {
  SvgButtons,
  Input,
  BtnReg,
  BtnLogin,
  ContainerSVG,
  BitsButton,
  StyledTooltip,
} from './StyledComponents'

export default function Header() {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()
  const InputEl = useRef(null)
  const { auth } = useSelector(state => state.authorize.FRB)
  const [user] = useAuthState(auth)

  const logining = async () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    await auth.signInWithPopup(provider)
  }

  const newStream = event => {
    const text = value
    if (event.key === 'Enter') {
      if (text === '') {
        InputEl.current.blur()
      } else {
        dispatch(changeStream(text))
        setValue('')
      }
    }
  }

  const handleChange = e => setValue(e.target.value)

  return (
    <div className='Header'>
      <div className='header_left'>
        <div>
          <img src={leshrac} width='auto' height='80px' alt='leshrac' />
        </div>
        <h4>Отслеживаемое</h4>
        <h4>Просмотр</h4>
        <StyledTooltip title='Больше' arrow>
          <SvgButtons>
            <ContainerSVG>
              <MoreInfo />
            </ContainerSVG>
          </SvgButtons>
        </StyledTooltip>
      </div>
      <div className='header_center'>
        <Input
          ref={InputEl}
          value={value}
          placeholder='Поиск'
          onChange={handleChange}
          onKeyPress={newStream}
        />
      </div>
      <div className='header_right'>
        <StyledTooltip title='Новые трофеи для Prime' arrow>
          <SvgButtons>
            <ContainerSVG>
              <Crown />
            </ContainerSVG>
          </SvgButtons>
        </StyledTooltip>
        {user ? (
          <>
            <StyledTooltip title='Уведомления' arrow>
              <SvgButtons>
                <ContainerSVG>
                  <Notifications />
                </ContainerSVG>
              </SvgButtons>
            </StyledTooltip>

            <StyledTooltip title='Личные сообщения' arrow>
              <SvgButtons onClick={() => auth.signOut()}>
                <ContainerSVG>
                  <Direct />
                </ContainerSVG>
              </SvgButtons>
            </StyledTooltip>

            <BitsButton>
              <ContainerSVG>
                <Bits />
              </ContainerSVG>
              <h6> Купить Bits</h6>
            </BitsButton>
            <UserAvatar />
          </>
        ) : (
          <div
            style={{
              width: '240px',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <BtnLogin onClick={logining}>Войти через Google</BtnLogin>
            <BtnReg>Регистрация</BtnReg>

            <SvgButtons>
              <ContainerSVG>
                <UserIcon />
              </ContainerSVG>
            </SvgButtons>
          </div>
        )}
      </div>
    </div>
  )
}
