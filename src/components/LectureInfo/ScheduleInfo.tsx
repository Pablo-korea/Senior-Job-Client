import IconLabel from '../IconLabel/IconLabel';
import calendarIcon from '../../assets/images/icon-calendar.svg';
import * as S from './StyledLectureInfo';

const ScheduleInfo = () => {
    return (
        <S.Infowrap>
            <IconLabel label='진행일정' iconimg={calendarIcon} />
            <S.Line />
            <p>2023년 06월 1일 ~2023년 6월 25일 (주 3회)</p>
        </S.Infowrap>
    );
};

export default ScheduleInfo;
