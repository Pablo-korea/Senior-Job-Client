import * as S from './StyledIconLabel';

interface IconLabelProps {
    label: string;
    iconimg: string;
}

const IconLabel = ({ label, iconimg }: IconLabelProps) => {
    return <S.Heading iconimg={iconimg}>{label}</S.Heading>;
};

export default IconLabel;
