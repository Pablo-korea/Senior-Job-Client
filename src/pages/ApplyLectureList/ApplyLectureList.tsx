import Mypage from '../Mypage/Mypage';
import * as S from './StyledApplyLectureList';
import MypageLectureCardS from '~/components/MypageLectureCard/MypageLectureCardS';
import MypageEmptyCard from '~/components/MypageLectureCard/MypageEmptyCard';

function ApplyLectureList() {
    return (
        <>
            <Mypage>
                <S.OpenLectureTitle>신청 강좌</S.OpenLectureTitle>
                <S.WrapBanner>
                    <S.BannerTitle>인증 받은 경력 정보로 나만의 강좌를 개설해보세요!</S.BannerTitle>
                    <S.BannerBtn>강좌 개설하기</S.BannerBtn>
                </S.WrapBanner>
                <S.LectureBtnWrap>
                    <S.SortBtnWrap>
                        <S.LectureSortBtn>최신순</S.LectureSortBtn>
                        <S.SepLine></S.SepLine>
                        <S.LectureSortBtn>오래된 순</S.LectureSortBtn>
                    </S.SortBtnWrap>
                </S.LectureBtnWrap>
                <MypageLectureCardS Lecturetype='Apply' />
                {/* <MypageEmptyCard/> */}
            </Mypage>
        </>
    );
}

export default ApplyLectureList;
