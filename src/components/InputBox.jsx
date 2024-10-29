import React, { useId } from 'react';

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOption = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  classname = ""
}) {
  const amountInputId = useId(); // for generating a unique id for each label
  
  return (
    <div className={`p-4 rounded-lg text-sm flex ${classname} bg-[url('https://images.unsplash.com/photo-1544076654-24d0d6070062?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGJhY2tncm91bmR8ZW58MHx8fHwxNjkxOTQ5MTM&ixlib=rb-4.0.3&q=80&w=1080')] bg-cover bg-center`}>
      <div className='w-1/2'>
        <label htmlFor={amountInputId} className='text-black/40 mb-2 inline-block'>
          {label}
        </label>
        <input
          id={amountInputId}
          className='outline-none w-full bg-transparent py-2'
          type='number'
          placeholder='Amount'
          disabled={amountDisable}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />
      </div>
      <div className='w-1/2 flex flex-wrap justify-end text-right'>
        <p className='text-black/40 mb-2 w-full'>Currency type</p>
        <select
          className='rounded-lg px-2 py-1 bg-gray-100 cursor-pointer outline-none'
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOption.map((curr) => (
            <option key={curr} value={curr}>
              {curr}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
