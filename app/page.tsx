import Image from 'next/image'
import Mainnavbar from '@/components/Mainnavbar'

export default function Home() {
  return (
   <div className='h-screen bg-gradient-to-r from-sky-200 to-cyan-200'>
    <div>
    <Mainnavbar />
    </div>
   </div>
  )
}
