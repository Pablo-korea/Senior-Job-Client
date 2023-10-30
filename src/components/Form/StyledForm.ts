import styled from 'styled-components';

const FormBox = styled.section`
    display: flex;
    flex-direction: column;
    gap: 14px;
    width: auto;
    height: auto;
    padding: 35px 50px 35px 35px;
    border-radius: 20px;
    border: 0.7px solid #ccc;
`;

const Form = styled.div`
    width: 100%;
    padding: 20px 14px;
`;

const FormHeader = styled.div`
    display: flex;
    gap: 7px;
    width: auto;
    height: 27px;
    padding: 0px 7px;
    margin-bottom: 20px;
`;

const FormTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

const FormTitleBullet = styled.div`
    width: 2px;
    height: auto;
    background-color: #ccc;
`;

const FormTitleTypo = styled.span`
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 1.8rem;
`;

const FormRequired = styled.span`
    font-size: 1.8rem;
    color: #ff6666;
`;

const FormHintTitle = styled.ul``;

const FormHintBody = styled.li`
    padding: 5px;
    list-style-type: disc;
    font-size: 1.2rem;
    color: #124800;
`;

const FormBody = styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px;
    margin: 20px 7px;
    font-weight: 500;
    font-size: 1.4rem;
`;

const FormGroup = styled.div`
    display: flex;
    justify-items: center;
    gap: 14px;
    font-weight: 500;
    font-size: 1.4rem;
`;

const Horizontal = styled.div`
    border-bottom: 0.7px solid #ccc;
`;

export {
    FormBox,
    Form,
    FormHeader,
    FormTitle,
    FormTitleBullet,
    FormTitleTypo,
    FormRequired,
    FormHintTitle,
    FormHintBody,
    FormBody,
    FormGroup,
    Horizontal
};
