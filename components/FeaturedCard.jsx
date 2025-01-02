import React from 'react'

const FeaturedCard = ({job}) => {
  return (
    <div className='border border-[#D6DDEB] w-full p-4 xl:p-6'>
        <div className='h-full'>
            <div className='flex justify-between items-center'>
                <div className='w-10 h-10 border rounded-full bg-black/50'></div>
                <span className='border border-[#4640DE] text-[#4640DE] px-2 py-[2px] capitalize'>
                    {job.type}
                </span>
            </div>

            <div className='mt-3'>
                <h4 className='font-semibold capitalize text-[#25324B] text-lg'>{job.position}</h4>
                <h5 className='capitalize text-[#515B6F] '>company name . {job.location}</h5>
                <p className='mt-3 text-[#7C8493]'>Description about job position... limit to few words and truncate...</p>
            </div>

            <div className='flex gap-3 items-center mt-4'>
                {job.tags.map((pn, i) => (
                    <span 
                        key={i} 
                        className={`px-3 py-[2px] rounded-full capitalize font-medium
                            ${pn === 'marketing' && 'bg-[#EB8533]/10 text-[#FFB836]'}
                            ${pn === 'design' && 'bg-[#56CDAD]/10 text-[#56CDAD]'} `}
                    >
                        {pn}
                    </span>
                ))}
                {/* <span className='px-3 py-[2px] rounded-full capitalize bg-[#EB8533]/10 text-[#FFB836] font-medium'>
                    marketing
                </span>
                <span className='px-3 py-[2px] rounded-full capitalize bg-[#56CDAD]/10 text-[#56CDAD] font-medium'>
                    design
                </span> */}
            </div>
        </div>
    </div>
  )
}

export default FeaturedCard