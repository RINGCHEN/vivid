'use client';
import { useAuthContext } from '@/hooks/useAuthContext';
import { useDarkMode } from '@/hooks/useDarkModeContext';
import { UnAuthorized } from '@/components';
import Image from 'next/image';

export default function Profile() {
    const { user, authReady } = useAuthContext();
    const { darkMode } = useDarkMode();
    const pfpStyle = {
        borderRadius: '50%'
    }

    if (authReady) {
        return (
            <main className={darkMode ? 'dark' : ''}>
                <div className="grid grid-cols-3 h-[80vh] dark:bg-gray-900">
                    <div className='flex flex-col p-4'>
                        <section className='flex justify-end'>
                            <Image src='/images/profile_placeholder.webp' width={200} height={200} alt='Profile Picture' style={pfpStyle} />
                        </section>
                        <section className='flex flex-row justify-end'>
                        { user && (
                            <section className='dark:text-neutral-300 text-center mt-2'>
                                <p className="font-bold">{user.first_name} {user.last_name}</p>
                                <p>{user.email}</p>
                            </section>
                        )}
                        </section>
                    </div>
                    <div className="flex flex-col w-full h-[50vh] overflow-hidden p-4">
                        <h1 className="dark:text-neutral-300 text-3xl">My Profile</h1>
                        <hr></hr>
                        <div className='mt-5 flex flex-row'>
                            <p className='text-gray-400'>First Name</p>
                            { user && (
                                <p className='dark:text-neutral-300 ml-2'>{user.first_name}</p>
                            )}
                        </div>
                        <div className='flex flex-row'>
                            <p className='text-gray-400 mt-5'>Last Name</p>
                            { user && (
                                <p className='dark:text-neutral-300 ml-2 mt-5'>{user.last_name}</p>
                            )}
                        </div>
                        <div className='flex flex-row'>
                            <p className='text-gray-400 mt-5'>Email</p>
                            { user && (
                                <p className='dark:text-neutral-300 ml-2 mt-5'>{user.email}</p>
                            )}
                        </div>
                    </div>
                </div>
            </main>
        );
    } else {
        return <UnAuthorized />;
    }
}