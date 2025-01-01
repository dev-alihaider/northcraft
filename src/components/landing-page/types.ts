import {Image} from "../../utils/types";

export interface CarouselsProps {
    images: Image[];
};

export interface FormDataProps {
    name:string;
    email: string;
    phoneNumber: number|string;
    service: string;
    description: string;
}