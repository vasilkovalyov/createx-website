import { IBlockOurOffices } from './BlockOurOffices.type'

export const model: IBlockOurOffices = {
  heading: 'Our offices',
  text: 'Give us a call, send us a note or visit our office. We can’t wait to hear from you!',
  items: [
    {
      id: '1',
      heading: 'New York, USA',
      address: '8502 Preston Rd. Inglewood, New York 98380',
      email: 'hello@createx.com',
      phone: '(405) 555-0128',
      schedule: 'Mon - Fri 9:00 - 18:00',
    },
    {
      id: '2',
      heading: 'New Jersey, USA',
      address: '2464 Royal Ln. Mesa, New Jersey 45463',
      email: 'hello@createx.com',
      phone: '(808) 555-0111',
      schedule: 'Mon - Fri 9:00 - 18:00',
    },
    {
      id: '3',
      heading: 'San Francisco, USA',
      address: '8502 Preston Rd. Inglewood, San Francisco 98380',
      email: 'hello@createx.com',
      phone: '(505) 555-0125',
      schedule: 'Mon - Fri 10:00 - 19:00',
    },
  ],
}
