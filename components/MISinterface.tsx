import React from 'react'
import { Aperture, Activity, BookText, Tally4 } from 'lucide-react'
import { getcarecount, getcontractcount, getothercount, getquntitycount } from '@/app/actions/api/countrecord'
import { getquntity } from '@/app/actions/api/getquntity'
import Link from 'next/link'

type Props = {}

const MISinterface = (props: Props) => {
  return (
    <div className='flex flex-col mx-4 my-4'>
      <div className='flex flex-row w-full justify-between'>
     
      <div className='bg-white p-4 w-1/5 flex flex-row justify-between'>
          <div className='flex flex-col'>
            <div className='text-xs font-light text-gray-700'>Contract</div>
            <div className='text-2xl font-bold'>{getcontractcount()}</div>
          </div>
          <div> <Link href=''><Aperture size={48}/></Link></div>
        </div>
      
      
        <div className='bg-white p-4 w-1/5 flex flex-row justify-between'>
          <div className='flex flex-col'>
            <div className='text-xs font-light text-gray-700'>Care</div>
            <div className='text-2xl font-bold'>{getcarecount()}</div>
          </div>
          <div><Link href=''><Activity size={48} /></Link></div>
        </div>
      
     
        <div className='bg-white p-4 w-1/5 flex flex-row justify-between'>
          <div className='flex flex-col'>
            <div className='text-xs font-light text-gray-700'>Other</div>
            <div className='text-2xl font-bold'>{getothercount()}</div>
          </div>
          <div> <Link href=''><BookText size={48} /> </Link></div>
        </div>
       
       
        <div className='bg-white p-4 w-1/5 flex flex-row justify-between'>
          <div className='flex flex-col'>
            <div className='text-xs font-light text-gray-700'>Quantity</div>
            <div className='text-2xl font-bold'>{getquntitycount()}</div>
          </div>
          <div> <Link href=''><Tally4 size={48} /> </Link></div>
        </div>
      
      </div>
      <div className='flex flex-row justify-between my-4'>
        <div className='bg-white p-4 w-6/12'>5</div>
        <div className='bg-white p-4 w-5/12'>6</div>
      </div>
      <div className='flex flex-row justify-between'>
        <div className='bg-white p-4 w-5/12'>7</div>
        <div className='bg-white p-4 w-6/12'>8</div>
      </div>
    </div>
  )
}

export default MISinterface