import styled from 'styled-components';

interface HeadingProps {
    iconimg: string;
}

export const Heading = styled.h3<HeadingProps>`
    display: flex;
    align-items: center;
    font-size: 2.4rem;
    font-weight: 700;

    &::before {
        content: '';
        display: inline-block;
        width: 40px;
        height: 40px;
        margin-right: 7px;
        background: ${(props) => `url(${props.iconimg}) no-repeat 40px 40px`};
        background-position: 50% 50%;
        background-size: cover;
    }
`;
