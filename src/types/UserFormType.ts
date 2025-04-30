export interface FormInputs {
  fullName: string;
  email: string;
  age: number;
  skills: string[];
  isAdmin: boolean;
  bio: string;
  gender: "male" | "female";
  startDate: string;
  uploadCv: FileList;
  agreementAccepted: boolean;
}
