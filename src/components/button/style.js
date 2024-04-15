import styled from "styled-components";


export const Container = styled.a`
color: ${({ theme }) => theme.COLORS.WHITE};
background-color: ${({ theme }) => theme.COLORS.BLUE_200};
border: 1px solid ${({ theme }) => theme.COLORS.BLUE_200};
padding: 7px 30px;
display: flex;
text-align: center;
justify-content: center;
border-radius: 10px;
margin-top: 10px;
transition: all 0.5s ease;

&:hover {
    color: ${({ theme }) => theme.COLORS.BLUE_200};
    background-color: ${({ theme }) => theme.COLORS.WHITE};
}
`