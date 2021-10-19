import React from "react";
import * as S from './style';

interface Props {
    handleMonth: () => void;
}
const IncreaseBtn:React.FC<Props> = ({handleMonth}) => {
    return (
        <>
            <S.Button onClick={() => handleMonth()}>&gt;</S.Button>
        </>
    )
}

export default IncreaseBtn;