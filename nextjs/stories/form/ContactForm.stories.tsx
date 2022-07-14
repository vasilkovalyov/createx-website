import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ContactForm from '../../components/theme/plain/Form/ContactForm'

export default {
  title: 'Form/ContactForm',
  component: ContactForm,
} as ComponentMeta<typeof ContactForm>

const Template: ComponentStory<typeof ContactForm> = (args) => <ContactForm />

export const Default = Template.bind({})

Default.args = {}
