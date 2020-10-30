import styled from 'styled-components';

const StyledLabel = styled.label`
  && {
    color: ${({ theme }) => theme.color.p3};
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
    font-size: 15px;
    line-height: 24px;

    ${({ error, theme }) => error && `
      color: ${theme.color.u2};
    `}
  }
`;

export default StyledLabel;
