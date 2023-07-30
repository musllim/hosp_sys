import AddJobForm from '@/components/AddJobForm'
import Button from '@/components/Button'
import JobCard from '@/components/JobCard'
import TextField from '@/components/TextField'
import { prisma } from '@/db'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import jwt from "jsonwebtoken";

const Page = () => {
    const getJobs = async () => {
        return await prisma.job.findMany()
    }
    const token = cookies().get("jwt")?.value;
    if (!token) return redirect('/auth')

    const email = jwt.verify(token, process.env.JWT_SECRET!);
    if (typeof email !== "string") return redirect('/auth')
    return (
        <div className='relative'>
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
