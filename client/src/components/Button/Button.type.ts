export interface IButton extends React.DOMAttributes<HTMLButtonElement | HTMLAnchorElement | In> {
  href?: string
  className?: string
  fullwidth?: boolean
  fill?: 'outline' | 'transparent'
  color?: 'white' | 'primary'
  size?: 'small'
  type?: 'submit' | 'reset' | 'button'
}
