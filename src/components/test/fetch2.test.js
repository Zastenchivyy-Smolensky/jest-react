const axios = require("axios");
function fetchData(n) {
  return axios.get("https://jsonplaceholder.typicode.com/posts/" + n);
}

test("the res.data.id id is 3", async () => {
  expect.assertions(1);
  const res = await fetchData(3);
  expect(res.data.id).toBe(3);
});
