import * as Yup from 'yup'

export const AuthSchema = Yup.object().shape({
  username: Yup.string(),
  email: Yup.string()
    .email('Must be a valid email.')
    .required(`Email can't be empty.`),
  password: Yup.string().required(`Password can't be empty.`),
  confirm: Yup.string()
    .oneOf([Yup.ref('password'), 'Password should be same.'])
    .required('Password confirm is required'),
})

export const initialValues = {
  username: '',
  email: '',
  password: '',
  confirm: '',
}
