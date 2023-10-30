import React, { useState } from 'react';

import category from '~/constants/category';
import province from '~/constants/province';
import countrySearch from '~/api/countrySearch';
import CurrentPositionButton from './CurrentPositionButton';
import Dropdown from './Dropdown';
import Button from './Button';
import { ReactComponent as IconHome } from '@images/icon-home.svg';
import { ReactComponent as IconBusiness } from '@images/icon-business.svg';
import { ReactComponent as IconDesign } from '@images/icon-design.svg';
import { ReactComponent as IconDevelopment } from '@images/icon-development.svg';
import { ReactComponent as IconHealth } from '@images/icon-health.svg';
import { ReactComponent as IconBeauty } from '@images/icon-beauty.svg';
import { ReactComponent as IconCooking } from '@images/icon-cooking.svg';
import { ReactComponent as IconEtc } from '@images/icon-etc.svg';

import * as s from './StyledFilterGroup';

interface ParamProps {
    state: LectureState;
    category: LectureCategory;
    provinceOnChange: (value: any) => void;
    countryOnChange: (value: any) => void;
    stateOnChange: (value: LectureState) => void;
    categoryOnChange: (value: LectureCategory) => void;
}

const provinceMenuItems: string[] = province;

export default function FilterGroup(props: ParamProps) {
    const [countryMenuItems, setCountryMenuItems] = useState<string[]>([]);

    return (
        <s.Filter>
            <s.FilterGroup>
                <s.FilterTitle>
                    <span>지역</span>
                    <CurrentPositionButton />
                </s.FilterTitle>
                <Dropdown
                    menuUnit='시/도 선택'
                    menuItems={provinceMenuItems}
                    onChange={async (e: string) => {
                        props.provinceOnChange(e);
                        setCountryMenuItems(await countrySearch(e));
                    }}
                />
                <Dropdown
                    menuUnit='시/군/구 선택'
                    menuItems={countryMenuItems}
                    onChange={(e: string) => {
                        props.countryOnChange(e);
                    }}
                />
            </s.FilterGroup>
            <s.Horizontal />
            <s.FilterGroup>
                <s.FilterTitle>
                    <span>강좌 상태</span>
                </s.FilterTitle>
                <Button
                    status={props.state.recruit}
                    onClick={() => {
                        props.stateOnChange({ ...props.state, recruit: !props.state.recruit });
                    }}
                >
                    <span>모집중</span>
                </Button>
                <Button
                    status={props.state.wait}
                    onClick={() => {
                        props.stateOnChange({ ...props.state, wait: !props.state.wait });
                    }}
                >
                    <span>개설 대기중</span>
                </Button>
                <Button
                    status={props.state.progress}
                    onClick={() => {
                        props.stateOnChange({ ...props.state, progress: !props.state.progress });
                    }}
                >
                    <span>진행중</span>
                </Button>
            </s.FilterGroup>
            <s.Horizontal />
            <s.FilterGroup>
                <s.FilterTitle>
                    <span>카테고리</span>
                </s.FilterTitle>
                <Button
                    status={props.category.home}
                    onClick={() => {
                        props.categoryOnChange({ ...props.category, home: !props.category.home });
                    }}
                >
                    <IconHome width='36' height='34' veiwBox='0 0 36 34' fill='#F9B501' />
                    <span>{category[0]}</span>
                </Button>
                <Button
                    status={props.category.business}
                    onClick={() => {
                        props.categoryOnChange({ ...props.category, business: !props.category.business });
                    }}
                >
                    <IconBusiness width='35' height='40' veiwBox='0 0 35 40' fill='#F9B501' />
                    <span>{category[1]}</span>
                </Button>
                <Button
                    status={props.category.design}
                    onClick={() => {
                        props.categoryOnChange({ ...props.category, design: !props.category.design });
                    }}
                >
                    <IconDesign width='35' height='36' veiwBox='0 0 35 36' fill='#F9B501' />
                    <span>{category[2]}</span>
                </Button>
                <Button
                    status={props.category.development}
                    onClick={() => {
                        props.categoryOnChange({ ...props.category, development: !props.category.development });
                    }}
                >
                    <IconDevelopment width='36' height='38' veiwBox='0 0 36 38' fill='#F9B501' />
                    <span>{category[3]}</span>
                </Button>
                <Button
                    status={props.category.health}
                    onClick={() => {
                        props.categoryOnChange({ ...props.category, health: !props.category.health });
                    }}
                >
                    <IconHealth width='36' height='40' veiwBox='0 0 36 40' fill='#F9B501' />
                    <span>{category[4]}</span>
                </Button>
                <Button
                    status={props.category.beauty}
                    onClick={() => {
                        props.categoryOnChange({ ...props.category, beauty: !props.category.beauty });
                    }}
                >
                    <IconBeauty width='33' height='40' veiwBox='0 0 33 40' fill='#F9B501' />
                    <span>{category[5]}</span>
                </Button>
                <Button
                    status={props.category.cooking}
                    onClick={() => {
                        props.categoryOnChange({ ...props.category, cooking: !props.category.cooking });
                    }}
                >
                    <IconCooking width='36' height='34' veiwBox='0 0 36 34' fill='#F9B501' />
                    <span>{category[6]}</span>
                </Button>
                <Button
                    status={props.category.etc}
                    onClick={() => {
                        props.categoryOnChange({ ...props.category, etc: !props.category.etc });
                    }}
                >
                    <IconEtc width='36' height='34' veiwBox='0 0 36 34' fill='#F9B501' />
                    <span>{category[7]}</span>
                </Button>
            </s.FilterGroup>
        </s.Filter>
    );
}
