import React from 'react'
import isLogedIn from '@/isLogedIn'
import { redirect } from 'next/navigation'
import { User } from '@prisma/client'
import { prisma } from '@/db'
import { join, dirname, resolve } from 'path'
import { writeFile } from 'fs/promises'
import Image from 'next/image'

const Page = async () => {
    const user = await isLogedIn()
    if (!(user))
        redirect('/auth')

    const updateProfile = async (formData: FormData) => {
        "use server"
        const about = formData.get('about')?.valueOf()
        const age = formData.get('dateOfBirth')?.valueOf()
        const firstName = formData.get('firstName')?.valueOf()
        const lastName = formData.get('lastName')?.valueOf()
        try {

            const resume = formData.get('resume') as unknown as File
            if (!resume) {
                throw new Error('No file uploaded')
            }
            const bytes = await resume.arrayBuffer()
            const buffer = Buffer.from(bytes)

            const path = join(resolve('./public'), resume.name)
            const cv = await writeFile(path, buffer)

            if (
                typeof about === 'string'
                && typeof age === 'string'
                && typeof firstName === 'string'
                && typeof lastName === 'string'
            ) {

                const userProfile: Partial<User> = {
                    resume: resume.name,
                    about,
                    firstName,
                    lastName,
                    age
                }

                await prisma.user.update({
                    where: {
                        email: user.email
                    },
                    data: userProfile
                })

            }

        } catch (error) {
            console.log(error)
        }


    }

    return (
        <section>
            <form action={updateProfile} className='max-w-md mx-auto mt-8'>
                {user.resume && <Image src={'/' + user.resume} alt='resume' width={300} height={500} />}
                <div className='grid'>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" name="firstName" id="firstName" defaultValue={user.firstName || ''} className='border-slate-500 border-2 py-1 px-2 rounded-md mt-3' />
                </div>
                <div className='grid'>
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" name="lastName" id="lastName" defaultValue={user.lastName || ''} className='border-slate-500 border-2 py-1 px-2 rounded-md mt-3' />
                </div>
                <div className='grid'>
                    <label htmlFor="dateOfBirth">Date Of Birth</label>
                    <input type="date" name="dateOfBirth" id="dateOfBirth" defaultValue={user.age || ''} className='border-slate-500 border-2 py-1 px-2 rounded-md mt-3' />
                </div>
                <div className='grid'>
                    <label htmlFor="about">About</label>
                    <textarea name="about" id="about" defaultValue={user.about || ''} className='border-slate-500 border-2 py-1 px-2 rounded-md mt-3'></textarea>
                </div>
                <div className='grid'>
                    <label htmlFor="resume">Resume / CV</label>
                    <input type="file" name="resume" id="resume" className='border-slate-500 border-2 py-1 px-2 rounded-md mt-3' />
                </div>
                <button className='bg-slate-500 text-slate-50 w-full rounded-md py-2 mt-3'>update your profile</button>
            </form>
        </section>
    )
}

export default Page
