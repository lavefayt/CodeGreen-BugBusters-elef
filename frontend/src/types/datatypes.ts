export interface Driver {
  date_of_birth?: string;
  driver_type?: "Select" | "Student" | "Faculty" | "Staff";
  email?: string;
  first_name?: string;
  id?: string;
  is_driver_registered?: boolean;
  last_name?: string;
  license_expiration_date?: string;
  license_number?: string;
  middle_name?: string;
  sex?: "Select" | "Male" | "Female";
  user_id?: string | null;
}

export interface Violation {
  id?: string;
  driver_id?: string;
  violation_type?: string;
  violation_date?: string;
  description?: string;
  paid_status?: boolean;
}

export interface DriverWithViolations {
  date_of_birth?: string;
  driver_type?: "Select" | "Student" | "Faculty" | "Staff";
  email?: string;
  first_name?: string;
  id?: string;
  is_driver_registered?: boolean;
  last_name?: string;
  license_expiration_date?: string;
  license_number?: string;
  middle_name?: string | null;
  sex?: "Select" | "Male" | "Female";
  user_id?: string | null;
  violations?: Violation[];
}

export interface Registration {
  id?: string;
  user_id?: string;
  license_number?: string;
  school_email?: string;
  driver_type?: "Select" | "Student" | "Faculty" | "Staff";
  first_name?: string;
  last_name?: string;
  sex?: "Select" | "Male" | "Female";
  date_of_birth?: string;
}

export interface User {
  id: string;
  first_name: string;
  last_name: string;
}

export interface Cars {
  id?: string;
  driver_id?: string;
  car_model?: string;
  color?: string;
  license_plate?: string;
  license_number?: string;
  brand?: string;
}

export interface UserType {
  user: User;
  hasRegistered: boolean;
  isDriver: boolean
}
