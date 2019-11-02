import React from 'react';
import { shallow } from 'enzyme';
import ChatacterDetaislPage from './character-details-page.component';

describe('ChatacterDetaislPage component', () => {
  let wrapper;
  let mockPerson;
  const mockedStarships = [{ id: 1 }, { id: 2 }];
  const mockName = 'name';

  beforeEach(() => {
    mockPerson = {
      name: mockName,
      starships: mockedStarships,
    };

    wrapper = shallow(<ChatacterDetaislPage person={mockPerson} />);
  });

  it('should render ChatacterDetaislPage component', () => {
    console.log(wrapper.debug());
    expect(wrapper).toMatchSnapshot();
  });

  it('should render character name', () => {
    const characterName = wrapper.find('CharacterName');
    expect(characterName.text()).toBe(mockName);
  });

  it('should render character info', () => {
    const characterInfo = wrapper.find('CharacterInfo');
    expect(characterInfo.prop('person')).toBe(mockPerson);
  });

  it('should render starships list', () => {
    const starshipsList = wrapper.find('StarshipList');
    expect(starshipsList.prop('starships')).toBe(mockedStarships);
  });
});
