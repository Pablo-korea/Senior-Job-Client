import { Link } from 'react-router-dom';
import * as S from './StyledLectureDetailNav';

const LectureDetailNav = () => {
    return (
        <S.NavWrap>
            <S.NavList>
                <li>
                    <Link to='/lecture'>강좌 수강</Link>
                </li>
                <li>
                    <Link to='/lecturedetail'>강좌 상세 보기</Link>
                </li>
            </S.NavList>
        </S.NavWrap>
    );
};

export default LectureDetailNav;
