import React, { useState, useRef, useCallback } from 'react'
import Badge from '@material-ui/core/Badge'
import Avatar from '@material-ui/core/Avatar'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useSelector, useDispatch } from 'react-redux'
import { ContainerProfile } from './StyledComponents'
import AccountMenu from './AccountMenu'

const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: '#44b700',
    color: '#44b700',
  },
}))(Badge)

export default function UserAvatar() {
  const ref = useRef(null)
  const [active, setActive] = useState(false)
  const { auth } = useSelector((state) => state.authorize.FRB)
  const [user] = useAuthState(auth)

  const accmenuHandlder = () => {
    setActive(!active)
  }

  return (
    <div>
      <ContainerProfile>
        <StyledBadge
          overlap='circle'
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          variant='dot'
        >
          <button
            type='button'
            style={{
              backgroundColor: 'transparent',
              outline: 'none',
              borderStyle: 'none',
              cursor: 'pointer',
              width: 'inherit',
              height: 'inherit',
            }}
            onClick={accmenuHandlder}
          >
            <Avatar
              alt='Remy Sharp'
              src={user.photoURL}
              style={{
                height: '30px',
                width: '30px',
              }}
            />
          </button>
        </StyledBadge>
      </ContainerProfile>
      {active && <AccountMenu ref={ref} />}
    </div>
  )
}
