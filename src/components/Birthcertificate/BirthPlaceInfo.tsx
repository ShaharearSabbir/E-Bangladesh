import React from "react";
import { useFormContext } from "react-hook-form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export const BirthPlaceInfo = () => {
    const { register } = useFormContext();

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
                <Label htmlFor="country">Country</Label>
                <Input
                    id="country"
                    placeholder="Enter country"
                    {...register("country", { required: true })}
                    className="w-full"
                />
            </div>

            <div className="space-y-1">
                <Label htmlFor="division">Division</Label>
                <Input
                    id="division"
                    placeholder="Enter division (e.g., Dhaka)"
                    {...register("division", { required: true })}
                    className="w-full"
                />
            </div>

            <div className="space-y-1">
                <Label htmlFor="district">District</Label>
                <Input
                    id="district"
                    placeholder="Enter district"
                    {...register("district", { required: true })}
                    className="w-full"
                />
            </div>

            <div className="space-y-1">
                <Label htmlFor="upazila">Upazila / City Corporation / Cantonment</Label>
                <Input
                    id="upazila"
                    placeholder="Enter upazila or city corporation"
                    {...register("upazila", { required: true })}
                    className="w-full"
                />
            </div>

            <div className="space-y-1">
                <Label htmlFor="unionWard">Union / Municipality / Ward</Label>
                <Input
                    id="unionWard"
                    placeholder="Enter union, municipality or ward"
                    {...register("unionWard", { required: true })}
                    className="w-full"
                />
            </div>

            <div className="space-y-1">
                <Label htmlFor="postOfficeBangla">Post Office (Bangla)</Label>
                <Input
                    id="postOfficeBangla"
                    placeholder="পোস্ট অফিস"
                    {...register("postOfficeBangla", { required: true })}
                    className="w-full"
                />
            </div>

            <div className="space-y-1">
                <Label htmlFor="postOfficeEnglish">Post Office (English)</Label>
                <Input
                    id="postOfficeEnglish"
                    placeholder="Post Office"
                    {...register("postOfficeEnglish", { required: true })}
                    className="w-full"
                />
            </div>

            <div className="space-y-1">
                <Label htmlFor="villageBangla">Village / Neighborhood (Bangla)</Label>
                <Input
                    id="villageBangla"
                    placeholder="গ্রাম / পাড়া"
                    {...register("villageBangla", { required: true })}
                    className="w-full"
                />
            </div>

            <div className="space-y-1">
                <Label htmlFor="villageEnglish">Village / Neighborhood (English)</Label>
                <Input
                    id="villageEnglish"
                    placeholder="Village / Neighborhood"
                    {...register("villageEnglish", { required: true })}
                    className="w-full"
                />
            </div>

            <div className="space-y-1">
                <Label htmlFor="houseBangla">House No & Street (Bangla)</Label>
                <Input
                    id="houseBangla"
                    placeholder="বাড়ি নং ও সড়ক"
                    {...register("houseBangla", { required: true })}
                    className="w-full"
                />
            </div>

            <div className="space-y-1">
                <Label htmlFor="houseEnglish">House No & Street (English)</Label>
                <Input
                    id="houseEnglish"
                    placeholder="House No & Street"
                    {...register("houseEnglish", { required: true })}
                    className="w-full"
                />
            </div>
        </div>
    );
};
