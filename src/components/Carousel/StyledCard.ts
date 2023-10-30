import styled from 'styled-components';

const Card = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 200px;
    height: 310px;
    gap: 20px;
`;

const Thumbnail = styled.section`
    position: relative;
    width: 200px;
    height: 500px;
    overflow: hidden;
    border-radius: 10px;

    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const Category = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    height: 40px;
    padding: 7px 12px 7px 7px;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #ffb30e;
    border-radius: 0px 0px 20px 0px;
    font-size: 1.6rem;
    font-weight: 700;
    color: #fff;
`;

const Description = styled.section`
    display: inline-block;
    flex-direction: column;
    gap: 20px;
    padding: 10px;
`;

const Title = styled.div`
    width: 100%;
    height: 48px;
    margin-bottom: 20px;
    & h4 {
        font-size: 1.6rem;
        font-weight: 700;
        color: #424242;
    }
`;

const Region = styled.div`
    display: inline-block;
    justify-content: center;
    align-items: center;
    padding: 5px 10px;
    border-radius: 5px;
    background-color: #f1722822;
    & span {
        display: inline-block;
        width: auto;
        font-size: 1.5rem;
        font-weight: 700;
        color: #f17228;
    }
`;

export { Card, Thumbnail, Category, Description, Title, Region };
