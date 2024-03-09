const types = [
   {
      name: 'INTJ',
      description: 'The Architect',
      image: '/intj.png',
   },
   {
      name: 'INTP',
      description: 'The Logician',
      image: '/intp.png',
   },
   {
      name: 'ENTJ',
      description: 'The Commander',
      image: '/entj.png',
   },
   {
      name: 'ENTP',
      description: 'The Debater',
      image: '/entp.png',
   },
   {
      name: 'INFJ',
      description: 'The Advocate',
      image: '/infj.png',
   },
   {
      name: 'INFP',
      description: 'The Mediator',
      image: '/infp.png',
   },
   {
      name: 'ENFJ',
      description: 'The Protagonist',
      image: '/enfj.png',
   },
   {
      name: 'ENFP',
      description: 'The Campaigner',
      image: '/enfp.png',
   },
   {
      name: 'ISTJ',
      description: 'The Logistician',
      image: '/istj.png',
   },
   {
      name: 'ISFJ',
      description: 'The Defender',
      image: '/isfj.png',
   },
   {
      name: 'ESTJ',
      description: 'The Executive',
      image: '/estj.png',
   },
   {
      name: 'ESFJ',
      description: 'The Consul',
      image: '/esfj.png',
   },
   {
      name: 'ISTP',
      description: 'The Virtuoso',
      image: '/istp.png',
   },
   {
      name: 'ISFP',
      description: 'The Adventurer',
      image: '/isfp.png',
   },
   {
      name: 'ESTP',
      description: 'The Entrepreneur',
      image: '/estp.png',
   },
   {
      name: 'ESFP',
      description: 'The Entertainer',
      image: '/esfp.png',
   },
]

export default function MBTI() {
   return (
      <div className='grid gap-2 grid-cols-2 md:grid-cols-4 md:grid-rows-4'>
         {types.map((type, index) => (
            <Type key={index} type={type.name} />
         ))}
      </div>
   )
}

function Type({ type }) {
   return (
      <a href={`/types/${type}`} className='btn justify-start text-start no-underline bg-base-100 rounded-lg h-[130px] text-lg'>
         <div>
            <div className='w-16 h-16 bg-accent rounded-md mb-2'></div>
            {type}
         </div>
      </a>
   )
}
