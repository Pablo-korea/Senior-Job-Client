import IconLabel from '../IconLabel/IconLabel';
import questionIcon from '../../assets/images/icon-question.svg';
import * as S from './StyledLectureInfo';

const QuestionsInfo = () => {
    return (
        <S.QuestionWrap>
            <IconLabel label='문의 사항' iconimg={questionIcon} />
            <S.Line />
            <p>010-1234-5678</p>
        </S.QuestionWrap>
    );
};

export default QuestionsInfo;
