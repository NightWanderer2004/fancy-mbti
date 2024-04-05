export default function Glow(props) {
   return (
      <div
         {...props}
         className={`absolute ${props.className} scale-[1400%] w-[16px] md:w-[20px] lg:w-[40px] h-[16px] md:h-[20px] lg:h-[40px] blur-[10px] lg:blur-[30px] rounded-sm -z-20`}
      ></div>
   )
}
