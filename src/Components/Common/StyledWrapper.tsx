// ---- TODO make the styledWrapper Components worked

import { Children, FC } from "react";
import styled, { CSSProperties, Interpolation } from "styled-components";

// type Ownprops = InjectableCss extends ReactNode?;

export interface InjectableCss {
    css: Interpolation<CSSProperties>;
  }

export const StyledWrapper: FC<InjectableCss> = ({css}) => {
    const Div =  styled.div`
        ${css}
    `;

    return (
        <Div>
            {Children}
        </Div>
    );

} 
    