'use client'
import React, {ChangeEvent, useState} from 'react';

const MetricForm = () => {
    const [isMetric, setIsMetric] = useState<boolean>(true);

    const handleOptionChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        if(e.target.value == 'metric') {
            setIsMetric(true);
        } else {
            setIsMetric(false);
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
                        <input className='min-w-full' type="text" name="height" id="height" placeholder="0" />
                        <span id="textCM">CM</span>
                    </div>
                    <div className='metric-text-input-group'>
                        <label htmlFor="weight">Weight</label>
                        <input className='min-w-full' type="text" name="weight" id="weight" placeholder="0" />
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
                                <input type="text" id="ftValue" placeholder='0'/>
                                <span id="ft">FT</span>
                                <input type="text" id="inValue" placeholder='0'/>
                                <span id="in">IN</span>
                            </div>
                        </div>
                        <div className="firstSectionImperial">
                            <label htmlFor="weight">Weight</label>
                            <div className="imperial-input-group">
                                <input type="text" id="stValue" placeholder='0'/>
                                <span id="st">ST</span>
                                <input type="text" id="lbsValue" placeholder='0'/>
                                <span id="lbs">LBS</span>
                            </div>
                        </div>
                    </div>
                )
            }
            <div className='welcome-container'>
                <div className='welcome-btn'>
                    <h4 className='text-center text-white font-bold text-2xl'>Welcome!</h4>
                    <p className='text-center text-white'>Enter your height and weight and you will see your BMI result here</p>
                </div>
            </div>
        </div>
    );
};

export default MetricForm;