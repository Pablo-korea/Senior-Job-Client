import closeIcon from '../../assets/images/icon-close-btn.svg';
import * as S from './StyledModal';

interface InnerModalProps {
    closeInnerModal: () => void;
    movePage?: () => void;
    desc: string;
    text1: string;
    text2?: string;
    moveText?: string;
}

const InnerModal = ({ closeInnerModal, movePage, desc, text1, text2, moveText }: InnerModalProps) => {
    return (
        <S.ModalWrap>
            <S.ModalContentWrap>
                <button type='button' onClick={closeInnerModal}>
                    <img src={closeIcon} alt='창 닫기 아이콘' />
                </button>
                <h1 className='hidden'>{desc}</h1>
                <S.SuccessContent>
                    {text1}
                    <br /> {text2}
                </S.SuccessContent>
                <S.MoveList onClick={movePage}>{moveText}</S.MoveList>
            </S.ModalContentWrap>
        </S.ModalWrap>
    );
};

export default InnerModal;
