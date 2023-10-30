import * as S from './StyledMypageLectureCard';
import emptyImg from '@images/image-error-small.svg';

const MypageEmptyCard = () => {
    return (
        <S.EmptyLectureCard>
            <img src={emptyImg} alt='노란색 손바닥 이미지'></img>
            <div>
                현재 진행중인 강좌가 없습니다. <br /> 새로 강좌를 개설해주세요!
            </div>
        </S.EmptyLectureCard>
    );
};

export default MypageEmptyCard;
