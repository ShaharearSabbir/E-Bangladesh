"use client";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface Step1Props {
    nextStep: () => void;
}

interface ChildFormValues {
    childFirstName: string;
    childLastName: string;
    childFirstNameEnglish: string;
    childLastNameEnglish: string;
    dateOfBirth: Date | undefined;
    birthOrder: string;
    gender: string;
    country: string;
    division: string;
    district: string;
    upazilaOrCityOrCantonment: string;
    unionOrMunicipalityOrWard: string;
    postOffice: string;
    village: string;
    house: string;

}

const divisionDistricts: Record<string, string[]> = {
    Dhaka: [
        "Dhaka", "Gazipur", "Kishoreganj", "Manikganj", "Munshiganj",
        "Narayanganj", "Narsingdi", "Rajbari", "Shariatpur", "Tangail",
        "Faridpur", "Gopalganj", "Madaripur",
    ],
    Chattogram: [
        "Chattogram", "Cox's Bazar", "Bandarban", "Khagrachhari", "Rangamati",
        "Noakhali", "Lakshmipur", "Feni", "Cumilla", "Brahmanbaria", "Chandpur",
    ],
    Khulna: [
        "Khulna", "Bagerhat", "Chuadanga", "Jashore", "Jhenaidah", "Kushtia",
        "Magura", "Meherpur", "Narail", "Satkhira",
    ],
    Rajshahi: [
        "Rajshahi", "Bogura", "Joypurhat", "Naogaon", "Natore",
        "Chapai Nawabganj", "Pabna", "Sirajganj",
    ],
    Rangpur: [
        "Rangpur", "Dinajpur", "Gaibandha", "Kurigram", "Lalmonirhat",
        "Nilphamari", "Panchagarh", "Thakurgaon",
    ],
    Sylhet: ["Sylhet", "Habiganj", "Moulvibazar", "Sunamganj"],
    Barishal: [
        "Barishal", "Barguna", "Bhola", "Jhalokati", "Patuakhali", "Pirojpur",
    ],
    Mymensingh: ["Mymensingh", "Jamalpur", "Netrokona", "Sherpur"],
};

