"use client";

import { getUserFromDb } from '@/actions/user';
import Loading from '@/components/Loading';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { toast } from 'sonner';

const RoleSelect = () => {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        const fetchUser = async () => {
            if (status === "authenticated" && session?.user?.email) {
                const fetchedUser = await getUserFromDb(session.user.email, "");
                if (!fetchedUser) {
                    toast.error("Please Login First");
                    router.push("/login");
                    return;
                }
                switch (fetchedUser.role) {
                    case "admin":
                        router.push("/dashboard/admin");
                        break;
                    case "user":
                        router.push("/dashboard/citizen");
                        break;
                    case "manager":
                        router.push("/dashboard/manager");
                        break;
                    default:
                        toast.error("Unknown role");
                        router.push("/login");
                        break;
                }
            } else if (status === "unauthenticated") {
                toast.error("Please Login First");
                router.push("/login");
            }
        };
        fetchUser();
    }, [session, status, router]);

    return <Loading />;
};

export default RoleSelect;
