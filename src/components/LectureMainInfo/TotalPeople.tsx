import personIcon from '../../assets/images/icon-person.svg';
import * as S from './StyledLectureMainInfo';

interface TotalPeopleProps {
    maxparticipants?: number;
    currentparticipants?: number;
}

const TotalPeople = ({ maxparticipants, currentparticipants }: TotalPeopleProps) => {
    return (
        <S.InfoWrap icon={personIcon}>
            <span>인원</span>
            <span>
                {maxparticipants}명 (현재 {currentparticipants}명이 지원했어요!)
            </span>
        </S.InfoWrap>
    );
};

export default TotalPeople;
