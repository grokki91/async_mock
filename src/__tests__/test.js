import GameSavingLoader from '../app/GameSavingLoader';
import read from '../app/reader';

test(('Check class GameSavingLoader'), (done) => {
  const expectedResult = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
  GameSavingLoader.load().then((response) => {
    expect(response).toBe(expectedResult);
    done();
  });
});

test(('Check class GameSavingLoader with mock'), async () => {
  jest.mock('../app/reader.js');
  try {
    read.mockRejectedValueOnce(new Error('Error'));
    await GameSavingLoader.load();
  } catch (error) {
    expect(error).toThrow();
  }
});
