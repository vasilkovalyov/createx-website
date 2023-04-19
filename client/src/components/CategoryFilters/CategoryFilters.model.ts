import { ICategoryFilters } from './CategoryFilters.type'
export const model: ICategoryFilters = {
  items: [
    {
      id: '1',
      value: 'value-1',
      text: 'Company News',
    },
    {
      id: '2',
      value: 'value-2',
      text: 'Innovation',
    },
    {
      id: '3',
      text: 'Industry News',
      value: 'value-3',
    },
    {
      id: '4',
      text: 'Expert Tips',
      value: 'value-4',
    },
    {
      id: '5',
      text: 'Marketing',
      value: 'value-5',
    },
  ],
  onHandleSelect: function (id: string, value: string): void {
    console.log('id', id, 'value', value)
  },
}
