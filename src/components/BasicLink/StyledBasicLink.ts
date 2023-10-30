import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface StyledLinkProps {
    size: 's' | 'm';
}

export const StyledLink = styled(Link)<StyledLinkProps>`
    display: inline-block;
    width: ${(props) => (props.size === 's' ? '120px' : '173px')};
    padding: 12px 0;
    border-radius: 3px;
    background-color: #ffffff;
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    color: #5e6f68;
    box-shadow: 2px 2px 10px 3px #b5c7b0;
`;
