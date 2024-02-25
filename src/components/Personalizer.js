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
      { title: 'Profession', values: professions },
      { title: 'Hobby' },
      { title: 'Age' },
      { title: 'Country', values: countries },
      { title: 'Language', values: languages },
      { title: 'MBTI Type', values: mbtiTypes },
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
      <div id='personalizer'>
         <h2 className='font-aspekta font-semibold text-[42px]'>Let's fill your personality!</h2>
         <div className='grid grid-cols-2 gap-2 place-items-stretch mb-5'>
            {tags.map((tag, index) => (
               <div key={index}>
                  <input
                     className='bg-white rounded-full p-1 px-4 border border-primary w-full text-center placeholder-primary/70 appearance-none'
                     placeholder={tag.title}
                     type={tag.title === 'Age' ? 'number' : 'text'}
                     min={tag.title === 'Age' ? 0 : null}
                     max={tag.title === 'Age' ? 120 : null}
                     list={tag.title}
                     name={tag.title}
                     value={selectedTags[index] || ''}
                     onChange={event => handleTagChange(event, index)}
                  />
                  {tag.values && (
                     <datalist id={tag.title}>
                        {tag.values.map((value, index) => (
                           <option key={index} value={value}>
                              {value}
                           </option>
                        ))}
                     </datalist>
                  )}
               </div>
            ))}
         </div>
         <div>
            <button className='btn font-aspekta' onClick={handleRequest}>
               Generate Response
            </button>
         </div>
         {isLoading && <div>Loading...</div>}
         {response && <div>{response}</div>}
      </div>
   )
}
