import React from "react";
import * as S from './style';

const WeekComponent = () => {
    const list = ["일", "월", "화", "수", "목", "금", "토"];

    return (
        <S.WeekPlace>
            { list.map((list, idx) => {
                return <S.WeekComponent key={idx}>{list}</S.WeekComponent>
            }) }
        </S.WeekPlace>
    )
}

export default WeekComponent;