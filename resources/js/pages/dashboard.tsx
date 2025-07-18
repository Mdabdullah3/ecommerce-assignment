import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
const Dashboard = () => {
    return (
        <>
            <Head title="Dashboard" />
        </>
    );
}
Dashboard.layout = (page: React.ReactNode) => <AppLayout>{page}</AppLayout>;
export default Dashboard