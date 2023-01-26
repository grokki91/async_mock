import GameSavingLoader from '../app/GameSavingLoader';
import * as read from '../app/reader';

test(('Check class GameSavingLoader'), (done) => {
  const expectedResult = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
  GameSavingLoader.load().then((response) => {
    expect(response).toBe(expectedResult);
    done();
  });
});

test(('Check class GameSavingLoader with mock'), async () => {
  const readMock = jest.spyOn(read, 'default');
  readMock.mockRejectedValueOnce(new Error('Error'));
  await expect(GameSavingLoader.load()).rejects.toThrow();
});
