import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import CtaForm from '../../components/theme/plain/Form/CtaForm'

export default {
  title: 'Form/CtaForm',
  component: CtaForm,
} as ComponentMeta<typeof CtaForm>

const Template: ComponentStory<typeof CtaForm> = (args) => <CtaForm />

export const Default = Template.bind({})

Default.args = {}
