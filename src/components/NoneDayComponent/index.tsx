import React from 'react'
import * as S from './style';

interface Props {
    day: Date,
    handleMonth:() => void,
    // 선택된 날짜
    selected: string,
    // 선택된 날짜를 변경해주는 setState
    setSelected:(selected: string) => void
}

const NoneDayComponent:React.FC<Props> = ({day, selected, handleMonth, setSelected}) => {
    return (
        <S.DayPlace>
            <S.NoneDayComponent day={day} selected={selected} onClick={() => (handleMonth(), setSelected(day.toLocaleDateString()))}>{day.getDate()}</S.NoneDayComponent>
        </S.DayPlace>
    )
}

export default NoneDayComponent;