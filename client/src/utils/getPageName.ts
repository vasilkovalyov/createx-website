export default function getPageName(pathname: string): string {
  switch (pathname) {
    case '/': {
      return 'home'
    }
    case '/about': {
      return 'about'
    }
    case '/services': {
      return 'services'
    }
    case '/work': {
      return 'work'
    }
    case '/news': {
      return 'news'
    }
    case '/contacts': {
      return 'contacts'
    }
    default: {
      return '404'
    }
  }
}
