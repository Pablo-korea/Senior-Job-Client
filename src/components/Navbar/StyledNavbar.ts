import styled from 'styled-components';

const Navbar = styled.nav`
    display: flex;
    justify-content: space-between;
    font-weight: 700;
    height: 100px;
    width: auto;
    padding: 0px 140px;
    border-bottom: 1px solid #ccc;
`;

const Logo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
        margin: 5px;
    }
`;

const Menu = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 40px;
`;

const MenuTypo = styled.button`
    height: 100%;
    font-size: 2.4rem;
    border-bottom: ${({ color }) => (color === 'true' ? '3.5px solid #124800;' : '')};

    & a {
        color: ${({ color }) => (color === 'true' ? '#124800' : '')};
    }
`;

const ButtonGroup = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 30px;
`;

const ButtonTypo = styled.button`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 7px;
    font-size: 2rem;
    color: #124800;
`;

export { Navbar, Logo, Menu, MenuTypo, ButtonGroup, ButtonTypo };
