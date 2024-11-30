import { EntityBase } from "./entityBase";
import { User } from "./user";
export interface Comment extends EntityBase {
    content: string;
    user: User;
}
