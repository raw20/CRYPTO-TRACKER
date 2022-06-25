const BASE_URL = `https://api.coinpaprika.com/v1`;
/* json data의 promise를 return하는 함수 */
export async function fetchCoins() {
  return fetch(`${BASE_URL}/coins`).then((response) => response.json());
  /*  const response = await fetch("https://api.coinpaprika.com/v1/coins");
      const json = await response.json();
      return json
      저 위와 같은 코드이다
 */
}
export async function fetchCoinInfo(coinId: string) {
  return fetch(`${BASE_URL}/coins/${coinId}`).then((response) =>
    response.json()
  );
}
export async function fetchCoinTickers(coinId: string) {
  return fetch(`${BASE_URL}/tickers/${coinId}`).then((response) =>
    response.json()
  );
}

export async function fetchCoinHistory(coinId: string) {
  return fetch(
    `https://ohlcv-api.nomadcoders.workers.dev/?coinId=${coinId}`
  ).then((response) => response.json());
  /* return fetch(
    `${BASE_URL}/coins/${coinId}/ohlcv/historical?start=${startDate}&end=${endDate}`
  ).then((response) => response.json()); */
}
