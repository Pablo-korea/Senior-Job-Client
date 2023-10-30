import IconLabel from '../IconLabel/IconLabel';
import locationIcon from '../../assets/images/icon-location.svg';
import * as S from './StyledLectureInfo';
import KakaoMap from '../Map/KakaoMap';
import regionParser from '~/utils/parser/regionParser';

interface RegionInfoProps {
    region?: string;
    lecturetype?: string;
}

const RegionInfo = ({ region, lecturetype }: RegionInfoProps) => {
    const defaultRegion = '';
    const sliceRegion = region || defaultRegion;
    return (
        <S.Infowrap>
            <IconLabel label={lecturetype ? '희망 지역' : '강좌 지역'} iconimg={locationIcon} />
            <S.Line />
            <S.Map>
                <KakaoMap value={regionParser(sliceRegion)} />
            </S.Map>
            <S.LocationWrap>
                <span>상세 주소는 강좌 개설시 공개됩니다.</span>
                <span>{sliceRegion}</span>
            </S.LocationWrap>
        </S.Infowrap>
    );
};

export default RegionInfo;
