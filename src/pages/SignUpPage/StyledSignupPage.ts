import styled from 'styled-components';

const body = styled.div`
    /* display: flex; */
    margin: 70px 140px;
    gap: 14px 0px;
    width: auto;
    /* margin: 50px 0px; */
`;
const FormBox = styled.section`
    display: flex;
    flex-direction: column;
    gap: 14px;
    width: 90%;
    height: 2500px;
    padding: 35px 50px 35px 35px;
    border-radius: 20px;
    border: 0.7px solid #ccc;
`;

const InputLabel = styled.span`
    margin: auto 0px;
    height: auto;
`;

const ButtonSection = styled.section`
    display: flex;
    justify-content: center;
    padding: 30px 0px;
`;

const RegionSection = styled.section`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 70%;
    height: 500px;
`;

const SelectedRegion = styled.input`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    padding: 10px;
    border: 1.2px solid #c4c4c4;
    text-align: right;
    font-weight: 500;
`;

const PriceGroup = styled.div`
    display: flex;
    justify-content: space-between;
`;

export { body, FormBox, InputLabel, ButtonSection, RegionSection, SelectedRegion, PriceGroup };
