"use client";

import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import { Input } from "../ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../ui/select";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";

export const ChildInfo = () => {
    const { register, watch, setValue } = useFormContext();
    const birthOrder = watch("birthOrder");
    const gender = watch("gender");
    const dateOfBirth = watch("dateOfBirth");

    // Local state for date picker open/close
    const [open, setOpen] = useState(false);

    return (
        <div className="max-w-7xl mx-auto p-6 bg-white  rounded-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                {/* First & Last Name (Bangla) */}
                <div className="flex flex-col gap-2">
                    <Label htmlFor="firstNameBangla">First Name (Bangla)</Label>
                    <Input
                        type="text"
                        id="firstNameBangla"
                        placeholder="শিশুর প্রথম নাম"
                        {...register("firstNameBangla", { required: true })}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <Label htmlFor="lastNameBangla">Last Name (Bangla)</Label>
                    <Input
                        type="text"
                        id="lastNameBangla"
                        placeholder="শিশুর শেষ নাম"
                        {...register("lastNameBangla", { required: true })}
                    />
                </div>

                {/* First & Last Name (English) */}
                <div className="flex flex-col gap-2">
                    <Label htmlFor="firstNameEnglish">First Name (English)</Label>
                    <Input
                        type="text"
                        id="firstNameEnglish"
                        placeholder="First Name"
                        {...register("firstNameEnglish", { required: true })}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <Label htmlFor="lastNameEnglish">Last Name (English)</Label>
                    <Input
                        type="text"
                        id="lastNameEnglish"
                        placeholder="Last Name"
                        {...register("lastNameEnglish", { required: true })}
                    />
                </div>

                {/* Date of Birth */}
                <div className="flex flex-col gap-2">
                    <Label>Date of Birth</Label>
                    <Popover open={open} onOpenChange={setOpen}>
                        <PopoverTrigger asChild>
                            <Button
                                variant="outline"
                                className="w-full justify-start font-normal"
                            >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {dateOfBirth
                                    ? format(new Date(dateOfBirth), "PPP")
                                    : "Select date"}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent
                            align="start"
                            side="bottom"
                            className="p-0 shadow-lg rounded-md"
                        >
                            <Calendar
                                mode="single"
                                selected={dateOfBirth ? new Date(dateOfBirth) : undefined}
                                onSelect={(date) => {
                                    if (date) {
                                        setValue("dateOfBirth", date.toISOString());
                                        setOpen(false);
                                    }
                                }}
                                initialFocus
                            />
                        </PopoverContent>
                    </Popover>
                </div>

                {/* Gender */}
                <div className="flex flex-col gap-2">
                    <Label>Gender</Label>
                    <Select
                        value={gender}
                        onValueChange={(val: string) => setValue("gender", val)}
                    >
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                            <SelectItem value="thirdGender">Third Gender</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                {/* Birth Order */}
                <div className="flex flex-col gap-2">
                    <Label>Birth Order</Label>
                    <Select
                        value={birthOrder}
                        onValueChange={(val: string) => setValue("birthOrder", val)}
                    >
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select birth order" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="1st">1st Child</SelectItem>
                            <SelectItem value="2nd">2nd Child</SelectItem>
                            <SelectItem value="3rd">3rd Child</SelectItem>
                            <SelectItem value="4th">4th Child</SelectItem>
                            <SelectItem value="5th">5th Child</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                    </Select>

                   
                </div>
                 {birthOrder === "other" && (
                        <div className="flex flex-col">
                            <Label htmlFor="customBirthOrder">Birth Order</Label>
                            <Input
                                id="customBirthOrder"
                                type="text"
                                placeholder="Enter birth order"
                                {...register("customBirthOrder", { required: true })}
                                className="mt-2"
                            />
                        </div>
                    )}
            </div>
        </div>
    );
};
