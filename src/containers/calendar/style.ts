import styled from 'styled-components';

export const CalendarPlace = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
`
export const Calendar = styled.div`
    width: 430px;
    height: 460px;
`

export const CalendarHeader = styled.div`
    display: flex;
    justify-content: space-between;
    width: inherit;
    height: 14%;
`

export const ButtonPlace = styled.div`
    display: flex;
    justify-content: space-around;
    width: 30%;
    height: inherit;
`

export const CalendarBody = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 90%;
`

export const DayPlace = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    width: 100%;
    height: 86%;
`