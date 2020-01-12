import styled from "styled-components"
import Image from "../Image"
import { colors, media } from "../../style/constants"

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(5, 1fr);
  position: relative;
  ${media.sm`
    grid-template-columns: 100%;
    grid-template-rows: repeat(3, auto);
    grid-row-gap: 2rem;
  `}
`

export const StyledImage = styled(Image)`
  grid-area: 1 / 4 / last-line / end;
  background: ${colors.blue900};
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    padding-top: 150%;
    display: block;
    ${media.sm`
      padding-top: 100%;
    `}
  }

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    margin: auto;
    top: -100%;
    right: -100%;
    bottom: -100%;
    left: -100%;
    mix-blend-mode: darken;
    opacity: 0.8;
    display: block;
    object-fit: cover;
    ${media.sm`
      opacity: .9;
    `}
  }

  ${media.sm`
    grid-area: 1 / 1 / 1 / 1;
    &:before {
      padding-top: 100%;
    }
  `}
`

export const InfoWrapper = styled.header`
  grid-row: 2 / 4;
  grid-column: 1 / 6;
  z-index: 3;
  ${media.md`
    grid-column: 1 / 7;
  `}
  ${media.sm`
    grid-row: 2 / 3;
    grid-column: 1 / 1;
  `}
`

export const Content = styled.main`
  margin-top: 1rem;
  line-height: 1.8em;
  color: ${colors.gray500};
  ${media.sm`
    margin-top: 1rem;
  `}

  p {
    margin: 1.5rem 0;
  }

  a {
    color: #111;
    border-bottom: 1px dotted ${colors.gray500};

    &:hover {
      border-bottom-color: ${colors.yellow500};
    }
  }
`

export const GridLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  grid-gap: 1rem;
  grid-auto-rows: minmax(140px, auto);
  grid-auto-flow: dense;
  padding: 1rem;
`

export const GridItem = styled.div`
  padding: 1rem;
  font-size: 0.8rem;
  font-weight: inherit;
  text-transform: uppercase;
  color: #000;
  background-color: #FFF;
  border-radius: 0px;
  border: 1px solid black;
  &:nth-child(odd) {
    background-color: #000;
    color: #FFF;
  }
`

export const Span2 = styled.span`
  grid-column-end: span 2;
  grid-row-end: span 2;
`

export const Span3 = styled.span`
  grid-column-end: span 3;
  grid-row-end: span 4;
`
