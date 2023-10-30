import IconLabel from '../IconLabel/IconLabel';
import paymentIcon from '../../assets/images/icon-card.svg';
import * as S from './StyledLectureInfo';

interface PaymentInfoProps {
    bankname?: string;
    accountnumber?: string;
    accountname?: string;
}

const PaymentInfo = ({ bankname, accountnumber, accountname }: PaymentInfoProps) => {
    return (
        <S.Infowrap>
            <IconLabel label='결제 수단' iconimg={paymentIcon} />
            <S.Line />
            <p>{`${bankname} ${accountnumber} (예금주 : ${accountname})`}</p>
        </S.Infowrap>
    );
};

export default PaymentInfo;
