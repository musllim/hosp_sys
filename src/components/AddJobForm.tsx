import { prisma } from '@/db';
import Button from './Button';
import TextField from './TextField';
import { revalidatePath } from 'next/cache';

interface AddJobFormProps {
    onAddJob: (jobData: JobData) => void;
}

interface JobData {
    title: string;
    company: string;
    location: string;
    description: string;
    requirements: string[];
    salary: string;
    expiryDate: Date;
}

const AddJobForm = () => {
    const addJob = async (formData: FormData) => {
        "use server"
        const job: JobData = {
            title: formData.get('title')?.valueOf() as string,
            company: formData.get('company')?.valueOf() as string,
            location: formData.get('location')?.valueOf() as string,
            description: formData.get('description')?.valueOf() as string,
            salary: formData.get('salary')?.valueOf() as string,
            expiryDate: new Date(formData.get('expiryDate')?.valueOf() as string),
            requirements: (formData.get('requirements')?.valueOf() as string).split('\n'),
        }
        try {
            const data = await prisma.job.create({
                data: job
            })
            revalidatePath('/dashboard')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <form action={addJob} className="max-w-md top-0 sticky p-4 border border-gray-300 dark:border-gray-600 rounded-md grid gap-2">
            <h2 className="text-xl font-bold mb-4">Add Job Listing</h2>
            <TextField
                label="Job Title"
                name="title"
                id="title"
            />
            <TextField
                label="Company"
                id="company"
                name="company"
            />
            <TextField
                label="Location"
                id="location"
                name="location"
            />
            <TextField
                label="Description"
                id="description"
                name="description"
                type='textarea'
            />
            <TextField
                label="Requirements"
                id="requirements"
                name="requirements"
                type='textarea'
            />
            <TextField
                label="Salary"
                id="salary"
                name="salary"
            />
            <TextField
                type='date'
                label="Application deadline"
                id="expiryDate"
                name="expiryDate"
            />
            <Button label='Add Job' className='mt-3 block' />

        </form>
    );
};

export default AddJobForm;
