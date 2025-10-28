import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Button } from '@/components/ui/button'

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className="relative overflow-x-auto shadow-md">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                    <tbody>
                        <tr className="even:bg-zinc-100 odd:bg-white border-b border-gray-200 hover:bg-gray-50 ">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                Web 1
                            </th>
                            
                            <td className="px-6 py-4 text-right">
                                <Button className="bg-blue-500 text-white hover:bg-blue-300">Login</Button>
                            </td>
                        </tr>
                        <tr className="even:bg-zinc-100 odd:bg-white border-b border-gray-200 hover:bg-gray-50 ">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                Web 2
                            </th>
                            
                            <td className="px-6 py-4 text-right">
                                <Button className="bg-blue-500 text-white hover:bg-blue-300">Login</Button>
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </AppLayout>
    );
}
