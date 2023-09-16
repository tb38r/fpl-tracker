// api.test.js
import { FetchGameWeekData } from "@/lib/api";

describe('FetchGameWeekData', () => {
  // Mock the fetch function
  global.fetch = jest.fn();

  // Clear any previous mock implementation
  beforeEach(() => {
    fetch.mockClear();
  });

  test('fetches data successfully', async () => {
    const mockData = { id: 1 };
    const mockResponse = {
      ok: true,
      json: async () => mockData,
    };

    // Mock the fetch function to return the mockResponse
    fetch.mockResolvedValue(mockResponse);

    const gameweek = 1;
    const result = await FetchGameWeekData(gameweek);


    expect(result).toEqual(mockData);
    expect(fetch).toHaveBeenCalledWith(
      `https://fantasy.premierleague.com/api/event/${gameweek}/live/`,
      { next: { revalidate: 43200 } }
    );
  });

  test('fetches data with error', async () => {
    const errorMessage = 'Failed to fetch';
    const mockResponse = {
      ok: false,
      statusText: errorMessage,
    };

    fetch.mockResolvedValue(mockResponse);

    const gameweek = 1;

    // check that the function throws the right error
     expect(FetchGameWeekData(gameweek)).rejects.toThrow(errorMessage);
    
    expect(fetch).toHaveBeenCalledWith(
      `https://fantasy.premierleague.com/api/event/${gameweek}/live/`,
      { next: { revalidate: 43200 } }
    );
  });
});
