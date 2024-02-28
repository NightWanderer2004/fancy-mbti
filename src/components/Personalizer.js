'use client'
import React, { useState } from 'react'

export default function Personalizer() {
   const [isLoading, setIsLoading] = useState(false)
   const [response, setResponse] = useState('')
   const [selectedTags, setSelectedTags] = useState([])

   const professions = ['Engineer', 'Doctor', 'Teacher', 'Artist']
   const countries = [
      'Afghanistan',
      'Albania',
      'Algeria',
      'Andorra',
      'Angola',
      'Antigua and Barbuda',
      'Argentina',
      'Armenia',
      'Australia',
      'Austria',
      'Azerbaijan',
      'Bahamas',
      'Bahrain',
      'Bangladesh',
      'Barbados',
      'Belarus',
      'Belgium',
      'Belize',
      'Benin',
      'Bhutan',
      'Bolivia',
      'Bosnia and Herzegovina',
      'Botswana',
      'Brazil',
      'Brunei',
      'Bulgaria',
      'Burkina Faso',
      'Burundi',
      'Cabo Verde',
      'Cambodia',
      'Cameroon',
      'Canada',
      'Central African Republic',
      'Chad',
      'Chile',
      'China',
      'Colombia',
      'Comoros',
      'Congo',
      'Costa Rica',
      'Croatia',
      'Cuba',
      'Cyprus',
      'Czech Republic',
      'Denmark',
      'Djibouti',
      'Dominica',
      'Dominican Republic',
      'East Timor',
      'Ecuador',
      'Egypt',
      'El Salvador',
      'Equatorial Guinea',
      'Eritrea',
      'Estonia',
      'Eswatini',
      'Ethiopia',
      'Fiji',
      'Finland',
      'France',
      'Gabon',
      'Gambia',
      'Georgia',
      'Germany',
      'Ghana',
      'Greece',
      'Grenada',
      'Guatemala',
      'Guinea',
      'Guinea-Bissau',
      'Guyana',
      'Haiti',
      'Honduras',
      'Hungary',
      'Iceland',
      'India',
      'Indonesia',
      'Iran',
      'Iraq',
      'Ireland',
      'Israel',
      'Italy',
      'Jamaica',
      'Japan',
      'Jordan',
      'Kazakhstan',
      'Kenya',
      'Kiribati',
      'Korea, North',
      'Korea, South',
      'Kosovo',
      'Kuwait',
      'Kyrgyzstan',
      'Laos',
      'Latvia',
      'Lebanon',
      'Lesotho',
      'Liberia',
      'Libya',
      'Liechtenstein',
      'Lithuania',
      'Luxembourg',
      'Madagascar',
      'Malawi',
      'Malaysia',
      'Maldives',
      'Mali',
      'Malta',
      'Marshall Islands',
      'Mauritania',
      'Mauritius',
      'Mexico',
      'Micronesia',
      'Moldova',
      'Monaco',
      'Mongolia',
      'Montenegro',
      'Morocco',
      'Mozambique',
      'Myanmar',
      'Namibia',
      'Nauru',
      'Nepal',
      'Netherlands',
      'New Zealand',
      'Nicaragua',
      'Niger',
      'Nigeria',
      'North Macedonia',
      'Norway',
      'Oman',
      'Pakistan',
      'Palau',
      'Panama',
      'Papua New Guinea',
      'Paraguay',
      'Peru',
      'Philippines',
      'Poland',
      'Portugal',
      'Qatar',
      'Romania',
      'Russia',
      'Rwanda',
      'Saint Kitts and Nevis',
      'Saint Lucia',
      'Saint Vincent and the Grenadines',
      'Samoa',
      'San Marino',
      'Sao Tome and Principe',
      'Saudi Arabia',
      'Senegal',
      'Serbia',
      'Seychelles',
      'Sierra Leone',
      'Singapore',
      'Slovakia',
      'Slovenia',
      'Solomon Islands',
      'Somalia',
      'South Africa',
      'South Sudan',
      'Spain',
      'Sri Lanka',
      'Sudan',
      'Suriname',
      'Sweden',
      'Switzerland',
      'Syria',
      'Taiwan',
      'Tajikistan',
      'Tanzania',
      'Thailand',
      'Togo',
      'Tonga',
      'Trinidad and Tobago',
      'Tunisia',
      'Turkey',
      'Turkmenistan',
      'Tuvalu',
      'Uganda',
      'Ukraine',
      'United Arab Emirates',
      'United Kingdom',
      'United States',
      'Uruguay',
      'Uzbekistan',
      'Vanuatu',
      'Vatican City',
      'Venezuela',
      'Vietnam',
      'Yemen',
      'Zambia',
      'Zimbabwe',
   ]
   const languages = [
      'Chinese',
      'Spanish',
      'English',
      'Hindi',
      'Bengali',
      'Portuguese',
      'Russian',
      'Japanese',
      'Punjabi',
      'Marathi',
      'Telugu',
      'Turkish',
      'Korean',
      'French',
      'German',
      'Vietnamese',
      'Tamil',
      'Urdu',
   ]
   const mbtiTypes = ['INTJ', 'ENTJ', 'INTP', 'ENTP', 'INFJ', 'ENFJ', 'INFP', 'ENFP', 'ISTJ', 'ESTJ', 'ISTP', 'ESTP', 'ISFJ', 'ESFJ', 'ISFP', 'ESFP']

   const tags = [
      { title: 'MBTI Type', values: mbtiTypes },
      { title: 'Hobby' },
      { title: 'Profession', values: professions },
      { title: 'Country', values: countries },
      { title: 'Language', values: languages },
      { title: 'Age' },
   ]
   const handleRequest = async () => {
      setIsLoading(true)

      // Prepare the prompt for OpenAI
      const prompt = `User selected tags: ${selectedTags.join(', ')}.`

      // Send the request to OpenAI and get the response
      // Replace the following line with your actual OpenAI API call
      const responseFromOpenAI = await fetchOpenAI(prompt)

      setResponse(responseFromOpenAI)
      setIsLoading(false)
   }

   const handleTagChange = (event, index) => {
      const { value } = event.target
      setSelectedTags(prevTags => {
         const updatedTags = [...prevTags]
         updatedTags[index] = value
         return updatedTags
      })
   }

   return (
      <div id='personalizer' className='relative py-6'>
         <div className='bg-base-200 absolute top-0 -left-5 w-screen h-full -z-20 rounded-xl'></div>
         <h1 className='font-aspekta font-semibold mt-0 mb-3'>
            Realize your potential with <br /> <span className='text-primary'>AI system</span>
         </h1>
         <p className='mt-0'>
            Just type your <span className='text-secondary font-medium font-aspekta'>MBTI</span>, maybe{' '}
            <span className='text-secondary font-medium font-aspekta'>hobbies</span> or your{' '}
            <span className='text-secondary font-medium font-aspekta'>profession</span>,{' '}
            <span className='text-secondary font-medium font-aspekta'>country</span> where you live,
            <span className='text-secondary font-medium font-aspekta'>language</span> you speak,{' '}
            <span className='text-secondary font-medium font-aspekta'>age</span>
         </p>
         <form className='bg-transparent flex items-center gap-2 border-b-2 border-base-300 pb-2 mt-8'>
            <textarea
               className='w-full bg-transparent text-primary text-lg font-aspekta leading-normal resize-none outline-none'
               placeholder='INTJ, Professor, reading, traveling, Japan, English and Japanese, 30 y.o.'
            />{' '}
            <button className='btn btn-primary rounded-full w-12 relative left-2'>
               <svg className='scale-[200%]' width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                     className='fill-base-100'
                     d='M12.0519 14.8285L13.4661 16.2427L17.7088 12L13.4661 7.7574L12.0519 9.17161L13.8804 11H6.34321V13H13.8803L12.0519 14.8285Z'
                     fill='currentColor'
                  />
                  <path
                     className='fill-base-100'
                     fill-rule='evenodd'
                     clip-rule='evenodd'
                     d='M19.7782 19.7782C24.0739 15.4824 24.0739 8.51759 19.7782 4.22183C15.4824 -0.0739417 8.51759 -0.0739417 4.22183 4.22183C-0.0739417 8.51759 -0.0739417 15.4824 4.22183 19.7782C8.51759 24.0739 15.4824 24.0739 19.7782 19.7782ZM18.364 18.364C21.8787 14.8492 21.8787 9.15076 18.364 5.63604C14.8492 2.12132 9.15076 2.12132 5.63604 5.63604C2.12132 9.15076 2.12132 14.8492 5.63604 18.364C9.15076 21.8787 14.8492 21.8787 18.364 18.364Z'
                     fill='currentColor'
                  />
               </svg>
            </button>
         </form>
         <svg
            className='absolute bottom-14 right-10 rotate-[35deg] w-[160px] pointer-events-none'
            width='253'
            height='119'
            viewBox='0 0 253 119'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
         >
            <path
               className='fill-primary'
               fill-rule='evenodd'
               clip-rule='evenodd'
               d='M105.023 56.759C93.9688 66.2236 83.7907 76.942 74.6622 88.793C71.3273 93.1225 69.4923 96.477 68.7483 99.0105C68.0134 101.513 68.3909 103.003 69.1622 103.946C69.9999 104.971 71.6038 105.737 74.1052 106.091C76.5691 106.441 79.6616 106.356 83.1493 105.919C90.1151 105.046 98.3759 102.807 105.743 100.205C113.138 97.5936 119.471 94.6741 122.638 92.5022C127.314 89.2959 130.954 84.9204 132.269 80.3595C133.551 75.9157 132.681 71.1424 128.034 66.7505C121.881 60.935 113.737 57.8799 105.023 56.759ZM100.893 56.3717C90.5207 65.5002 80.9368 75.7308 72.2855 86.9623C68.8574 91.4129 66.7664 95.1123 65.8699 98.1652C64.9643 101.249 65.2318 103.878 66.8395 105.845C68.3808 107.73 70.8898 108.666 73.684 109.062C76.5155 109.463 79.9011 109.349 83.5223 108.895C90.7745 107.987 99.2559 105.677 106.742 103.034C114.202 100.399 120.836 97.3759 124.335 94.9764C129.39 91.5097 133.587 86.616 135.152 81.1908C136.75 75.6483 135.543 69.7186 130.095 64.5701C124.012 58.8213 116.254 55.6246 108.083 54.1898C143.63 24.9175 187.824 8.35522 235.141 8.35522C235.969 8.35522 236.641 7.68365 236.641 6.85522C236.641 6.0268 235.969 5.35522 235.141 5.35522C186.157 5.35522 140.488 22.8416 104.075 53.627C104.012 53.6203 103.95 53.6137 103.887 53.6071C94.2019 52.6023 84.1364 53.8128 75.5491 56.0794C61.6465 59.7488 44.882 67.2526 30.6193 77.6663C16.38 88.063 4.44609 101.501 0.544897 117.106C0.343974 117.909 0.832615 118.724 1.63631 118.925C2.44 119.125 3.2544 118.637 3.45532 117.833C7.11384 103.199 18.4164 90.2907 32.3884 80.0892C46.337 69.9047 62.7586 62.5581 76.3147 58.9801C83.8267 56.9973 92.4688 55.863 100.893 56.3717Z'
               fill='black'
            />
            <path
               className='fill-primary'
               fill-rule='evenodd'
               clip-rule='evenodd'
               d='M233.452 1.17054C233.91 0.480313 234.841 0.292148 235.531 0.750266C239.167 3.16309 242.734 4.53244 246.99 6.06677C246.986 6.06562 246.984 6.06493 246.984 6.0649C246.984 6.06481 247.002 6.07075 247.055 6.08765L247.279 6.15956C247.463 6.21895 247.71 6.29936 247.991 6.39457C248.544 6.58253 249.256 6.83749 249.885 7.11163C250.198 7.24798 250.52 7.40167 250.803 7.56712C251.039 7.70499 251.429 7.95151 251.704 8.32166C251.852 8.51948 252.073 8.89387 252.064 9.40275C252.055 9.96969 251.77 10.3926 251.479 10.6476C251.22 10.8751 250.935 10.9941 250.737 11.061C250.523 11.1332 250.298 11.1812 250.077 11.2156C247.008 11.6936 243.912 11.8826 240.878 12.0386C240.505 12.0578 240.133 12.0765 239.762 12.0951C237.096 12.2291 234.485 12.3602 231.901 12.6558C231.598 12.6905 230.08 12.939 228.617 13.2034C227.896 13.3337 227.218 13.4625 226.74 13.5639C226.574 13.5991 226.446 13.6281 226.355 13.6504C225.947 13.8563 225.449 13.8733 225.009 13.6529C224.882 13.5898 224.441 13.3506 224.251 12.7819C224.027 12.1153 224.326 11.589 224.491 11.3778C224.648 11.1755 224.819 11.0633 224.88 11.0242C224.961 10.9728 225.032 10.9382 225.075 10.9184C225.222 10.8508 225.372 10.8081 225.441 10.7888C225.622 10.7382 225.863 10.6833 226.117 10.6293C226.64 10.5182 227.354 10.3831 228.083 10.2513C229.521 9.99153 231.141 9.72321 231.56 9.67528C234.247 9.36795 236.959 9.23189 239.616 9.09862C239.987 9.08004 240.356 9.06151 240.724 9.04258C242.348 8.95909 243.951 8.86765 245.535 8.73127C241.439 7.24836 237.7 5.79009 233.872 3.24981C233.182 2.7917 232.994 1.86078 233.452 1.17054ZM226.223 13.6858C226.222 13.6858 226.225 13.6849 226.231 13.683C226.226 13.6849 226.223 13.6858 226.223 13.6858Z'
               fill='black'
            />
         </svg>
         {isLoading && <div>Loading...</div>}
         {response && <div>{response}</div>}
      </div>
   )
}
