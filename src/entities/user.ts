import { UserRole } from "../types/userRole";
import { EntityBase } from "./entityBase";

export interface User extends EntityBase {
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  phone?: string | null;
  companyId: string;
  isActive: boolean;
}
