import styled from 'styled-components';

export const DetailsPageContainer = styled.div`
  width: 80%;
  margin: 50px auto;
`;

//TODO - rename
export const HeaderContainer = styled.div.attrs(props => ({
  className: 'cartColors',
}))`
  width: 100%;
  border-radius: 10px;
  display: flex;
  position: relative;
  p {
    font-size: 24px;
  }
`;

export const EpisodeImage = styled.img`
  width: 250px;
  border-radius: 10px 0px 0px 10px;
`;

export const EpisodeTitleContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 30%;
  transform: translateY(-50%);
`;

export const EpisodeDetailsContainer = styled.div.attrs(props => ({
  className: 'cartColors',
}))`
  width: 100%;
  margin: 50px auto;
  padding: 30px 0;
`;

export const EpisodeDescription = styled.p`
  margin: 0 20px;
`;

export const EpisodeDetailsFooterContainer = styled.div`
  margin: 0 20px;
  font-weight: bold;
`;

export const CharactersContainer = styled.div``;
