import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.small};
    border-bottom: 0.1rem solid ${theme.colors.lightGray};
    ${media.greaterThan('medium')`
      display: flex;
    `}
  `}
`

export const ProjectContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${media.greaterThan('medium')`
      display: flex;
      flex-direction:row;
    `};
`

export const ImageBox = styled.div`
  ${({ theme }) => css`
    flex-shrink: 0;
    margin-right: 1.2rem;
    width: 30rem;
    height: 30rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
    ${media.greaterThan('medium')`
      margin-right: ${theme.spacings.xsmall};
      width: 30rem;
      height: 30rem;
    `};
  `}
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`

export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    line-height: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};
    margin-bottom: ${theme.spacings.xxsmall};
    ${media.greaterThan('medium')`
      font-size: 2.4rem;
      line-height: 2.4rem;
    `};
  `}
`
export const Description = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    line-height: ${theme.font.sizes.large};
    font-weight: ${theme.font.light};
    color: ${theme.colors.white};
    margin-bottom: ${theme.spacings.xxsmall};

    ${media.greaterThan('medium')`
      font-size: 1.8rem;
      line-height: 1.8rem;
    `};
  `}
`
export const Group = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    margin-bottom: ${theme.spacings.xxsmall};
    width: 100%;
  `}
`

export const Remove = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.small};
  `}
`

export const Tag = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    padding: 0.2rem ${theme.spacings.xxsmall};
    background-color: ${theme.colors.primary};
    border-radius: ${theme.border.radius};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
    margin-right: ${theme.spacings.xxsmall};
  `}
`

export const DownloadLink = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    margin-left: ${theme.spacings.xxsmall};
    position: relative;
    & > svg {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
  `}
`

export const PaymentContent = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.small};
    display: flex;
    flex-direction: column;
    min-width: 28rem;
    margin-top: ${theme.spacings.xsmall};
    ${media.greaterThan('medium')`
      margin-top: 0;
      flex: 1;
      flex-direction: column-reverse;
      justify-content: space-between;
      align-items: flex-end;
    `}
  `}
`

export const CardInfo = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    span {
      margin-right: ${theme.spacings.xxsmall};
    }
    ${media.lessThan('medium')`
      margin-top: ${theme.spacings.xsmall};
    `}
  `}
`
