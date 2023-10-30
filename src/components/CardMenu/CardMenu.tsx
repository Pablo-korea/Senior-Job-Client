import * as S from './StyledCardMenu';

interface CardMenuProps {
    img: string;
    imgdesc: string;
    title: string;
    text: string;
    move: string;
}

function CardMenu({ img, imgdesc, title, text, move }: CardMenuProps) {
    return (
        <S.CardLink to={move}>
            <img src={img} alt={imgdesc} />
            <span>{text}</span>
            <p>{title}</p>
        </S.CardLink>
    );
}

export default CardMenu;
