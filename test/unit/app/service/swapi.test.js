const getStarWarsData = require('../../../../app/service/swapi').getStarWarsData;

test('get StarWars Data', async () => {
  const starWarsData = await getStarWarsData();
  expect(starWarsData).not.toBeNull();
  expect(starWarsData.name).toEqual('Luke Skywalker');
  expect(starWarsData.gender).toEqual('male');
});