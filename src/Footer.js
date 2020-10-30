import { Layout } from 'antd';
import styled from 'styled-components';

const StyledFooter = styled(Layout.Footer)`
  && {
    margin-top: 25px;
    background: ${({ theme }) => theme.color.p4};
    padding: 0px;

    p {
      color: ${({ theme }) => theme.color.b5}
    }
  }
`;

export default StyledFooter;
