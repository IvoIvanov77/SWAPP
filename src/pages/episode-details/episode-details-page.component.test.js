import React from 'react';
import { shallow } from 'enzyme';
import EpisodeDetaislPage from './episode-details-page.component';

describe('EpisodeDetaislPage component', () => {
  let wrapper;
  let mockEpisode;
  let mockedCharacters = [{ id: 1 }, { id: 2 }];
  let mockFetchMore;
  const mockHasNextPage = true;
  const mockTitle = 'title';
  const mockOpeningCrawl = 'mockOpeningCrawl';
  const mockImage = 'image';
  const mockDirector = 'director';
  const mockReleaseDate = 'releaseDate';
  const mockEpisodeId = 'episodeId';

  beforeEach(() => {
    mockFetchMore = jest.fn();

    mockEpisode = {
      title: mockTitle,
      openingCrawl: mockOpeningCrawl,
      image: mockImage,
      director: mockDirector,
      releaseDate: mockReleaseDate,
      episodeId: mockEpisodeId,
    };

    wrapper = shallow(
      <EpisodeDetaislPage
        episode={mockEpisode}
        characters={mockedCharacters}
        fetchMore={mockFetchMore}
        hasNextPage={mockHasNextPage}
      />,
    );
  });

  it('should render EpisodeDetaislPage component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render episode image', () => {
    const episodeImage = wrapper.find('EpisodeImage');
    expect(episodeImage.prop('src')).toBe(mockImage);
    expect(episodeImage.prop('alt')).toBe(mockTitle);
  });

  it('should render episode title', () => {
    const episodeTitle = wrapper.find('EpisodeTitleContainer');
    expect(episodeTitle.childAt(0).text()).toBe(
      `Star Wars: Episode ${mockEpisodeId}`,
    );
    expect(episodeTitle.childAt(1).text()).toBe(mockTitle);
  });

  it('should render episode description', () => {
    const episodeDescription = wrapper.find('EpisodeDescription');
    expect(episodeDescription.text()).toBe(mockOpeningCrawl);
  });

  it('should render episode details', () => {
    const episodeDetails = wrapper.find('EpisodeDetailsFooterContainer');
    expect(episodeDetails.childAt(0).text()).toBe(`Director: ${mockDirector}`);
    expect(episodeDetails.childAt(1).text()).toBe(
      `Release Date: ${mockReleaseDate}`,
    );
  });

  it('should render characters list', () => {
    const charactersList = wrapper.find('ChatactersList');
    expect(charactersList.prop('characters')).toBe(mockedCharacters);
    expect(charactersList.prop('hasNextPage')).toBe(mockHasNextPage);
    expect(charactersList.prop('fetchMore')).toBe(mockFetchMore);
  });
});
