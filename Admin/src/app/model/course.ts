import { Enquiry } from "./enquiry"

export interface Course {
    courseID: number,
    courseName: string,
    description: string,
    duration: string,
    feesAmount: number,
    createdBy: string,
    modifiedBy: string,
    isDelete: boolean
    enquiries?:Enquiry

}
