import {} from "react";
import { Divider, Flex, Tag, Typography } from "antd";
import CoinInfo from "./CoinInfo";


const textStyles = {
  marginRight: '10px'
}

const CoinInfoModal = ({ coin }) => {
  return (
    <>
      <CoinInfo coin={coin} withSymbol />
      <Divider />
      <Typography.Paragraph>
        <Typography.Text style={textStyles} strong>1 hour:</Typography.Text>
        <Tag  color={coin.priceChange1h > 0 ? "green" : "red"}>
          {coin.priceChange1h}%
        </Tag>

        <Typography.Text style={textStyles} strong>1 day:</Typography.Text>
        <Tag color={coin.priceChange1h > 0 ? "green" : "red"}>
          {coin.priceChange1d}%
        </Tag>

        <Typography.Text style={textStyles} strong>1 week:</Typography.Text>
        <Tag color={coin.priceChange1h > 0 ? "green" : "red"}>
          {coin.priceChange1w}%
        </Tag>
      </Typography.Paragraph>
      <Typography.Paragraph>
        <Typography.Text strong>Price: </Typography.Text>
        {coin.price.toFixed(2)}$
      </Typography.Paragraph>
      <Typography.Paragraph>
        <Typography.Text strong>Price to BTC: </Typography.Text>
        {coin.priceBtc.toFixed(2)}$
      </Typography.Paragraph>
      <Typography.Paragraph>
        <Typography.Text strong>Market Cap: </Typography.Text>
        {coin.marketCap.toFixed(2)}$
      </Typography.Paragraph>
      {coin.contractAddress && (
        <Typography.Paragraph>
          <Typography.Text strong>Contract Address: </Typography.Text>
          {coin.contractAddress}
        </Typography.Paragraph>
      )}
    </>
  );
};

export default CoinInfoModal;
