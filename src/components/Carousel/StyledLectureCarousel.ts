import styled from 'styled-components';

const Carousel = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 500px;
    background-image: linear-gradient(to bottom, #e6fbe3, #ffffff);
`;

const Header = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 140px;
    & h4 {
        font-weight: 700;
        font-size: 3.5rem;
        color: #124800;
    }
`;

const Body = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 22px;
`;

const CardGroup = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
`;

export { Carousel, Header, Body, CardGroup };
