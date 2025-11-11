'use client';

import { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-hot-toast';
import ApprovedComments from '@/app/blog/ApprovedComments';
import { error } from 'console';

interface CommentsProps {
    pageName: string;
    projectId?: string; 
}
const commentSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email'),
    comment: z.string().min(1, 'Comment is required'),
});

export default function Comments({ pageName,projectId }: CommentsProps) {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm({
        resolver: zodResolver(commentSchema),
    });

    const onSubmit = async (data: any) => {
        console.log('Form data:', data); // Log the form data for debugging
        try {
            const res = await fetch('/api/comment/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...data, pageName, projectId }),
            });
            // console.log('beforResponse:', res);
            const json = await res.json();
            console.log('Response:', json); // Log the response for debugging

            if (res.ok) {
                toast.success('Comment sent successfully!');
                reset();
            } else {
                throw new Error(json.message || 'Failed to send comment');
            }
        } catch (err) {
            console.error(err);
            const msg = err instanceof Error ? err.message : 'An error occurred';
            toast.error(msg);
        }
    };

    return (
        <>
            <div className=" ">
                <div className='absolute bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white from-10% to-white/5 to-70% -top-10 opacity-75 -right-10 blur-2xl size-[180px] rounded-full' />
                <div className='absolute bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white from-10% to-white/5 to-70% -bottom-10 opacity-75 -left-10 blur-2xl size-[180px] rounded-full' />
                {/* <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-blue-600">
                <span>🗨️</span> Comments
            </h2> */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="flex flex-col">
                            <label className="text-sm font-medium mb-2">Your Name</label>
                            <input
                                {...register('name')}
                                type="text"
                                placeholder="Your name"
                                className="w-full p-3 rounded-md border border-gray-600 dark:border-gray-700 bg-transparent focus:outline-none focus:border-[#e63946] transition-all"
                            />
                            {errors.name && (
                                <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
                            )}
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm font-medium mb-2">Your Email</label>
                            <input
                                {...register('email')}
                                type="email"
                                placeholder="Your email"
                                className="w-full p-3 rounded-md border border-gray-600 dark:border-gray-700 bg-transparent focus:outline-none focus:border-[#e63946] transition-all"
                            />
                            {errors.email && (
                                <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
                            )}
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm font-medium mb-2">Your Website</label>
                            <input
                                // {...register('name')}
                                type="text"
                                placeholder="Your Website Name"
                                className="w-full p-3 rounded-md border border-gray-600 dark:border-gray-700 bg-transparent focus:outline-none focus:border-[#e63946] transition-all"
                            />
                            {errors.name && (
                                // <p className="text-red-600 text-sm mt-1">{errors.message}</p>
                                <p></p>
                            )}
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm font-medium mb-2 block">Leave a Reply</label>
                        <textarea
                            {...register('comment')}
                            rows={5}
                            placeholder="Write your comment..."
                            className="w-full p-3 rounded-md border border-gray-600 dark:border-gray-700 bg-transparent focus:outline-none focus:border-[#e63946] transition-all"
                        />
                        {errors.comment && (
                            <p className="text-red-600 text-sm mt-1">{errors.comment.message}</p>
                        )}
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                        <input id="save-info" type="checkbox" className="accent-[#e63946] w-4 h-4" />
                        <label htmlFor="save-info" className="text-sm text-gray-500 dark:text-gray-400">
                            Save my name, email, and website in this browser for the next time I comment.
                        </label>
                    </div>
                    <button
                        type="submit"
                        // disabled={isSubmitting}
                        className="bg-[#e63946] text-white px-8 py-3 rounded-md hover:bg-[#c72c3a] transition-all duration-300"
                    >
                        {isSubmitting ? 'Posting...' : 'Post Comment'}
                    </button>
                </form>


            </div>
           

            <ApprovedComments pageName={pageName} />
        </>

    );
}
