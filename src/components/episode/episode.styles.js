import styled from 'styled-components';

export const EpisodeContainer = styled.div.attrs(props => ({
  className: 'cartColors',
}))`
  margin: 3%;
  width: 20%;
  border-radius: 10px;

  @media (max-width: 1500px) {
    width: 40%;
  }

  @media (max-width: 900px) {
    width: 80%;
  }
`;

EpisodeContainer.displayName = 'EpisodeContainer';

export const ImageContainer = styled.img`
   width: 100%
   border-radius: 10px 10px 0 0;  
`;

ImageContainer.displayName = 'ImageContainer';

export const TitleContainer = styled.h2.attrs(props => ({
  className: 'starWarsFont',
}))`
  margin: 15px;
`;

TitleContainer.displayName = 'TitleContainer';

export const DescriptionContainer = styled.p`
  margin: 15px;
`;

DescriptionContainer.displayName = 'DescriptionContainer';
