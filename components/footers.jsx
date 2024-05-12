import {FaXTwitter} from 'react-icons/fa6';
import { RiDiscordLine } from 'react-icons/ri';
import {PiTelegramLogoDuotone} from 'react-icons/pi'





const Footers = () => {
  return (
    <footer className='flex justify-center  relative'>
      <div className='flex  md:flex-row flex-col justify-between items-center md:gap-[200px] gap-10 mt-[100px]'>
          <div className='flex justify-center items-center flex-col md:w-[30vw] w-[80vw]'>
            <h1 className='text-[#808080]'>WASQUO COIN</h1>
            <p>To build the next global currency, we are offering the ways to reserve Wasquo coin.
               The more you participate the more wasquo you can reserve</p>
          </div>
          <div className='flex gap-3 flex-col'>
            <div><h1 className='text-[#808080]'>Follow us on</h1></div>
            <div className='flex gap-5'>
              <FaXTwitter  size={40}/>
              <RiDiscordLine size={40} />
              <PiTelegramLogoDuotone size={40} />

            </div>
          </div>
    </div>
    </footer>

  )
}

export default Footers
