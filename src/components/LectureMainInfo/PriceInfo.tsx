import priceIcon from '../../assets/images/icon-price.svg';
import * as S from './StyledLectureMainInfo';

interface PriceInfoProps {
    price?: number;
}

const PriceInfo = ({ price }: PriceInfoProps) => {
    const priceValue = price !== undefined ? price : 0;
    const priceformat = priceValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return (
        <S.InfoWrap icon={priceIcon}>
            <span>가격</span>
            <span>{priceformat}원</span>
        </S.InfoWrap>
    );
};

export default PriceInfo;
