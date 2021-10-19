import React from "react";
import * as S from './style';

interface Props {
    handleMonth: () => void,
}
const DecreaseBtn:React.FC<Props> = ({handleMonth}) => {
    return (
        <>
            <S.Button onClick={() => (handleMonth())}>&lt;</S.Button>
        </>
    )
}

export default DecreaseBtn;