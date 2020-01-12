import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'
import Intro from '../components/Intro'
import IndexContent from '../components/IndexContent'
import Head from '../components/Head'
import { META } from '../utils/constants'

export default ({ location }) =>
  <Layout location={location}>
    <section>
      <Head 
        {...META.index} 
        image={META.common.image} 
      />
      <Intro fixed={true} />
    </section>
    <IndexContent />
  </Layout>