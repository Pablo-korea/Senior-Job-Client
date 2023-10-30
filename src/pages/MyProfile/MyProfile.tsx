import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import dayjs from 'dayjs';

import Mypage from '@pages/Mypage/Mypage';
import lectureCategory from '~/constants/category';
import ContentHeader from '@components/ContentHeader/ContentHeader';
import FormHeader from '@components/Form/FormHeader';
import { TextInput } from '@components/Form/TextInput';
import SearchInput from '~/components/Search/SearchInput';
import Dropdown from '@components/Form/Dropdown';
import BirthDatePicker from '@components/Form/BirthDatePicker';
import { SubmitButton } from '@components/Button/StyledSubmitButton';
import KakaoMap from '@components/Map/KakaoMap';
import useModal from '~/hooks/useModal';
import InnerModal from '@components/Modals/InnerModal';

import * as formStyle from '@components/Form/StyledForm';
import * as s from './StyledMyProfile';

export default function MyProfile() {
    const paramArr: CotentHeaderParam = { '마이 프로필': '/mypage/profile', '내 정보': '/mypage/profile' };

    const navigate = useNavigate();
    const [isSearchRegion, setSearchRegion] = useState('');
    const [isLockedProfile, setLockedProfile] = useState(true);
    const [isShowModal, isShowInnerModal, handleShowModal, handleCloseModal, handleShowInnerModal, handleCloseInnerModal] = useModal();
    const [isUserInfo, setUserInfo] = useState<UserData>({
        phone_number: 8212345678,
        password: '',
        name: '',
        birth_date: dayjs(),
        gender: '',
        job: '',
        region: '',
        category: ''
    });

    console.log(isUserInfo);

    const ImageFormHint: JSX.Element = (
        <formStyle.FormHintTitle>
            <formStyle.FormHintBody>허용 파일 포맷 : .jpg .png .bmp</formStyle.FormHintBody>
            <formStyle.FormHintBody>최대 파일 크기 : 1024mb</formStyle.FormHintBody>
        </formStyle.FormHintTitle>
    );
    return (
        <>
            <Mypage>
                <ContentHeader {...paramArr}></ContentHeader>
                <formStyle.FormBox>
                    <formStyle.Form>
                        <FormHeader title='프로필 이미지' required={true} hint={ImageFormHint}></FormHeader>
                        <formStyle.FormBody></formStyle.FormBody>
                    </formStyle.Form>
                    <formStyle.Form>
                        <FormHeader title='전화 번호' required={true}></FormHeader>
                        <formStyle.FormBody>
                            <TextInput
                                type='tel'
                                name='phone_number'
                                placeholder='010-1234-5678'
                                required={true}
                                width='100%'
                                value='전화번호 예시'
                                disabled={isLockedProfile}
                                onChange={(e: any) => {
                                    setUserInfo({ ...isUserInfo, phone_number: e });
                                }}
                            />
                        </formStyle.FormBody>
                    </formStyle.Form>
                    <formStyle.Form>
                        <FormHeader title='비밀번호' required={true}></FormHeader>
                        <formStyle.FormBody>
                            <TextInput
                                type='password'
                                name='password'
                                placeholder='8~16 자리 / 영문, 대소문자, 숫자, 특수문자 사용 가능'
                                required={true}
                                width='100%'
                                disabled={isLockedProfile}
                                value='비밀번호 예시'
                                onChange={(e: any) => {
                                    setUserInfo({ ...isUserInfo, password: e });
                                }}
                            />
                        </formStyle.FormBody>
                    </formStyle.Form>

                    <formStyle.Form>
                        <FormHeader title='이름' required={true}></FormHeader>
                        <formStyle.FormBody>
                            <TextInput
                                type='text'
                                name='name'
                                placeholder='김일벗'
                                required={true}
                                width='100%'
                                disabled={isLockedProfile}
                                value='이름 예시'
                                onChange={(e: any) => {
                                    setUserInfo({ ...isUserInfo, name: e });
                                }}
                            />
                        </formStyle.FormBody>
                    </formStyle.Form>

                    <formStyle.Form>
                        <FormHeader title='생년월일' required={true}></FormHeader>
                        <formStyle.FormBody>
                            <formStyle.FormGroup>
                                {{ isLockedProfile } ? (
                                    <TextInput
                                        type='text'
                                        name='birth_date'
                                        placeholder='01/01/2023'
                                        required={true}
                                        width='100%'
                                        disabled={isLockedProfile}
                                        value='생년월일 예시'
                                    />
                                ) : (
                                    <BirthDatePicker
                                        onChange={(e: any) => {
                                            setUserInfo({ ...isUserInfo, birth_date: e });
                                        }}
                                    />
                                )}
                            </formStyle.FormGroup>
                        </formStyle.FormBody>
                    </formStyle.Form>

                    <formStyle.Form>
                        <FormHeader title='성별' required={true}></FormHeader>
                        <formStyle.FormBody>
                            <TextInput
                                type='text'
                                name='gender'
                                placeholder='남성'
                                width='100%'
                                disabled={isLockedProfile}
                                value='성별 예시'
                                onChange={(e: any) => {
                                    setUserInfo({ ...isUserInfo, gender: e });
                                }}
                            />
                        </formStyle.FormBody>
                    </formStyle.Form>

                    <formStyle.Form>
                        <FormHeader title='직업' required={true}></FormHeader>
                        <formStyle.FormBody>
                            <TextInput
                                type='text'
                                name='job'
                                placeholder='일벗회사'
                                required={true}
                                width='100%'
                                disabled={isLockedProfile}
                                value='직업 예시'
                                onChange={(e: any) => {
                                    setUserInfo({ ...isUserInfo, job: e });
                                }}
                            />
                        </formStyle.FormBody>
                    </formStyle.Form>

                    <formStyle.Form>
                        <FormHeader title='관심 카테고리'></FormHeader>
                        <formStyle.FormBody>
                            {{ isLockedProfile } ? (
                                <TextInput
                                    type='text'
                                    name='category'
                                    placeholder='비즈니스'
                                    required={true}
                                    width='100%'
                                    disabled={isLockedProfile}
                                    value='카테고리 예시'
                                />
                            ) : (
                                <Dropdown
                                    menuUnit='카테고리'
                                    menuItems={lectureCategory}
                                    onChange={(e: any) => {
                                        setUserInfo({ ...isUserInfo, category: e });
                                    }}
                                ></Dropdown>
                            )}
                        </formStyle.FormBody>
                    </formStyle.Form>

                    <formStyle.Form>
                        <FormHeader title='지역'></FormHeader>
                        <formStyle.FormBody>
                            {{ isLockedProfile } ? (
                                <TextInput
                                    type='text'
                                    name='region'
                                    placeholder='일벗특별시 일벗구 일벗시'
                                    required={true}
                                    width='100%'
                                    disabled={isLockedProfile}
                                    value='지역 예시'
                                />
                            ) : (
                                <s.RegionSection>
                                    <SearchInput
                                        name='region'
                                        placeholder='주소를 입력해주세요'
                                        value={isSearchRegion}
                                        onChange={(e: any) => {
                                            setSearchRegion(e);
                                        }}
                                    />
                                    <KakaoMap
                                        value={isSearchRegion}
                                        marker={true}
                                        onChange={(e: string) => {
                                            setUserInfo({ ...isUserInfo, region: e });
                                        }}
                                    />
                                    <s.SelectedRegion value={isUserInfo.region ? isUserInfo.region : '마커를 클릭해주세요.'} disabled />
                                </s.RegionSection>
                            )}
                        </formStyle.FormBody>
                    </formStyle.Form>
                    <s.ButtonSection>
                        <SubmitButton
                            onClick={async () => {
                                try {
                                    setLockedProfile(false);
                                    window.scrollTo({
                                        top: 0,
                                        behavior: 'smooth'
                                    });
                                } catch (err) {
                                    alert('오류가 발생했습니다. 다시 시도해주세요.');
                                }
                            }}
                        >
                            {' '}
                            수정하기
                        </SubmitButton>
                    </s.ButtonSection>
                </formStyle.FormBox>
            </Mypage>
            {!isShowInnerModal ? null : (
                <InnerModal
                    closeInnerModal={() => {
                        handleCloseInnerModal();
                        navigate(0);
                    }}
                    desc='회원 가입 완료 모달'
                    text1='회원 가입이 정상적으로 완료 되었습니다.'
                    moveText='로그인 하러가기'
                />
            )}
        </>
    );
}
