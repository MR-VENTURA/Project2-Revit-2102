import {AccountRole} from './account-role';
import {AccountStatus} from './account-status';

export class Account {
    id: number;
    username: string;
    userpass: string;
    accountStatus: AccountStatus;
    accountRole: AccountRole;
}