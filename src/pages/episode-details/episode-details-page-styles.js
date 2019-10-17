import styled from 'styled-components';

export const DetailsPageContainer = styled.div`
  width: 80%;
  margin: 50px auto;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  border-radius: 10px;
  border-color: ${({ theme }) => theme.cards.borderColor};
  background-color: ${({ theme }) => theme.cards.background};
  display: flex;
  position: relative;
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

export const EpisodeId = styled.h1`
  color: ${({ theme }) => theme.primaryHeading.fontColor};
`;

export const EpisodeTitle = styled.h2`
  margin: 15px;
`;

export const EpisodeDetailsContainer = styled.div`
  width: 100%;
  margin: 50px auto;
  padding: 30px 0;
  background-color: ${({ theme }) => theme.cards.background};
`;

export const EpisodeDescription = styled.p`
  margin: 0 20px;
`;

export const EpisodeDetailsFooterContainer = styled.div`
  margin: 0 20px;
  font-weight: bold;
  span {
    color: ${({ theme }) => theme.primaryHeading.fontColor};
  }
`;

export const CharactersContainer = styled.div``;

// export const EpisodeContainer = styled.div`
//   margin: 3%;
//   width: 20%;
//   border-radius: 10px;
//   border-color: ${({theme}) => theme.cards.borderColor};
//   background-color: ${({theme}) => theme.cards.background};
// `;

// export const ImageContainer = styled.img`
//    width: 100%
//    border-radius: 10px 10px 0 0;
// `;

// export const TitleContainer = styled.h2`
//     color: ${({theme}) => theme.primaryHeading.fontColor};
//     margin: 15px;
// `;

// export const DescriptionContainer = styled.p`
//   margin: 15px;
// `;
