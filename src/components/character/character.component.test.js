import React from 'react';
import { shallow } from 'enzyme';
import Character from './character.component';

describe('Charecter component', () => {
  let wrapper;
  let mockHistory;
  const linkUrl = '/1';
  const name = 'name';
  const image = 'image';

  beforeEach(() => {
    mockHistory = {
      push: jest.fn(),
    };

    const mockProps = {
      image,
      name,
      history: mockHistory,
      linkUrl,
    };
    wrapper = shallow(<Character.WrappedComponent {...mockProps} />);
  });

  it('should render Character component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call history.push with the right string when Character clicked', () => {
    wrapper.find('CharacterContainer').simulate('click');
    expect(mockHistory.push).toHaveBeenCalled();
  });

  it('should pass size to CharacterImage as the prop size', () => {
    expect(wrapper.find('CharacterImage').prop('src')).toBe(image);
  });

  it('should pass imageUrl to BackgroundImageContainer as the prop imageUrl', () => {
    expect(
      wrapper
        .find('h2')
        .at(0)
        .text(),
    ).toBe(name);
  });
});
