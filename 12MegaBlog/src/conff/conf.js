const conf={
    appwriteUrl: String(import.meta.env.VITE_APP_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwritedatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwritecollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwritebucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
}


export default conf 