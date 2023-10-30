import { useNavigate, useParams } from 'react-router-dom';
import ContentHeader from '@components/ContentHeader/ContentHeader';
import LectureInfo from '@components/LectureInfo/LectureInfo';
import Logo from '../../assets/images/Logo.svg';
import NotFoundImg from '../../assets/images/Image-Not-Found.svg';
import * as S from './StyledProposeLectureDetail';

const ProposeLectureDetail = () => {
    const lectureData = {
        create_id: 92,
        creator: 'artest18',
        max_participants: 50,
        current_participants: 0,
        category: '운동',
        bank_name: '카카오뱅크',
        account_name: '최아랑',
        account_number: '12311111',
        price: 55000,
        title: '운동왕이 되고싶은가?',
        content: '운동은 손목이 중요한것!',
        cycle: '주',
        count: 2,
        start_date: '2023-08-10T10:00:00',
        end_date: '2023-08-15T12:00:00',
        recruitEnd_date: '2023-07-23T12:00:00',
        region: '울릉도',
        image_url: '',
        createdDate: '2023-08-04T18:09:37',
        status: 'WAITING'
    };
    const navigate = useNavigate();
    const handleGoListPage = () => {
        navigate('lecture/apply');
    };

    const paramArr = { '강좌 제안': '/propose', '강좌 상세보기': '/propose/detail' };
    return (
        <>
            <S.LectureDetailWrap>
                <h1 className='hidden'>강좌 상세 페이지</h1>
                <S.NavWrap>
                    <ContentHeader {...paramArr} />
                </S.NavWrap>
                <S.LecturePostWrap>
                    <h2 className='hidden'>강좌 주요 내용</h2>
                    {lectureData && (
                        <>
                            <S.LectureInfoWrap>
                                <S.LectureTitleWrap>
                                    <S.LectureTitle>{lectureData.title}</S.LectureTitle>
                                    <S.InstructorInfoWrap>
                                        <img src={Logo} alt='프로필 이미지' />
                                        <span>김땡땡땡</span>
                                    </S.InstructorInfoWrap>
                                </S.LectureTitleWrap>
                                <LectureInfo type='region' lecturetype='propose' region={lectureData.region} />
                                <LectureInfo type='lectureContent' lecturetype='propose' content={lectureData.content} />
                                <LectureInfo type='price' />
                                <LectureInfo type='schedule' />
                                <LectureInfo type='question' />
                            </S.LectureInfoWrap>
                        </>
                    )}
                </S.LecturePostWrap>
                <S.BtnWrap>
                    <S.MoveBtn>모집 지원하기</S.MoveBtn>
                    <S.MoveBtn>목록으로 돌아가기</S.MoveBtn>
                </S.BtnWrap>
            </S.LectureDetailWrap>
        </>
    );
};

export default ProposeLectureDetail;
