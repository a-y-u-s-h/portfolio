import React from "react"
import WorksListItem from "../WorksListItem"
import {
  Wrapper,
  WorksTitle,
  ButtonsWrapper,
  FilterButton,
  NDAWrapper,
  StyledDivider,
  StyledEmailMe
} from "./style"

const WorksListSection = ({ works, category, setCategory }) => {
  let categories = Array.from(
    new Set(
      works
        .map(x => x.work)
        .map(x => x.category)
        .flat()
    )
  )
  categories = Array.from(new Set(categories))
  return (
    <Wrapper>
      <header>
        <WorksTitle>Other works</WorksTitle>
        <ButtonsWrapper>
          {categories.map(c => {
            return (
              <FilterButton
                active={category === c}
                onClick={() => setCategory(c)}
              >
                {c}
              </FilterButton>
            )
          })}
          {category && (
            <FilterButton onClick={() => setCategory(null)}>all</FilterButton>
          )}
        </ButtonsWrapper>
      </header>
      <main>
        {works.map(({ work }, i) => (
          <WorksListItem key={i} work={work} />
        ))}
      </main>
      <NDAWrapper>
        <StyledDivider height={6} width={43} />
        <h2>Want to collaborate with me?</h2>
        <StyledEmailMe text="Drop me an email" />
      </NDAWrapper>
    </Wrapper>
  )
}

export default WorksListSection
