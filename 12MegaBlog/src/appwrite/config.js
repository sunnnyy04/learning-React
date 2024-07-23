import conf from "../conff/conf.js";

import {Client,Account,Databases,Storage,Query, ID} from "appwrite"

export class Service{
    client =new Client();
    databases;
    bucket;
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)
        this.databases=new Databases(this.client)
        this.bucket=new Storage(this.client)
        
    }
    async createPost({title,slug,content,featuredImage,status,userId}){
        try{
            return await this.databases.createDocument(
                conf.appwritedatabaseId,
                conf.appwritecollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,status,userId
                }

            )
        }catch(error){
            throw error;
        }

    }
    async updatePost(slug,{title,content,featuredImage,status,userId}){
        try{
            return await this.databases.updateDocument(
                conf.appwritedatabaseId,
                conf.appwritecollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,status,userId
                }
            )

        }catch(error){

        }
        
    }
    async deletePost(){
        try{
            await this.databases.deleteDocument(
                conf.appwritedatabaseId,
                conf.appwritecollectionId,
                slug
            ),
            {
                title,
                content,
                featuredImage,status,userId
            }
        }catch(error){
            console.log("APPwrite service::deletePost::error",error);
            return false
        }
    }
    async getPost(slug){
        try {return this.databases.getDocument(
            conf.appwritedatabaseId,
            conf.appwritecollectionId,
            slug,
        )}catch(error){
            throw error
        }
    }
    async getPosts(queries=[Query.equal("status","active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwritedatabaseId,
                conf.appwritecollectionId,
                queries
            )
        } catch (error) {
            console.log("Appwrite::getpodts::error",error);
            
        }
    }
    //file upload services

    async uploadFile(file){
        try {
            await this.bucket.createFile(
                conf.appwritebucketId,
                ID.unique(),
                file
            )
            
        } catch (error) {
            console.log("Appwrite service :: uploadFile ::error",error);
            return false
        }
    }
    async deleteFile(fileid){
        try {
            await this.bucket.deleteFile(
                conf.appwritebucketId,
                fileid
            )
            
        } catch (error) {
            console.log("Appwrite service :: deleteFile ::error",error);
            return false
            
        }
    }
    getFilePreview (fileId){
        return this.bucket.getFilePreview(
            conf.appwritebucketId,
            fileId
        )
    }

}
const service=new Service()
export default service