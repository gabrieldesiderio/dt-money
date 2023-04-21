import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";

import * as S from './styles'

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <S.TransactionsContainer>
        <SearchForm />
        <S.TransactionsTable>
          <tbody>
            <tr>
              <td width="40%">Desenvolvimento de site</td>
              <td>
                <S.Pricehighlight variant="income">R$ 12.000,00</S.Pricehighlight>
              </td>
              <td>Venda</td>
              <td>13/04/2023</td>
            </tr>
            <tr>
              <td width="40%">Hamburguer</td>
              <td>
                <S.Pricehighlight variant="outcome">- R$ 59,90</S.Pricehighlight>
              </td>
              <td>Alimentação</td>
              <td>15/04/2023</td>
            </tr>
            <tr>
              <td width="40%">Desenvolvimento de site</td>
              <td>
                <S.Pricehighlight variant="income">R$ 12.000,00</S.Pricehighlight>
              </td>
              <td>Venda</td>
              <td>13/04/2023</td>
            </tr>
            <tr>
              <td width="40%">Desenvolvimento de site</td>
              <td>
                <S.Pricehighlight variant="income">R$ 12.000,00</S.Pricehighlight>
              </td>
              <td>Venda</td>
              <td>13/04/2023</td>
            </tr>
          </tbody>
        </S.TransactionsTable>
      </S.TransactionsContainer>
    </div>
  )
}