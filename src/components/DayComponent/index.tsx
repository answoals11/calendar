import React from 'react'
import * as S from './style';

interface Props {
    // 월별 날짜 정보
    day: Date,
    // 오늘 날짜 정보
    today: Date,
    // 선택된 날짜
    selected: string,
    // 선택된 날짜를 변경해주는 setState
    setSelected:(selected: string) => void
}

const DayComponent:React.FC<Props> = ({day, today, selected, setSelected}) => {
    return (
        <S.DayPlace>
            <S.DayComponent day={day} today={today} onClick={() => setSelected(day.toLocaleDateString())}
            selected={selected} >{day.getDate()}</S.DayComponent>
        </S.DayPlace>
    )
}

export default DayComponent;