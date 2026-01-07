import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import { useState } from "react";
import "tailwindcss";

function App() {
  
const [Amount , SetAmount ] =  useState(0);
const [From , SetFrom ] =  useState('usd');
const [To , SetTo ] =  useState('npr');
const [convertedAmount , setConvertedAmount ] =  useState(0);
const currencyInfo = useCurrencyInfo(From);
const Options = Object.keys(currencyInfo);

const Swap = () => {
  // Store current values before swapping
  const tempFrom = From;
  const tempTo = To;
  
  SetFrom(tempTo);
  SetTo(tempFrom);
  
  // Also swap amounts
  SetAmount(convertedAmount);
  setConvertedAmount(Amount);
}
const convert = () => {
  setConvertedAmount(Amount * currencyInfo[To]);
}


 return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                       
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={Amount}
                            currencyOptions={Options}
                            onCurrencyChange={SetTo}
                            selectCurrency={From}
                            onAmountChange={(Amount) => SetAmount(Amount)}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={Swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={Options}
                            onCurrencyChange={(currency) => SetTo(currency)}
                            selectCurrency={From}
                            amountDisable
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {From.toUpperCase()} to {To.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}


export default App
