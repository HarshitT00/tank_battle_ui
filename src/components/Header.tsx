import styled from "styled-components"

export function Header(){
    return(
        <HeaderContainer>
            <HeaderTitle>Tank Battle</HeaderTitle>
            <HeaderDetailsContainer>
                <HeaderDeatils>Welcome to realtime multiplayer game</HeaderDeatils>
                <HeaderDeatils>Enjoy playing</HeaderDeatils>
            </HeaderDetailsContainer>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    background-color: #000000;
    height: 10vh;
    display: flex;
    flex-direction: coloumn;
    align-items: center;
    justify-content: space-between;
`;

const HeaderTitle = styled.div`
    color: #b58900;
    padding-left: 5vh;
    font-size: 4.5vh;
`;

const HeaderDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-right: 5vh;
    text-align: center;
`;

const HeaderDeatils = styled.div`
    color: #FFFFFF;
    font-size: 1.75vh;
`;