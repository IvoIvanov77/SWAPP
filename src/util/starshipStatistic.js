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
    cost: calculatePercent(starshipToCompare.cost, maxValues.cost),
    crew: calculatePercent(starshipToCompare.crew, maxValues.crew),
    hyperdriveRating: calculatePercent(
      starshipToCompare.hyperdriveRating,
      maxValues.hyperdriveRating,
    ),
    maxAtmosphericSpeed: calculatePercent(
      starshipToCompare.maxAtmosphericSpeed,
      maxValues.maxAtmosphericSpeed,
    ),
    maxMLPerHour: calculatePercent(
      starshipToCompare.maxMLPerHour,
      maxValues.maxMLPerHour,
    ),
  };
};

const calculatePercent = (valueToCompare, maxValue) => {
  return valueToCompare ? (valueToCompare / maxValue) * 100 : 0;
};
