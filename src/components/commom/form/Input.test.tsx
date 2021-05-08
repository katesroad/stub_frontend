import { Input } from './index'
import * as Yup from 'yup'
import * as React from 'react'
import { Formik, Form } from 'formik'
import { userEvent, render, screen, act } from 'test/utils'

type renderOptions = {
  initialValues: Record<string, unknown>
  validationSchema?: any
}

const getInput = (ui: React.ReactElement, options: renderOptions) => {
  const handleSubmit = (e: any) => {}
  return (
    <Formik onSubmit={handleSubmit} {...options}>
      {() => {
        return (
          <Form>
            {ui}
            <button type="submit">submit</button>
          </Form>
        )
      }}
    </Formik>
  )
}

test('render <Input /> without form validation', async () => {
  const options = { initialValues: { email: '' } }
  const ui = <Input name="email" placeholder="Enter your email" label="email" />
  const EmailInput = getInput(ui, options)

  render(EmailInput)

  const input = screen.getByRole(/textbox/)
  expect(input).toHaveValue('')

  await act(async () => {
    await userEvent.type(input, 'yes', { delay: 1 })
  })
  expect(input).toHaveValue('yes')

  await act(async () => {
    await userEvent.click(screen.getByRole('button'))
  })
  expect(screen.getByLabelText('error-message')).toBeEmptyDOMElement()
})

test('render <Input /> with form validation', async () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Please enter email')
      .required('Email is required'),
  })
  const options = { initialValues: { email: '' }, validationSchema }
  const ui = <Input name="email" placeholder="Enter your email" label="email" />
  const EmailInput = getInput(ui, options)

  render(EmailInput)

  const input = screen.getByRole(/textbox/)

  await act(async () => {
    await userEvent.click(screen.getByRole('button'))
  })
  expect(screen.getByLabelText('error-message')).toHaveTextContent(
    'Email is required'
  )

  await act(async () => {
    await userEvent.type(input, 'hello', { delay: 1 })
  })
  expect(screen.getByLabelText('error-message')).toHaveTextContent(
    'Please enter email'
  )

  await act(async () => {
    await userEvent.type(input, 'test@email.com', { delay: 1 })
  })
  expect(screen.getByLabelText('error-message')).toBeEmptyDOMElement()
})
