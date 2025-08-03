const PROJECT_ID = import.meta.env.VITE_PROJECT_ID;
const DATABASE_ID = import.meta.env.VITE_DATABASE_ID;
const COLLECTION_ID = import.meta.env.VITE_COLLECTION_ID;

export const updateSearchCount = async (searchTerm, movie) => {
    console.log(PROJECT_ID, DATABASE_ID, COLLECTION_ID);
}
// const client = new Client()
//     .setEndpoint('https://cloud.appwrite.io/v1')
//     .setProject(PROJECT_ID)

// const database = new Databases(client);

// export const updateSearchCount = async (searchTerm, movie) => {
//     // console.log(PROJECT_ID, DATABASE_ID, COLLECTION_ID);
//     try{
//         const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, queries: [Query.equal(attribute: 'searchTerm', searchTerm),])

//         if(result.documents.length > 0){
//             const doc = result.documents[0];

//             await database.updateDocument(DATABASE_ID, COLLECTION_ID, doc.$id, data:{
//                 count: doc.count + 1,
//             })
//         } else {
//             await_database.createDocument(DATABASE_ID, COLLECTION_ID, IDBCursor.unique(), data:{
//                 searchTerm,
//                 count: 1,
//                 movie_id: movie.id,
//                 poster_url: `http://image.tmdb.org/t/p/w500${movie.poster_path}`,
//             })
//         }
//     } catch (error){
//         console.error(error);
//     }
// }


