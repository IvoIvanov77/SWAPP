export const getMaxValues = starshipList => {
  return {
    cost: Math.max(...starshipList.map(s => s.cost), 0),
    crew: Math.max(...starshipList.map(s => s.crew), 0),
    hyperdriveRating: Math.max(...starshipList.map(s => s.hyperdriveRating), 0),
    maxAtmosphericSpeed: Math.max(
      ...starshipList.map(s => s.maxAtmosphericSpeed),
      0,
    ),
    maxMLPerHour: Math.max(...starshipList.map(s => s.maxMLPerHour), 0),
  };
};

export const getStarshipStatistic = (starshipToCompare, maxValues) => {
  return {
    cost: (starshipToCompare.cost / maxValues.cost) * 100,
    crew: (starshipToCompare.crew / maxValues.crew) * 100,
    hyperdriveRating:
      (starshipToCompare.hyperdriveRating / maxValues.hyperdriveRating) * 100,
    maxAtmosphericSpeed:
      (starshipToCompare.maxAtmosphericSpeed / maxValues.maxAtmosphericSpeed) *
      100,
    maxMLPerHour:
      (starshipToCompare.maxMLPerHour / maxValues.maxMLPerHour) * 100,
  };
};
