import React from 'react';
import styled from 'styled-components';

import { Styles, fontFamily, Interfaces } from '../../../site-config';

interface Props {
  children?: any;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  style?: object;
  margin?: string;
  padding?: string;
  color?: Interfaces.Colors;
  textAlign?: 'left' | 'center' | 'right';
  weight?: 'bold' | 'semi' | 'normal';
  fontFamily?: Interfaces.FontFamily;
}

const h1 = styled.h1`
  font-size: 3em;
`;

const h2 = styled.h2`
  font-size: 2.5em;
`;

const h3 = styled.h3`
  font-size: 2em;
`;

const h4 = styled.h4`
  font-size: 1.5em;
`;

const h5 = styled.h5`
  font-size: 1.25em;
`;

const h6 = styled.h6`
  font-size: 1em;
`;

const p = styled.p`
  font-size: 0.75em;
`;

const span = styled.span`
  font-size: 0.5em;
`;

const TextComponents = {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  span,
};

const Typography: React.FC<Props> = (props) => {
  const Element = props.variant
    ? TextComponents[props.variant]
    : TextComponents.span;

  const StyledElement = styled(Element).attrs({})`
    ${(props) => Styles.Defaults.Colors({ props })}
    ${Styles.Defaults.Spacing({ props })}
    line-height: 1.5;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    transition: all 300ms;
    font-family: ${props.fontFamily
      ? fontFamily[props.fontFamily]
      : fontFamily.primary};
  `;

  return <StyledElement {...props}></StyledElement>;
};
export default Typography;
