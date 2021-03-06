import React from "react"
import Intro from "../Intro"
import { Wrapper, InfoWrapper, Content, StyledImage } from "./style"
import { Loader } from "../../style/shared"
import { NDAWrapper, StyledDivider, StyledEmailMe } from "./style"

const ProfileIntroSection = ({ content }) => (
  <Wrapper>
    <InfoWrapper>
      <Intro fixed={false} />
      <Content>{content()}</Content>
    </InfoWrapper>
    {/*
  ====================================
        <StyledImage 
      src="/images/profile/profile.jpg"
      alt="Pattern"
      loader={({ isLoaded }) => <Loader isLoaded={isLoaded} />}
      sources={[{
        media: 'max-width: 40rem',
        srcset: [
          '/images/profile/profile-square.jpg 1x',
          '/images/profile/profile-square-2x.jpg 2x',
          '/images/profile/profile-square-3x.jpg 3x'
        ]
      },{
        srcset: [
          '/images/profile/profile.jpg 1x',
          '/images/profile/profile-2x.jpg 2x',
          '/images/profile/profile-3x.jpg 3x'
        ]       
      }]}
    />
  ====================================
*/}
  </Wrapper>
)

export default ProfileIntroSection
