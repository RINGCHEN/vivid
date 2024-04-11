'use client';
import { UnAuthorized, PaymentChart, DataTableVisualization } from '@/components';
import { useAuthContext } from '@/hooks/useAuthContext';
import { useDarkMode } from '@/hooks/useDarkModeContext';
import { useState, useEffect } from 'react';
import { getCoaches, getMembers } from '@/utils/logs';

export default function Finances() {
    const { authReady, role, activated } = useAuthContext();
    const { darkMode } = useDarkMode();
    const [members, setMembers] = useState([]);
    const [coaches, setCoaches] = useState([]);

    useEffect(() => {
        getMembers(setMembers);
        getCoaches(setCoaches);
    }, []);

    if (authReady && activated && (role == "treasurer")) {
        return (
            <main className={darkMode ? "dark" : ""}>
                <div className="min-h-[92.5vh] dark:bg-gray-900 dark:text-neutral-300 p-4">
                    <h1 className="text-center text-3xl py-5">Club Finances</h1>
                    <section className="grid grid-cols-1 md:grid-cols-2 gap-4 m-2">
                        <div className="m-2 w-full rounded-md overflow-hidden shadow-md bg-white p-4 dark:bg-gray-600">
                            <h1>Member Payments</h1>
                            <DataTableVisualization data={members} view="payments" role={role} setMembers={setMembers} />
                        </div>
                        <div className="m-2 w-full rounded-md overflow-hidden shadow-md bg-white p-4 dark:bg-gray-600">
                            <h1>Coach Salaries</h1>
                            <DataTableVisualization data={coaches} view="salaries" role={role} setMembers={setCoaches} />
                        </div>
                        <div className="m-2 w-full rounded-md overflow-hidden shadow-md bg-white p-4 dark:bg-gray-600">
                            <h1>Operational Costs</h1>
                            <p>Costs for this month. Includes rent/utilities and total coach salaries</p>
                        </div>
                        <div className="m-2 w-full rounded-md overflow-hidden shadow-md bg-white p-4 dark:bg-gray-600">
                            <h1>Payment Histories</h1>
                            <PaymentChart />
                        </div>
                    </section>
                </div>
            </main>
        );
    } else {
        return <UnAuthorized />;
    }
}