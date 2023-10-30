import { useState } from 'react';

const useModal = (): [boolean, boolean, () => void, () => void, () => void, () => void] => {
    const [isShowModal, setIsShowModal] = useState(false);
    const [isShowInnerModal, setIsShowInnerModal] = useState(false);

    const handleShowModal = () => {
        setIsShowModal(true);
    };

    const handleCloseModal = () => {
        setIsShowModal(false);
    };

    const handleShowInnerModal = () => {
        setIsShowInnerModal(true);
    };

    const handleCloseInnerModal = () => {
        setIsShowInnerModal(false);
    };

    return [isShowModal, isShowInnerModal, handleShowModal, handleCloseModal, handleShowInnerModal, handleCloseInnerModal];
};

export default useModal;
