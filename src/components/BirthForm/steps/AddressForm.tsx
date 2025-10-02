"use client";

import React, { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "@/components/ui/select";
import axios from "axios";

const rmoOptions = ["Rural", "Municipality", "City", "Other Area", "Cantonment", "City Corporation"];

type Division = { division: string };
type District = { district: string; upazillas?: string[] };

const AddressForm: React.FC = () => {
    const { register, setValue, getValues, formState: { errors }, trigger } = useFormContext();
    const [isChecked, setIsChecked] = useState(false);

    const [divisions, setDivisions] = useState<Division[]>([]);
    const [districts, setDistricts] = useState<Record<string, District[]>>({ present: [], permanent: [] });
    const [thanas, setThanas] = useState<Record<string, string[]>>({ present: [], permanent: [] });
    const [errorsState, setErrorsState] = useState<Record<string, string | null>>({
        presentDivision: null,
        presentDistrict: null,
        presentThana: null,
        permanentDivision: null,
        permanentDistrict: null,
        permanentThana: null,
    });

    // Helper to safely get nested error messages
    const getError = (prefix: "present" | "permanent", field: string) =>
        (errors as any)[`${prefix}Address`]?.[field]?.message as string | undefined;

    // Fetch all divisions once
    useEffect(() => {
        axios.get("https://bdapis.com/api/v1.2/divisions")
            .then(({ data }) => {
                if (data?.data) setDivisions(data.data);
                else setErrorsState(prev => ({ ...prev, presentDivision: "No divisions found", permanentDivision: "No divisions found" }));
            })
            .catch(() => setErrorsState(prev => ({ ...prev, presentDivision: "Failed to fetch divisions", permanentDivision: "Failed to fetch divisions" })));
    }, []);

    // Generic fetch function
    const fetchDistricts = (division: string, type: "present" | "permanent") => {
        setDistricts(prev => ({ ...prev, [type]: [] }));
        setThanas(prev => ({ ...prev, [type]: [] }));
        setValue(`${type}Address.division`, division, { shouldValidate: true });

        axios.get(`https://bdapis.com/api/v1.2/division/${division.toLowerCase()}`)
            .then(({ data }) => {
                if (data?.data) {
                    setDistricts(prev => ({ ...prev, [type]: data.data }));
                    setErrorsState(prev => ({ ...prev, [`${type}District`]: null }));
                } else {
                    setErrorsState(prev => ({ ...prev, [`${type}District`]: "No districts found" }));
                }
            })
            .catch(() => setErrorsState(prev => ({ ...prev, [`${type}District`]: "Failed to fetch districts" })));
    };

    const fetchThanas = (district: string, type: "present" | "permanent") => {
        setThanas(prev => ({ ...prev, [type]: [] }));
        setValue(`${type}Address.zila`, district, { shouldValidate: true });

        axios.get(`https://bdapis.com/api/v1.2/district/${district.toLowerCase()}`)
            .then(({ data }) => {
                const upazillas = data?.data[0]?.upazillas;
                if (upazillas) {
                    setThanas(prev => ({ ...prev, [type]: upazillas }));
                    setErrorsState(prev => ({ ...prev, [`${type}Thana`]: null }));
                } else {
                    setErrorsState(prev => ({ ...prev, [`${type}Thana`]: "No upazilas found" }));
                }
            })
            .catch(() => setErrorsState(prev => ({ ...prev, [`${type}Thana`]: "Failed to fetch upazilas" })));
    };

    // Copy present to permanent
    useEffect(() => {
        if (isChecked) {
            const present = getValues("presentAddress");
            Object.keys(present || {}).forEach(key => setValue(`permanentAddress.${key}`, present[key] ?? ""));
            trigger("permanentAddress");
        }
    }, [isChecked, getValues, setValue, trigger]);

    // Reusable Address Fields
    const AddressFields = (type: "present" | "permanent") => {
        const prefix = type === "present" ? "present" : "permanent";
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {/* Division */}
                <div className="grid gap-1">
                    <Label>Division</Label>
                    <Select onValueChange={(val) => fetchDistricts(val, type)}>
                        <SelectTrigger className="w-full"><SelectValue placeholder="Select Division" /></SelectTrigger>
                        <SelectContent>
                            {divisions.map(d => <SelectItem key={d.division} value={d.division}>{d.division}</SelectItem>)}
                        </SelectContent>
                    </Select>
                    {errorsState[`${prefix}Division`] && <p className="text-red-500 text-sm">{errorsState[`${prefix}Division`]}</p>}
                    {getError(prefix, "division") && <p className="text-red-500 text-sm">{getError(prefix, "division")}</p>}
                </div>

                {/* District */}
                <div className="grid gap-1">
                    <Label>Zila (District)</Label>
                    <Select onValueChange={(val) => fetchThanas(val, type)}>
                        <SelectTrigger className="w-full"><SelectValue placeholder="Select District" /></SelectTrigger>
                        <SelectContent>
                            {districts[type].map(d => <SelectItem key={d.district} value={d.district}>{d.district}</SelectItem>)}
                        </SelectContent>
                    </Select>
                    {errorsState[`${prefix}District`] && <p className="text-red-500 text-sm">{errorsState[`${prefix}District`]}</p>}
                    {getError(prefix, "zila") && <p className="text-red-500 text-sm">{getError(prefix, "zila")}</p>}
                </div>

                {/* Thana */}
                <div className="grid gap-1">
                    <Label>Thana (Upazila)</Label>
                    <Select onValueChange={(val) => setValue(`${prefix}Address.thana`, val, { shouldValidate: true })}>
                        <SelectTrigger className="w-full"><SelectValue placeholder="Select Upazila/Thana" /></SelectTrigger>
                        <SelectContent>
                            {thanas[type].map(thana => <SelectItem key={thana} value={thana}>{thana}</SelectItem>)}
                        </SelectContent>
                    </Select>
                    {errorsState[`${prefix}Thana`] && <p className="text-red-500 text-sm">{errorsState[`${prefix}Thana`]}</p>}
                    {getError(prefix, "thana") && <p className="text-red-500 text-sm">{getError(prefix, "thana")}</p>}
                </div>

                {/* RMO */}
                <div className="grid gap-1">
                    <Label>RMO</Label>
                    <Select value={getValues(`${prefix}Address.RMO`) || ""} onValueChange={(val) => setValue(`${prefix}Address.RMO`, val, { shouldValidate: true })}>
                        <SelectTrigger className="w-full"><SelectValue placeholder="Select RMO" /></SelectTrigger>
                        <SelectContent>
                            {rmoOptions.map(r => <SelectItem key={r} value={r}>{r}</SelectItem>)}
                        </SelectContent>
                    </Select>
                    {getError(prefix, "RMO") && <p className="text-red-500 text-sm">{getError(prefix, "RMO")}</p>}
                </div>

                {/* Union */}
                <div className="grid gap-1">
                    <Label>Union</Label>
                    <Input {...register(`${prefix}Address.union`, { required: "Union is required" })} />
                    {getError(prefix, "union") && <p className="text-red-500 text-sm">{getError(prefix, "union")}</p>}
                </div>

                {/* Remaining fields */}
                {["mouza", "word", "village", "holdingNumber", "postOffice", "postCode", "voterArea"].map(field => (
                    <div key={field} className="grid gap-1">
                        <Label>{field.charAt(0).toUpperCase() + field.slice(1)}</Label>
                        <Input
                            type={field === "word" || field === "postCode" ? "number" : "text"}
                            {...register(`${prefix}Address.${field}`, {
                                valueAsNumber: field === "word" || field === "postCode",
                                required: field !== "mouza" && `${field} is required`,
                                validate: (val: any) => {
                                    if (field === "word" && val < 0) return "Word must be positive";
                                    if (field === "postCode" && (val < 1000 || val > 9999)) return "Post Code must be 4 digits";
                                    return true;
                                }
                            })}
                        />
                        {getError(prefix, field) && <p className="text-red-500 text-sm">{getError(prefix, field)}</p>}
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div>
             <h2 className="text-lg font-semibold">Step 3: Address Information</h2>
            <div className="space-y-6 max-w-6xl">
                <h2 className="text-xl font-semibold">Present Address</h2>
                {AddressFields("present")}

                <div className="flex items-center gap-2 mb-4">
                    <Checkbox checked={isChecked} onCheckedChange={(checked) => setIsChecked(!!checked)} />
                    <Label>Permanent Address same as Present Address</Label>
                </div>

                {!isChecked && (
                    <>
                        <h2 className="text-xl font-semibold">Permanent Address</h2>
                        {AddressFields("permanent")}
                    </>
                )}
            </div>
        </div>
    );
};

export default AddressForm;
