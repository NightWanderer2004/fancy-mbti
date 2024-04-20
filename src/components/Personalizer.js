'use client'
import { openai } from '@/lib/openai'
import { useEffect, useState } from 'react'
import Showdown from 'showdown'
import { toast } from 'sonner'

import TextareaAutosize from 'react-textarea-autosize'

export default function Personalizer({ setResponse, setIsLoading, isLoading }) {
   const [input, setInput] = useState('')
   const [error, setError] = useState('')

   useEffect(() => {
      const prevInput = localStorage.getItem('input')
      if (prevInput) setInput(prevInput)
   }, [])

   const handleSubmit = async e => {
      e.preventDefault()
      if (input.trim() == '') {
         setError('Please enter your data')
         return
      }

      localStorage.setItem('input', input)

      setIsLoading(true)
      setError('')
      setResponse('')

      try {
         const generateText = async () => {
            const response = await openai.chat.completions.create({
               messages: [
                  {
                     role: 'system',
                     content: `Being a MBTI and psychology expert, create an instruction for me on how to boost my personality and use my natural strengths based on my data that I provide you in triple quotes. Answer in a friendly and open style. Explain how and why my interests can be related to each other.

Matching Function:
- Develop an algorithm that suggests me with compatible MBTI types for communication or cooperation based on the user's MBTI type. This will help me find like-minded individuals and project partners based on MBTI.

Communication Trainрing:
- Create an educational function that helps me develop effective methods of communication with different MBTI types. Include advice on adjusting communication style to match the preferences of the conversation partner.

Self-Discovery Tool:
- Using information about the mine MBTI type to suggest personal strategies for personal growth and development. This could include recommendations for improving weaknesses and strengthening personality strengths.

Career Recommendations:
- Create a function that provides specialised career recommendations based on the my MBTI type and my own preferences. I would get recommendations about professions that match my unique skills, interests, helping me make more informed career decisions.

Relationship Recommendations:
 - Develop a function that uses my MBTI type to suggest compatible types for relationships. This tool will not only consider romantic relationships, but also friendships. It will evaluate the potential dynamics between me and others, highlighting the strengths and potential challenges of these pairings.

Entertainment Recommendations:
- Based on my MBTI type, suggest suitable games that align with my personality traits. This will help me engage in activities that will be both entertaining and beneficial for my personal growth.
- Provide music recommendations that suit my mood and personality type. This could be a curated playlist that captures the essence of my MBTI type.
- Offer art recommendations, including visual arts, literature, movies, and theater that resonate with my MBTI personality type.

You will analyze my potential based on my MBTI personality type, hobbies, profession, and age. You will highlight beneficial areas for my development and areas strongly to avoid. You will reveal hidden aspects of my personality, apply my strengths for well-being, and address any inherent problems, offering solutions.

The answer will be in '.md' format but don't use backticks.
Depending on the personal information input language, the answer should be in the same language (IT'S VERY IMPORTANT!)`,
                  },
                  { role: 'user', content: `"""${input}"""` },
               ],
               model: 'gpt-3.5-turbo-0125',
               temperature: 1.35,
               max_tokens: 2000,
               stream: true,
            })
            let text = ''
            let html = ''
            for await (const chunk of response) {
               const converter = new Showdown.Converter()
               const [choice] = chunk.choices
               const { content } = choice.delta
               content && (text += content)
               html = converter.makeHtml(text)
               setResponse(html)
            }

            setIsLoading(false)
            localStorage.setItem('response', response == 'Your request is not related to the topic, try again!' ? '' : html)
         }

         generateText()
         toast.success('Your last response will be saved')
      } catch (error) {
         console.error(error)
         toast.error('An error occurred while generating the text')
         setIsLoading(false)
      }
   }

   return (
      <div id='personalizer' className='pt-24 sm:pt-0 relative z-30 max-w-2xl'>
         <div className='relative py-8 sm:pr-5'>
            <div className='bg-base-200/20 absolute top-0 -left-5 w-screen sm:w-[107%] md:w-[105%] lg:w-[103%] h-full -z-20 rounded-2xl'></div>
            <h1 className='font-aspekta font-semibold md:text-3xl mt-0 mb-3'>
               Realize your potential with <span className='text-primary'>AI</span>
            </h1>
            <p className='mt-0 leading-relaxed max-w-md md:max-w-lg sm:pb-5 md:pb-2'>
               Just type your <span className='text-primary font-medium font-aspekta'>MBTI</span>, maybe{' '}
               <span className='text-primary font-medium font-aspekta'>hobbies</span> or your{' '}
               <span className='text-primary font-medium font-aspekta'>profession</span>,{' '}
               <span className='text-primary font-medium font-aspekta'>age</span>
            </p>
            <form
               onSubmit={handleSubmit}
               className='relative bg-transparent flex items-start justify-between border-b-2 border-primary/50 pb-2 mt-12 sm:mt-8 md:mt-12 xl:mt-8'
            >
               <TextareaAutosize
                  minRows={2}
                  maxRows={6}
                  maxLength={320}
                  onChange={e => {
                     if (e.target.value.length >= 320) toast.warning('Max length is 320 characters')
                     setError('')
                     setInput(e.target.value)
                  }}
                  value={input}
                  className={`flex-1 pr-1 bg-transparent ${
                     error ? 'placeholder:text-error' : 'text-neutral'
                  } text-lg font-aspekta leading-normal resize-none outline-none`}
                  placeholder={
                     error
                        ? error
                        : `I'm INTJ, Professor in the university. Enjoy reading romances and traveling. Speak English and Japanese, I'm 30 y.o.`
                  }
               />
               <button className='bg-accent btn rounded-full p-0 w-12 h-12 relative top-2' disabled={isLoading}>
                  <svg
                     className='text-base-100 scale-150'
                     xmlns='http://www.w3.org/2000/svg'
                     width='24'
                     height='24'
                     viewBox='0 0 24 24'
                     fill='none'
                     stroke='currentColor'
                     stroke-width='1.6'
                     stroke-linecap='round'
                     stroke-linejoin='round'
                  >
                     <circle cx='12' cy='12' r='10' />
                     <path d='M8 12h8' />
                     <path d='m12 16 4-4-4-4' />
                  </svg>
               </button>
               <svg
                  className='absolute -top-[80px] right-10 rotate-[35deg] w-[160px] pointer-events-none'
                  width='253'
                  height='119'
                  viewBox='0 0 253 119'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
               >
                  <path
                     className='fill-primary'
                     fillRule='evenodd'
                     clipRule='evenodd'
                     d='M105.023 56.759C93.9688 66.2236 83.7907 76.942 74.6622 88.793C71.3273 93.1225 69.4923 96.477 68.7483 99.0105C68.0134 101.513 68.3909 103.003 69.1622 103.946C69.9999 104.971 71.6038 105.737 74.1052 106.091C76.5691 106.441 79.6616 106.356 83.1493 105.919C90.1151 105.046 98.3759 102.807 105.743 100.205C113.138 97.5936 119.471 94.6741 122.638 92.5022C127.314 89.2959 130.954 84.9204 132.269 80.3595C133.551 75.9157 132.681 71.1424 128.034 66.7505C121.881 60.935 113.737 57.8799 105.023 56.759ZM100.893 56.3717C90.5207 65.5002 80.9368 75.7308 72.2855 86.9623C68.8574 91.4129 66.7664 95.1123 65.8699 98.1652C64.9643 101.249 65.2318 103.878 66.8395 105.845C68.3808 107.73 70.8898 108.666 73.684 109.062C76.5155 109.463 79.9011 109.349 83.5223 108.895C90.7745 107.987 99.2559 105.677 106.742 103.034C114.202 100.399 120.836 97.3759 124.335 94.9764C129.39 91.5097 133.587 86.616 135.152 81.1908C136.75 75.6483 135.543 69.7186 130.095 64.5701C124.012 58.8213 116.254 55.6246 108.083 54.1898C143.63 24.9175 187.824 8.35522 235.141 8.35522C235.969 8.35522 236.641 7.68365 236.641 6.85522C236.641 6.0268 235.969 5.35522 235.141 5.35522C186.157 5.35522 140.488 22.8416 104.075 53.627C104.012 53.6203 103.95 53.6137 103.887 53.6071C94.2019 52.6023 84.1364 53.8128 75.5491 56.0794C61.6465 59.7488 44.882 67.2526 30.6193 77.6663C16.38 88.063 4.44609 101.501 0.544897 117.106C0.343974 117.909 0.832615 118.724 1.63631 118.925C2.44 119.125 3.2544 118.637 3.45532 117.833C7.11384 103.199 18.4164 90.2907 32.3884 80.0892C46.337 69.9047 62.7586 62.5581 76.3147 58.9801C83.8267 56.9973 92.4688 55.863 100.893 56.3717Z'
                     fill='black'
                  />
                  <path
                     className='fill-primary'
                     fillRule='evenodd'
                     clipRule='evenodd'
                     d='M233.452 1.17054C233.91 0.480313 234.841 0.292148 235.531 0.750266C239.167 3.16309 242.734 4.53244 246.99 6.06677C246.986 6.06562 246.984 6.06493 246.984 6.0649C246.984 6.06481 247.002 6.07075 247.055 6.08765L247.279 6.15956C247.463 6.21895 247.71 6.29936 247.991 6.39457C248.544 6.58253 249.256 6.83749 249.885 7.11163C250.198 7.24798 250.52 7.40167 250.803 7.56712C251.039 7.70499 251.429 7.95151 251.704 8.32166C251.852 8.51948 252.073 8.89387 252.064 9.40275C252.055 9.96969 251.77 10.3926 251.479 10.6476C251.22 10.8751 250.935 10.9941 250.737 11.061C250.523 11.1332 250.298 11.1812 250.077 11.2156C247.008 11.6936 243.912 11.8826 240.878 12.0386C240.505 12.0578 240.133 12.0765 239.762 12.0951C237.096 12.2291 234.485 12.3602 231.901 12.6558C231.598 12.6905 230.08 12.939 228.617 13.2034C227.896 13.3337 227.218 13.4625 226.74 13.5639C226.574 13.5991 226.446 13.6281 226.355 13.6504C225.947 13.8563 225.449 13.8733 225.009 13.6529C224.882 13.5898 224.441 13.3506 224.251 12.7819C224.027 12.1153 224.326 11.589 224.491 11.3778C224.648 11.1755 224.819 11.0633 224.88 11.0242C224.961 10.9728 225.032 10.9382 225.075 10.9184C225.222 10.8508 225.372 10.8081 225.441 10.7888C225.622 10.7382 225.863 10.6833 226.117 10.6293C226.64 10.5182 227.354 10.3831 228.083 10.2513C229.521 9.99153 231.141 9.72321 231.56 9.67528C234.247 9.36795 236.959 9.23189 239.616 9.09862C239.987 9.08004 240.356 9.06151 240.724 9.04258C242.348 8.95909 243.951 8.86765 245.535 8.73127C241.439 7.24836 237.7 5.79009 233.872 3.24981C233.182 2.7917 232.994 1.86078 233.452 1.17054ZM226.223 13.6858C226.222 13.6858 226.225 13.6849 226.231 13.683C226.226 13.6849 226.223 13.6858 226.223 13.6858Z'
                     fill='black'
                  />
               </svg>
            </form>
         </div>
      </div>
   )
}
