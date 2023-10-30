import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CardLink = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 313px;
    padding: 45px 0;
    border-radius: 30px;
    background-color: #ffffff;
    font-weight: 700;
    color: #124800;

    & > img {
        margin-bottom: 20px;
    }

    & > span {
        margin-bottom: 9px;
        font-size: 1.7rem;
    }

    & > p {
        font-size: 2.3rem;
    }
`;
