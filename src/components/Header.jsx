
import React from 'react'
import { assets } from '../assets/assets'

function Header() {
  return (
      <div className='mx-8 sm:mx-16 xl:mx-24 relative'>
          <div className='text-center mt-20 mb-8'>
              
              <div
                className='inline-flex items-center justify-center gap-4 px-6 py-1.5 mb-4 border border-primary/40 bg-primary/10 rounded-full text-sm text-primary'>
                  <p>New: AI feature Intergrated</p>
                  <img
                      src={assets.star_icon}
                  className='w-2.5'>
                  </img>

              </div>
        <h1
          className='text-3xl sm:text-6xl font-semibold sm:leading-16 text-gray-700 '>Your own <span className='text-primary'>
            blogging</span> <br />platform
        </h1>

        <p className='my-6 sm:my-8 max-w-2xl m-auto max-sm:text-xs text-gray-500'>
          Turn moments into stories and ideas into impact.
          Whether it's a single sentence or a full article, start creating with the power of AI by your side.
        </p>
        
          </div>
          <img src={assets.gradientBackground} className='absolute -top-50 -z-1 opacity-50' />
    </div>
  )
}

export default Header