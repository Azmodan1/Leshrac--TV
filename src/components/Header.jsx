import React, { Fragment, useRef, useState } from 'react';
import firebase from 'firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useDispatch, useSelector } from 'react-redux';
import { changeStream } from '../redux/action';
import Notifications from './svg/SvgNotifications';
import Direct from './svg/SvgDirect';
import Bits from './svg/SvgBits';
import SvgUser from './svg/SvgUser';
import leshrac from '../images/leshrac.png';
import Crown from './svg/SvgCrown';
import SvgMore from './svg/SvgMore';
import '../CSS/header.css';
import UserAvatar from './UserAccount';
import { SvgButtons, Input, BtnReg, BtnLogin } from './StyledComponents';

export default function Header() {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const InputEl = useRef(null);
  const { auth } = useSelector((state) => state.authorize.FRB);
  const [user] = useAuthState(auth);

  const logining = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const { user } = await auth.signInWithPopup(provider);
  };

  const newStream = (event) => {
    const text = value;
    if (event.key === 'Enter') {
      if (text === '') {
        InputEl.current.blur();
      } else {
        dispatch(changeStream(text));
        setValue('');
      }
    }
  };

  const handleChange = (e) => setValue(e.target.value);

  return (
    <div className="Header">
      <div className="header_left">
        <div>
          <img src={leshrac} width="auto" height="80px" alt="leshrac" />{' '}
        </div>
        <h4>Отслеживаемое</h4>
        <h4>Просмотр</h4>
        <SvgButtons>
          <SvgMore />
        </SvgButtons>
      </div>
      <div className="header_center">
        <Input
          ref={InputEl}
          value={value}
          placeholder="Поиск"
          onChange={handleChange}
          onKeyPress={newStream}
        ></Input>
      </div>
      <div className="header_right">
        <SvgButtons>
          <Crown />
        </SvgButtons>
        {user ? (
          <>
            <SvgButtons>
              <Notifications />
            </SvgButtons>

            <SvgButtons onClick={() => auth.signOut()}>
              <Direct />
            </SvgButtons>

            <Bits />
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
              <SvgUser />
            </SvgButtons>
          </div>
        )}
      </div>
    </div>
  );
}
