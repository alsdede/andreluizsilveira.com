import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    line-height: ${theme.font.sizes.large};
    font-weight: ${theme.font.light};
    color: #f3f3f3;
    margin-bottom: 3.2rem;
    ${media.greaterThan('medium')`
      font-size: 2.4rem;
      line-height: 2.4rem;
    `};
  `}
`
