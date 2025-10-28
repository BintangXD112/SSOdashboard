import { AppContent } from '@/components/app-content';
import { AppShell } from '@/components/app-shell';
import { AppSidebar } from '@/components/app-sidebar';
import { AppSidebarHeader } from '@/components/app-sidebar-header';
import { type BreadcrumbItem } from '@/types';
import { type PropsWithChildren } from 'react';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { NavUser } from '@/components/nav-user';

export default function AppSidebarLayout({
    children,
    breadcrumbs = [],
}: PropsWithChildren<{ breadcrumbs?: BreadcrumbItem[] }>) {
    return (
        <AppShell variant="sidebar">
            <AppSidebar />
            <div className="w-full flex flex-col gap-4">
                <div className="bg-zinc-100 rounded-b-xl shadow w-full text-black flex p-4 items-center justify-between">
                    <div className="flex gap-4">
                        <SidebarTrigger className="-ml-1" />
                        SSO Website
                    </div>
                    <div className="w-30 ">
                        <NavUser/>
                    </div>
                </div>
                <AppContent variant="sidebar" className="overflow-x-hidden">
                    <AppSidebarHeader breadcrumbs={breadcrumbs} />
                    {children}
                </AppContent>
            </div>
        </AppShell>
    );
}
