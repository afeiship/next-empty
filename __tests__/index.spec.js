require('../src');

describe('api.basic test', () => {
  test('nx.empty basic test case', function () {
    const obj1 = [1, 2, 3];
    const obj2 = { email: '1290657123@qq.com' };
    const res1 = nx.empty(obj1);
    const res2 = nx.empty(obj2);
    expect(obj1).toBe(res1);
    expect(obj1).toEqual([]);
    expect(obj2).toBe(res2);
    expect(obj2).toEqual({});
  });
});
