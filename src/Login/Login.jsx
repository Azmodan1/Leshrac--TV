import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import { ButtonClose } from '../components/StyledComponents'

const Login = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  isValid,
  handleSubmit,
  dirty,
}) => {
  return (
    <>
      <br />
      <label>
        Имя пользователя
        <Input
          type='text'
          name='name'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.name}
        />
      </label>
      {touched.name && errors.name && <span>{errors.name}</span>}
      <br />
      <label>
        Пароль
        <Input
          type='password'
          name='password'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
        />
      </label>
      {touched.password && errors.password && <span>{errors.password}</span>}
      <br />
      <BtnReg width='365px' disabled={!isValid && !dirty} onClick={handleSubmit} type='submit'>
        Войти
      </BtnReg>
    </>
  )
}

Login.propTypes = {
  values: PropTypes.objectOf.isRequired,
  errors: PropTypes.objectOf.isRequired,
  touched: PropTypes.objectOf.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  isValid: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  dirty: PropTypes.bool.isRequired,
}

export default Login
