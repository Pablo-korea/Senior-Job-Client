import { useNavigate } from 'react-router-dom';
import * as S from './StyledMypageLectureCard';

interface MypageLectureCardProps {
    Lecturetype?: string;
}

const MypageLectureCardT = ({ Lecturetype }: MypageLectureCardProps) => {
    const navigate = useNavigate();
    const handleMoveApproval = () => {
        if (Lecturetype === 'ProposeLecture') {
            navigate(`/mypage/lecture/propose/approval/1`);
        } else if (Lecturetype === 'OpenLecture') {
            navigate(`/mypage/lecture/open/approval/1`);
        }
    };

    return (
        <>
            <S.LectureCard>
                <S.CategoryBtnWrap>
                    <S.LectureCategoryWrap>
                        <S.LectureCategory>요리</S.LectureCategory>
                        {Lecturetype === 'ProposeLecture' && <S.LectureAutoDelete>14일 후에 자동으로 삭제됩니다!</S.LectureAutoDelete>}
                        {Lecturetype === 'OpenLecture' && <S.LectureCategory>모집중</S.LectureCategory>}
                    </S.LectureCategoryWrap>
                    <S.FixBtnWrap>
                        <S.LectureFixBtn>수정하기</S.LectureFixBtn>
                        <S.LectureFixBtn>삭제하기</S.LectureFixBtn>
                    </S.FixBtnWrap>
                </S.CategoryBtnWrap>
                <S.LectureDetailWrap>
                    <S.LectureInfoWrap>
                        <S.LectureTitle>30년 경력 한식 장인의 퓨전 한식 요리 교실</S.LectureTitle>
                        <S.LectureLocation>부산시 사하구</S.LectureLocation>
                        <S.LectureDate>2023년 6월 1일 ~ 2023년 6월 25일</S.LectureDate>
                        <S.LectureCost>39,800</S.LectureCost>
                    </S.LectureInfoWrap>
                    <S.ParticipantsBtnWrap>
                        <S.LectureDeadline>
                            자동 모집 마감까지
                            <span>7일</span>
                            남았어요!
                        </S.LectureDeadline>
                        <S.ParticipantsListBtn onClick={handleMoveApproval}>
                            <p>신청자 (5/20)</p>
                            <p>모집 마감하기</p>
                        </S.ParticipantsListBtn>
                    </S.ParticipantsBtnWrap>
                </S.LectureDetailWrap>
            </S.LectureCard>
        </>
    );
};

export default MypageLectureCardT;
