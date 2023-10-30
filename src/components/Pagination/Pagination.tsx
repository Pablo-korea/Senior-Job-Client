import React from 'react';

import * as s from './StyledPagination';

interface ParamProps {
    activedPage: number;
    totalPages: number;
    onClick: (value: any) => void;
}

const Pagination = (props: ParamProps) => {
    const pageNumbers: number[] = [];
    for (let i = Math.floor(props.activedPage / 5) * 5 + 1; i < Math.min(Math.floor(props.activedPage / 5) * 5 + 6, props.totalPages + 1); i++) {
        pageNumbers.push(i);
    }

    return (
        <s.Pagination>
            {props.activedPage > 5 ? (
                <>
                    <s.pageButton
                        onClick={() => {
                            props.onClick(1);
                        }}
                    >
                        <span>1</span>
                    </s.pageButton>
                    <s.pageButton
                        onClick={() => {
                            props.onClick(Math.floor(props.activedPage / 5) * 5);
                        }}
                    >
                        <span>...</span>
                    </s.pageButton>
                </>
            ) : (
                ''
            )}
            {pageNumbers.map((item) =>
                item === props.activedPage ? (
                    <s.pageButton
                        selected
                        onClick={() => {
                            props.onClick(item);
                        }}
                    >
                        <span>{item}</span>
                    </s.pageButton>
                ) : (
                    <s.pageButton
                        onClick={() => {
                            props.onClick(item);
                        }}
                    >
                        <span>{item}</span>
                    </s.pageButton>
                )
            )}
            {/* 마지막 페이지에 다다르지않은 경우 */}
            {pageNumbers[pageNumbers.length - 1] !== props.totalPages ? (
                pageNumbers[pageNumbers.length - 1] + 1 !== props.totalPages ? (
                    <>
                        <s.pageButton
                            onClick={() => {
                                props.onClick(pageNumbers[pageNumbers.length - 1] + 1);
                            }}
                        >
                            <span>...</span>
                        </s.pageButton>
                        <s.pageButton
                            onClick={() => {
                                props.onClick(props.totalPages);
                            }}
                        >
                            <span>{props.totalPages}</span>
                        </s.pageButton>
                    </>
                ) : (
                    <s.pageButton
                        onClick={() => {
                            props.onClick(props.totalPages);
                        }}
                    >
                        <span>{props.totalPages}</span>
                    </s.pageButton>
                )
            ) : (
                ''
            )}
        </s.Pagination>
    );
};

export default Pagination;
