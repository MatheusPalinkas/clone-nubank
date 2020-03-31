import React from 'react';
import Icon from '@expo/vector-icons/MaterialIcons';

import { Container, TabsContainer, TabItem, TabText } from './styles';

export default function Tabs({translateY}){
    return (
        <Container style={{
            opacity: translateY.interpolate({
                inputRange: [0 ,150],
                outputRange: [1 ,0.3],
                extrapolate: 'clamp',
            }),
            transform: [{
                translateY: translateY.interpolate({
                    inputRange: [0, 300],
                    outputRange: [0, 30],
                    extrapolate: 'clamp'
                })
            }] 
        }}>
            <TabsContainer>     
                <TabItem>
                    <Icon  name="person-add" size={20} color="#FFF" />
                    <TabText>Indicar amigos</TabText>
                </TabItem>
                <TabItem>
                    <Icon  name="chat-bubble-outline" size={20} color="#FFF" />
                    <TabText>Cobrar</TabText>
                </TabItem>
                <TabItem>
                    <Icon  name="arrow-downward" size={20} color="#FFF" />
                    <TabText>Depositar</TabText>
                </TabItem>
                <TabItem>
                    <Icon  name="arrow-upward" size={20} color="#FFF" />
                    <TabText>Trasnferir</TabText>
                </TabItem>
                <TabItem>
                    <Icon  name="lock" size={20} color="#FFF" />
                    <TabText>Bloquear cartão</TabText>
                </TabItem>
            </TabsContainer>
        </Container>
    );
}
