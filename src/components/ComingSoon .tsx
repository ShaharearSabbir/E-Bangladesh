"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Hourglass } from "lucide-react"; // Loading spinner icon

const ComingSoon = () => {
    const router = useRouter();

    return (


        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full max-w-md"
        >
            <Card className="shadow-2xl rounded-2xl bg-white/90 backdrop-blur-lg border border-white/30">
                <CardHeader className="text-center">
                    <CardTitle className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-pink-600 to-orange-500 animate-pulse">
                        Coming Soon...
                    </CardTitle>
                    <CardDescription className="mt-2 text-gray-600">
                        We are working hard to bring this feature. Hang tight!
                    </CardDescription>
                </CardHeader>

                <CardContent className="flex flex-col items-center mt-4 gap-4">
                    {/* Loading Spinner */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                    >
                        <Hourglass className="h-10 w-10 text-purple-600" />
                    </motion.div>

                    <Button variant="outline" onClick={() => router.back()} className="mt-2">
                        Go Back
                    </Button>
                </CardContent>
            </Card>
        </motion.div>

    );
};

export default ComingSoon;
