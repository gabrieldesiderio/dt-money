import * as Dialog from "@radix-ui/react-dialog";
import * as S from "./styles";
import { X } from "phosphor-react";

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
    <S.Overlay/>
    <S.Content>
      <Dialog.Title>Nova Transação</Dialog.Title>

      <S.CloseButton>
        <X size={24} />
      </S.CloseButton>

      <form action="">
        <input type="text" placeholder="Descrição" required />
        <input type="number" placeholder="Preço" required />
        <input type="text" placeholder="Categoria" required />

        <button type="submit">
          Cadastra
        </button>
      </form>
    </S.Content>
  </Dialog.Portal>
  )
}