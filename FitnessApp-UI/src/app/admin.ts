export class Admin {

  adminId:number;
  clients:string;
  firstName:string;
  lastName:string;
  password:string;
  username:string;

  constructor(adminId:number,clients:string,firstName:string,
    lastName:string,username:string,password:string){
        this.adminId = adminId;
        this.clients=clients;
        this.firstName=firstName;
        this.lastName=lastName;
        this.password=password;
        this.username = username;
    }
}
