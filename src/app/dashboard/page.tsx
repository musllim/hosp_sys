import AddJobForm from '@/components/AddJobForm'
import Button from '@/components/Button'
import JobCard from '@/components/JobCard'
import TextField from '@/components/TextField'

const Page = () => {
    const jobListing = {
        "jobs": [
            {
                "id": "job1",
                "title": "Software Engineer",
                "company": "ABC Tech Solutions",
                "location": "New York, NY",
                "description": "We are seeking a skilled Software Engineer to join our team...",
                "requirements": [
                    "Bachelor's degree in Computer Science or related field",
                    "3+ years of experience in software development",
                    "Proficiency in JavaScript, React, and Node.js"
                ],
                "salary": "$90,000 - $120,000 per year",
                "postedDate": "2023-07-30",
                "expiryDate": "2023-08-30"
            },
            {
                "id": "job2",
                "title": "Data Analyst",
                "company": "XYZ Analytics",
                "location": "San Francisco, CA",
                "description": "We are looking for a skilled Data Analyst to analyze...",
                "requirements": [
                    "Bachelor's degree in Statistics, Mathematics, or related field",
                    "Experience with data analysis tools such as Python and SQL",
                    "Strong analytical and problem-solving skills"
                ],
                "salary": "$70,000 - $90,000 per year",
                "postedDate": "2023-07-28",
                "expiryDate": "2023-08-28"
            },
            {
                "id": "job3",
                "title": "Marketing Manager",
                "company": "ABC Marketing Agency",
                "location": "Chicago, IL",
                "description": "We are hiring a Marketing Manager to lead our marketing efforts...",
                "requirements": [
                    "Bachelor's degree in Marketing, Business, or related field",
                    "5+ years of experience in marketing management",
                    "Proven track record of successful marketing campaigns"
                ],
                "salary": "$80,000 - $100,000 per year",
                "postedDate": "2023-07-25",
                "expiryDate": "2023-08-25"
            }
        ]
    }

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
                    {jobListing.jobs.map((job) => (
                        <JobCard key={job.id} {...job} />
                    ))}
                </div>
                <div className='sticky py-4 right-0'>
                    <AddJobForm />
                </div>

            </div>
        </div>
    )
}

export default Page
