import { IBlockOurTeam } from './BlockOurTeam.type'
import { model as modelTeamMember } from '../../components/TeamMember/TeamMember.model'

export const model: IBlockOurTeam = {
  heading: 'Our team',
  text: 'People are at the heart of Createx Construction Bureau  ',
  items: [
    {
      ...modelTeamMember,
      id: '1',
      name: 'Courtney Alexander',
    },
    {
      ...modelTeamMember,
      id: '2',
      name: 'Calvin Fox',
    },
    {
      ...modelTeamMember,
      id: '3',
      name: 'Johnny Lane',
    },
    {
      ...modelTeamMember,
      id: '4',
      name: 'Diane Mccoy',
    },
  ],
}
