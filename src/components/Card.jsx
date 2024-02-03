import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

function Card({data, reference}) {
  const style = {
    cursor:'pointer'
  };
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragElastic={.1} dragTransition={{bounceStiffness: 600, bounceDamping:10}} className='relative w-60 h-72 bg-zinc-900/90 rounded-[40px] text-white py-10 px-8 overflow-hidden'>
      <FaFileAlt />
      <p className='text-sm leading-tight mt-5 font-semibold'>{data.desc}</p>
      <motion.div className='footer absolute bottom-0 left-0 w-full'>
        <div className='flex justify-between items-center py-3 px-8 mb-5'>
          <h3>{data.fileSize}</h3>
          <span className='w-7 h-7 bg-zinc-600 rounded-full flex justify-center items-center'>
            {data.close ? <IoClose style={style}/> : <MdDownload size="0.9rem" color='#fff' style={style}/>}
          </span>
        </div>
        {data.tag.isOpen && (<div className={`${data.tag.tagColor === 'blue' ? 'bg-blue-600': 'bg-green-600'} flex justify-center items-center py-3 w-full`}>
          <h5 className='text-md font-semibold'>{data.tag.tagTitle}</h5>
        </div>)}
      </motion.div>
    </motion.div>
  )
}

export default Card
