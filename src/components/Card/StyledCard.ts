import styled from 'styled-components';

const Card = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    width: 240px;
    height: 320px;
    padding: 10px;
    border: 0.7px solid #ccc;
    border-radius: 10px;
`;

const Thumbnail = styled.section`
    position: relative;
    width: 220px;
    height: 300px;
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

const Status = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    height: 22px;
    padding: 7px 7px 7px 12px;
    position: absolute;
    right: 0;
    bottom: 0;
    background-color: #54ad45;
    border-radius: 20px 0px 0px 0px;
    font-size: 1.3rem;
    font-weight: 700;
    color: #fff;
`;

const Description = styled.section`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    height: 100%;
    padding: 10px;
`;

const Title = styled.div`
    width: 100%;
    height: 45px;
    & h4 {
        font-size: 1.7rem;
        font-weight: 700;
        color: #124800;
    }
`;

const UserName = styled.div`
    & span {
        font-size: 1.6rem;
        font-weight: 700;
        color: #9e9e9e;
    }
`;

const Region = styled.div`
    & span {
        font-size: 1.6rem;
        font-weight: 700;
        color: #424242;
    }
`;

const Price = styled.div`
    display: flex;
    justify-content: end;

    & span {
        font-size: 1.6rem;
        font-weight: 700;
        color: #2e5bb8;
    }
`;

export { Card, Thumbnail, Category, Status, Description, Title, UserName, Region, Price };
