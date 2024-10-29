
import React, { useState } from 'react';
import useCurrencyInfo from "./assets/useCurrencyinfo";
import InputBox from "./components/InputBox";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [converted, setConverted] = useState(0);

  const Currencyinfo = useCurrencyInfo(from);
  const option = Object.keys(Currencyinfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConverted(amount);
    setAmount(converted);
  };

  const convert = () => {
    setConverted(amount * Currencyinfo[to]);
  };

  return (
    <div
      className={`w-full h-screen flex flex-wrap 
      justify-center items-center bg-cover bg-no-repeat bg-[url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGN1cnJlbmN5fGVufDB8fHx8MTY5MTkzMTQ3Mg&ixlib=rb-4.0.3&q=80&w=1080')] bg-cover bg-center`}
    >
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto
          border border-grey-60 rounded-lg p-5
          backdrop-blur-sm bg-white/30'>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className='w-full mb-1'>
              <InputBox
                label="From"
                amount={amount}
                currencyOption={option}
                onCurrencyChange={(currency) => setFrom(currency)}
                onAmountChange={(value) => setAmount(value)}
                selectCurrency={from}
              />
            </div>
            <div className='relative w-full h-0.5'>
              <button
                type='button'
                className='absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2
                  border-white rounded-md
                  bg-blue-600 text-white px-2 py-0.5'
                onClick={swap}
              >
                Swap
              </button>
            </div>
            <div className='w-full mb-1'>
              <InputBox
                label="To"
                amount={converted}
                currencyOption={option}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>
            <button type='submit' className='w-full bg-blue-600 text-white py-3 px-3 rounded-lg'>
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
