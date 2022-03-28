# Núvol

## Description:

Núvol is an SPA to update you favorites pics! You can add, edit and delete your pictures with a title and some description.

## Setup:
- Clone this repo.
- Run `$npm install` to install the node modules.
- Create an `.env` document in Client and add the information below -> 
   `- REACT_APP_API_URL=http://localhost:5005/api`
- Create an `.env` document in Server and add the information below -> 

   `- PORT=5005
    - ORIGIN=http://localhost:3000
    - MONGODB_URI=yourDBKeys
    - CLOUDINARY_NAME=yourCloudinaryName
    - CLOUDINARY_KEY=yourCloudinaryKey
    - CLOUDINARY_SECRET=yourCloudinarySecret`



 

## Technologies used:
SERVER: I've used Express/Node for the server part, from where I created the picture model.
As for the management of images of the entire application are managed through CLOUDINARY which greatly facilitates access and support for them.
Regarding Database we have used MongoDB and Mongoose for DB management and transfer to the cloud with MongoDB Atlas.

CLIENT: On the client side I've used REACT as a library, shelling out the components of the App to obtain a dynamic and attractive Single Page Application, likewise I've used Hooks, statemens and Context API.
The creative part is made with Bootstrap and CSS.

## Scalabilities:
- Add a Sign In form to Log In session.
- Create a filter to search a picture or make different categories to show it.
- TDD


## Endpoints

| HTTP Method | URI path            | Description      |
| :---         |   :---            |          :---    |
| GET          | /                  | Render home page   |
| GET          | /galeria         | List of all pictures  |
| PUT          | /galeria                 | Modal form to create new picture |
| GET          | /detalles/:id     | Render picture details   |
| GET          | /detalles/editar/:id  | Render edit page form   |
| POST          | /detalles/editar/:id  | Handle edit picture form   |
| DELETE | /detalles/eliminar/:id   | Delete a picture  |

