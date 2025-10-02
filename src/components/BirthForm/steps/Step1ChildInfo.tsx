import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { ChevronDownIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";

const genderOptions = ["Male", "Female", "Other"];
const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
const religions = ["Islam", "Hinduism", "Buddhism", "Christianity", "Other"];

const Step1ChildInfo = () => {
    const { register, setValue, formState: { errors } } = useFormContext();
    const [open, setOpen] = useState(false);
    const [date, setDate] = useState<Date | undefined>(undefined);

    return (
        <div className="space-y-6 max-w-6xl">
            <h2 className="text-xl font-semibold">Child’s Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                {/* First Name */}
                <div className="grid gap-1">
                    <Label>First Name</Label>
                    <Input {...register("firstName", { required: "First Name is required" })} />
                    {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message as string}</p>}
                </div>

                {/* Last Name */}
                <div className="grid gap-1">
                    <Label>Last Name</Label>
                    <Input {...register("lastName", { required: "Last Name is required" })} />
                    {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message as string}</p>}
                </div>

                {/* First Name Bangla */}
                <div className="grid gap-1">
                    <Label>First Name Bangla</Label>
                    <Input {...register("firstNameBn", { required: "First Name Bangla is required" })} />
                    {errors.firstNameBn && <p className="text-red-500 text-sm">{errors.firstNameBn.message as string}</p>}
                </div>

                {/* Last Name Bangla */}
                <div className="grid gap-1">
                    <Label>Last Name Bangla</Label>
                    <Input {...register("lastNameBn", { required: "Last Name Bangla is required" })} />
                    {errors.lastNameBn && <p className="text-red-500 text-sm">{errors.lastNameBn.message as string}</p>}
                </div>

                {/* DOB */}
                <div className="flex flex-col gap-1">
                    <Label>Date of Birth</Label>
                    <Popover open={open} onOpenChange={setOpen}>
                        <PopoverTrigger asChild>
                            <Button variant="outline" className="w-full justify-between font-normal">
                                {date ? date.toLocaleDateString() : "Select date"}
                                <ChevronDownIcon />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-full p-0">
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={(date) => {
                                    setDate(date);
                                    setOpen(false);
                                    if (date) setValue("DOB", date.toISOString(), { shouldValidate: true });
                                }}
                            />
                        </PopoverContent>
                    </Popover>
                    {errors.DOB && <p className="text-red-500 text-sm">{errors.DOB.message as string}</p>}
                </div>

                {/* Gender */}
                <div className="grid gap-1">
                    <Label>Gender</Label>
                    <Select onValueChange={(val) => setValue("gender", val, { shouldValidate: true })}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select Gender" />
                        </SelectTrigger>
                        <SelectContent>
                            {genderOptions.map((g) => (
                                <SelectItem key={g} value={g}>{g}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    {errors.gender && <p className="text-red-500 text-sm">{errors.gender.message as string}</p>}
                </div>

                {/* Blood Group */}
                <div className="grid gap-1">
                    <Label>Blood Group</Label>
                    <Select onValueChange={(val) => setValue("bloodGroup", val, { shouldValidate: true })}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select Blood Group" />
                        </SelectTrigger>
                        <SelectContent>
                            {bloodGroups.map((b) => (
                                <SelectItem key={b} value={b}>{b}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    {errors.bloodGroup && <p className="text-red-500 text-sm">{errors.bloodGroup.message as string}</p>}
                </div>

                {/* Place of Birth */}
                <div className="grid gap-1">
                    <Label>Place of Birth</Label>
                    <Input {...register("placeOfBirth", { required: "Place of Birth is required" })} />
                    {errors.placeOfBirth && <p className="text-red-500 text-sm">{errors.placeOfBirth.message as string}</p>}
                </div>

                {/* Religion */}
                <div className="grid gap-1">
                    <Label>Religion</Label>
                    <Select onValueChange={(val) => setValue("religion", val, { shouldValidate: true })}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select Religion" />
                        </SelectTrigger>
                        <SelectContent>
                            {religions.map((r) => (
                                <SelectItem key={r} value={r}>{r}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    {errors.religion && <p className="text-red-500 text-sm">{errors.religion.message as string}</p>}
                </div>

                {/* Disabilities */}
                <div className="grid gap-1">
                    <Label>Disabilities</Label>
                    <Input {...register("disabilities")} />
                    {errors.disabilities && <p className="text-red-500 text-sm">{errors.disabilities.message as string}</p>}
                </div>

                {/* Birth Mark */}
                <div className="grid gap-1">
                    <Label>Birth Mark</Label>
                    <Input {...register("birthMark")} />
                    {errors.birthMark && <p className="text-red-500 text-sm">{errors.birthMark.message as string}</p>}
                </div>

            </div>
        </div>
    );
};

export default Step1ChildInfo;
