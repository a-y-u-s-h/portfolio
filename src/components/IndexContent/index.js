import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { DifferentContentWrapper } from "../../style/shared"
import { Wrapper, InfoWrapper, Content, StyledImage } from "./style"
import { GridLayout, GridItem, Span2, Span3, Span3P } from "./style"

const infoQuery = graphql`
  query infoQuery {
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
            grid {
              heading
              paragraph
              icon
            }
          }
        }
      }
    }
  }
`

const indexContent = data => () => {
  return (
    <div>
      {data.map(item => {
        const heading = item.heading ? <h1>{item.heading}</h1> : ""
        const paragraph = item.paragraph ? <p>{item.paragraph}</p> : ""
        const grid = item.grid
          ? item.grid.map(cell => (
              <GridItem>
                <Span3>{cell.heading}</Span3>
                <br/>
                <Span3P>{cell.paragraph}</Span3P>
              </GridItem>
            ))
          : ""
        return (
          <div>
            {heading}
            {paragraph}
            <br/>
            <GridLayout>{grid}</GridLayout>
          </div>
        )
      })}
    </div>
  )
}

const IndexIntroSection = ({ content }) => (
  <Wrapper>
    <InfoWrapper>
      <Content>{content()}</Content>
    </InfoWrapper>
  </Wrapper>
)

export default ({ location }) => (
  <StaticQuery
    query={infoQuery}
    render={data => {
      const index = data.info.edges[0].node.index
      const profile = data.info.edges[0].node.profile
      return (
        <DifferentContentWrapper>
          <IndexIntroSection content={indexContent(index)} />
        </DifferentContentWrapper>
      )
    }}
  />
)
