import Image from 'next/image'
import MetricForm from "@/app/components/MetricForm";

export default function Home() {
  return (
      <div className=''>
        <section className='intro mt-2'>
            <div className='intro-words'>
                <div className='logo-img flex items-center justify-center mt-2 '>
                    <img id="logo" src='/logo.svg' alt="logo" />
                </div>
                <div className='w-11/12 mx-auto intro-words-item lg:w-full'>
                    <h1 className='font-semibold text-5xl text-center mt-5' id="intro-title">Body Mass Index Calculator</h1>
                    <p className='text-center mt-5 font-light text-base text-gray-9  00'>
                        Better understand your weight in relation to your height using our body mass index (BM) calculator. While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall health and well-being.
                    </p>
                </div>
            </div>
            <MetricForm />
        </section>
          <div className='left-curve-line hidden'>
              <img src='/pattern-curved-line-left.svg' alt='left-curve-line' />
          </div>
          <section className='explanation'>
              <img src="/image-man-eating.webp" alt="man-eating-food" />
              <div className='w-11/12 bmi-explanation'>
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
          <section className='healthy-living-style mt-16 mx-auto'>
              <div className='living-style-container'>
                <div className='living-style-item mt-8'>
                    <img src='/icon-eating.svg' alt='icon-eating' />
                        <h2 className='text-2xl font-semibold'>Healthy eating</h2>
                        <p className='text-light text-gray-400'>
                            Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.
                        </p>
                </div>
                  <div className='living-style-item mt-8'>
                      <img src='/icon-exercise.svg' alt='icon-exercise' />
                          <h2 className='text-2xl font-semibold'>Regular exercise</h2>
                          <p className='text-light text-gray-400'>
                              Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.
                          </p>
                  </div>
                  <div className='living-style-item mt-8'>
                      <img src='/icon-sleep.svg' alt='icon-sleep' />
                          <h2 className='text-2xl font-semibold'>Adequate sleep</h2>
                          <p className='text-light text-gray-400'>
                              Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.
                          </p>
                  </div>
              </div>
          </section>


          <section id='small-device-limitation' className='limitation w-11/12 mx-auto mt-8 mb-8'>
              <div className='limitation-intro'>
                  <h2 className='font-semibold text-2xl text-center'>Limitations of BMI</h2>
                  <p className='font-light text-gray-600'>
                      Although BMI is often a practical indicator of healthy weight, it is not suited for every person. Specific groups should carefully consider their BMI outcomes, and in certain cases, the measurement may not be beneficial to use.
                  </p>
              </div>
              <div className='limitation-item-container mt-4'>
                  <div className='limitation-item'>
                      <div className='limitation-content'>
                          <div className='limitation-title'>
                              <img src='/icon-gender.svg' alt='gender' />
                              <h5 className='font-semibold text-[20px]'>Gender</h5>
                          </div>
                      </div>
                      <p className='font-light text-gray-600'>
                          The development and body fat composition of girls and boys vary with age. Consequently, a child&#39;s age and gender are considered when evaluating their BMI.
                      </p>
                  </div>
                  <div className='limitation-item'>
                      <div className='limitation-content'>
                          <div className='limitation-title'>
                              <img src='/icon-age.svg' alt='gender' />
                              <h5 className='font-semibold text-[20px]'>Age</h5>
                          </div>
                      </div>
                      <p className='font-light text-gray-600'>
                          In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content.
                      </p>
                  </div>
                  <div className='limitation-item'>
                      <div className='limitation-content'>
                          <div className='limitation-title'>
                              <img src='/icon-muscle.svg' alt='gender' />
                              <h5 className='font-semibold text-[20px]'>Muscle</h5>
                          </div>
                      </div>
                      <p className='font-light text-gray-600'>
                          BMI may misclassify muscular individuals as overweight or obese, as it doesn&#39;t differentiate muscle from fat.
                      </p>
                  </div>
                  <div className='limitation-item'>
                      <div className='limitation-content'>
                          <div className='limitation-title'>
                              <img src='/icon-pregnancy.svg' alt='gender' />
                              <h5 className='font-semibold text-[20px]'>Pregnancy</h5>
                          </div>
                      </div>
                      <p className='font-light text-gray-600'>
                          Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child.
                      </p>
                  </div>
                  <div className='limitation-item'>
                      <div className='limitation-content'>
                          <div className='limitation-title'>
                              <img src='/icon-race.svg' alt='gender' />
                              <h5 className='font-semibold text-[20px]'>Race</h5>
                          </div>
                      </div>
                      <p className='font-light text-gray-600'>
                          Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse.
                      </p>
                  </div>
              </div>
          </section>

          <section id='large-device-limitation' className='limitation w-11/12 mx-auto mt-8 mb-8'>
              <div className='first-row-limitation'>
                  <div className='limitation-intro'>
                      <h2 className='font-semibold text-2xl text-center'>Limitations of BMI</h2>
                      <p className='font-light text-gray-600'>
                          Although BMI is often a practical indicator of healthy weight, it is not suited for every person. Specific groups should carefully consider their BMI outcomes, and in certain cases, the measurement may not be beneficial to use.
                      </p>
                  </div>
                  <div className='limitation-item'>
                      <div className='limitation-content'>
                          <div className='limitation-title'>
                              <img src='/icon-gender.svg' alt='gender' />
                              <h5 className='font-semibold text-[20px]'>Gender</h5>
                          </div>
                      </div>
                      <p className='font-light text-gray-600'>
                          The development and body fat composition of girls and boys vary with age. Consequently, a child&#39;s age and gender are considered when evaluating their BMI.
                      </p>
                  </div>
              </div>
              <div className='second-row-limitation'>
                  <div className='curve-line-right-container'>
                      <img src='/pattern-curved-line-right.svg' alt='curve-line-right' />
                  </div>
                  <div className='limitation-item'>
                      <div className='limitation-content'>
                          <div className='limitation-title'>
                              <img src='/icon-age.svg' alt='gender' />
                              <h5 className='font-semibold text-[20px]'>Age</h5>
                          </div>
                      </div>
                      <p className='font-light text-gray-600'>
                          In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content.
                      </p>
                  </div>
                  <div className='limitation-item'>
                      <div className='limitation-content'>
                          <div className='limitation-title'>
                              <img src='/icon-muscle.svg' alt='gender' />
                              <h5 className='font-semibold text-[20px]'>Muscle</h5>
                          </div>
                      </div>
                      <p className='font-light text-gray-600'>
                          BMI may misclassify muscular individuals as overweight or obese, as it doesn&#39;t differentiate muscle from fat.
                      </p>
                  </div>
              </div>
              <div className='third-row-limitation'>
                  <div className='limitation-item'>
                      <div className='limitation-content'>
                          <div className='limitation-title'>
                              <img src='/icon-pregnancy.svg' alt='gender' />
                              <h5 className='font-semibold text-[20px]'>Pregnancy</h5>
                          </div>
                      </div>
                      <p className='font-light text-gray-600'>
                          Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child.
                      </p>
                  </div>
                  <div className='limitation-item'>
                      <div className='limitation-content'>
                          <div className='limitation-title'>
                              <img src='/icon-race.svg' alt='gender' />
                              <h5 className='font-semibold text-[20px]'>Race</h5>
                          </div>
                      </div>
                      <p className='font-light text-gray-600'>
                          Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse.
                      </p>
                  </div>
              </div>
          </section>
      </div>
  )
}
