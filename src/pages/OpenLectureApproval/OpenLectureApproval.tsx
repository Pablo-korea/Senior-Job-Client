import Mypage from '../Mypage/Mypage';
import ContentHeader from '@components/ContentHeader/ContentHeader';
import * as S from './StyledOpenLectureApproval';

const OpenLectureApproval = () => {
    const paramArr: CotentHeaderParam = { '개설 강좌': '/mypage/lecture/open', '강좌 참여자 승인하기': '/mypage/lecture/open/approval/1' };
    const ListData = [
        {
            name: '홍길동',
            reason: '대한민국 국회는 국민의 보통·평등·직접·비밀선거에 의하여 선출된 국회의원으로 구성한다. 대법원장은 국회의 동의를 얻어 대통령이 임명한다. 모든 국민은 행위시의 법률에 의하여 범죄를 구성하지 아니하는 행위로 소추되지 아니하며, 동일한 범죄에 대하여 거듭 처벌받지 아니한다. 헌법재판소 재판관의 임기는 6년으로 하며, 법률이 정하는 바에 의하여 연임할 수 있다.'
        },
        { name: '홍길동', reason: '' },
        { name: '홍길동', reason: '' },
        { name: '홍길동', reason: '' },
        { name: '홍길동', reason: '' },
        { name: '홍길동', reason: '' },
        { name: '홍길동', reason: '' },
        { name: '홍길동', reason: '' },
        { name: '홍길동', reason: '' },
        { name: '홍길동', reason: '' }
    ];
    return (
        <>
            <Mypage>
                <ContentHeader {...paramArr}></ContentHeader>
                <S.ListWrap>
                    <S.ListHeader>
                        <span>번호</span>
                        <span>이름</span>
                        <span>신청 이유</span>
                        <span>승인 여부 (3/30)</span>
                    </S.ListHeader>
                    <S.ListItemWrap>
                        {ListData.map((data, index) => {
                            return (
                                <S.ListItem>
                                    <span>{String(index + 1).padStart(2, '0')}</span>
                                    <span>{data.name}</span>
                                    <span>{data.reason ? data.reason : '-'}</span>
                                    <span>
                                        <input type='checkbox' id='cb1'></input>
                                    </span>
                                </S.ListItem>
                            );
                        })}
                    </S.ListItemWrap>
                </S.ListWrap>
                <S.StateBtnWrap>
                    <button>강좌 모집 마감하기</button>
                    <button>강좌 진행하기</button>
                </S.StateBtnWrap>
            </Mypage>
        </>
    );
};

export default OpenLectureApproval;
