import styled from 'styled-components';

export const TitleContainer = styled.h2`
  color: ${({ theme }) => theme.primaryHeading.fontColor};
`;

export const ChartContainer = styled.div`
  svg {
    background-color: black;
  }
  circle {
    fill: black;
    fill-opacity: 1;
  }
  line {
    display: none;
  }
  text {
    fill: ${({ theme }) => theme.primaryHeading.fontColor};
  }
`;
