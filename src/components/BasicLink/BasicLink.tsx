import * as S from './StyledBasicLink';

interface BasicLinkProps {
    text: string;
    move: string;
    size: 's' | 'm';
}

const BasicLink = ({ text, move, size }: BasicLinkProps) => {
    return (
        <S.StyledLink to={move} size={size}>
            {text}
        </S.StyledLink>
    );
};

export default BasicLink;
