export default function getPageName(pathname: string): string {
  switch (pathname) {
    case '/': {
      return 'home'
    }
    case '/portfolio': {
      return 'portfolio'
    }
    case '/workflow': {
      return 'workflow'
    }
    case '/services': {
      return 'services'
    }
    case '/team': {
      return 'team'
    }
    case '/contact': {
      return 'contact'
    }
    default: {
      return '404'
    }
  }
}
