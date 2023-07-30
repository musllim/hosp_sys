import React from 'react';
import Button from './Button';

interface JobCardProps {
    title: string;
    company: string;
    location: string;
    description: string;
    requirements: string[];
    salary: string;
    postedDate: string;
    expiryDate: string;
}

const JobCard: React.FC<JobCardProps> = ({
    title,
    company,
    location,
    description,
    requirements,
    salary,
    postedDate,
    expiryDate,
}) => {
    return (
        <div className="border border-gray-300 dark:border-gray-600 shadow-md p-4 mt-4 rounded-md">
            <h2 className="text-xl font-bold">{title}</h2>
            <p className="text-gray-600 dark:text-gray-200">{company}</p>
            <p className="text-gray-600 dark:text-gray-200">{location}</p>
            <p className="mt-2">{description}</p>
            <div className="mt-4">
                <h3 className="font-bold">Requirements:</h3>
                <ul className="list-disc list-inside mt-2">
                    {requirements.map((requirement, index) => (
                        <li key={index}>{requirement}</li>
                    ))}
                </ul>
            </div>
            <p className="mt-4 font-bold">Salary: {salary}</p>
            <p className="text-gray-600 dark:text-gray-200">Posted: {postedDate}</p>
            <p className="text-gray-600 dark:text-gray-200">Expires: {expiryDate}</p>
            <Button label='Apply' className='mt-3' />
        </div>
    );
};

export default JobCard;
