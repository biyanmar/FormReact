import { Layout } from 'antd';
import styled from 'styled-components';

const StyledHeader = styled(Layout.Header)`
  && {
    background-color: ${({ theme, color }) => color || theme.color.p1};
    z-index: 1100;
    width: 100%;
    margin: 0;
    height: ${({ height }) => height || '45px'};
    padding-left: 48px;
    padding-right: 48px;

    ${({ fixed }) => fixed && `
      position: fixed;
    `}

    @media (max-width: 768px) {
      padding-left: 12px;
      padding-right: 12px;
    }
  }
`;

export default StyledHeader;
