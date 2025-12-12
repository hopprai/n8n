import type { IUser } from '@n8n/rest-api-client/api/users';
import type { Role, ROLE } from '@n8n/api-types';

export type ILogInStatus = 'LoggedIn' | 'LoggedOut';

// HOPPR Custom Role - added HopprAdmin to invitable roles
export type InvitableRoleName = (typeof ROLE)['Member' | 'Admin' | 'HopprAdmin'];

export interface IInviteResponse {
	user: {
		id: string;
		email: string;
		emailSent: boolean;
		inviteAcceptUrl: string;
		role: Role;
	};
	error?: string;
}

export interface IUserListAction {
	label: string;
	value: string;
	guard?: (user: IUser) => boolean;
}
