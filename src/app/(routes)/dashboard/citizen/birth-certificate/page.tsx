import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div>
            <Link href="/dashboard/citizen/birth-certificate/birthApplyForm"> <Button>New Application</Button></Link>
        </div>
    );
};

export default page;