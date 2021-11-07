import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    ${media.greaterThan('medium')`

    `}
  `}
`

export const WrapperItem = styled.a`
  ${({ theme }) => css`
    text-decoration: none;
    cursor: pointer;
    ${media.greaterThan('medium')`

    `}
  `}
`
export const Header = styled.div`
  ${({ theme }) => css`
    ${media.greaterThan('medium')`
      display: flex;
    `}
  `}
`
export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    line-height: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};
    margin-bottom: ${theme.spacings.xxsmall};
    ${media.greaterThan('medium')`
      font-size: 3.4rem;
      line-height: 3.4rem;
    `};
  `}
`
