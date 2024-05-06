export default function Privacy() {
   return (
      <div className='mt-28 max-w-2xl mx-auto animate-fadeUp'>
         <h1>Privacy Policy</h1>
         <div className='*:mb-2 *:collapse *:collapse-arrow *:bg-base-200/35 *:border-[3px] *:border-base-200/10'>
            <div>
               <input type='radio' name='my-accordion-1' />
               <div className='collapse-title text-xl font-aspekta font-medium'>1. Data Collection</div>
               <div className='collapse-content'>
                  <p className='m-0 font-helvetica'>
                     I do not store any data provided by users on our website. The data you enter is only used temporarily to utilize the OpenAI GPT
                     model for generating responses.
                  </p>
               </div>
            </div>
            <div>
               <input type='radio' name='my-accordion-1' />
               <div className='collapse-title text-xl font-aspekta font-medium'>2. Data Usage</div>
               <div className='collapse-content'>
                  <p className='m-0 font-helvetica'>
                     The data you provide is solely used for the purpose of utilizing the OpenAI GPT model. I do not store or retain any user data
                     beyond the immediate session.
                  </p>
               </div>
            </div>
            <div>
               <input type='radio' name='my-accordion-1' />
               <div className='collapse-title text-xl font-aspekta font-medium'>3. Data Storage</div>
               <div className='collapse-content'>
                  <p className='m-0 font-helvetica'>
                     As I do not store any user data, there is no data storage involved in our process. I do not retain any user data beyond the
                     immediate session.
                  </p>
               </div>
            </div>
            <div>
               <input type='radio' name='my-accordion-1' />
               <div className='collapse-title text-xl font-aspekta font-medium'>4. User Consent</div>
               <div className='collapse-content'>
                  <p className='m-0 font-helvetica'>
                     By using our website, you agree to temporarily provide data for the purpose of utilizing the OpenAI GPT model. I do not store or
                     retain any user data beyond the immediate session.
                  </p>
               </div>
            </div>
            <div>
               <input type='radio' name='my-accordion-1' />
               <div className='collapse-title text-xl font-aspekta font-medium'>5. Policy Changes</div>
               <div className='collapse-content'>
                  <p className='m-0 font-helvetica'>
                     I reserve the right to make changes to our privacy policy. Any changes will be published on this page.
                  </p>
               </div>
            </div>
         </div>
         <p>
            If you have any questions or concerns about our privacy policy, please contact me at{' '}
            <a href='mailto:edpovierin@gmail.com' className='hover:underline text-accent'>
               edpovierin@gmail.com
            </a>
         </p>
      </div>
   )
}
