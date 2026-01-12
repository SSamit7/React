import conf from '../conf'
import { Client, Account, ID } from "appwrite";


export class AuthService {
client = new Client();
account ;

constructor () {
    this.client
    .setEndpoint(conf.appwriteUrl)
    .setProject(conf.appwriteProjectId);
    this.account= new Account(this.client)
    
}
async createAccount({email,password , name })
{
    try {
       const UserAccount = await this.account.account.create({
  userId: ID.unique(),
  email,
  password,
  name
});

       if (UserAccount) {

        //Call another Method 
        return this.login({email,password});
         
       } else {
        return UserAccount;
       }
        
    } catch (error) {
        throw error;
    }
}
 async login ({email, password})
 {
    try {
       return  await this.account.createEmailPasswordSession()(email,password);
    } catch (error) {
        throw error ;
    }
 }

 async getCurrentUser()
 {
    try {
         return await this.account.get()
    } catch (error) {
        console.log("appwrite Serice Has Error  :: getCurrentUser :: error",error);
        throw error;
        
    }
    return null;
 }

 async logout(){
    try {
        await this.account.deleteSessions();
    } catch (error) {
        console.log("appwrite Serice Has Error  :: logout :: error",error);
        throw error;
    }
 }


}



const authService = new AuthService();


export default authService