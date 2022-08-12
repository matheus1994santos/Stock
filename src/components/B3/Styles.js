import styled from "styled-components";

export const B3Container = styled.section`
    border-top: 4px ridge black;
    border-bottom: 4px ridge black;
    margin: 0.5px 0;
`;

export const BdrStock = styled.form`
    color: Black;
    height: 440px;
`;

export const InputTexT = styled.input`
    padding: 0.5em;
	color: palevioletred;
	background: papayawhip;
	border: 0.5 solid tomato;
    outline: none;
	border-radius: 18px;
	/* width: 100%; */
	margin: 0.5em;
`;

export const InputSubmit = styled.input`
    background-color: palevioletred;
    border-radius: 16px;
    font-size: 14px;
    width: 80px;
    padding: 2px;
    color: papayawhip;
    text-align:center ;
    outline:none;
    border: 1px solid black;
    cursor: pointer;
`;

export const Graphic = styled.section`
    display: flex;
    margin: 4px 0;
    gap: 50px;
    height: 380px;

    & nav{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 180px;
        background-color: pink;
        border: 3px solid palevioletred;
        gap: 30px;

        & p{
            padding: 4px;
            width: 100%;
            border-bottom: 1px solid black;
            cursor: pointer;

            & a{
                font-size: 18px;
                font-weight: 700;
                
            }
        }
    }

    & div{
        display: flex;
        width: 100%;
        justify-content: space-around;
        background-color: pink;
        border: 3px solid palevioletred;

        & img{
            border: 3px solid palevioletred;
        }
    }
`;