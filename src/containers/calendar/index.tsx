import React, { useState, useEffect } from "react";
import * as S from './style';
import { observer } from 'mobx-react';
import store from '../../stores';
import { YearMonthComponent, IncreaseBtn, DecreaseBtn, ResetBtn, Week, DayComponent, NoneDayComponent } from "../../components";

const CalendarContainer = () => {
    const today = new Date();
    const { monthStore, yearStore, selectedStore } = store;
    const lastMonthDate = new Date(yearStore.year, monthStore.month-1, 0).getDate(); // 지난달 마지막 날짜
    const todayMonthDate = new Date(yearStore.year, monthStore.month, 0).getDate(); // 이번달 마지막 날짜


    const firstDay = new Date(yearStore.year, monthStore.month-1, 1).getDay(); // 선택달의 첫날 요일
    const firstdateList = Array.from({length: firstDay}, (v, i) => new Date(yearStore.year, monthStore.month-2, lastMonthDate-firstDay + i + 1));

    const lastDay = new Date(yearStore.year, monthStore.month, 0).getDay(); // 선택달의 마지막날 요일
    const lastdateList = Array.from({length: 6 - lastDay}, (v, i) => new Date(yearStore.year, monthStore.month, i + 1));

    const daylist = Array.from({length: todayMonthDate}, (v, i) => new Date(yearStore.year, monthStore.month-1, i + 1));
    const [selected, setSelected] = useState<string>('');


    useEffect(() => {
    }, [monthStore.month])

    return (
        <>
        { console.log(selected) }
            <S.CalendarPlace>
                <S.Calendar>
                    <S.CalendarHeader>
                        <YearMonthComponent year={yearStore.year} month={monthStore.month} />
                        <S.ButtonPlace>
                            <DecreaseBtn handleMonth={() =>  monthStore.month < 2 ? (monthStore.month = 12, yearStore.decrease())
                                : monthStore.decrease()} />
                            <IncreaseBtn handleMonth={() => monthStore.month > 11 ? (monthStore.month = 1, yearStore.increase())
                                : monthStore.increase()} />
                            <ResetBtn handleMonth={() => (monthStore.reset(), yearStore.reset())} />
                        </S.ButtonPlace>
                    </S.CalendarHeader>

                    <S.CalendarBody>
                        <Week />
                        <S.DayPlace>
                            { firstdateList.map((info) => {
                                return <NoneDayComponent day={info} handleMonth={() => monthStore.month < 2 ? (monthStore.month = 12, yearStore.decrease())
                                : monthStore.decrease()} setSelected={setSelected} selected={selected} />
                            })}
                            { daylist.map((info) => {
                                return <DayComponent day={info} today={today} setSelected={setSelected} selected={selected} />
                            })}
                            { lastdateList.map((info) => {
                                return <NoneDayComponent day={info} handleMonth={() => monthStore.month > 11 ? (monthStore.month = 1, yearStore.increase())
                                : monthStore.increase()} setSelected={setSelected} selected={selected} />
                            })}
                        </S.DayPlace>
                        
                    </S.CalendarBody>
                </S.Calendar>
            </S.CalendarPlace>
        </>
    )
}

export default observer(CalendarContainer);