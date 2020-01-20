import React from 'react'
import ProfileIntroSection from '../ProfileIntroSection'
import ProfileListItem from '../ProfileListItem'
import EventListItem from '../EventListItem'
import Head from '../Head'
import ProfileList from '../ProfileList'
import { META } from '../../utils/constants'
import { DifferentContentWrapper } from '../../style/shared'
import { ListsSection, ClientsList } from './style'
import InfoCard from "../InfoCard"
import { graphql, StaticQuery } from "gatsby"

const profileContent = () => {
  const profileQuery = graphql`
    query {
      info: allInfoJson {
        edges {
          node {
            profile {
              heading
              paragraph
            }
            index {
              heading
              paragraph
            }
          }
        }
      }
    }
  `

  return (
    <StaticQuery 
    query={profileQuery}
    render={data => {
    const profile = data.info.edges[0].node.profile
    return (
      <div>
        {profile.map(item => 
          item.heading ? 
          (item.paragraph ? 
            (
              <div>
              <h1>{item.heading}</h1>
              <p>{item.paragraph}</p>
              </div>
            ) : <div><h1>{item.heading}</h1></div>
          ) : 
          item.paragraph ? <div><p>{item.paragraph}</p></div> : ""
         )}
      </div>
    )}} 
    />)
 }


export default ({ data }) => {
  const { clients, events, mentions, articles } = data
  
  return (
      <DifferentContentWrapper>
        <Head 
          {...META.profile}
          image={META.common.image}
        />
        <ProfileIntroSection 
          content={profileContent}
        />
        <ListsSection>
          {events.edges.length > 0 && 
            <ProfileList 
              title='Timeline'
              list={() => events.edges.map(({ event }, i) => (
                <EventListItem 
                  key={i}
                  {...event}
                />
              ))}
            />}
          {articles.edges.length > 0 && 
            <ProfileList 
              title='Articles'
              list={() => articles.edges.map(({ article }, i) => (
                <ProfileListItem 
                  key={i}
                  {...article}
                />
              ))}
            />}
          {mentions.edges.length > 0 && 
            <ProfileList 
              title='Featured on'
              list={() => mentions.edges.map(({ mention }, i) => (
                <ProfileListItem 
                  key={i}
                  {...mention}
                />
              ))}
            />}
          {clients.edges.length > 0 && 
            <ClientsList 
              title='Companies I have worked with'
              list={() => clients.edges.map(({ client }, i) => (
                <ProfileListItem 
                  key={i}
                  {...client}
                />
              ))}
            />}
        </ListsSection>
      </DifferentContentWrapper>
  )
}
