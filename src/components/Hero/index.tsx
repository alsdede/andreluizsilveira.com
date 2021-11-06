import Button from 'components/Button'
import Image from 'next/image'
import * as S from './styles'

export type HeroProps = {
  title: string
  subtitle: string
  backgroundImage: string
  floatImage?: string

  alignment?: 'right' | 'left'
}

const Hero = ({
  title,
  subtitle,
  backgroundImage,
  floatImage,
  alignment = 'right'
}: HeroProps) => (
  <S.Wrapper alignment={alignment}>
    <Image src={backgroundImage} alt={`${title} background`} layout="fill" />
    {!!floatImage && (
      <S.FloatImageWrapper>
        <Image src={floatImage} alt={title} width={400} height={300} />
      </S.FloatImageWrapper>
    )}
    <S.Content>
      <S.Title>{title}</S.Title>
      <S.SubTitle>{subtitle}</S.SubTitle>
    </S.Content>
  </S.Wrapper>
)

export default Hero
