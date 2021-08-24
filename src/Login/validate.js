import * as yup from 'yup'

export const validationSchema = yup.object().shape({
  name: yup.string().typeError('Должно быть строкой').required('Обязательно'),
  password: yup.string().typeError('Должно быть строкой').required('Обязательно'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Пароли не совпадают')
    .required('Обязательно'),
})
