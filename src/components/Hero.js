export default function Hero() {
   return (
      <main className='hero min-h-screen'>
         <div className='hero-content lg:text-center px-0'>
            <div className='relative'>
               <h1 className='text-6xl font-aspekta font-bold mb-0'>
                  Explore yourself with{' '}
                  <span className='text-white relative'>
                     MBTI
                     <div className='w-[165px] h-[65px] bg-primary -z-10 absolute top-[10px] -left-2 rotate-[-1.6deg]'></div>
                     {/* <svg
                        className='absolute -top-1 -right-4 w-[220px]'
                        width='1340'
                        height='176'
                        viewBox='0 0 1340 176'
                        xmlns='http://www.w3.org/2000/svg'
                     >
                        <path
                           className='fill-primary'
                           fill-rule='evenodd'
                           clip-rule='evenodd'
                           d='M1010.25 0.704656C821.859 2.70544 767.994 4.00699 663.466 9.0877C555.143 14.3529 477.621 19.6308 354.618 30.1149C326.104 32.5453 295.572 34.8518 259.779 37.2789C128.294 46.1944 102.708 48.5701 60.2027 55.8066C39.1425 59.3928 20.9291 61.8746 10.721 62.5511C1.64526 63.1517 0 63.53 0 65.0152C0 66.3277 14.5154 67.4776 22.4548 66.7936C25.3 66.5493 33.0084 65.9503 39.5853 65.4642C46.1623 64.9773 60.6356 63.6706 71.7484 62.5603C97.9168 59.9446 110.481 59.1198 155.455 57.0651C231.06 53.6111 288.175 50.292 358.33 45.2753C384.184 43.4261 418.512 40.9713 434.614 39.8197C556.738 31.0845 705.913 23.2953 797.067 20.8952C907.684 17.9813 1251.09 15.4051 1245.29 17.5314C1242.99 18.3747 1203.69 24.6466 1180.14 27.9304C1158.5 30.9472 1122.35 35.2983 1077.88 40.2384C1056.78 42.582 1027.84 45.8254 1013.55 47.4462C959.874 53.5362 942.195 55.4249 911.699 58.3305C771.211 71.7142 678.412 83.3768 549.246 103.88C472.471 116.067 409.543 130.057 339.317 150.553C299.39 162.205 295.5 164.275 299.43 171.777C301.987 176.658 322.133 177.291 362.766 173.765C437.022 167.323 506.802 162.326 574.4 158.611C616.8 156.281 622.417 155.89 665.528 152.273C681.63 150.922 709.464 148.948 727.38 147.886L759.956 145.956L716.659 145.196C651.051 144.042 580.671 144.112 557.493 145.354C480.757 149.465 439.019 152.629 370.844 159.502C354.595 161.141 340.886 162.341 340.379 162.169C335.497 160.506 444.775 135.379 496.906 126.178C614.587 105.406 735.773 89.9082 922.008 71.8111C939.017 70.1582 973.16 66.5425 997.88 63.7768C1022.6 61.0103 1061.57 56.6549 1084.47 54.0964C1172.64 44.2509 1198.91 40.5838 1283.64 26.2919C1337.9 17.138 1338.19 17.0597 1339.67 11.0396C1341.3 4.42063 1336.95 1.41738 1324.5 0.558937C1312.66 -0.257381 1091.14 -0.154627 1010.25 0.704656ZM763.471 145.288C764.496 145.49 765.981 145.482 766.769 145.271C767.558 145.061 766.718 144.896 764.904 144.905C763.09 144.914 762.445 145.087 763.471 145.288Z'
                        />
                     </svg> */}
                  </span>
               </h1>
               <p className='py-3 text-lg max-w-lg mx-auto'>
                  Take a journey of self-discovery with MBTI. Platform will guide you in understanding your personality and using your potential!
               </p>
               <a href='#personalizer' className='no-underline btn btn-primary text-white btn-md font-aspekta'>
                  Realize my potential
               </a>
               <svg
                  className='absolute bottom-0 right-0 w-[170px] skew-x-[15deg]'
                  width='227'
                  height='106'
                  viewBox='0 0 227 106'
                  xmlns='http://www.w3.org/2000/svg'
               >
                  <path
                     className='fill-primary'
                     fill-rule='evenodd'
                     clip-rule='evenodd'
                     d='M225.277 0.963588C226.091 1.11663 226.627 1.9007 226.474 2.71487C223.37 19.2322 213.445 34.1139 200.672 46.2114C187.893 58.3146 172.173 67.7201 157.284 73.2706C110.971 90.5365 62.1789 93.4104 13.5818 95.0485C12.7538 95.0764 12.06 94.4279 12.0321 93.5999C12.0042 92.772 12.6528 92.0781 13.4807 92.0502C62.0863 90.4118 110.43 87.5363 156.236 70.4596C170.766 65.0428 186.137 55.8462 198.609 44.0333C211.087 32.2147 220.574 17.8664 223.526 2.16067C223.679 1.3465 224.463 0.810548 225.277 0.963588Z'
                  />
                  <path
                     className='fill-primary'
                     fill-rule='evenodd'
                     clip-rule='evenodd'
                     d='M19.3305 83.6983C20.0888 84.032 20.433 84.9171 20.0994 85.6754C19.5408 86.9448 18.8817 88.0066 17.9938 88.9147C17.1072 89.8216 16.0528 90.5134 14.783 91.1198C10.7677 93.0373 6.29479 94.0268 2.11106 94.7481C1.29468 94.8888 0.518766 94.3411 0.378011 93.5248C0.237255 92.7084 0.784959 91.9325 1.60134 91.7917C5.72254 91.0812 9.86078 90.1459 13.4902 88.4127C14.5382 87.9122 15.2728 87.4064 15.8487 86.8174C16.4232 86.2298 16.9001 85.4976 17.3534 84.4672C17.6871 83.7089 18.5722 83.3647 19.3305 83.6983Z'
                  />
                  <path
                     className='fill-primary'
                     fill-rule='evenodd'
                     clip-rule='evenodd'
                     d='M0.0840231 92.9383C0.320007 92.1442 1.15506 91.6918 1.94916 91.9278C2.62754 92.1294 3.35934 92.3337 4.12637 92.5478C6.77761 93.288 9.84968 94.1457 12.5908 95.4148C16.167 97.0705 19.5175 99.5664 20.9188 103.77C21.1807 104.556 20.756 105.406 19.9701 105.668C19.1842 105.93 18.3347 105.505 18.0727 104.719C17.0463 101.64 14.5594 99.6322 11.3303 98.1371C8.83255 96.9807 6.09133 96.2142 3.47642 95.4831C2.6667 95.2567 1.8691 95.0336 1.09459 94.8035C0.300486 94.5675 -0.151961 93.7324 0.0840231 92.9383Z'
                  />
               </svg>
            </div>
         </div>
      </main>
   )
}
