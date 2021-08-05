import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
`;

export const Title = styled.Text``;

export const Amount = styled.Text``;

export const Footer = styled.View``;

export const Category = styled.View``;

export const Icon = styled(Feather)`
  font-size: ${RFValue(40)}px;
`;

export const CategoryName = styled.Text``;

export const Date = styled.Text``;
