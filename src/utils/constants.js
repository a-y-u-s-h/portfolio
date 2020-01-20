export const LAMBDA_ENDPOINT = 'https://kvz60gz535.execute-api.us-east-1.amazonaws.com/prod/distance'
export const IS_PROD = process.env.NODE_ENV === 'production'
export const META = {
  common: {
    image: '/images/logo.svg',
  },
  index: {
    title: 'Ayush | Index',
    description: 'One man army developer.'
  },
  profile: {
    title: 'Ayush | Profile',
    description: ''
  },
  works: {
    title: 'Ayush | Works',
    description: 'A selection of the work carried out over 4+ years of work. Including: Websites, Web applications, Web Scrapers and more.'
  }
}
