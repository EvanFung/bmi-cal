'use client'
import React, {ChangeEvent, ReactElement, useEffect, useState} from 'react';
import DisplayResult from "@/app/components/DisplayResult";

const MetricForm = () => {
    //imperial
    const [isMetric, setIsMetric] = useState<boolean>(true);
    const [ftValue, setFtValue] = useState<number>(0);
    const [inValue, setInValue] = useState<number>(0);
    const [stValue, setStValue] = useState<number>(0);
    const [lbsValue, setLbsValue] = useState<number>(0);
    const [result, setResult] = useState<string>("");
    const [idealWeightImp, setIdealWeightImp] = useState<number[]>([]);

    const oneFtToCm = 30.48; //Source = Google
    const oneInToCm = 2.54;
    const oneKgToSt = 0.15747304;
    const numberLbsForOneSt = 14;
    const numberInForOneFt = 12;


    //metric
    const [height, setHeight] = useState<number>(0);
    const [weight, setWeight] = useState<number>(0);
    const [idealWeightMetric, setIdealWeightMetric] = useState<number>(0);
    const handleOptionChange = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.value == 'metric') {
            setResult('');
            setIsMetric(true);
        } else {
            setResult('');
            setIsMetric(false);
        }
    }

    useEffect(() => {
        if(!isMetric) {
            if(ftValue !== 0 && inValue !== 0 && stValue !== 0 && lbsValue !== 0) {
                const height = (ftValue * numberInForOneFt) + inValue;
                const weight = (stValue * numberLbsForOneSt) + lbsValue;
                const bmi = ((weight / (height * height)) * 703).toFixed(1);
                setResult(bmi);
                const idealWeightMaxKg = (ftValue * oneFtToCm) + (inValue * oneInToCm) - 100;
                const idealWeightMaxSt = Math.floor(idealWeightMaxKg * oneKgToSt);
                const idealWeightMaxLbs = Math.round((idealWeightMaxKg * oneKgToSt - idealWeightMaxSt) * numberLbsForOneSt);
                setIdealWeightImp([idealWeightMaxSt, idealWeightMaxLbs]);
            }
        }

    }, [ftValue, inValue, stValue, lbsValue]);

    useEffect(() => {
        if(height !== 0 && weight !== 0 && isMetric) {
            const heightMetre = height / 100;
            const bmi: string = (weight / Math.pow(heightMetre, 2)).toFixed(1);
            setResult(bmi);
            setIdealWeightMetric(height - 100);
        }
    }, [height, weight]);



    const inputOnChangeImperial = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.id === 'ftValue') {
            setFtValue(parseInt(e.target.value));
        } else if(e.target.id === 'inValue'){
            setInValue(parseInt(e.target.value))
        } else if(e.target.id === 'stValue') {
            setStValue(parseInt(e.target.value))
        } else {
            setLbsValue(parseInt(e.target.value))
        }
    }

    const inputOnChangeMetric = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.id === 'height') {
            setHeight(parseInt(e.target.value));
        } else {
            setWeight(parseInt(e.target.value))
        }
    }

    return (
        <div className='intro-form w-11/12 p-6 mt-8'>
            <div className='form-title'>
                <h1 className='font-semibold text-xl'>Enter your details below</h1>
            </div>
            <div className='radio-container'>
                <div className='metric-radio'>
                    <input type="radio" name='metricOrImperial' value='metric' checked={isMetric == true} onChange={handleOptionChange} />
                    <label>Metric</label>
                </div>
                <div className='metric-radio'>
                    <input type="radio" name='metricOrImperial' value='imperial' checked={isMetric == false} onChange={handleOptionChange} />
                    <label>Imperial</label>
                </div>
            </div>
            {isMetric && (
                <div>
                    <div className='metric-text-input-group'>
                        <label htmlFor="height">Height</label>
                        <input className='min-w-full' type="text" name="height" id="height" placeholder="0" onChange={inputOnChangeMetric} />
                        <span id="textCM">CM</span>
                    </div>
                    <div className='metric-text-input-group'>
                        <label htmlFor="weight">Weight</label>
                        <input className='min-w-full' type="text" name="weight" id="weight" placeholder="0" onChange={inputOnChangeMetric} />
                        <span id="textKG">KG</span>
                    </div>
                </div>
            )}
            {
                isMetric == false &&  (
                    <div>
                        <div className="firstSectionImperial">
                            <label id="label" htmlFor="height">Height</label>
                            <div className="imperial-input-group">
                                <input type="text" id="ftValue" placeholder='0' onChange={inputOnChangeImperial} />
                                <span id="ft">FT</span>
                                <input type="text" id="inValue" placeholder='0' onChange={inputOnChangeImperial} />
                                <span id="in">IN</span>
                            </div>
                        </div>
                        <div className="firstSectionImperial">
                            <label htmlFor="weight">Weight</label>
                            <div className="imperial-input-group">
                                <input type="text" id="stValue" placeholder='0' onChange={inputOnChangeImperial} />
                                <span id="st">ST</span>
                                <input type="text" id="lbsValue" placeholder='0' onChange={inputOnChangeImperial} />
                                <span id="lbs">LBS</span>
                            </div>
                        </div>
                    </div>
                )
            }
            <div className='welcome-container'>
                <div className='welcome-btn'>
                    {isMetric ? <DisplayResult result={result} idealWeight={idealWeightMetric} /> : <DisplayResult result={result} idealWeight={idealWeightImp} />}
                </div>
            </div>
        </div>
    );
};

export default MetricForm;