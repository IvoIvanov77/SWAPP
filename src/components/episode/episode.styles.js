import styled from 'styled-components';

export const EpisodeContainer = styled.div.attrs(props => ({
  className: 'cartColors',
}))`
  margin: 3%;
  width: 20%;
  border-radius: 10px;
`;

export const ImageContainer = styled.img`
   width: 100%
   border-radius: 10px 10px 0 0;  
`;

export const TitleContainer = styled.h2`
  margin: 15px;
`;

export const DescriptionContainer = styled.p`
  margin: 15px;
`;
