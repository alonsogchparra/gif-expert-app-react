import { getGifs } from "../../helpers/getGifs";

describe("Test on getGifs", () => {
  test("should get 10 elements", async () => {
    const gifs = await getGifs("breaking bad");

    expect(gifs.length).toBe(10);
  });

  test("should not have elements", async () => {
    const gifs = await getGifs("");

    expect(gifs.length).toBe(0);
  });
});
