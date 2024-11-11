/**
 * Enum of all the possible HTTP request methods.
 * 
 * @enum {string}
 * @ordinal {string} POST - The POST method is used to send data to the server to create a new resource.
 * This method can be used to send web forms, upload files, and send JSON data.
 * @ordinal {string} GET - The GET method is used to get data from the server. The data is sent in the URL.
 * @ordinal {string} HEAD - The HEAD method is used to get metadata about a resource without fetching the resource itself.
 * @ordinal {string} PUT - The PUT method is used to update a resource. The data is sent in the body of the request.
 * @ordinal {string} PATCH - The PATCH method is used to partially update a resource. The data is sent in the body of the request.
 * @ordinal {string} DELETE - The DELETE method is used to delete a resource.
 */
export enum RequestMethod {
    POST = "POST",
    GET = "GET",
    HEAD = "HEAD",
    PUT = "PUT",
    PATCH = "PATCH",
    DELETE = "DELETE",
};