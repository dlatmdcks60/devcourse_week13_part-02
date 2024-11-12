import React, { ForwardedRef } from "react";
import styled from "styled-components";

interface Props {
    placeholder?: string;
}

const InputText = React.forwardRef(({ placeholder }: Props, Ref: ForwardedRef<HTMLInputElement>) => {
    return <InputTextStyle placeholder={placeholder} ref={ref} />;
});

const InputTextStyle = styled.input.attrs({ type: "text" })`

`;

export default InputText;