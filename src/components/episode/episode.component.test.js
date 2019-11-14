import React from 'react';
import { shallow } from 'enzyme';
import Episode from './episode.component';

describe('Episode component', () => {
  let wrapper;
  let mockMatch;
  let mockHistory;
  const linkUrl = '10';
  const title = 'title';
  const image = 'image';
  const openingCrawl = 'openingCrawl';

  beforeEach(() => {
    mockMatch = {
      url: '/episodes',
    };

    mockHistory = {
      push: jest.fn(),
    };

    const mockProps = {
      history: mockHistory,
      match: mockMatch,
      image,
      title,
      openingCrawl,
      linkUrl,
    };
    wrapper = shallow(<Episode.WrappedComponent {...mockProps} />);
  });

  it('should render Episode component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call history.push with the right string when Episode clicked', () => {
    wrapper.find('EpisodeContainer').simulate('click');
    expect(mockHistory.push).toHaveBeenCalledWith(
      `${mockMatch.url}/${linkUrl}`,
    );
  });

  it('should pass image to ImageContainer as the prop src', () => {
    expect(wrapper.find('ImageContainer').prop('src')).toBe(image);
  });

  it('should pass title to ImageContainer as the prop alt', () => {
    expect(wrapper.find('ImageContainer').prop('alt')).toBe(title);
  });

  it('should pass title to TitleContainer as text', () => {
    expect(wrapper.find('TitleContainer').text()).toBe(title);
  });

  it('should pass openingCrawl to DescriptionContainer as text', () => {
    expect(wrapper.find('DescriptionContainer').text()).toBe(openingCrawl);
  });
});
