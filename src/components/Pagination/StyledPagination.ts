import styled from 'styled-components';

interface pageButton {
    selected?: boolean;
}

const Pagination = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 120px;
    gap: 10px;
`;

const pageButton = styled.button<pageButton>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border: 0.7px solid #ddf0d7;
    border-radius: 7px;
    box-shadow: 2px 2px 5px #ddf0d750;
    ${({ selected }) => (selected ? 'background-color : #DDF0D7' : '')};

    & span {
        color: #124800;
        font-size: 1.5rem;
        font-weight: 700;
    }
`;

export { Pagination, pageButton };
