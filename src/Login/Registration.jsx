import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'

import { Input, BtnReg, Button, ButtonClose } from '../components/StyledComponents'

const Registration = ({
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
          width='350px'
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
          width='350px'
          type='password'
          name='password'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
        />
      </label>
      {touched.password && errors.password && <span>{errors.password}</span>}
      <br />
      <label>
        Подтвердите пароль
        <Input
          width='350px'
          type='password'
          name='confirmPassword'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.confirmPassword}
        />
      </label>
      {touched.confirmPassword && errors.confirmPassword && <span>{errors.confirmPassword}</span>}
      <br />
      <BtnReg width='359px' disabled={!isValid && !dirty} onClick={handleSubmit} type='submit'>
        Зарегистрироваться
      </BtnReg>
    </>
  )
}

Registration.propTypes = {
  values: PropTypes.objectOf.isRequired,
  errors: PropTypes.objectOf.isRequired,
  touched: PropTypes.objectOf.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  isValid: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  dirty: PropTypes.bool.isRequired,
}

export default Registration
