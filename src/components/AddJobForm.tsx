import Button from './Button';
import TextField from './TextField';

interface AddJobFormProps {
    onAddJob: (jobData: JobData) => void;
}

interface JobData {
    title: string;
    company: string;
    location: string;
    description: string;
    requirements: string;
    salary: string;
}

const AddJobForm = () => {

    return (
        <form className="max-w-md top-0 sticky p-4 border border-gray-300 rounded-md">
            <h2 className="text-xl font-bold mb-4">Add Job Listing</h2>
            <TextField
                label="Job Title"
                id="title"
            />
            <TextField
                label="Company"
                id="company"
            />
            <TextField
                label="Location"
                id="location"
            />
            <TextField
                label="Description"
                id="description"
            />
            <TextField
                label="Requirements"
                id="requirements"
            />
            <TextField
                label="Salary"
                id="salary"
            />
            <Button label='Add Job' className='mt-3 block' />

        </form>
    );
};

export default AddJobForm;
