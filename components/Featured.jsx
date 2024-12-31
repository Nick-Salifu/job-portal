import FeaturedCard from "./FeaturedCard"

const featuredJobs = [
    {
        logo: '',
        type: 'full time',
        position: 'Email marketing',
        company: '',
        location: 'usa',
        jobDescription: '',
        tags: ['marketing', 'design'],
        price: ''
    },
    {
        logo: '',
        type: 'part time',
        position: 'UI/UX Designer',
        company: '',
        location: 'uk',
        jobDescription: '',
        tags: ['marketing', 'design'],
        price: ''
    },
    {
        logo: '',
        type: 'remote',
        position: 'Frontend developer',
        company: '',
        location: 'australia',
        jobDescription: '',
        tags: ['marketing', 'design'],
        price: ''
    },
    {
        logo: '',
        type: 'remote',
        position: 'UI/UX Designer',
        company: '',
        location: 'usa',
        jobDescription: '',
        tags: ['marketing', 'design'],
        price: ''
    },
    {
        logo: '',
        type: 'remote',
        position: 'Data entry',
        company: '',
        location: 'usa',
        jobDescription: '',
        tags: ['marketing', 'design'],
        price: ''
    },
    {
        logo: '',
        type: 'remote',
        position: 'virtual assistant',
        company: '',
        location: 'usa',
        jobDescription: '',
        tags: ['marketing', 'design'],
        price: ''
    },
    {
        logo: '',
        type: 'remote',
        position: 'backend developer',
        company: '',
        location: 'usa',
        jobDescription: '',
        tags: ['marketing', 'design'],
        price: ''
    },
    {
        logo: '',
        type: 'remote',
        position: 'Human resources',
        company: '',
        location: 'usa',
        jobDescription: '',
        tags: ['marketing', 'design'],
        price: ''
    },
]
const Featured = () => {
  return (
    <section>
        <div className='container mx-auto'>
            <div className='space-y-12'>
                <h2 className="text-2xl text-center md:text-left md:text-5xl font-bold">Featured <span className="text-[#26A4FF]">jobs</span></h2>
                <div className="grid gap-5 xl:gap-10 grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                    {featuredJobs.map((job, index) => {
                        return(
                            <div key={index}>
                                <FeaturedCard job={job} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Featured