import AddJobForm from '@/components/AddJobForm'
import Button from '@/components/Button'
import JobCard from '@/components/JobCard'
import Skelton from '@/components/Skelton'
import TextField from '@/components/TextField'
import { prisma } from '@/db'

const Page = () => {
    const getJobs = async () => {
        return await prisma.job.findMany()
    }

    return (
        <div className='relative'>
            <Skelton />
            <form className='flex gap-2'>
                <TextField id='search1' placeholder='job title, company' />
                <TextField id='search2' placeholder='District, city' />
                <Button label='search' />
            </form>
            <div className="mx-auto p-4 grid gap-4 grid-cols-1 md:grid-cols-2">
                <h1 className="text-2xl font-bold mb-4 col-span-full">Job Listings</h1>
                <div>
                    {getJobs().then(jobs => jobs.map((job) => (
                        <JobCard key={job.id} {...job} />
                    )))}
                </div>
                <div className='sticky py-4 right-0'>
                    <AddJobForm />
                </div>

            </div>
        </div>
    )
}

export default Page
