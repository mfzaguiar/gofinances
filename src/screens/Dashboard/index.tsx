import React from 'react';

import { HighlightCard } from '../../components/HighlightCard';
import {
  TransactionCard,
  TransactionCardProps,
} from '../../components/TransactionCard';

import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  Username,
  Icon,
  HighlightsCards,
  Transactions,
  Title,
  TransactionList,
} from './styles';

export interface DataListProps extends TransactionCardProps {
  id: string;
}

export function Dashboard() {
  const data: DataListProps[] = [
    {
      id: '1',
      type: 'positive',
      title: 'Venda teclados',
      amount: 'R$ 3000,00',
      category: {
        name: 'Vendas',
        icon: 'dollar-sign',
      },
      date: '10/07/2021',
    },
    {
      id: '2',
      type: 'negative',
      title: 'teste 2',
      amount: 'R$ 30,00',
      category: {
        name: 'Alimentação',
        icon: 'coffee',
      },
      date: '10/07/2021',
    },
    {
      id: '3',
      type: 'negative',
      title: 'Alugel do apartamento',
      amount: 'R$ 1200,00',
      category: {
        name: 'Casa',
        icon: 'shopping-bag',
      },
      date: '12/04/2021',
    },
  ];

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: 'https://avatars.githubusercontent.com/u/31289353?v=4',
              }}
            />
            <User>
              <UserGreeting>Ola, </UserGreeting>
              <Username>Matheus</Username>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserWrapper>
      </Header>

      <HighlightsCards>
        <HighlightCard
          type="up"
          title="Entradas"
          amount="R$ 17.400,00"
          lastTransaction=" Última entrada em 13 de agosto"
        />
        <HighlightCard
          type="down"
          title="Saídas"
          amount="R$ 17.400,00"
          lastTransaction=" Última saida em 10 de agosto"
        />
        <HighlightCard
          type="total"
          title="Entradas"
          amount="R$ 5.400,00"
          lastTransaction=" Última entrada em 11 de agosto"
        />
      </HighlightsCards>

      <Transactions>
        <Title>Listagem</Title>

        <TransactionList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </Transactions>
    </Container>
  );
}
