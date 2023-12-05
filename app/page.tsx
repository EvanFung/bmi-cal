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
                    <p className='text-center mt-5 font-light text-base text-gray-400'>
                        Better understand your weight in relation to your height using our body mass index (BM) calculator. While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall health and well-being.
                    </p>
                </div>
            </div>
            <div className='intro-form w-11/12 p-6 mt-8'>
                <div className='form-title'>
                    <h1 className='font-semibold text-xl'>Enter your details below</h1>
                </div>
                    <div className='radio-container'>
                        <div className='metric-radio'>
                            <input type="radio" name='metricOrImperial' value='metric' />
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
          <section className='explanation'>
              <img src="/image-man-eating.webp" alt="man-eating-food" />
              <div className='w-11/12'>
                  <h2 className='text-2xl font-bold mt-8 mb-8'>What your BMI result means</h2>
                  <p className='text-light text-base text-gray-400'>
                      A BMI range of 18.5 to 24.9 is considered a &#39;healthy weight&#39;.
                      Maintaining a healthy weight may lower your chances of
                      experiencing health issues later on, such as obesity and type
                      2 diabetes. Aim for a nutritious diet with reduced fat and
                      sugar content, incorporating ample fruits and vegetables.
                      Additionally, strive for regular physical activity, ideally about
                      30 minutes daily for five days a week.
                  </p>
              </div>
          </section>
          <section className='healthy-living-style'>
              <div className='living-style-container'>
                <div className='living-style-item'>
                    <img src='/icon-eating.svg' />
                    <div>
                        <h2>Healthy eating</h2>
                        <p>
                            Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.
                        </p>
                    </div>
                </div>
              </div>
          </section>
      </div>
  )
}
