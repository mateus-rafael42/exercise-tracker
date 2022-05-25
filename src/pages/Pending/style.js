import styled, { css } from 'styled-components'

export const Content = styled.main`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    h1 {
        font-size: 32px;
        font-weight: 600;
        margin: 0 auto 15px;
    }

    p {
        margin: 0 auto 0;
        font-size: 20px;
        font-weight: 500;
    }
`

export const ContentContainer = styled.div`
    position: relative;
    width: 100%;
    max-width: 1920px;
    height: 100%;
    margin: 0 auto;
    padding-top: 0px;
    padding-bottom: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const TitleBox = styled.div`
    text-align: center;
    margin: 70px auto 70px;
`

export const Divisor = styled.div`
    width: 100%;
    height: 1px;
    margin: 30px 0 40px;
    background-color: #D0D0D0;
`

export const PageButton = styled.div`
    width: 100px;
    text-align: center;

    &:nth-child(2) {
        margin: 0 30px;
    }

    ${props => props.active ? 
        css`
            & > a {
                display: block;
                width: 100px;
                color: #161616;
                padding: 0 0 11px;
                border-bottom: 5px solid #2E2E2E;
            }
        ` :
        css`
            & > a {
                display: block;
                width: 100px;
                color: #C5C5C5;
                padding: 0 0 11px;
                border-bottom: 5px solid #C5C5C5;
            }
        `
    }
`

export const PageButtonsBox = styled.div`
    margin: 0 0 35px;

    a {
        margin-top: 0px;
        font-size: 20px;
        font-weight: 500;
        text-decoration: none;
    }

    & > div:first-child {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        max-width: 400px;
        margin: 0 auto;
    }

    & > div:first-child > a:nth-child(2) {
        margin: 0 40px;
    }
`

export const ExercisesContainer = styled.div`
    width: 100%;
    max-width: calc(100vw - 12%);
    border: 1px solid #D0D0D0;
    border-radius: 30px;
    padding: 40px 50px 50px;
    margin: 0 auto;
`

export const ExercisesHeaderButtons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    & > div:first-child {
        display: grid;
        grid-template-columns: auto auto;
        column-gap: 20px;
    }
`

export const Exercises = styled.div`
    text-align: center;
`