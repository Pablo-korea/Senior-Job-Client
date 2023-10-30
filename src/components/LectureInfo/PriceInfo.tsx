import IconLabel from '../IconLabel/IconLabel';
import priceIcon from '../../assets/images/icon-price.svg';
import * as S from './StyledLectureInfo';

const PriceInfo = () => {
    return (
        <S.Infowrap>
            <IconLabel label='희망 가격' iconimg={priceIcon} />
            <S.Line />
            <p>50,000원</p>
        </S.Infowrap>
    );
};

export default PriceInfo;
