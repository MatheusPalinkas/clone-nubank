import React from 'react';
import Icon from '@expo/vector-icons/MaterialIcons';

import { Image } from 'react-native'
import { Container, Code, Nav, NavItem, NavText, SingOutButton, SingOutButtonText } from './styles';

import qrCode from '../../assets/qrcode.png'

export default function Menu({translateY}) {
  return (
    <Container style={{      
        opacity: translateY.interpolate({
            inputRange: [0, 150],
            outputRange: [0, 1],
        })
      }}>
      <Code>
        <Image 
          source={qrCode} 
          style={{
            maxWidth: 100, 
            maxHeight: 100
        }}/>
      </Code>
      <Nav>
        <NavItem>
            <Icon name="help-outline" size={20} color="#FFF"/>
            <NavText>Me ajuda</NavText>
        </NavItem>
        <NavItem>
            <Icon name="person-outline" size={20} color="#FFF"/>
            <NavText>Perfil</NavText>
        </NavItem>
        <NavItem>
            <Icon name="credit-card" size={20} color="#FFF"/>
            <NavText>Configurar cartão</NavText>
        </NavItem>
        <NavItem>
            <Icon name="smartphone" size={20} color="#FFF"/>
            <NavText>Configurações do app</NavText>
        </NavItem>
      </Nav>
      <SingOutButton onPress={() => {}}>
        <SingOutButtonText>Sair do App</SingOutButtonText>
      </SingOutButton>
    </Container>
  );
}
