import { StyleSheet, Animated } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(Animated.ScrollView)`
    margin: 0 30px;
    overflow: hidden;
`;

export const Code = styled.View`
    align-self: center;
`;

export const Nav = styled.View`
    margin-top: 30px;
    border-top-width: ${StyleSheet.hairlineWidth}px;
    border-color: rgba(255, 255, 255, .8);
    align-self: stretch;
`;

export const NavItem = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 12px 0;
    border-bottom-width: ${StyleSheet.hairlineWidth}px;
    border-color: rgba(255, 255, 255, .8);
`;

export const NavText = styled.Text`
    font-size:15px;
    color: #FFF;
    margin-left: 15px;
`;

export const SingOutButton = styled.TouchableOpacity`
    border-width: ${StyleSheet.hairlineWidth}px;
    border-color: rgba(255, 255, 255, .8);
    border-radius: 4px;
    justify-content: center;
    align-items: center;
    padding: 15px;
    margin-top: 15px; 
`;
export const SingOutButtonText = styled.Text`
    color: #FFF;
    font-size: 13px;
    font-weight: bold;
`;