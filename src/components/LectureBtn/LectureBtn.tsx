import { useNavigate } from 'react-router-dom';
import * as S from './StyledLectureBtn';

interface LectureBtnProps {
    img: string;
    title: string;
    desc: string;
}

function LectureBtn({ img, title, desc }: LectureBtnProps) {
    const navigate = useNavigate();

    const handleGoLecturePage = () => {
        navigate('/lecture');
    };

    return (
        <S.LectureBtn onClick={handleGoLecturePage}>
            <img src={img} alt={desc} />
            <span>{title}</span>
        </S.LectureBtn>
    );
}

export default LectureBtn;
