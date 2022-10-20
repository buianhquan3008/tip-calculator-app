import { useState, useRef, useEffect } from 'react';
import './App.css';

function App() {
    const ref = useRef(null);
    const [bill, setBill] = useState(0);
    const [numberPeople, setNumberPeople] = useState(0);
    const [tip, setTip] = useState(0);
    const [total, setTotal] = useState(0);
    const [tipPercent, setTipPercent] = useState(0);

    const compute = () => {
        const newTip = (bill * tipPercent) / 100 / numberPeople;
        const newTotal = bill / numberPeople + newTip;
        console.log('1', bill);
        console.log('2', tipPercent);
        console.log('3', numberPeople);
        setTip(newTip);
        setTotal(newTotal);
    };
    const handlerClickTipPercent = (e) => {
        const ulElement = ref.current;
        for (let liElement of ulElement.children) {
            liElement.classList.remove('active');
        }
        setTipPercent(+e.target.innerHTML.replace('%', ''));
        e.currentTarget.classList.add('active');
    };

    const handlerClick = () => {
        const ulElement = ref.current;
        setTip(0);
        setTotal(0);
        setBill(0);
        setNumberPeople(0);

        for (let liElement of ulElement.children) {
            liElement.classList.remove('active');
        }
    };

    const arrTipPercent = [5, 10, 15, 25, 50];
    // useEffect(() => {}, [bill, tipPercent]);

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
                                    compute();
                                }}
                                value={bill === 0 ? '' : bill}
                            />
                        </div>
                    </div>
                    <div className='select-tip'>
                        <div className='select-tip__title'>Select Tip %</div>
                        <ul className='select-tip__contents' ref={ref}>
                            {arrTipPercent.map((item) => (
                                <li
                                    key={item}
                                    className='select-tip__content'
                                    onClick={(e) => {
                                        handlerClickTipPercent(e);
                                        compute();
                                    }}
                                >
                                    {item}%
                                </li>
                            ))}
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
                                    compute();
                                }}
                                value={numberPeople === 0 ? '' : numberPeople}
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
