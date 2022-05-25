import styled, {css} from 'styled-components'

export const Container = styled.div`
    button {
        border: 0;
        color: #fff;
        font-size: 20px;
        padding: 15px 25px;
    }
    
    ${props => props.color ?
        css`
            button {
                background: #6586FD;
                border-radius: 10px;
            }
            
        ` :
        css`
            button {
                background: #FD6577;
                border-radius: 10px;
            }
        `
    }
`