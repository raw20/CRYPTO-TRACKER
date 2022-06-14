/* json data의 promise를 return하는 함수 */
export async function fetchCoins() {
  return fetch("https://api.coinpaprika.com/v1/coins").then((response) =>
    response.json()
  );
  /*  const response = await fetch("https://api.coinpaprika.com/v1/coins");
      const json = await response.json();
      return json
      저 위와 같은 코드이다
 */
}
