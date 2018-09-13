describe("Callbacks", () => {
  test("the data is peanut butter", done => {
    function fetchData(cb) {
      setTimeout(() => {
        cb("peanut butter");
      }, 100);
    }

    function callback(data) {
      expect(data).toBe("peanut butter");
      done();
    }

    fetchData(callback);
  });
});

describe("Promises", () => {
  function fetchDataResolve() {
    return new Promise((resolve, reject) => {
      resolve("peanut butter");
    });
  }

  function fetchDataReject() {
    return new Promise((resolve, reject) => {
      reject("error");
    });
  }

  test("the data is peanut butter", () => {
    expect.assertions(1);
    return fetchDataResolve().then(data => {
      expect(data).toBe("peanut butter");
    });
  });

  test("the fetch fails with an error", () => {
    expect.assertions(1);
    return fetchDataReject().catch(e => expect(e).toMatch("error"));
  });

  test("the data is peanut butter", () => {
    expect.assertions(1);
    return expect(fetchDataResolve()).resolves.toBe("peanut butter");
  });

  test("the fetch fails with an error", () => {
    expect.assertions(1);
    return expect(fetchDataReject()).rejects.toMatch("error");
  });
});

describe("Async/Await", () => {
  function fetchDataResolve() {
    return new Promise((resolve, reject) => {
      resolve("peanut butter");
    });
  }

  function fetchDataReject() {
    return new Promise((resolve, reject) => {
      reject("error");
    });
  }

  test("the data is peanut butter", async () => {
    expect.assertions(1);
    const data = await fetchDataResolve();
    expect(data).toBe("peanut butter");
  });

  test("the fetch fails with an error", async () => {
    expect.assertions(1);
    try {
      await fetchDataReject();
    } catch (e) {
      expect(e).toMatch("error");
    }
  });

  test('the data is peanut butter', async () => {
    expect.assertions(1);
    await expect(fetchDataResolve()).resolves.toBe('peanut butter');
  });
  
  test('the fetch fails with an error', async () => {
    expect.assertions(1);
    await expect(fetchDataReject()).rejects.toMatch('error');
  });
});
