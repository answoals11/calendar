import React from "react";
import * as S from './style';

interface Props {
    handleMonth: () => void;
}
const ResetBtn:React.FC<Props> = ({handleMonth}) => {
    return (
        <>
            <S.Button onClick={() => handleMonth()}>이번달</S.Button>
        </>
    )
}

export default ResetBtn;