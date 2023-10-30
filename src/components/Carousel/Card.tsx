import React from 'react';
import { Link } from 'react-router-dom';

import NotFountImg from '@images/Image-Not-Found.svg';
import CategoryIcon from '@components/Card/CategoryIcon';
import regionParser from '~/utils/parser/regionParser';

import * as s from './StyledCard';

const Card = (props: LectureData) => {
    return (
        <Link to={`/lecture/detail/${props.create_id}`}>
            <s.Card>
                <s.Thumbnail>
                    <s.Category>
                        <CategoryIcon category={props.category} />
                        <span>{props.category}</span>
                    </s.Category>
                    <img src={props.image_url || NotFountImg} alt='강좌 썸네일 이미지' />
                </s.Thumbnail>
                <s.Description>
                    <s.Title>
                        <h4>{props.title}</h4>
                    </s.Title>
                    <s.Region>
                        <span>{regionParser(props.region)}</span>
                    </s.Region>
                </s.Description>
            </s.Card>
        </Link>
    );
};

export default Card;
