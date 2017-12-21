export class User {
	Id: number; 
	Username: string;
	Password: string;
	Firstname: string;
	Lastname: string;
	Phone: string;
	Email: string;
	Admin: boolean;
	Reviewer: boolean;
	Active: boolean;
	Datecreated: Date;

	constructor(id: number, username: string, password: string, firstname: string, 
				lastname: string, phone: string, email: string, admin: boolean, 
				reviewer: boolean, active: boolean, datecreated: Date) {
		this.Id = id;
		this.Username = username;
		this.Password = password;
		this.Firstname = firstname;
		this.Lastname = lastname;
		this.Phone = phone;
		this.Email = email;
		this.Admin = admin;
		this.Reviewer = reviewer;
		this.Active = active;
		this.Datecreated = datecreated;
	}
}