import React from 'react';
import styled from 'styled-components';

import { Colors, colors } from '../site-config';
import { getFlexAlignment } from '../util';

interface Props {
  column?: boolean;
  background?: Colors;
  noWrap?: boolean;
  yAlign?: string;
  xAlign?: string;
  alignment?: Array<string>;
  width?: string;
  margin?: string;
  padding?: string;
}

const Vessel = styled.section<Props>`
  display: flex;
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  flex-wrap: ${(props) => (props.noWrap ? 'nowrap' : 'wrap')};
  width: ${(props) => props.width || '100%'};
  margin: ${(props) => props.margin || '0'};
  padding: ${(props) => props.padding || '0'};
  ${(props) => props.alignment?.map((str) => str)}
`;

const Flex: React.FC<Props> = (props) => {
  const alignment = getFlexAlignment({
    column: props.column,
    yAlign: props.yAlign,
    xAlign: props.xAlign,
  });
  return <Vessel {...props} alignment={alignment}></Vessel>;
};

export default Flex;
