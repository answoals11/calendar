import React from "react";
import * as S from './style';

interface Props {
    year: number,
    month: number
}

const YearMonthComponent:React.FC<Props> = ({year, month}) => {
    return (
        <S.YearMonthComponent>{year}.{month}</S.YearMonthComponent>
    )
}

export default YearMonthComponent;