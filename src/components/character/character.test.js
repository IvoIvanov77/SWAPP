import React from 'react';
import { shallow } from 'enzyme';
import Character from './character.component';

describe('Charecter component', () => {
  let wrapper;
  let mockHistory;
  const linkUrl = '/1';
  const name = 'name';
  const image = 'testimage';

  beforeEach(() => {
    mockHistory = {
      push: jest.fn(),
    };

    const mockProps = {
      history: mockHistory,
      linkUrl,
      name,
      image,
    };

    wrapper = shallow(<Character {...mockProps} />);
  });

  it('should render Character component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  // it('should call history.push with the right string when Character clicked', () => {
  //   wrapper.find('CharacterContainer').simulate('click');

  //   expect(mockHistory.push).toHaveBeenCalledWith(`/characters/${linkUrl}`);
  // });

  // it('should pass size to CharacterImage as the prop size', () => {
  //   expect(wrapper.find('CharacterImage').prop('image')).toBe(image);
  // });

  // it('should pass imageUrl to BackgroundImageContainer as the prop imageUrl', () => {
  //   expect(wrapper.find('BackgroundImageContainer').prop('imageUrl')).toBe(
  //     imageUrl
  //   );
  // });
});

// it('should render Character component', () => {
//   expect(shallow(<Character />)).toMatchSnapshot();
// });
