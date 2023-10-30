import BasicLink from '~/components/BasicLink/BasicLink';
import CardMenu from '~/components/CardMenu/CardMenu';
import LectureBtn from '~/components/LectureBtn/LectureBtn';
import label from '@assets/images/Icon-big-label.svg';
import location from '@assets/images/Icon-big-location.svg';
import clock from '@assets/images/Icon-big-clock.svg';
import people from '@assets/images/people.svg';
import bag from '@assets/images/icon-small-bag.svg';
import dot from '@assets/images/icon-small-dot.svg';
import heart from '@assets/images/icon-small-heart.svg';
import house from '@assets/images/icon-small-house.svg';
import pencil from '@assets/images/icon-small-pencil.svg';
import pot from '@assets/images/icon-small-pot.svg';
import scissors from '@assets/images/icon-small-scissors.svg';
import tool from '@assets/images/icon-small-tool.svg';
import LifeQuotes from '@assets/images/LifeQuotes.svg';
import HandHeart from '@assets/images/Icon-handheart.svg';
import PinkLocation from '@assets/images/Icon-pinklocation.svg';
import * as S from './StyledMainPage';

function MainPage() {
    return (
        <S.MinPageWrap>
            <h1 className='hidden'>일벗 메인 페이지</h1>
            <S.CardWrap>
                <h2 className='hidden'>메뉴 카드 선택</h2>
                <CardMenu img={label} imgdesc='가격 라벨 이미지' title='강좌 수강/개설' text='제 2의 커리어 시작하기' move='/lecture' />
                <CardMenu img={location} imgdesc='위치 마커 이미지' title='일자리 찾기' text='내 위치에서 가까운' move='/lecture/proposal' />
                <CardMenu img={clock} imgdesc='시계 이미지' title='파트타임 구하기' text='자유로운 근무시간' move='/parttime' />
            </S.CardWrap>
            <S.MoreInfoWrap>
                <h2 className='hidden'>개인 메뉴 선택</h2>
                <img src={people} alt='대화를 나누고 있는 사람 이미지' />
                <S.ContentsWrap>
                    <p>
                        <span>일 벗</span>과 함께
                        <br />
                        새로운 일자리와 경력을 찾아보세요!
                    </p>
                    <div>
                        <BasicLink text='로그인' move='mypage/login' size='s' />
                        <BasicLink text='회원가입' move='mypage/join' size='s' />
                    </div>
                </S.ContentsWrap>
            </S.MoreInfoWrap>
            <S.LectureBtnWrap>
                <h2 className='hidden'>강좌 종류 선택</h2>
                <p>
                    원하는 <span>강좌</span>를 수강해보세요!
                </p>
                <div>
                    <LectureBtn img={house} title='홈/리빙' desc='집 아이콘' />
                    <LectureBtn img={bag} title='비즈니스' desc='서류 가방 아이콘' />
                    <LectureBtn img={pencil} title='디자인' desc='연필 및 자 아이콘' />
                    <LectureBtn img={tool} title='개발' desc='망치 및 스패너 아이콘' />
                    <LectureBtn img={heart} title='건강' desc='하트 아이콘' />
                    <LectureBtn img={scissors} title='미용' desc='가위 아이콘' />
                    <LectureBtn img={pot} title='요리' desc='냄비 아이콘' />
                    <LectureBtn img={dot} title='기타' desc='점 아이콘' />
                </div>
            </S.LectureBtnWrap>
            <S.SearchJobWrap>
                <h2 className='hidden'>파트타임 일자리 검색</h2>
                <S.SearchFormWrap>
                    <p>새로운 일자리를 찾고 계시나요?</p>
                    <span>원하는 직종 및 지역을 선택하고 일자리를 찾아보세요!</span>
                    <S.SearchForm>
                        <div>
                            <S.JobTypeBtn type='button' iconimg={HandHeart} colortype='orange'>
                                직종
                            </S.JobTypeBtn>
                            <S.JobTypeBtn type='button' iconimg={PinkLocation} colortype='pink'>
                                지역
                            </S.JobTypeBtn>
                        </div>
                        <S.InputBtnWrap>
                            <input placeholder='원하는 키워드를 입력해보세요!' />
                            <button>검색</button>
                        </S.InputBtnWrap>
                    </S.SearchForm>
                </S.SearchFormWrap>
                <img src={LifeQuotes} alt='명언 이미지' />
            </S.SearchJobWrap>
        </S.MinPageWrap>
    );
}

export default MainPage;
