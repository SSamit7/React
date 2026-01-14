import conf from '../conf/conf';
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
       const UserAccount = await this.account.create({
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
       return  await this.account.createSession(email,password);
    } catch (error) {
        throw error ;
    }
 }

 async getCurrentUser()
 {
    try {
         return await this.account.get()
    } catch (error) {
        // ✅ 401 is NORMAL for guests - don't throw, just return null
        if (error.code === 401 || error.type === 'general_unauthorized_scope') {
            console.log("👤 No user logged in (guest mode)");
            return null; // ✅ Return null instead of throwing
        }
        console.log("❌ Appwrite Service :: getCurrentUser :: error", error);
        throw error; // Only throw for other errors
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