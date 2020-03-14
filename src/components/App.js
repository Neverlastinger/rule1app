import React, { useReducer, useEffect } from 'react';
import Field from './Field';
import Growth from './Growth';
import StockPrice from './StockPrice';
import './App.scss';

const calculateGrowth = ({ current, prev, years }) => (
  parseFloat((Math.pow(current / prev, 1 / years) - 1) * 100).toFixed(2) /* eslint no-restricted-properties: 0 */
);

function App() {
  const [values, setValues] = useReducer((state = {}, action) => {
    switch (action.type) {
      case 'SET_VALUE':
        return {
          ...state,
          [action.index]: action.value
        };
      case 'CLEAR_ALL':
        return {
          '0': '',
          '1': '',
          '2': '',
          '5': '',
          '10': ''
        };
      default:
        return state;
    }
  }, localStorage.values ? JSON.parse(localStorage.values) : {});

  const [growths, setGrowths] = useReducer((state = {}, action) => {
    switch (action.type) {
      case 'SET_VALUE':
        return {
          ...state,
          [action.index]: action.value
        };
      case 'CLEAR_ALL':
        return {
          '1': '',
          '2': '',
          '5': '',
          '10': ''
        };
      default:
        return state;
    }
  }, {});

  useEffect(() => {
    setGrowthForIndex(1);
  }, [values[0], values[1]]);

  useEffect(() => {
    setGrowthForIndex(2);
  }, [values[0], values[2]]);

  useEffect(() => {
    setGrowthForIndex(5);
  }, [values[0], values[5]]);

  useEffect(() => {
    setGrowthForIndex(10);
  }, [values[0], values[10]]);

  useEffect(() => {
    localStorage.values = JSON.stringify(values);
  }, [values]);

  const setGrowthForIndex = (index) => {
    values[0] && values[index] && setGrowths({
      type: 'SET_VALUE',
      index,
      value: calculateGrowth({
        current: values[0],
        prev: values[index],
        years: index
      })
    });
  };

  const onFieldChange = (value, index) => {
    setValues({
      type: 'SET_VALUE',
      index,
      value
    });
  };

  const clearAll = () => {
    setValues({
      type: 'CLEAR_ALL'
    });

    setGrowths({
      type: 'CLEAR_ALL'
    });
  };

  return (
    <div className="App">
      <div className="row">
        <div className="fields">
          <Field index={0} values={values} onFieldChange={onFieldChange} />
          <Field index={1} values={values} onFieldChange={onFieldChange} />
          <Field index={2} values={values} onFieldChange={onFieldChange} />
          <Field index={5} values={values} onFieldChange={onFieldChange} />
          <Field index={10} values={values} onFieldChange={onFieldChange} />
          <div className="clear" onClick={clearAll}>Clear all</div>
        </div>

        <div className="growth">
          <Growth growths={growths} index={1} />
          <Growth growths={growths} index={2} />
          <Growth growths={growths} index={5} />
          <Growth growths={growths} index={10} />
        </div>
      </div>

      <div className="row stock-price">
        <StockPrice />
      </div>
    </div>
  );
}

export default App;
