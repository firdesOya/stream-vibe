import React from 'react'
import SupportIntro from './SupportIntro'
import SupportContactForm from './SupportContactForm'

export default function SupportSection() {
  return (
    <div className='flex flex-col lg:flex-row w-full justify-between gap-12 2xl:gap-14'>
      <SupportIntro/>
      <SupportContactForm/>
    </div>
  )
}
