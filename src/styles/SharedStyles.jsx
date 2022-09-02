import styled from '@emotion/styled'

export const almaColors = {
    yellow: '#ffdb00',
    green: '#0a8a00',
    blue: '#0058a3',
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
    transition: 1s;
    &:hover {
        text-shadow: 2px 2px 5px gray;
        border-color: transparent;
    }
`