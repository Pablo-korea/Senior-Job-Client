import Mypage from '../Mypage/Mypage';
import MypageLectureCardT from '~/components/MypageLectureCard/MypageLectureCardT';
import MypageEmptyCard from '~/components/MypageLectureCard/MypageEmptyCard';
import * as S from './StyledOpenLectureList';

const OpenLectureList = () => {
    return (
        <>
            <Mypage>
                <S.OpenLectureTitle>개설 강좌</S.OpenLectureTitle>
                <S.WrapBanner>
                    <S.BannerTitle>인증 받은 경력 정보로 나만의 강좌를 개설해보세요!</S.BannerTitle>
                    <S.BannerBtn>강좌 개설하기</S.BannerBtn>
                </S.WrapBanner>
                <S.LectureBtnWrap>
                    <div>
                        <S.LectureFilterBtn>모집중</S.LectureFilterBtn>
                        <S.LectureFilterBtn>개설 대기중</S.LectureFilterBtn>
                        <S.LectureFilterBtn>진행중</S.LectureFilterBtn>
                        <S.LectureFilterBtn>완료</S.LectureFilterBtn>
                    </div>
                    <S.SortBtnWrap>
                        <S.LectureSortBtn>최신순</S.LectureSortBtn>
                        <S.SepLine></S.SepLine>
                        <S.LectureSortBtn>오래된 순</S.LectureSortBtn>
                    </S.SortBtnWrap>
                </S.LectureBtnWrap>
                <MypageLectureCardT Lecturetype='OpenLecture' />
                {/* <MypageEmptyCard/> */}
            </Mypage>
        </>
    );
};

export default OpenLectureList;
