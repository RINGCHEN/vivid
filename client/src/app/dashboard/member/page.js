'use client';
import { Welcome } from '@/components';
import { useRedirect } from '@/hooks/useRedirect';

export default function MemberDashboard() {
    useRedirect('member');
    
    return (
        <div className='bg-gray-100'>
            <h1 className='text-center text-3xl p-5'>Dashboard</h1>
            <div className='grid grid-cols-2'>
                <div className='w-full rounded-md overflow-hidden shadow-md ml-2 mr-2'>
                    <div className="bg-white p-4">
                        <h2 className='underline'>Announcements</h2>
                        <p>This is where announcements will go</p>
                    </div>
                </div>
                <div className='flex flex-col w-full'>
                    <div className='rounded-md overflow-hidden shadow-md mb-4 ml-4 mr-2'>
                        <div className="bg-white p-4">
                            <h2 className='underline'>Calendar</h2>
                            <p>Need to create a calendar</p>
                        </div>
                    </div>
                    <div className='rounded-md overflow-hidden shadow-md ml-4 mr-2'>
                        <div className="bg-white p-4">
                            <h2 className='underline'>Finances</h2>
                            <p>money stuffs</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}