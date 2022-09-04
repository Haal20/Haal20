import styled from '@emotion/styled'

export const almaColors = {
    yellow: '#ffdb00',
    green: '#0a8a00',
    blue: '#0058a3',
    blue: '#02427b',
    white: '#fff',
    grey100: '#f5f5f5',
    grey200: '#dfdfdf',
    grey300: '#ccc',
    grey500: '#929292',
    grey700: '#484848',
    grey900: '#111',
    black: '#000',
    beige: '#ffe5d9',
    pink: '#ffcad4',
}

export const StyledAppLink = styled.a`
    color: ${almaColors.blue};
    transition: 0.5s;
    font-size: 1.6rem;
    padding: 0.5rem 0.7rem;
    &:hover {
        background-color: #48484866;
        border-radius: 2rem;
    }
    &:active {
        background-color: ${almaColors.white};
        border-radius: 3rem;
    }
`