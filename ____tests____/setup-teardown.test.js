describe("Repeating Setup For Many Tests", () => {
  let cityDatabase = [];

  function initializeCityDatabase() {
    return new Promise(resolve => {
      const data = ["Vienna", "San Juan"];
      cityDatabase = data;
      resolve(data);
    });
  }

  function clearCityDatabase() {
    return new Promise(resolve => {
      const data = [];
      cityDatabase = data;
      resolve(data);
    });
  }

  function isCity(name) {
    return cityDatabase.includes(name);
  }

  beforeEach(() => {
    return initializeCityDatabase();
  });

  afterEach(() => {
    return clearCityDatabase();
  });

  test("city database has Vienna", () => {
    expect(isCity("Vienna")).toBeTruthy();
  });

  test("city database has San Juan", () => {
    expect(isCity("San Juan")).toBeTruthy();
  });
});

describe("One-Time Setup", () => {
  let cityDatabase = [];

  function initializeCityDatabase() {
    return new Promise(resolve => {
      const data = ["Vienna", "San Juan"];
      cityDatabase = data;
      resolve(data);
    });
  }

  function clearCityDatabase() {
    return new Promise(resolve => {
      const data = [];
      cityDatabase = data;
      resolve(data);
    });
  }

  function isCity(name) {
    return cityDatabase.includes(name);
  }

  beforeAll(() => {
    return initializeCityDatabase();
  });

  afterAll(() => {
    return clearCityDatabase();
  });

  test("city database has Vienna", () => {
    expect(isCity("Vienna")).toBeTruthy();
  });

  test("city database has San Juan", () => {
    expect(isCity("San Juan")).toBeTruthy();
  });
});
