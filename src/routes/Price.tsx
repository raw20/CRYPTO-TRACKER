import { useQuery } from "react-query";
import { useOutletContext } from "react-router-dom";
import styled from "styled-components";
import { fetchCoinTickers } from "../api";

interface PriceData {
  coinId: string;
}
interface PriceInfoData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}
const PriceChange = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;

  span {
    width: 100%;
    height: 30px;
    background-color: rgba(0, 0, 0, 0.5);
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
  }
`;
function Price() {
  const { coinId } = useOutletContext<PriceData>();
  const { isLoading, data } = useQuery<PriceInfoData>(["tickers", coinId], () =>
    fetchCoinTickers(coinId)
  );
  console.log(data);
  return (
    <div>
      {isLoading ? (
        "Loading..."
      ) : (
        <PriceChange>
          <span>1시간전 변화율 : {data?.quotes.USD.percent_change_1h}%</span>
          <span>ATH 날짜 : {data?.quotes.USD.ath_date}</span>
          <span>
            시가총액 : ${data?.quotes.USD.market_cap.toLocaleString("ko-KR")}
          </span>
        </PriceChange>
      )}
    </div>
  );
}

export default Price;
