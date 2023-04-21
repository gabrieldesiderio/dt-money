import * as S from './styles'

import logoImage from '../../assets/logo.svg'

export function Header() {
  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <img src={logoImage} alt="" />
        <S.NewTransactionButton>Nova transação</S.NewTransactionButton>
      </S.HeaderContent>
    </S.HeaderContainer>
  )
}