const Step1ChildInfo: React.FC<Step1Props> = ({ nextStep }) => {
    const { register, handleSubmit, setValue, watch, formState: { errors }, control } =
        useForm<ChildFormValues>();

    const [date, setDate] = useState<Date>();
    const selectedDivision = watch("division");

    const onSubmit: SubmitHandler<ChildFormValues> = (data) => {
        const mergedData = { ...data, dateOfBirth: date };
        console.log("Step1 Data:", mergedData);

        nextStep();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <h2 className="text-xl font-semibold">Child’s Information</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="grid gap-1">
                    <Label htmlFor="childFirstName">Child First Name (Bangla)</Label>
                    <Input id="childFirstName" {...register("childFirstName", { required: true })} />
                    {errors.childFirstName && <p className="text-red-500 text-sm">Required</p>}
                </div>

                <div className="grid gap-1">
                    <Label htmlFor="childLastName">Child Last Name (Bangla)</Label>
                    <Input id="childLastName" {...register("childLastName", { required: true })} />
                    {errors.childLastName && <p className="text-red-500 text-sm">Required</p>}
                </div>

                <div className="grid gap-1">
                    <Label htmlFor="childFirstNameEnglish">Child First Name (English)</Label>
                    <Input id="childFirstNameEnglish" {...register("childFirstNameEnglish", { required: true })} />
                    {errors.childFirstNameEnglish && <p className="text-red-500 text-sm">Required</p>}
                </div>

                <div className="grid gap-1">
                    <Label htmlFor="childLastNameEnglish">Child Last Name (English)</Label>
                    <Input id="childLastNameEnglish" {...register("childLastNameEnglish", { required: true })} />
                    {errors.childLastNameEnglish && <p className="text-red-500 text-sm">Required</p>}
                </div>

                {/* Date Picker */}
                <div className="grid gap-1">
                    <Label>Date of Birth</Label>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant={"outline"}
                                className={`justify-start text-left font-normal ${!date ? "text-muted-foreground" : ""}`}
                            >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {date ? format(date, "PPP") : <span>Pick a date</span>}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={(selectedDate) => {
                                    setDate(selectedDate);
                                    setValue("dateOfBirth", selectedDate);
                                }}

                            />
                        </PopoverContent>
                    </Popover>
                    {/* {error. && <p className="text-red-500 text-sm">Required</p>} */}
                </div>

                {/* birth order  */}
                <div className="grid gap-1">
                    <Label htmlFor="birthOrder">Birth Order</Label>
                    <Controller
                        name="birthOrder"
                        control={control}
                        rules={{ required: "Birth order is required" }}
                        render={({ field }) => (
                            <Select onValueChange={field.onChange} value={field.value}>
                                <SelectTrigger id="birthOrder" className="w-full" >
                                    <SelectValue placeholder="Select Birth Order" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="1">1</SelectItem>
                                        <SelectItem value="2">2</SelectItem>
                                        <SelectItem value="3">3</SelectItem>
                                        <SelectItem value="4">4</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        )}
                    />
                    {errors.birthOrder && <p className="text-red-500 text-sm">Required</p>}
                </div>
                {/* gender  */}
                <div className="grid gap-1">
                    <Label htmlFor="gender">Gender</Label>
                    <Controller
                        name="gender"
                        control={control}
                        rules={{ required: "gender is required" }}
                        render={({ field }) => (
                            <Select onValueChange={field.onChange} value={field.value}>
                                <SelectTrigger id="gender" className="w-full" >
                                    <SelectValue placeholder="Select a Gender" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="Male">Male</SelectItem>
                                        <SelectItem value="Female">Female</SelectItem>
                                        <SelectItem value="Third Gender">Third gender</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        )}
                    />
                    {errors.gender && <p className="text-red-500 text-sm">Required</p>}
                </div>
            </div>

            <h2 className="text-xl font-semibold">Place of Birth Details</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* country      */}
                <div className="grid gap-1">
                    <Label htmlFor="country">Country</Label>
                    <Controller
                        name="country"
                        control={control}
                        rules={{ required: "country is required" }}
                        render={({ field }) => (
                            <Select onValueChange={field.onChange} value={field.value}>
                                <SelectTrigger id="country" className="w-full" >
                                    <SelectValue placeholder="--Select a Country" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="Bangladesh">Bangladesh</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        )}
                    />
                </div>

                {/* division  */}

                <div className="grid gap-1">
                    <Label htmlFor="division" >Select Division</Label>
                    <Controller
                        name="division"
                        control={control}
                        rules={{ required: "Division is required" }}
                        render={({ field }) => (
                            <Select
                                value={field.value}
                                onValueChange={(val) => {
                                    field.onChange(val);
                                }}
                            >
                                <SelectTrigger id="division" className="w-full">
                                    <SelectValue placeholder="-- Select Division --" />
                                </SelectTrigger>
                                <SelectContent>
                                    {Object.keys(divisionDistricts).map((division) => (
                                        <SelectItem key={division} value={division}>
                                            {division}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        )}
                    />
                    {errors.division && (
                        <p className="text-red-500 text-sm">{errors.division.message}</p>
                    )}
                </div>

                {/* district  */}
                <div className="grid gap-1">
                    <Label htmlFor="district">Select District</Label>
                    <Controller
                        name="district"
                        control={control}
                        rules={{ required: "District is required" }}
                        render={({ field }) => (
                            <Select
                                value={field.value}
                                onValueChange={field.onChange}
                                disabled={!selectedDivision}
                            >
                                <SelectTrigger id="district" className="w-full">
                                    <SelectValue placeholder="-- Select District --" />
                                </SelectTrigger>
                                <SelectContent>
                                    {selectedDivision &&
                                        divisionDistricts[selectedDivision].map((district) => (
                                            <SelectItem key={district} value={district}>
                                                {district}
                                            </SelectItem>
                                        ))}
                                </SelectContent>
                            </Select>
                        )}
                    />
                    {errors.district && (
                        <p className="text-red-500 text-sm">{errors.district.message}</p>
                    )}
                </div>
                {/* upazilaOrCityOrCantonment */}
                <div className="grid gap-1">
                    <Label htmlFor="upazilaOrCityOrCantonment">Upazila/City/Cantonment</Label>
                    <Input id="upazilaOrCityOrCantonment" {...register("upazilaOrCityOrCantonment", { required: true })} />
                    {errors.upazilaOrCityOrCantonment && <p className="text-red-500 text-sm">Required</p>}
                </div>

                {/* unionOrMunicipalityOrWard */}
                <div className="grid gap-1">
                    <Label htmlFor="unionOrMunicipalityOrWard">Union/Municipality/Ward</Label>
                    <Input id="unionOrMunicipalityOrWard" {...register("unionOrMunicipalityOrWard", { required: true })} />
                    {errors.unionOrMunicipalityOrWard && <p className="text-red-500 text-sm">Required</p>}
                </div>
                {/* post office  */}

                <div className="grid gap-1">
                    <Label htmlFor="postOffice">Post Office</Label>
                    <Input id="postOffice" {...register("postOffice", { required: true })} />
                    {errors.postOffice && <p className="text-red-500 text-sm">Required</p>}
                </div>

                {/* village  */}
                <div className="grid gap-1">
                    <Label htmlFor="village">Village / Neighborhood </Label>
                    <Input id="village" {...register("village", { required: true })} />
                    {errors.village && <p className="text-red-500 text-sm">Required</p>}
                </div>

                {/* house  */}
                <div className="grid gap-1">
                    <Label htmlFor="house">House number & street name</Label>
                    <Input id="house" {...register("house", { required: true })} />
                    {errors.house && <p className="text-red-500 text-sm">Required</p>}
                </div>
            </div>


            <Button type="submit" className="w-full">Next</Button>
        </form>
    );
};

export default Step1ChildInfo;
