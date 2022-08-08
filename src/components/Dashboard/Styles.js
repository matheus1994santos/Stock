import styled from "styled-components";

export const DashboardTela = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 50px;
    background-color: #b1eb34;
    padding: 12px 4%;
`;

export const BoxBrand = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 300px;
    height: 200px;
    color: white;
    background-color: #33538F;

    & > h1 {
        border-bottom: 0.4px solid rgba(255, 255, 255, 0.456);
    }

    & > span {
        font-size: 18px;
    }
`;


export const BoxGain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 300px;
    height: 200px;
    background-color: #4478DB;
    color: white;
    padding: 14px 0;
`;

export const BoxDebt = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 300px;
    height: 200px;
    background-color: #B33620;
    color: white;
    padding: 14px 0;
`;

export const BoxProfit = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 300px;
    height: 200px;
    background-color: #FF6347;
    color: white;
    padding: 14px 0;
`;