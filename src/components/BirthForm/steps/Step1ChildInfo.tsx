// Step1ChildInfo.tsx
import React, { useEffect, useState } from "react";
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
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { ChevronDownIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import axios from "axios";

// ✅ Types
type Division = { division: string };
type District = { district: string };

const Step1ChildInfo = () => {
    const {
        register,
        setValue,
        formState: { errors },
    } = useFormContext();

    const [divisions, setDivisions] = useState<Division[]>([]);
    const [districts, setDistricts] = useState<District[]>([]);
    const [thanas, setThanas] = useState<string[]>([]);
    const [open, setOpen] = React.useState(false);
    const [date, setDate] = React.useState<Date | undefined>(undefined);

    // Error states for API
    const [divisionError, setDivisionError] = useState<string | null>(null);
    const [districtError, setDistrictError] = useState<string | null>(null);
    const [thanaError, setThanaError] = useState<string | null>(null);

    useEffect(() => {
        axios
            .get("https://bdapis.com/api/v1.2/divisions")
            .then(({ data }) => {
                if (data?.data) {
                    setDivisions(data.data);
                    setDivisionError(null);
                } else {
                    setDivisionError("No divisions found.");
                }
            })
            .catch(() => setDivisionError("Failed to fetch divisions."));
    }, []);

    const onDivisionChange = (division: string) => {
        setDistricts([]);
        setThanas([]);
        setValue("division", division); // ✅ save in form
        axios
            .get(`https://bdapis.com/api/v1.2/division/${division.toLowerCase()}`)
            .then(({ data }) => {
                if (data?.data) {
                    setDistricts(data.data);
                    setDistrictError(null);
                } else {
                    setDistrictError("No districts found.");
                }
            })
            .catch(() => setDistrictError("Failed to fetch districts."));
    };

    const onDistrictChange = (district: string) => {
        setThanas([]);
        setValue("district", district); // ✅ save in form
        axios
            .get(`https://bdapis.com/api/v1.2/district/${district.toLowerCase()}`)
            .then(({ data }) => {
                if (data?.data[0]?.upazillas) {
                    setThanas(data.data[0].upazillas);
                    setThanaError(null);
                } else {
                    setThanaError("No upazilas found.");
                }
            })
            .catch(() => setThanaError("Failed to fetch upazilas."));
    };

    return (
        <div className="space-y-6 max-w-6xl">
            <h2 className="text-xl font-semibold">Child’s Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Name Fields */}
                <div className="grid gap-1">
                    <Label>First Name (Bangla)</Label>
                    <Input {...register("firstNameBangla", { required: "First name (Bangla) is required" })} />
                    {errors.firstNameBangla && (
                        <p className="text-red-500 text-sm">{errors.firstNameBangla.message as string}</p>
                    )}
                </div>

                <div className="grid gap-1">
                    <Label>Last Name (Bangla)</Label>
                    <Input {...register("lastNameBangla", { required: "Last name (Bangla) is required" })} />
                    {errors.lastNameBangla && (
                        <p className="text-red-500 text-sm">{errors.lastNameBangla.message as string}</p>
                    )}
                </div>

                <div className="grid gap-1">
                    <Label>First Name (English)</Label>
                    <Input {...register("firstNameEnglish", { required: "First name (English) is required" })} />
                    {errors.firstNameEnglish && (
                        <p className="text-red-500 text-sm">{errors.firstNameEnglish.message as string}</p>
                    )}
                </div>

                <div className="grid gap-1">
                    <Label>Last Name (English)</Label>
                    <Input {...register("lastNameEnglish", { required: "Last name (English) is required" })} />
                    {errors.lastNameEnglish && (
                        <p className="text-red-500 text-sm">{errors.lastNameEnglish.message as string}</p>
                    )}
                </div>

                {/* DOB */}
                <div className="flex flex-col gap-1 w-full">
                    <Label htmlFor="date" className="px-1">Date of birth</Label>
                    <Popover open={open} onOpenChange={setOpen}>
                        <PopoverTrigger asChild className="w-full">
                            <Button variant="outline" id="date" className="w-full justify-between font-normal">
                                {date ? date.toLocaleDateString() : "Select date"}
                                <ChevronDownIcon />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-full overflow-hidden p-0" align="start">
                            <Calendar
                                mode="single"
                                selected={date}
                                captionLayout="dropdown"
                                onSelect={(date) => {
                                    setDate(date);
                                    setOpen(false);
                                    if (date) setValue("dob", date.toISOString(), { shouldValidate: true });
                                }}
                            />
                        </PopoverContent>
                    </Popover>
                    {errors.dob && (
                        <p className="text-red-500 text-sm">{errors.dob.message as string}</p>
                    )}
                </div>

                {/* Gender */}
                <div className="grid gap-1">
                    <Label>Gender</Label>
                    <Select onValueChange={(val) => setValue("gender", val, { shouldValidate: true })}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                            <SelectItem value="third">Third Gender</SelectItem>
                        </SelectContent>
                    </Select>
                    {errors.gender && (
                        <p className="text-red-500 text-sm">{errors.gender.message as string}</p>
                    )}
                </div>

                {/* Birth Order */}
                <div className="grid gap-1">
                    <Label>Birth Order</Label>
                    <Input {...register("birthOrder", { required: "Birth order is required" })} />
                    {errors.birthOrder && (
                        <p className="text-red-500 text-sm">{errors.birthOrder.message as string}</p>
                    )}
                </div>

                {/* Country */}
                <div className="grid gap-1">
                    <Label>Country</Label>
                    <Input {...register("country", { required: "Country is required" })} />
                    {errors.country && (
                        <p className="text-red-500 text-sm">{errors.country.message as string}</p>
                    )}
                </div>

                {/* Division */}
                <div className="grid gap-1">
                    <Label>Division</Label>
                    <Select onValueChange={onDivisionChange}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select Division" />
                        </SelectTrigger>
                        <SelectContent>
                            {divisions.map((division) => (
                                <SelectItem key={division.division} value={division.division}>
                                    {division.division}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    {divisionError && <p className="text-red-500 text-sm">{divisionError}</p>}
                    {errors.division && (
                        <p className="text-red-500 text-sm">{errors.division.message as string}</p>
                    )}
                </div>

                {/* District */}
                <div className="grid gap-1">
                    <Label>District</Label>
                    <Select onValueChange={onDistrictChange}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select District" />
                        </SelectTrigger>
                        <SelectContent>
                            {districts.map((d) => (
                                <SelectItem key={d.district} value={d.district}>
                                    {d.district}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    {districtError && <p className="text-red-500 text-sm">{districtError}</p>}
                    {errors.district && (
                        <p className="text-red-500 text-sm">{errors.district.message as string}</p>
                    )}
                </div>

                {/* Thana */}
                <div className="grid gap-1">
                    <Label>Upazila / Thana</Label>
                    <Select onValueChange={(val) => setValue("upazila", val, { shouldValidate: true })}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select Upazila/Thana" />
                        </SelectTrigger>
                        <SelectContent>
                            {thanas.map((thana) => (
                                <SelectItem key={thana} value={thana}>
                                    {thana}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    {thanaError && <p className="text-red-500 text-sm">{thanaError}</p>}
                    {errors.upazila && (
                        <p className="text-red-500 text-sm">{errors.upazila.message as string}</p>
                    )}
                </div>

                {/* Union */}
                <div className="grid gap-1">
                    <Label>Union / Municipality / Ward</Label>
                    <Input {...register("union", { required: "Union/Municipality is required" })} />
                    {errors.union && (
                        <p className="text-red-500 text-sm">{errors.union.message as string}</p>
                    )}
                </div>

                {/* Post Office Bangla */}
                <div className="grid gap-1">
                    <Label>Post Office (Bangla)</Label>
                    <Input {...register("postOfficeBangla", { required: "Post Office (Bangla) is required" })} />
                    {errors.postOfficeBangla && (
                        <p className="text-red-500 text-sm">{errors.postOfficeBangla.message as string}</p>
                    )}
                </div>

                {/* Post Office English */}
                <div className="grid gap-1">
                    <Label>Post Office (English)</Label>
                    <Input {...register("postOfficeEnglish", { required: "Post Office (English) is required" })} />
                    {errors.postOfficeEnglish && (
                        <p className="text-red-500 text-sm">{errors.postOfficeEnglish.message as string}</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Step1ChildInfo;
