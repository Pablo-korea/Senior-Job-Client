import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import dayjs from 'dayjs';

import submitLecture from '~/api/createLecture';
import lectureCategory from '~/constants/category';
import bankName from '~/constants/bank';
import Mypage from '@pages/Mypage/Mypage';
import ContentHeader from '@components/ContentHeader/ContentHeader';
import FormHeader from '@components/Form/FormHeader';
import { TextInput, TextArea } from '@components/Form/TextInput';
import SearchInput from '~/components/Search/SearchInput';
import Dropdown from '@components/Form/Dropdown';
import DatePicker from '@components/Form/DatePicker';
import DateRangePicker from '@components/Form/DateRangePicker';
import { SubmitButton } from '@components/Button/StyledSubmitButton';
import KakaoMap from '@components/Map/KakaoMap';
import useModal from '~/hooks/useModal';
import InnerModal from '@components/Modals/InnerModal';

import * as formStyle from '@components/Form/StyledForm';
import * as s from './StyledCreateLecture';

export default function CreateLecture() {
    const paramArr: CotentHeaderParam = { '개설 강좌': '/mypage/lecture/created', '강좌 개설하기': '/mypage/lecture/created/form' };

    const navigate = useNavigate();
    const [isSearchRegion, setSearchRegion] = useState('');
    const [isShowModal, isShowInnerModal, handleShowModal, handleCloseModal, handleShowInnerModal, handleCloseInnerModal] = useModal();
    const [isLectureInfo, setLectureInfo] = useState<LectureData>({
        create_id: 0,
        creator: '',
        current_participants: 0,
        max_participants: 0,
        category: '',
        bank_name: '',
        account_name: '',
        account_number: '',
        price: 0,
        title: '',
        content: '',
        cycle: '',
        count: 0,
        start_date: dayjs().add(1, 'day'),
        end_date: dayjs().add(7, 'day'),
        recruitEnd_date: dayjs(),
        region: '',
        image_url: ''
    });

    console.log(isLectureInfo);

    const ImageFormHint: JSX.Element = (
        <formStyle.FormHintTitle>
            <formStyle.FormHintBody>허용 파일 포맷 : .jpg .png .bmp</formStyle.FormHintBody>
            <formStyle.FormHintBody>최대 파일 크기 : 1024mb</formStyle.FormHintBody>
        </formStyle.FormHintTitle>
    );

    const EndDateFormHint: JSX.Element = (
        <formStyle.FormHintTitle>
            <formStyle.FormHintBody>실제 강좌를 진행할 날짜를 선택해주세요!</formStyle.FormHintBody>
        </formStyle.FormHintTitle>
    );

    const ParticipantFormHint: JSX.Element = (
        <formStyle.FormHintTitle>
            <formStyle.FormHintBody>모집 진행시 참여 신청을 할 수 있는 최대 인원 수를 선택해주세요!</formStyle.FormHintBody>
        </formStyle.FormHintTitle>
    );

    const DateFormHint: JSX.Element = (
        <formStyle.FormHintTitle>
            <formStyle.FormHintBody>실제 강좌를 진행할 날짜를 선택해주세요!</formStyle.FormHintBody>
        </formStyle.FormHintTitle>
    );

    const RegionFormHint: JSX.Element = (
        <formStyle.FormHintTitle>
            <formStyle.FormHintBody>실제 강좌가 개설되기전에는 ‘시/군/구'까지만 노출됩니다!</formStyle.FormHintBody>
            <formStyle.FormHintBody>e.g. 경기도 안양시</formStyle.FormHintBody>
        </formStyle.FormHintTitle>
    );

    const PriceFormHint: JSX.Element = (
        <formStyle.FormHintTitle>
            <formStyle.FormHintBody>전체 강좌 진행 기간동안 받을 금액을 적어주세요.</formStyle.FormHintBody>
            <formStyle.FormHintBody>계좌번호는 회원가입시 가입한 이름과 동일한 계좌를 기입해주세요!</formStyle.FormHintBody>
        </formStyle.FormHintTitle>
    );

    const participantArr: string[] = Array(46)
        .fill(5)
        .map((x, y) => x + y);

    const dateUnitArr: string[] = ['월', '주'];
    const dateCountArr: string[] = Array(7)
        .fill(1)
        .map((x, y) => x + y);

    return (
        <>
            <Mypage>
                <ContentHeader {...paramArr}></ContentHeader>
                <formStyle.FormBox>
                    <formStyle.Form>
                        <FormHeader title='강좌 이미지' required={true} hint={ImageFormHint}></FormHeader>
                        <formStyle.FormBody></formStyle.FormBody>
                    </formStyle.Form>
                    <formStyle.Horizontal />

                    <formStyle.Form>
                        <FormHeader title='강좌 명칭' required={true}></FormHeader>
                        <formStyle.FormBody>
                            <TextInput
                                type='text'
                                name='lecture_title'
                                placeholder='강좌의 내용을 잘 나타낼 수 있도록 표현해주세요!'
                                required={true}
                                maxLength={24}
                                erase={true}
                                width='100%'
                                onChange={(e: any) => {
                                    setLectureInfo({ ...isLectureInfo, title: e });
                                }}
                            />
                        </formStyle.FormBody>
                    </formStyle.Form>
                    <formStyle.Horizontal />

                    <formStyle.Form>
                        <FormHeader title='강좌 유형' required={true}></FormHeader>
                        <formStyle.FormBody>
                            <Dropdown
                                menuUnit='카테고리'
                                menuItems={lectureCategory}
                                onChange={(e: any) => {
                                    setLectureInfo({ ...isLectureInfo, category: e });
                                }}
                            ></Dropdown>
                        </formStyle.FormBody>
                    </formStyle.Form>
                    <formStyle.Horizontal />

                    <formStyle.Form>
                        <FormHeader title='모집 최대 인원' required={true} hint={ParticipantFormHint}></FormHeader>
                        <formStyle.FormBody>
                            <Dropdown
                                menuUnit='명'
                                menuItems={participantArr}
                                onChange={(e: any) => {
                                    setLectureInfo({ ...isLectureInfo, max_participants: e });
                                }}
                            ></Dropdown>
                        </formStyle.FormBody>
                    </formStyle.Form>
                    <formStyle.Form>
                        <FormHeader title='모집 마감 기한' required={true} hint={EndDateFormHint}></FormHeader>
                        <formStyle.FormBody>
                            <formStyle.FormGroup>
                                <DatePicker
                                    startDate={isLectureInfo.start_date}
                                    onChange={(e: any) => {
                                        setLectureInfo({ ...isLectureInfo, recruitEnd_date: e });
                                    }}
                                />
                            </formStyle.FormGroup>
                        </formStyle.FormBody>
                    </formStyle.Form>
                    <formStyle.Horizontal />

                    <formStyle.Form>
                        <FormHeader title='강좌 진행 기간' required={true} hint={DateFormHint}></FormHeader>
                        <formStyle.FormBody>
                            <formStyle.FormGroup>
                                <Dropdown
                                    menuUnit='월/주'
                                    menuItems={dateUnitArr}
                                    onChange={(e: any) => {
                                        setLectureInfo({ ...isLectureInfo, cycle: e });
                                    }}
                                ></Dropdown>{' '}
                                <Dropdown
                                    menuUnit='횟수'
                                    menuItems={dateCountArr}
                                    onChange={(e: any) => {
                                        setLectureInfo({ ...isLectureInfo, count: e });
                                    }}
                                ></Dropdown>
                            </formStyle.FormGroup>
                            <formStyle.FormGroup>
                                <DateRangePicker
                                    onChangeStartDate={(e: any) => {
                                        setLectureInfo({ ...isLectureInfo, start_date: e });
                                    }}
                                    onChangeEndDate={(e: any) => {
                                        setLectureInfo({ ...isLectureInfo, end_date: e });
                                    }}
                                />
                            </formStyle.FormGroup>
                        </formStyle.FormBody>
                    </formStyle.Form>
                    <formStyle.Horizontal />

                    <formStyle.Form>
                        <FormHeader title='강좌 진행 지역' required={true} hint={RegionFormHint}></FormHeader>
                        <formStyle.FormBody>
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
                                        setLectureInfo({ ...isLectureInfo, region: e });
                                    }}
                                />
                                <s.SelectedRegion value={isLectureInfo.region ? isLectureInfo.region : '마커를 클릭해주세요.'} disabled />
                            </s.RegionSection>
                        </formStyle.FormBody>
                    </formStyle.Form>
                    <formStyle.Horizontal />

                    <formStyle.Form>
                        <FormHeader title='가격' hint={PriceFormHint}></FormHeader>
                        <formStyle.FormBody>
                            <formStyle.FormGroup>
                                <Dropdown
                                    menuUnit='은행명'
                                    menuItems={Object.keys(bankName)}
                                    onChange={(e: any) => {
                                        setLectureInfo({ ...isLectureInfo, bank_name: e });
                                    }}
                                ></Dropdown>
                                <TextInput
                                    name='owner'
                                    placeholder='예금주'
                                    type='text'
                                    onChange={(e: any) => {
                                        setLectureInfo({ ...isLectureInfo, account_name: e });
                                    }}
                                />
                            </formStyle.FormGroup>
                            <s.PriceGroup>
                                <formStyle.FormGroup>
                                    <TextInput
                                        name='frontBankNumber'
                                        placeholder='계좌번호'
                                        width='400px'
                                        type='number'
                                        onChange={(e: any) => {
                                            setLectureInfo({ ...isLectureInfo, account_number: e });
                                        }}
                                    />
                                    <TextInput
                                        name='price'
                                        placeholder='0'
                                        width='150px'
                                        type='number'
                                        max={1000000}
                                        required={true}
                                        onChange={(e: any) => {
                                            setLectureInfo({ ...isLectureInfo, price: e });
                                        }}
                                    />

                                    <s.InputLabel>원</s.InputLabel>
                                </formStyle.FormGroup>
                            </s.PriceGroup>
                        </formStyle.FormBody>
                    </formStyle.Form>
                    <formStyle.Horizontal />

                    <formStyle.Form>
                        <FormHeader title='강좌 설명'></FormHeader>
                        <formStyle.FormBody>
                            <TextArea
                                name='lecture_content'
                                placeholder='진행할 강좌의 특징을 강조해주세요!&#13;&#10;회원님의 경력을 잘 나타낼 수 있는 문구를 적으면 더 좋겠죠?'
                                required={true}
                                maxLength={500}
                                erase={true}
                                width='100%'
                                onChange={(e: any) => {
                                    setLectureInfo({ ...isLectureInfo, content: e });
                                }}
                            />
                        </formStyle.FormBody>
                    </formStyle.Form>

                    <s.ButtonSection>
                        <SubmitButton
                            onClick={async () => {
                                try {
                                    const response = await submitLecture(isLectureInfo);
                                    handleShowInnerModal();
                                } catch (err) {
                                    alert('오류가 발생했습니다. 다시 시도해주세요.');
                                }
                            }}
                        >
                            {' '}
                            강좌 개설하기
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
                    desc='강좌 개설 완료 모달'
                    text1='강좌 개설이 정상적으로 완료 되었습니다.'
                    moveText='내가 생성한 강좌 목록 보러가기'
                />
            )}
        </>
    );
}
