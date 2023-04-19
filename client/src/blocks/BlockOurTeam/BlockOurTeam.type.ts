import { ITeamMember } from '../../components/TeamMember/TeamMember.type'

export interface IBlockOurTeam {
  heading?: string
  text?: string
  items: ITeamMember[] | []
  className?: string
}
