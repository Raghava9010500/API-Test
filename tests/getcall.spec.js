import { test, expect } from "@playwright/test";

test('Test GET API', async ({ request }) => {

  // Send GET request
  const resp = await request.get("https://jsonplaceholder.typicode.com/posts/1");

  // Validate response status
  expect(resp.status()).toBe(200);

  // Read body as JSON
  const respBody = await resp.json();

  // Validate response headers
  const headersArray = resp.headersArray();
  console.log("Headers:", headersArray);

  // Validate properties in response body
  expect(respBody).toHaveProperty("userId", 1);
  expect(respBody).toHaveProperty("id", 1);
  expect(respBody).toHaveProperty("title");
  expect(respBody).toHaveProperty("body");

  // Validate exact values (optional)
  expect(respBody.title).toContain("sunt aut facere");
  expect(respBody.body).toContain("quia et suscipit");
});
