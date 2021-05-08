import { Form, Formik } from 'formik'
import { Story } from '@storybook/react'
import { Input, InputProps } from './Input'

export default {
  title: '/lib/input',
  component: Input,
}

const Template: Story<InputProps> = (args: InputProps) => {
  const initialValues = {}
  return (
    <Formik onSubmit={() => {}} initialValues={initialValues}>
      {() => (
        <Form>
          <Input {...args} />
        </Form>
      )}
    </Formik>
  )
}

export const TextInput = Template.bind({})

TextInput.args = {
  placeholder: 'Enter your user name',
  name: 'username',
  label: 'user name',
}
