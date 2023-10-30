import React from 'react';
import { Link } from 'react-router-dom';

import NotFountImg from '@images/Image-Not-Found.svg';
import CategoryIcon from './CategoryIcon';
import regionParser from '~/utils/parser/regionParser';
import priceParser from '~/utils/parser/priceParser';
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
                    {/* <s.Status>{props.status}</s.Status> */}
                    <s.Status>모집중</s.Status>
                </s.Thumbnail>
                <s.Description>
                    <s.Title>
                        <h4>{props.title}</h4>
                    </s.Title>
                    <s.UserName>
                        <span>{props.creator}</span>
                    </s.UserName>
                    <s.Region>
                        <span>{regionParser(props.region)}</span>
                    </s.Region>
                    <s.Price>
                        <span>{priceParser(props.price)}원</span>
                    </s.Price>
                </s.Description>
            </s.Card>
        </Link>
    );
};

export default Card;
