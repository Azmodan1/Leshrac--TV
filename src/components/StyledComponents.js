import styled from 'styled-components'

export const ContainerSVG = styled.svg`
  height: 18px;
  width: 18px;
  fill: ${(props) => props.fill || 'aqua'};
`

export const ContainerStyles = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgb(14, 14, 16);
`
export const ContainerProfile = styled.div`
  height: 40px;
  width: 40px;
  text-align: center;
`

export const AccountMenuStyles = styled.div`
  position: absolute;
  border-radius: 6px;
  width: 275px;
  height: 630px;
  background-color: rgb(24, 24, 27);
  right: 30px;
  z-index: 3000;
`

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 56px;
  font-size: 10px;
  color: white;
  width: 320px;
  height: 100vh;
  background-color: rgb(31, 31, 35);
`

export const NavTitle = styled(ChatContainer)`
  padding: 0;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 240px;
  height: 48px;
`

export const NavContainer = styled(ChatContainer)`
  width: 240px;
`

export const Input = styled.input.attrs((props) => ({
  width: props.width || '359px',
  height: props.height || '33px',
  fontSize: props.fontsize || '20px',
}))`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size: ${(props) => props.fontSize};
  border: solid grey;
  background-color: dimgray;
  border-radius: 5px;
  color: white;
  &::placeholder {
    color: white;
    padding: 10px;
    font-size: 15px;
  }

  &:focus {
    outline: none;
    border-color: aqua;
    background-color: black;
  }
`

export const Button = styled.button`
  outline: none;
  cursor: pointer;
  border-style: none;
  border-radius: 5px;
  &:hover {
    background-color: rgb(70, 70, 73);
  }
`

export const SvgButtons = styled(Button)`
  width: 32px;
  height: 32px;
  background-color: transparent;
  &:hover {
    background-color: grey;
  }
`
export const BitsButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: rgb(58, 58, 61);
  color: white;
  width: 130px;
  height: 30px;
`
export const BtnLogin = styled(Button)`
  width: 90px;
  height: 30px;
  background-color: rgb(58, 58, 61);
  color: white;
`
export const BtnReg = styled(Button)`
  width: ${(props) => props.width || '100px'};
  height: 30px;
  background-color: aqua;
  color: black;
  &:hover {
    background-color: rgb(15, 221, 221);
  }
  &:active {
    background-color: rgb(15, 100, 221);
  }
`
