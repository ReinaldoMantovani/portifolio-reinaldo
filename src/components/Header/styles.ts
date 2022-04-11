import styled from 'styled-components';

export const Container = styled.header`
    width:100% ;
    display:flex;
    justify-content:space-between ;
    margin:1rem 1rem ;
    border-bottom:1px solid ${({ theme }) => theme.backgroundLight} ;
    
    .logo  {
        font-size: 1.2rem ;
        background-image:-webkit-linear-gradient( left, #FF0844, #FFB199);
        background-clip:text;
        -webkit-background-clip:text;
        color:transparent;
    }

    .menu-list {
        display:flex ;
        margin-right:2rem ;
    }

    .menu-list li {
        margin-right: 2rem;
    }

    .menu-list a {
        background-image:-webkit-linear-gradient( left, #FF0844, #FFB199);
        background-clip:text;
        -webkit-background-clip:text;
        color:transparent;
        font-weight:600;
    }
`;
