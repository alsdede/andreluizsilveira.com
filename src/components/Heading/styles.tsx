import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    line-height: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};
    margin-bottom: 1.2rem;
    ${media.greaterThan('medium')`
      font-size: 3.4rem;
      line-height: 3.4rem;
    `};
  `}
`
