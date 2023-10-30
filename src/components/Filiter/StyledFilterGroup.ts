import styled from 'styled-components';

const Filter = styled.section`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 230px;
    margin-top: 35px;
`;

const FilterGroup = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 7px;
`;

const FilterTitle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 7px;
    & > span {
        font-size: 2rem;
        font-weight: bold;
        color: #124800;
    }
`;

const Horizontal = styled.hr`
    width: 100%;
    border-style: none;
    border-bottom: 0.7px solid #b5c7b0;
`;

export { Filter, FilterGroup, FilterTitle, Horizontal };
