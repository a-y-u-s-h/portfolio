export const LAMBDA_ENDPOINT = 'https://kvz60gz535.execute-api.us-east-1.amazonaws.com/prod/distance'
export const IS_PROD = process.env.NODE_ENV === 'production'
export const META = {
  common: {
    image: '/images/logo.svg',
  },
  index: {
    title: 'Raincode',
    description: 'A team of uniquely talented developers and designers spread all over the world.'
  },
  profile: {
    title: 'Raincode | Profile',
    description: ''
  },
  works: {
    title: 'Raincode | Works',
    description: 'A selection of the work carried out over 4+ years of work. Among which: Websites, Web applications, Web Scrapers and more.'
  }
}
