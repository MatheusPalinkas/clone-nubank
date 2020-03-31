import React from 'react';
import Icon from '@expo/vector-icons/MaterialIcons';

import { Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

import Header from '../../components/Header';
import Tabs from '../../components/Tabs';
import Menu from '../../components/Menu';

import { 
        Container, Content, Card, 
        CardContent, CardFooter, CardHeader, 
        Title, Description, Annotation 
} from './styles';

export default function Main(){
    let offset = 0;
    const translateY = new Animated.Value(0);

    const animatedEvent = Animated.event(
        [
            {
                nativeEvent:{
                    translationY: translateY,
                },
            },
        ],
        { useNativeDriver: true },
    )

    function onHandlerStateChanged(event){
        if(event.nativeEvent.oldState === State.ACTIVE){
            let opened = false;
            const { translationY } = event.nativeEvent;
            
            offset += translationY;

            if(translationY >= 100){
                opened = true;               
            }else{
                translateY.setValue(offset);
                translateY.setOffset(0);
                offset: 0;
            }

            Animated.timing(translateY,  {
                toValue: opened ? 400 : 0,
                duration: 300,
                useNativeDriver: true,
            }).start(() =>{
                offset = opened? 400: 0;
                translateY.setOffset(offset);
                translateY.setValue(0);
            });
           
        }
    }

    return(
        <Container>
            <Header />

            <Content>
                <Menu translateY={translateY}/>
                <PanGestureHandler
                    onGestureEvent={animatedEvent}
                    onHandlerStateChange={onHandlerStateChanged}    
                >
                    <Card style={{
                        transform: [{
                            translateY: translateY.interpolate({
                                inputRange: [-150, 0, 400],
                                outputRange: [-50, 0, 400],
                                extrapolate: 'clamp',
                            }),
                        }],
                    }}>
                        <CardHeader>
                            <Icon name="attach-money" size={28} color="#666"/>
                            <Icon name="visibility-off" size={28} color="#666"/>
                        </CardHeader>
                        <CardContent>
                            <Title>Saldo disponível</Title>
                            <Description>R$ 127.001,00</Description>
                        </CardContent>
                        <CardFooter>
                            <Annotation>
                                Transferência de R$ 127.001,00 recibida recebida de Marcelo Bergamaschi hoje às 21:30
                            </Annotation>
                        </CardFooter>

                    </Card>
                </PanGestureHandler>
            </Content>

            <Tabs translateY={translateY}/>
        </Container>
    );
}