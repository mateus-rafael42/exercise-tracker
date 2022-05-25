import React, { useState } from 'react'
import { Link } from "react-router-dom";

import Button from './components/Button'

import {
  Content,
  ContentContainer,
  TitleBox,
  Divisor,
  PageButtonsBox,
  PageButton,
  ExercisesContainer,
  ExercisesHeaderButtons,
  Exercises
} from './style.js'

export default function Done() {
  const [allExercises, setAllExercises] = useState([])

  return (
    <Content>
        <ContentContainer>
          <TitleBox>
            <h1>Your Exercise Tracker</h1>
            <p>Track your exercise routine!</p>
          </TitleBox>
          <PageButtonsBox>
            <div>
              <PageButton>
                <Link to="/">All</Link>
              </PageButton>
              <PageButton>
                <Link to="/pending">Pending</Link>
              </PageButton>
              <PageButton active={true}>
                <Link to="/done">Done</Link>
              </PageButton>
            </div>
          </PageButtonsBox>
          <ExercisesContainer>
              <ExercisesHeaderButtons>
                <div>
                  <Button isBlue={true} content="Add exercise" />
                  <Button content="Delete all" />
                </div>
              </ExercisesHeaderButtons>
              <Divisor />
              <Exercises>
                {allExercises.length > 0 ?
                  (
                    allExercises.map((element) => (
                      <p>{element.title}</p>
                    ))
                  ) :
                  (
                    <p>Currently you don’t have exercises to track, create your first exercise!</p>
                  )
                }
              </Exercises>
          </ExercisesContainer>
      </ContentContainer>
    </Content>
  );
}