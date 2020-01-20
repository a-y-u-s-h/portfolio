import styled from "styled-components"
import { colors } from "../../style/constants"

export const Position = styled.span`
  border-bottom: 1px dotted ${colors.gray700};
`

export const Wrapper = styled.div`
  position: relative;
  overflow: hidden;

  div {
    transition: transform 0.3s cubic-bezier(0.45, 0, 0.1, 1);
    will-change: transform;
  }

  .position {
    transform: translateY(0);
    color: lighten(${colors.gray500}, 10%);
  }

  .company {
    color: ${colors.gray500};
    background: ${colors.darkblue};
    float: right;
    padding: 0 0.3rem;
  }

  .year {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    transform: translateY(100%);
    color: ${colors.gray500};
    background: ${colors.darkblue};
    width: fit-content;
    padding: 0 1rem;
  }

  &:hover {
    .position {
      transform: translateY(-100%);
    }

    .year {
      transform: translateY(0);
    }
  }
`
