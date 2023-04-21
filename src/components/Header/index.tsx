import logoImage from '../../assets/logo.svg'
import { NewTransactionModal } from '../NewTransactionModal'

import * as S from './styles'
import * as Dialog from '@radix-ui/react-dialog'

export function Header() {
  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <img src={logoImage} alt="" />

        <Dialog.Root>
          <Dialog.DialogTrigger asChild>
            <S.NewTransactionButton>Nova transação</S.NewTransactionButton>
          </Dialog.DialogTrigger>

          <NewTransactionModal />
        </Dialog.Root>
      </S.HeaderContent>
    </S.HeaderContainer>
  )
}
