import styled from 'styled-components';

const SearchBarSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    height: 100px;
`;

const TextInput = styled.input`
    display: flex;
    align-items: center;
    width: 600px;
    padding: 15px;
    font-size: 2rem;
    border-style: none;
    border-radius: 5px;
    background-color: #f5f5f5;

    &::placeholder {
        color: #9e9e9e;
    }
`;

const SubmitButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 7px;
    width: 150px;
    padding: 15px;
    border-radius: 5px;
    background-color: #124800;
    font-weight: 500;
    font-size: 2rem;
    color: #fff;
`;

export { SearchBarSection, TextInput, SubmitButton };
