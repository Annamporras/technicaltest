# Núvol

## Description:

Núvol is an SPA to update you favorites pics! You can add, edit and delete your pictures with a title and some description.
- List your pictures: you can see your pictures clicking on `Descubre las imágenes` or in `Listado de imágenes`on NavBar.
- Save one new picture: you can add new pictures clicking on `Añadir Imagen` on top of the pictures list.
- See one picture: you can see one picture details clicking on the image or the title's image.
- Edit one picture: edit it clicking on `Editar` button. There will be the pre-filled form with current information and you could modify it. You will return to the picture details updated.
- Delete one picture: delete some picture clicking on `Eliminar`. You will return to the list page.

When you add, edit or delete some picture you will see a toast with a success message.


## Setup:
- Clone this repo.
- Run `$npm install` to install the node modules on main folder `technicaltest`
- Create an `.env` document in Server and add the information below -> 
    - PORT=5005
    - ORIGIN=http://localhost:3000
    - MONGODB_URI=yourDBKeys
    - CLOUDINARY_NAME=yourCloudinaryName
    - CLOUDINARY_KEY=yourCloudinaryKey
    - CLOUDINARY_SECRET=yourCloudinarySecret
- Create an `.env`document in Client and add the information below -> 
    - REACT_APP_API_URL=http://localhost:5005/api
- Import the `pictures.json` to your database. That's in public folder on Client. There are the used pictures too.

## App Run:

- Run `$cd server` and put the comand `$npm run dev` to connect the server.
- Run `$cd client`and put the comand `$npm start` to open the app on the browser, in a separate CLI window.

    

## Technologies used:
SERVER: I've used Express/Node for the server part, from where I created the picture model.
As for the management of images of the entire application is managed through CLOUDINARY which greatly facilitates access and support for them.
Regarding Database I've used MongoDB and Mongoose for DB management and transfer to the cloud with MongoDB Atlas.

CLIENT: On the client side I've used REACT as a library, shelling out the components of the App to obtain a dynamic and attractive Single Page Application, likewise I've used Hooks and Context API.
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


