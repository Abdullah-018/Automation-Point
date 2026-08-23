import { Account, Client, ID, Storage, TablesDB } from 'appwrite';

const endpoint = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT;
const projectId = process.env.NEXT_PUBLIC_APPWRITE_PROJECT;

export const appwriteConfigured = Boolean(endpoint && projectId);

export const appwriteClient = new Client();

if (appwriteConfigured) {
  appwriteClient.setEndpoint(endpoint!).setProject(projectId!);
}

export const account = new Account(appwriteClient);
export const tablesDB = new TablesDB(appwriteClient);
export const storage = new Storage(appwriteClient);
export { ID };
