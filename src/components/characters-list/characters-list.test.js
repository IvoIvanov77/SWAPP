import React from 'react';
import { shallow } from 'enzyme';
import ChatactersList from './characters-list.component';

describe('ChatactersList component with hasNextPage = true', () => {
  let wrapper;
  let mockFetchMore;
  let buttonContainer;
  const mockedCharacters = [{ id: 1 }, { id: 2 }];
  const hasNextPage = true;

  beforeEach(() => {
    mockFetchMore = jest.fn();

    const mockProps = {
      characters: mockedCharacters,
      fetchMore: mockFetchMore,
      hasNextPage,
    };

    wrapper = shallow(<ChatactersList {...mockProps} />);
    buttonContainer = wrapper.find('FetchMoreButtonContainer');
  });

  it('should render ChatactersList component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render characters', () => {
    const character = wrapper.find('withRouter(Character)');
    expect(character.length).toBe(mockedCharacters.length);
  });

  it('should call fetchMore method when button is clicked', () => {
    const button = wrapper.find('CustomButton');
    button.simulate('click');
    expect(mockFetchMore).toHaveBeenCalled();
  });

  it('should render button when hasNext is true', () => {
    expect(buttonContainer.length).toBe(1);
  });
});

describe('ChatactersList component with hasNextPage = false', () => {
  let wrapper;
  let mockFetchMore;
  let buttonContainer;
  const mockedCharacters = [{ id: 1 }, { id: 2 }];
  const hasNextPage = false;

  beforeEach(() => {
    mockFetchMore = jest.fn();

    const mockProps = {
      characters: mockedCharacters,
      fetchMore: mockFetchMore,
      hasNextPage,
    };

    wrapper = shallow(<ChatactersList {...mockProps} />);
    buttonContainer = wrapper.find('FetchMoreButtonContainer');
  });

  it('should render ChatactersList component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render characters', () => {
    const character = wrapper.find('withRouter(Character)');
    expect(character.length).toBe(mockedCharacters.length);
  });

  it('should do not render button when hasNext is false', () => {
    expect(buttonContainer.length).toBe(0);
  });
});
