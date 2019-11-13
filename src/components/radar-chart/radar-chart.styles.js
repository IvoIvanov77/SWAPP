import styled from 'styled-components';

export const TitleContainer = styled.h2`
  color: ${({ theme }) => theme.secandaryHeading.fontColor};
`;

export const ChartContainer = styled.div`
  svg {
    background-color: black;
    g {
      g:nth-child(1) {
        text {
          fill: none;
        }
      }
    }
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
    font-size: 15px;
  }
  path {
    fill: ${({ theme }) => theme.radar.color};
    stroke: ${({ theme }) => theme.radar.color};
    fill-opacity: 0.4;
  }
`;
