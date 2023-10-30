import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import postAPI from '../../api/postAPI';
import LectureMainInfo from '../../components/LectureMainInfo/LectureMainInfo';
import LectureInfo from '../../components/LectureInfo/LectureInfo';
import ContentHeader from '@components/ContentHeader/ContentHeader';
import Logo from '../../assets/images/Logo.svg';
import NotFoundImg from '../../assets/images/Image-Not-Found.svg';
import * as S from './StyledLectureDetail';
import JoinButton from '~/components/JoinButton/JoinButton';
import useModal from '~/hooks/useModal';
import MainModal from '~/components/Modals/MainModal';
import InnerModal from '~/components/Modals/InnerModal';

const LectureDetail = () => {
    const { createid } = useParams();
    const navigate = useNavigate();
    const [lectureData, setLectureData] = useState<LectureData | null>(null);
    const [isShowModal, isShowInnerModal, handleShowModal, handleCloseModal, handleShowInnerModal, handleCloseInnerModal] = useModal();

    useEffect(() => {
        const getLectureData = async () => {
            try {
                const data = await postAPI.getPostDetail(createid);
                console.log(data);
                setLectureData(data);
            } catch (error) {
                console.log(error);
            }
        };
        getLectureData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const paramArr = { '강좌 수강': '/lecture', '강좌 상세보기': '/lecture/detail' };

    const handleGoListPage = () => {
        navigate('lecture/apply');
    };

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
                            <S.LectureTitle>{lectureData.title}</S.LectureTitle>
                            <S.LectureInfoWrap>
                                <S.LectureCardWrap>
                                    <h3 className='hidden'>강좌 개설자, 가격, 진행일정, 인원 정보</h3>
                                    <img src={lectureData.image_url ? lectureData.image_url : NotFoundImg} alt='배경 이미지' />
                                    <div>
                                        <S.InstructorWrap>
                                            <img src={Logo} alt='사람 이미지' />
                                            <span>{lectureData.creator}</span>
                                        </S.InstructorWrap>
                                        <LectureMainInfo type='cost' price={lectureData.price} />
                                        <LectureMainInfo
                                            type='schedule'
                                            startdate={lectureData.start_date}
                                            enddate={lectureData.end_date}
                                            cycle={lectureData.cycle}
                                            count={lectureData.count}
                                        />
                                        <LectureMainInfo
                                            type='total'
                                            maxparticipants={lectureData.max_participants}
                                            currentparticipants={lectureData.current_participants}
                                        />
                                        <JoinButton
                                            text1='7일 남았어요!'
                                            text2='참여 신청하기'
                                            btncolor='#124800'
                                            color='#ffffff;'
                                            onClick={handleShowModal}
                                        />
                                    </div>
                                </S.LectureCardWrap>
                                <LectureInfo type='region' region={lectureData.region} />
                                <LectureInfo type='lectureContent' content={lectureData.content} />
                                <LectureInfo
                                    type='payment'
                                    bankname={lectureData.bank_name}
                                    accountnumber={lectureData.account_number}
                                    accountname={lectureData.account_name}
                                />
                                <LectureInfo type='question' />
                            </S.LectureInfoWrap>
                        </>
                    )}
                </S.LecturePostWrap>
                <S.MoveListLink to='/lecture'>목록으로 돌아가기</S.MoveListLink>
            </S.LectureDetailWrap>

            {!isShowModal ? null : <MainModal closeModal={handleCloseModal} showInnerModal={handleShowInnerModal} />}
            {!isShowInnerModal ? null : (
                <InnerModal
                    closeInnerModal={handleCloseInnerModal}
                    movePage={handleGoListPage}
                    desc='강좌 신청 완료 모달'
                    text1='참여 신청이 정상적으로 이루어졌습니다.'
                    text2='개설자의 승인을 기다려주세요!'
                    moveText='내가 신청한 강좌 목록 보러가기'
                />
            )}
        </>
    );
};

export default LectureDetail;
