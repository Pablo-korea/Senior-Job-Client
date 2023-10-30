import styled from 'styled-components';
import RecommendBannnerImage from '@images/recommend-banner.png';
import PotIcon from '@images/icon-small-pot.svg';
import FixIcon from '@images/icon-small-fix.svg';
import TrashIcon from '@images/icon-small-trash.svg';
import LocationIcon from '@images/icon-location-black.svg';
import CalendarIcon from '@images/icon-calendar-black.svg';
import WonIcon from '@images/icon-won-blue.svg';
import PersonIcon from '@images/icon-person-white.svg';

export const OpenLectureTitle = styled.h2`
    padding-bottom: 14px;
    color: #000;
    font-size: 2rem;
    font-weight: 500;
    line-height: 2.24rem;
`;

export const WrapBanner = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 29px;
    padding: 29px 10px;
    border-radius: 17px;
    background-color: #e7fae1;
    background-image: url(${RecommendBannnerImage});
    background-repeat: no-repeat;
    background-position: center;
`;

export const BannerTitle = styled.p`
    color: #2b4800;
    font-size: 2rem;
    font-weight: 500;
    line-height: 2.4rem;
`;

export const BannerBtn = styled.button`
    padding: 9px 33px;
    border-radius: 33px;
    color: #2b4800;
    font-size: 2rem;
    font-weight: 700;
    line-height: 2.4rem;
    background-color: #fff;
    box-shadow: 0px 2.66667px 2.66667px 0px rgba(18, 72, 0, 0.25);
`;

export const LectureBtnWrap = styled.div`
    display: flex;
    justify-content: flex-end;
    padding-bottom: 38px;
`;

export const SortBtnWrap = styled.div`
    display: flex;
`;

export const LectureFilterBtn = styled.button`
    padding: 7px 13px;
    border-radius: 13.333px;
    background: #f5f5f5;
    color: #ccc;
    text-align: center;
    font-size: 1.9rem;
    font-weight: 700;
    line-height: 1.8rem;
    & + button {
        margin-left: 7px;
    }
`;

export const LectureSortBtn = styled.button`
    font-weight: 700;
    font-size: 18px;
    color: #cdcdcd;
`;

export const SepLine = styled.span`
    display: inline-block;
    width: 2px;
    height: 30px;
    margin: 0 14px;
    background-color: #cccccc;
`;

export const LectureCard = styled.div`
    padding: 17px 28px 15px 21px;
    border-radius: 11px;
    border: 1px solid #ccc;
`;

export const CategoryBtnWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 33px;
`;

export const LectureCategoryWrap = styled.div`
    :first-child {
        margin-right: 7px;
        &::before {
            content: '';
            display: inline-block;
            width: 20px;
            height: 20px;
            margin-right: 7px;
            background-image: url(${PotIcon});
            background-repeat: no-repeat;
            background-size: contain;
            vertical-align: bottom;
        }
    }
`;

export const LectureCategory = styled.span`
    display: inline-block;
    padding: 10px 7px;
    border-radius: 7px;
    border: 1px solid #ffb30e;
    color: #ffb30e;
    font-size: 1.7rem;
    font-weight: 700;
    line-height: 2rem;
`;

export const LectureState = styled.span`
    display: inline-block;
    padding: 10px 7px;
    border-radius: 7px;
    border: 1px solid #124800;
    color: #124800;
    font-size: 1.7rem;
    font-weight: 700;
    line-height: 2rem;
`;

export const LectureComplete = styled.span`
    display: inline-block;
    padding: 10px 7px;
    border-radius: 7px;
    color: #ffffff;
    background-color: #b4b2b0;
    font-size: 1.7rem;
    font-weight: 700;
    line-height: 2rem;
`;

export const FixBtnWrap = styled.div`
    :first-child {
        /* margin-right: 14px; */
        &::before {
            content: '';
            display: inline-block;
            width: 16px;
            height: 16px;
            background-image: url(${FixIcon});
            background-repeat: no-repeat;
            background-size: contain;
            vertical-align: bottom;
        }
    }

    :last-child::before {
        content: '';
        display: inline-block;
        width: 16px;
        height: 16px;
        background-image: url(${TrashIcon});
        background-repeat: no-repeat;
        background-size: contain;
        vertical-align: bottom;
    }
`;

export const LectureFixBtn = styled.button`
    color: #333;
    font-size: 1.3rem;
    font-weight: 700;
    line-height: 1.6rem;
`;

export const LectureDetailWrap = styled.div`
    display: flex;
    justify-content: end;
    gap: 28px;
`;

export const LectureInfoWrap = styled.div`
    color: #333;
    font-size: 1.7rem;
    font-weight: 700;
    line-height: 2rem;
    text-align: right;
    & > p + p {
        margin-top: 7px;
    }
`;

export const LectureTitle = styled.p`
    color: #124800;
    font-size: 1.9rem;
`;

export const LectureLocation = styled.p`
    &::before {
        content: '';
        display: inline-block;
        width: 17px;
        height: 20px;
        margin-right: 7px;
        background-image: url(${LocationIcon});
        background-repeat: no-repeat;
        background-size: contain;
        vertical-align: bottom;
    }
`;

export const LectureDate = styled.p`
    &::before {
        content: '';
        display: inline-block;
        width: 21px;
        height: 19px;
        margin-right: 7px;
        background-image: url(${CalendarIcon});
        background-repeat: no-repeat;
        background-size: contain;
        vertical-align: bottom;
    }
`;

export const LectureCost = styled.p`
    color: #2e5bb8;
    &::before {
        content: '';
        display: inline-block;
        width: 21px;
        height: 20px;
        margin-right: 7px;
        background-image: url(${WonIcon});
        background-repeat: no-repeat;
        background-size: contain;
        vertical-align: bottom;
    }
`;

export const ParticipantsBtnWrap = styled.div`
    align-self: flex-end;
`;

export const LectureDeadline = styled.p`
    margin-bottom: 7px;
    color: #333;
    font-size: 1.3rem;
    font-weight: 500;
    line-height: 1.6rem;
    text-align: right;
    & > span {
        color: #124800;
        font-weight: 700;
    }
`;

export const ParticipantsListBtn = styled.button`
    padding: 7px 23px;
    border-radius: 6.667px;
    background: #ffb30e;
    & > p {
        color: #fff;
        font-size: 1.7rem;
        font-weight: 700;
        line-height: 2rem;
    }

    :first-child {
        margin-bottom: 7px;
        &::before {
            content: '';
            display: inline-block;
            width: 27px;
            height: 27px;
            margin-right: 3px;
            transform: translateY(3px);
            background-image: url(${PersonIcon});
            background-repeat: no-repeat;
            background-size: contain;
            vertical-align: bottom;
        }
    }
`;

export const EmptyLectureCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 453px;
    border-radius: 20px;
    border: 1px solid #ccc;
    & > div {
        color: #b6b6b6;
        text-align: center;
        font-size: 1.9rem;
        font-weight: 700;
        line-height: 3rem;
    }
`;
