import styled from 'styled-components';

const body = styled.div`
    gap: 10px;
    width: 240px;
    margin: 7px 12px;
    padding: 40px 10px;
    border-right: 0.7px solid #ccc;
`;

const title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 52px;
    border-bottom: 2px solid #124800;
`;

const titleTypo = styled.span`
    font-size: 2.4rem;
    font-weight: 700;
`;

const menuGroup = styled.div`
    gap: 7px;
    width: 100%;
`;

const menuTitle = styled.button`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 30px 14px 14px 14px;
    background: none;
    border-bottom: 2px solid #cccccc;
    font-size: 1.7rem;
    font-weight: 500;
`;

const menuList = styled.div``;

const menuElement = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 50px;
    padding-left: 28px;
    list-style: none;
    font-size: 1.4rem;
    font-weight: 500;

    &:hover {
        font-weight: 700;
    }
`;

export { body, title, titleTypo, menuGroup, menuTitle, menuList, menuElement };
