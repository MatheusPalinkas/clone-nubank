import styled from 'styled-components/native';

export const Container = styled.View`
    height: 100px;
    margin-top: 20px;
`;

export const TabsContainer = styled.ScrollView.attrs({
    horizontal: true,
    contenttContainerStyle: {
        paddingLeft: 10,
        paddingRigth: 20
    },
    showsHorizontalScrollIndicator: false,
})``;

export const TabItem = styled.View`
    width: 100px;
    height: 100px;
    background: rgba(255, 255, 255, .2);
    border-radius: 3px;
    margin-left: 10px;
    padding: 10px;
    justify-content: space-between;
`;

export const TabText = styled.Text`
    font-size: 13px;
    color: #FFF;
`;