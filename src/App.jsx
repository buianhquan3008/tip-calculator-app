import { useState } from 'react';
import './App.css';

function App() {
    const [bill, setBill] = useState(0);
    const [numberPeople, setNumberPeople] = useState(0);
    const [tip, setTip] = useState(0);
    const [total, setTotal] = useState(0);
    const handlerClick = () => {
        const newTip = (bill * 15) / 100 / numberPeople;
        const newTotal = bill / numberPeople + newTip;
        setTip(newTip);
        setTotal(newTotal);
    };
    return (
        <div className='App'>
            <div className='wrap-title'>
                <div className='title'></div>
            </div>
            <div className='content'>
                <div className='bill-wrap'>
                    <div className='bill'>
                        <div className='bill__title'>Bill</div>
                        <div className='bill_wrap_input'>
                            <div className='bill__money__dola'>$</div>
                            <input
                                className='bill__money'
                                placeholder='0'
                                onChange={(e) => {
                                    setBill(e.target.value);
                                }}
                            />
                        </div>
                    </div>
                    <div className='select-tip'>
                        <div className='select-tip__title'>Select Tip %</div>
                        <ul className='select-tip__content'>
                            <li className='select-tip__content'>5%</li>
                            <li className='select-tip__content'>10%</li>
                            <li className='select-tip__content'>15%</li>
                            <li className='select-tip__content'>25%</li>
                            <li className='select-tip__content'>50%</li>
                            <li>
                                <input
                                    type='text'
                                    placeholder='Custom'
                                    className='select-tip__input'
                                />
                            </li>
                        </ul>
                    </div>
                    <div className='people'>
                        <div className='people__title'>Number of People</div>
                        <div className='people__number'>
                            <div className='people__number__icon'></div>
                            <input
                                className='people__number__value'
                                placeholder='0'
                                onChange={(e) => {
                                    setNumberPeople(e.target.value);
                                }}
                            />
                            {/* <div className='people__number__value'>5</div> */}
                        </div>
                    </div>
                </div>
                <div className='summary'>
                    <div className='summary-wrap-value'>
                        <div className='summary__amount'>
                            <div className='summary__amount__wrap'>
                                <div className='summary__amount__title'>
                                    Tip Amount
                                </div>
                                <div className='summary__amount__subtitle'>
                                    / people
                                </div>
                            </div>
                            <div className='summary__amount__value'>${tip}</div>
                        </div>
                        <div className='summary__total'>
                            <div className='summary__total__wrap'>
                                <div className='summary__total__title'>
                                    Total
                                </div>
                                <div className='summary__total__subtitle'>
                                    / people
                                </div>
                            </div>
                            <div className='summary__total__value'>
                                ${total}
                            </div>
                        </div>
                    </div>
                    <button className='reset-button' onClick={handlerClick}>
                        RESET
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
