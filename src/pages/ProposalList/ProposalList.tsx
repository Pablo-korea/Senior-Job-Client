import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import readLectureList from '~/api/readLectureList';
import ProposalCarousel from '@components/Carousel/ProposalCarousel';
import SearchBar from '@components/Search/SearchBar';
import Option from '@components/Option/Option';
import FilterGroup from '@components/Filiter/FilterGroup';
import Card from '@components/Card/Card';
import Pagination from '@components/Pagination/Pagination';

import * as s from './StyledProposalList';

export default function LectureList() {
    const initLectureListOptions = {
        sortCondition: 'newest',
        searchKeyword: '',
        filterCondition: {
            region: '',
            status: [],
            category: []
        },
        page: 1
    };

    const [isLectureList, setLectureList] = useState<LectureListResponse | null>(null);
    const [isLectureListOptions, setLectureListOptions] = useState<LectureListOptions>(initLectureListOptions);

    useEffect(() => {
        const getLectureList = async (props: LectureListOptions) => {
            try {
                const data = await readLectureList(props);
                setLectureList({ ...data, number: data.number + 1 });
            } catch (error) {
                console.log(error);
            }
        };
        getLectureList(isLectureListOptions);
    }, [isLectureListOptions]);

    const [isSearchKeyWord, setSearchKeyWord] = useState(''); // Search Key word
    const [isOption, setOption] = useState('최신순'); // Sorting
    const [isProvince, setProvince] = useState(''); // Region - Province
    const [isCountry, setCountry] = useState(''); // Region - Country
    const [isState, setState] = useState<LectureState>({
        recruit: true,
        wait: false,
        progress: false
    });
    const [isCategory, setCateogory] = useState<LectureCategory>({
        home: false,
        business: false,
        design: false,
        development: false,
        health: false,
        beauty: false,
        cooking: false,
        etc: false
    });

    return (
        <>
            <ProposalCarousel />
            <section></section>
            <s.RecommendBanner>
                <s.RecommendBannerTypo>배우고 싶은 강좌가 없나요? 새롭게 제안해보세요!</s.RecommendBannerTypo>
                <Link to='/mypage/lecture/created/form'>
                    <s.RecommendBannerButton>강좌 제안하기</s.RecommendBannerButton>
                </Link>
            </s.RecommendBanner>
            <s.SearchGroup>
                {/* 검색 */}

                <SearchBar
                    name='lectureTitle'
                    value={isSearchKeyWord}
                    placeholder='찾으시는 강좌명을 입력해주세요'
                    onChange={(e) => {
                        setSearchKeyWord(e);
                    }}
                />

                {/* 정렬 */}
                <Option
                    value={isOption}
                    onChange={(e) => {
                        setOption(e);
                    }}
                />
            </s.SearchGroup>
            <s.ContentGroup>
                <FilterGroup
                    state={isState}
                    category={isCategory}
                    provinceOnChange={(e) => {
                        setProvince(e);
                    }}
                    countryOnChange={(e) => {
                        setCountry(e);
                    }}
                    stateOnChange={(e) => {
                        setState(e);
                    }}
                    categoryOnChange={(e) => {
                        setCateogory(e);
                    }}
                />

                {/* 강좌 카드 리스트 */}
                <s.LectureItemGroup>
                    {isLectureList?.content?.map((item: LectureData) => (
                        <Card {...item} />
                    ))}
                </s.LectureItemGroup>
            </s.ContentGroup>
            <Pagination
                activedPage={isLectureList?.number || 0}
                totalPages={isLectureList?.totalPages || 0}
                onClick={(clickedPage: number) => {
                    setLectureListOptions({ ...isLectureListOptions, page: clickedPage });
                }}
            />
        </>
    );
}
