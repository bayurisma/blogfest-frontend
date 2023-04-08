import Navbar from '@/components/Navbar';
import axios from 'axios';
import { NextPage } from 'next';
import { useState } from 'react';

interface FormData {
    title: string;
    description: string;
    body: string;
    published: boolean;
}

const Create: NextPage = () => {
    const [formData, setFormData] = useState<FormData>({ title: '', description: '', body: '', published: false });
    const fetchURL: string = 'http://localhost:8000';

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await axios.post(`${fetchURL}/articles`, formData);
            console.log(response.data); // Handle successful response
        } catch (error) {
            console.error(error); // Handle error
        }
    };

    const handleChange = (event: any) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    return (
        <>
            <Navbar />

            <form onSubmit={handleSubmit} className='flex flex-col mt-5 gap-5 justify-center items-center'>
                <input type='text' placeholder='Title' onChange={handleChange} />
                <input type='text' placeholder='Description' onChange={handleChange} />
                <textarea placeholder='Content' onChange={handleChange} className='border-2 rounded border-gray-600 p-1' />
                <button type='submit' className='cursor-pointer text-teal-700 bg-white'>
                    Publish
                </button>
            </form>
        </>
    );
};

export default Create;
