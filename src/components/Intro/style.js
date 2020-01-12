import styled, { css } from 'styled-components'
import { colors, media, getOuterSpace } from '../../style/constants'

export const Wrapper = styled.div`
  font-size: 3rem;
  max-width: 36rem;
  line-height: 1.3em;
  ${media.md`
    max-width: 32rem;
  `}
  ${media.sm`
    max-width: 100%;
    font-size: 1.5rem;
  `}
  ${media.xs`
    font-size: 1.35rem;
  `}

  ${props => props.fixed 
    ? css`
      ${getOuterSpace('padding')};
      position: absolute;
      top: 0;
      right: 0;
      text-align: right;
      ${media.md`
        text-align: left;
        left: 0;
        right: auto;
      `}
    `
    : css`
      text-align: left;
    `
  }
`

export const Title = styled.h1`
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 4rem;

  span.black {
    color: white;
    background: black;
    padding: 0.4rem;
    border: 1px solid black;
  }
  
  span.white {
    color: black;
    background: white;
    padding: 0.4rem;
    border: 1px solid black;
  }
`
