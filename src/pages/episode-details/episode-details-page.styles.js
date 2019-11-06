import styled from 'styled-components';

export const DetailsPageContainer = styled.div`
  width: 80%;
  margin: 50px auto;
`;

export const HeaderContainer = styled.div.attrs(props => ({
  className: 'cartColors',
}))`
  width: 100%;
  border-radius: 10px;
  display: flex;
  position: relative;

  @media (max-width: 800px) {
    flex-direction: column;
    position: static;
  }
`;

export const EpisodeImage = styled.img`
  width: 250px;
  border-radius: 10px 0px 0px 10px;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

EpisodeImage.displayName = 'EpisodeImage';

export const EpisodeTitleContainer = styled.div.attrs(props => ({
  className: 'starWarsFont',
}))`
  position: absolute;
  top: 50%;
  left: 30%;
  transform: translateY(-50%);
  p {
    font-size: 20px;
  }
  @media (max-width: 1024px) {
    top: 50%;
    left: 40%;
  }
  @media (max-width: 800px) {
    position: static;
    top: unset;
    left: unset;
    transform: unset;
    margin: 30px;
  }
`;

EpisodeTitleContainer.displayName = 'EpisodeTitleContainer';

export const EpisodeDetailsContainer = styled.div.attrs(props => ({
  className: 'cartColors',
}))`
  width: 100%;
  margin: 50px auto;
  padding: 30px 0;
`;

EpisodeDetailsContainer.displayName = 'EpisodeDetailsContainer';

export const EpisodeDescription = styled.p`
  margin: 0 20px;
`;

EpisodeDescription.displayName = 'EpisodeDescription';

export const EpisodeDetailsFooterContainer = styled.div`
  margin: 0 20px;
  font-weight: bold;
`;

EpisodeDetailsFooterContainer.displayName = 'EpisodeDetailsFooterContainer';

export const CharactersContainer = styled.div``;
