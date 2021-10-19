import styled from 'styled-components';

export const DayPlace = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc(100% / 7);
    height: calc(100% / 6);

    border-radius: 50%;
`

export const NoneDayComponent = styled.div<{day: Date, selected: string}>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 80%;

    border-radius: 50%;
    background-color: ${props => props.selected === props.day.toLocaleDateString() ? '#5273ff' : '#ffffff'};
    color: #e0e0e0;

    &:hover {
        cursor: pointer;
        background-color: #5273ff;
        color: white;
    }
`