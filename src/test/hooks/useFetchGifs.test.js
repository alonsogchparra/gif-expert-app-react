import { renderHook } from "@testing-library/react-hooks";
import { useFetchGifs } from "../../hooks/useFetchGifs";

describe("Test on ueFetchGifs", () => {
  test("should has an initialState", async () => {
    const { result, waitForNextUpdate } = renderHook(() => {
      useFetchGifs("");
    });

    await waitForNextUpdate();

    const { data, loading } = result.current;

    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });

  test("should return an array with images and loading should be false", async () => {
    const { result, waitForNextUpdate } = renderHook(() => {
      useFetchGifs("breaking bad");
    });

    await waitForNextUpdate();

    const { data, loading } = result.current;

    expect(data.length).toBe(10);
    expect(loading).toBe(false);
  });
});
