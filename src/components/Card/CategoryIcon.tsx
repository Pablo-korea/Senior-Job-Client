import React from 'react';
import category from '~/constants/category';

import { ReactComponent as IconHome } from '@images/icon-home.svg';
import { ReactComponent as IconBusiness } from '@images/icon-business.svg';
import { ReactComponent as IconDesign } from '@images/icon-design.svg';
import { ReactComponent as IconDevelopment } from '@images/icon-development.svg';
import { ReactComponent as IconHealth } from '@images/icon-health.svg';
import { ReactComponent as IconBeauty } from '@images/icon-beauty.svg';
import { ReactComponent as IconCooking } from '@images/icon-cooking.svg';
import { ReactComponent as IconEtc } from '@images/icon-etc.svg';

interface ParamProps {
    category?: string;
}

const CategoryIcon = (props: ParamProps) => {
    if (props.category === category[0]) return <IconHome width='20' height='20' viewBox='0 0 36 36' fill='#fff' />;
    if (props.category === category[1]) return <IconBusiness width='20' height='20' viewBox='0 0 36 36' fill='#fff' />;
    if (props.category === category[2]) return <IconDesign width='20' height='20' viewBox='0 0 36 36' fill='#fff' />;
    if (props.category === category[3]) return <IconDevelopment width='20' height='20' viewBox='0 0 36 36' fill='#fff' />;
    if (props.category === category[4]) return <IconHealth width='20' height='20' viewBox='0 0 36 36' fill='#fff' />;
    if (props.category === category[5]) return <IconBeauty width='20' height='20' viewBox='0 0 36 36' fill='#fff' />;
    if (props.category === category[6]) return <IconCooking width='20' height='20' viewBox='0 0 36 36' fill='#fff' />;
    if (props.category === category[7]) return <IconEtc width='20' height='20' viewBox='0 0 36 36' fill='#fff' />;
    return <></>;
};

export default CategoryIcon;
