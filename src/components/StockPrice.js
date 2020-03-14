import React, { useState, useEffect } from 'react';

const StockPrice = () => {
  const [netIncome, setNetIncome] = useState('');
  const [growth, setGrowth] = useState('');
  const [stocks, setStocks] = useState('');
  const [price, setPrice] = useState();

  useEffect(() => {
    if (netIncome > 0 && growth > 0 && stocks > 0) {
      const nig = growth / 100 + 1;

      setPrice(
        parseInt(
          (netIncome * (1 + nig ** 1 + nig ** 2 + nig ** 3 + nig ** 4 + nig ** 5 + nig ** 6 + nig ** 7 + nig ** 8 + nig ** 9 + nig ** 10)) / stocks,
          10
        )
      )
    }
  }, [netIncome, growth, stocks])

  return (
    <>
      <p>
        Having the current Net Income, the future Net Icome Growth (NIG), and the Number of Stocks,
      </p>
      <p>
        Calculate Stock Price based on the idea that the investment should pay off in 10 years if you look at the entire business
        with the following formula:
      </p>
      <p>
        (Net Income * (1 + NIG ** 1 + NIG ** 2 + NIG ** 3 + NIG ** 4 + NIG ** 5 + NIG ** 6 + NIG ** 7 + NIG ** 8 + NIG ** 9 + NIG ** 10)) / Number of Stocks
      </p>

      <div className="fields">
        <label>
          <span>Net Income (e.g. 30736)</span>
          <input type="text" value={netIncome} onChange={(e) => setNetIncome(e.target.value)} />
        </label>
        <label>
          <span>Net Income Growth % (e.g. 10)</span>
          <input type="text" value={growth} onChange={(e) => setGrowth(e.target.value)} />
        </label>
        <label>
          <span>Number of Stocks (e.g. 703)</span>
          <input type="text" value={stocks} onChange={(e) => setStocks(e.target.value)} />
        </label>
      </div>

      <div>
        Price: <span className="price">{price}</span>
      </div>
    </>
  )
};

export default StockPrice;
