import * as S from './StyledMypageLectureCard';

interface LectureCardApplyProps {
    Lecturetype?: string;
}

const MypageLectureCardS = ({ Lecturetype }: LectureCardApplyProps) => {
    return (
        <S.LectureCard>
            <S.CategoryBtnWrap>
                <S.LectureCategoryWrap>
                    <S.LectureCategory>요리</S.LectureCategory>
                    {Lecturetype === 'Participate' && <S.LectureAutoDelete>수강 완료</S.LectureAutoDelete>}
                    {Lecturetype === 'Apply' && <S.LectureState>승인 대기중</S.LectureState>}
                </S.LectureCategoryWrap>
                <S.FixBtnWrap>
                    <S.LectureFixBtn>{Lecturetype === 'Participate' ? '삭제하기' : '신청 취소하기'}</S.LectureFixBtn>
                </S.FixBtnWrap>
            </S.CategoryBtnWrap>
            <S.LectureDetailWrap>
                <S.LectureInfoWrap>
                    <S.LectureTitle>30년 경력 한식 장인의 퓨전 한식 요리 교실</S.LectureTitle>
                    <S.LectureLocation>부산시 사하구</S.LectureLocation>
                    <S.LectureDate>2023년 6월 1일 ~ 2023년 6월 25일</S.LectureDate>
                    <S.LectureCost>39,800</S.LectureCost>
                </S.LectureInfoWrap>
            </S.LectureDetailWrap>
        </S.LectureCard>
    );
};

export default MypageLectureCardS;
