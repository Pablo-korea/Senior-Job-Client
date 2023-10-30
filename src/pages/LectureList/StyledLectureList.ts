import styled from 'styled-components';
import RecommendBannnerImage from '@images/recommend-banner.png';

const RecommendBanner = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 100%;
    height: 200px;
    background-color: #e7fae1;
    background-image: url(${RecommendBannnerImage});
    background-repeat: no-repeat;
    background-position: center;
`;

const RecommendBannerTypo = styled.h2`
    font-weight: 700;
    font-size: 3.5rem;
    color: #2b4800;
`;

const RecommendBannerButton = styled.button`
    padding: 10px 35px;
    background: #ffffff;
    border-radius: 35px;
    box-shadow: 0px 5px 10px #12480050;
    font-weight: 700;
    font-size: 2rem;
    color: #2b4800;
`;

const SearchGroup = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0px 140px;
`;

const ContentGroup = styled.section`
    display: flex;
    justify-content: center;
    gap: 20px;
    height: 1350px;
    margin: 0px 140px;
`;

const LectureItemGroup = styled.section`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 10px;
    margin: 20px;
`;

export { RecommendBanner, RecommendBannerTypo, RecommendBannerButton, SearchGroup, ContentGroup, LectureItemGroup };
