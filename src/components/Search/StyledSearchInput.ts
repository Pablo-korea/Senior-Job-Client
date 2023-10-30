import styled from 'styled-components';

const SearchInputSection = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    padding: 0px 20px;
    border: 1.2px solid #c4c4c4;
    border-radius: 70px;
`;

const TextInput = styled.input`
    width: 100%;
    height: 20px;
    padding: 25px 15px;
    font-size: 1.4rem;
    font-family: inherit;
    border-style: none;

    &::placeholder {
        color: #c4c4c4;
    }
`;

const SubmitButton = styled.button`
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100px;
    height: 45px;
    padding: 14px;
    font-weight: 500;
    font-size: 1.4rem;
    color: #919ba7;

    &:hover {
        color: #124800;
        font-weight: 700;
    }
`;

export { SearchInputSection, TextInput, SubmitButton };
