import { useEffect, useState } from 'react';
import { URL } from './consts';
import { ICurrency } from './types';

const useCurrencies = () => {
  const [currencies, setCurrencies] = useState<ICurrency[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadCurrencies = async () => {
    setIsLoading(true);
    const response = await fetch(`${URL}&base_currency=RUB`);
    const result = await response.json();

    setCurrencies([
      {
        name: 'USD',
        value: (1 / result.data.USD.value).toFixed(2),
      },
      {
        name: 'EUR',
        value: (1 / result.data.EUR.value).toFixed(2),
      },
      {
        name: 'GBP',
        value: (1 / result.data.GBP.value).toFixed(2),
      },
    ]);
    setIsLoading(false);
  };

  useEffect(() => {
    loadCurrencies();
  }, []);

  return { currencies, isLoading };
};

export default useCurrencies;
