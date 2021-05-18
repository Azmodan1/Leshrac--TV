import React, { useState } from 'react';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import '../CSS/Chat.css';
import UsersList from './svg/SvgUsersInChat';
import CollapseChat from './svg/SvgCollapseChat';
import ExpandChat from './svg/SvgExpandChat';
import firebase from 'firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import {
  BtnReg,
  ChatContainer,
  ContainerSVG,
  Input,
  SvgButtons,
} from './StyledComponents';
import { useSelector } from 'react-redux';
import {
  default as Chatislav,
  Same,
} from '!svg-react-loader!../images/crown.svg';

export default function Chat() {
  const { auth, firestore } = useSelector((state) => state.authorize.FRB);
  const [user] = useAuthState(auth);
  const [value, setValue] = useState('');
  const [messages] = useCollectionData(
    firestore.collection('messages').orderBy('createdAt')
  );
  const [isActive, setActive] = useState(true);

  const handleChange = (e) => setValue(e.target.value);

  const sendMessage = async () => {
    firestore.collection('messages').add({
      uid: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
      text: value,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setValue('');
  };

  const deleteChat = () => {
    firestore.collection('messages').doc().delete();
  };

  const toggle = () => {
    setActive(!isActive);
  };
  console.log(messages);
  return (
    <div>
      {isActive ? (
        <ChatContainer>
          <div className="chat_title">
            <SvgButtons onClick={toggle}>
              <CollapseChat />
            </SvgButtons>
            <div>ЧАТ</div>
            <SvgButtons>
              <UsersList />
            </SvgButtons>
          </div>
          <div
            style={{
              textAlign: 'center',
              paddingTop: '60px',
              maxHeight: '765px',
            }}
          >
            <SimpleBar style={{ maxHeight: 'inherit' }}>
              <div>
                {messages?.map((message) => (
                  <div>
                    <div>{message.displayName} </div>
                    <div> {message.text}</div>
                  </div>
                ))}
              </div>
            </SimpleBar>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'fixed',
              bottom: '0px',
              width: '320px',
              height: '130px',
              backgroundColor: 'transparent',
            }}
          >
            <Input
              value={value}
              onChange={handleChange}
              width="290px"
              fonsize="15px"
              placeholder="Написать сообщение"
            ></Input>
            <div
              style={{
                width: '300px',
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '10px',
              }}
            >
              <BtnReg width="40px" onClick={sendMessage}>
                ЧАТ
              </BtnReg>
              <BtnReg width="60px" onClick={deleteChat}>
                Удалить
              </BtnReg>
              <SvgButtons>
                <ContainerSVG>
                  <Chatislav />
                </ContainerSVG>
              </SvgButtons>
            </div>
          </div>
        </ChatContainer>
      ) : (
        <SvgButtons
          style={{
            marginTop: '60px',
            position: 'absolute',
            top: '0px',
            right: '0px',
            zIndex: 100000,
          }}
          onClick={toggle}
        >
          <ExpandChat />
        </SvgButtons>
      )}
    </div>
  );
}
