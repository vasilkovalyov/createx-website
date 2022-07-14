import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import LocationsSelect from '../../components/hocs/LocationsSelect'
import Select from '../../components/theme/plain/Form/Select'

import { ISelect } from 'interfaces/form'
import { ILocationsSelect } from 'interfaces/hocs'

export default {
  title: 'Hocs/LocationsSelect',
  component: LocationsSelect,
} as unknown as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args) =>
  LocationsSelect({
    Component: Select,
    rest: {
      label: 'Location',
      required: true,
    },
  } as ILocationsSelect<ISelect>)

export const Default = Template.bind({})
