import Image from 'next/image'

export default function Home() {
  return (
      <div className=''>
        <section className='intro'>
            <div className='intro-words'>
                <div className='flex items-center justify-center mt-2 '>
                    <img src='/logo.svg' />
                </div>
                <div className='w-11/12 mx-auto'>
                    <h1 className='font-semibold text-5xl text-center mt-5'>Body Mass Index Calculator</h1>
                    <p className='text-center mt-5 font-light text-base'>
                        Better understand your weight in relation to your height using our body mass index (BM) calculator. While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall health and well-being.
                    </p>
                </div>
            </div>
            <div className='intro-form w-11/12 min-h-[455px] p-6'>
                <div className='form-title'>
                    <h1 className='font-semibold'>Enter your details below</h1>
                </div>
                    <div className='radio-container'>
                        <div className='metric-radio'>
                            <input type="radio" name='metricOrImperial' value='metric' checked />
                            <label htmlFor="metric">Metric</label>
                        </div>
                        <div className='metric-radio'>
                            <input type="radio" name='metricOrImperial' value='imperial' />
                            <label htmlFor="imperial">Imperial</label>
                        </div>
                    </div>
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
                    <div className='welcome-container'>
                        <div className='welcome-btn'>
                            <h4 className='text-center text-white font-bold text-2xl'>Welcome!</h4>
                            <p className='text-center text-white'>Enter your height and weight and you will see your BMI result here</p>
                        </div>
                    </div>
            </div>
        </section>
      </div>
  )
}
