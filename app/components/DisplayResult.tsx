import React from 'react';
interface Props {
    result: string
    idealWeight: number | number[]
}
const DisplayResult = ({result, idealWeight}: Props) => {
    let healthStatus = "";
    if(+result < 18.5) {
        healthStatus = "Underweight";
    } else if(+result < 24.9) {
        healthStatus = "Healthy weight";
    } else if (+result < 29.9) {
        healthStatus = "Overweight";
    } else {
        healthStatus = "Obese";
    }
    function imperialReducedFifteenKg(arrayIdealWeight: number[]) {
        const oneKgToLbs = 2.20462;
        const numberLbsForOneSt = 14;
        const minIdealWeight = (arrayIdealWeight[0] * numberLbsForOneSt) + arrayIdealWeight[1] - (15 * oneKgToLbs);
        const minIdealWeightSt = Math.floor(minIdealWeight / numberLbsForOneSt);
        const minIdealWeightLbs = Math.round(minIdealWeight % numberLbsForOneSt);
        return `${minIdealWeightSt}st ${minIdealWeightLbs}lbs`
    }
    const idealWeightMetricOrImperialMax = Array.isArray(idealWeight) ? `${idealWeight[0]}st ${idealWeight[1]}lbs` : `${idealWeight}kgs`;
    const idealWeightMetricOrImperialMin = Array.isArray(idealWeight) ? imperialReducedFifteenKg(idealWeight) : `${idealWeight - 15}kgs`;
    if(result === "NaN" || result == '' || +result < 1 || +result > 100) {
        return (
                <div>
                    <h4 className='text-center text-white font-bold text-2xl'>Welcome!</h4>
                    <p className='text-center text-white'>Enter your height and weight and you&#39;ll see your BMI result here</p>
                </div>
        )
    } else {
        return (
            <div>
                <div>
                    <p className='text-center text-white'>Your BMI is...</p>
                    <h4 className='text-center text-white font-bold text-2xl'>{result}</h4>
                </div>
                <div>
                    <p className='text-center text-white'>Your BMI suggests you&#39;re a {healthStatus}. Your ideal weight is between <strong>{idealWeightMetricOrImperialMin} - {idealWeightMetricOrImperialMax}</strong></p>
                </div>
            </div>
        )
    }
};

export default DisplayResult;