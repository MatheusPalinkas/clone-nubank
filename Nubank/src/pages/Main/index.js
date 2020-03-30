import React from 'react';
import Icon from '@expo/vector-icons/MaterialIcons';

import Header from '../../components/Header';
import Tabs from '../../components/Tabs';
import { 
        Container, Content, Card, 
        CardContent, CardFooter, CardHeader, 
        Title, Description, Annotation 
} from './styles';

export default function Main(){
    return(
        <Container>
            <Header />

            <Content>
                <Card>
                    <CardHeader>
                        <Icon name="attach-money" size={28} color="#666"/>
                        <Icon name="visibility-off" size={28} color="#666"/>
                    </CardHeader>
                    <CardContent>
                        <Title>Saldo disponível</Title>
                        <Description>R$ 192.168,00</Description>
                    </CardContent>
                    <CardFooter>
                        <Annotation>
                            Transferência de R$ 600,00 recibida recebida de Renato José dos Santos hoje às 06:00
                        </Annotation>
                    </CardFooter>

                </Card>
            </Content>

            <Tabs />
        </Container>
    );
}