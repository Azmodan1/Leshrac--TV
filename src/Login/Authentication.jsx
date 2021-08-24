import React from 'react'
import { Formik } from 'formik'
import { useHistory } from 'react-router-dom'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import {
  ModalContainer,
  ModalContent,
  ModalWrapper,
  Title,
  Toggler,
  ButtonClose,
  StyledTabs,
} from '../components/StyledComponents'
import { validationSchema } from './validate'
import Registration from './Registration'

const Authentication = () => {
  const [value, setValue] = React.useState(0)

  const changer = (event, newValue) => {
    setValue(newValue)
  }

  const router = useHistory()
  return (
    <Formik
      initialValues={{
        name: '',
        password: '',
        confirmPassword: '',
      }}
      validateOnBlur
      onSubmit={values => console.log(values)}
      validationSchema={validationSchema}
    >
      {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => {
        return (
          <ModalWrapper>
            <ModalContainer>
              <ButtonClose color='aqua' onClick={() => router.push('/')}>
                Закрыть
              </ButtonClose>
              <ModalContent>
                <Title> Присоединяйтесь к Leshrac TV </Title>
                <StyledTabs
                  indicatorColor='secondary'
                  value={value}
                  ohChange={changer}
                  aria-label='simple tabs example'
                >
                  <Tab label='Войти' />
                  <Tab label='Регистрация' />
                </StyledTabs>
                <br />
                <Registration
                  values={values}
                  errors={errors}
                  touched={touched}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  isValid={isValid}
                  handleSubmit={handleSubmit}
                  dirty={dirty}
                />
              </ModalContent>
            </ModalContainer>
          </ModalWrapper>
        )
      }}
    </Formik>
  )
}

export default Authentication
