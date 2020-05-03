T## README Modulo3

##  -------------------------------- Project Name: ------------------------------------
SPEAKIT

## -------------------------------------- Creator --------------------------------------
Alejandro Jimenez Regalon 

## ------------------------------ What is SPEAKIT? ------------------------------
SPEAKIT is an online app that helps you find a person who speak the language that you want speak and the other person the same.

## ------------------------------------ Languages -----------------------------------------
- HTML, CSS
- Back end
- JavaScript (REACT)
- MongoDB

## ------------------------------ App functionnalities ------------------------------
- Registro de usuarios
- Seleccionar por diferentes layouts los idiomas
- Tener los contactos del mismo idioma en el mismo layout
- Poder tener llamar
- Poder tener una videollamada
- Poder tener una conversación


## ROUTES del front
|   Method   |  Endpoint    |     Description  | Views |
|------------|--------------|------------------|------------------|
|    GET     |    /         |               HomePage                        |       
|    GET     |    /login    |               Login page                      |
|    POST    |    /login    |               Send user info and logged in    |   
|    GET     |    /register |               Register page                   |
|    POST    |    /register |               Send user and get the cookie    |

## ROUTES del back (api)
|   Method   |  Endpoint    |     Description  | Views |
|------------|--------------|------------------|------------------|
|    GET     |    /         |               HomePage                        |       
|    GET     |    /login    |               Login page                      |
|    POST    |    /login    |               Send user info and logged in    |   
|    GET     |    /register |               Register page                   |
|    POST    |    /register |               Send user and get the cookie    |

## ------------------------------ MODELS ------------------------------

```javascript
User model
    {
        id_user:        { Type: ObjectId(), required: true, unique: true}
        name:           { Type: String, required: true }
        surnames:       { Type: String, required: true }
        email:          { type: String, required: true , unique: true}
        password:       { Type: String, required: true }
        hash:           { Type: String, required: true, unique: true}

        // tendra que tener lista de los lenguages
        // los contactos que tendra
        // valoracion
        // opiniones
    }   

User language 
    {
        id_language:     { Type: ObjectId(), required: true, unique: true}
        name:            { Type: String, required: true}
        level:           { Type: Number, required: true}
        
        // lista de las personas que tienen que 
    }




```

##  ------------------------------ CRUD -------------------------------------
- Create: Partner can create a venue, and events for each venue
- Read: both users can read artists, venues and events
- Update: Partner can change venue and events
- Delete: Partner can delete venues and events

## -------------------------- Dependencies ----------------------------------
- ... (tokbox)
## ------------------------------ Links --------------------------------------

|   APP    |  LINK    |  
|-------------|--------------|
|    TRELLO     |    |           
|    GITHUB     |    |               
|    HEROKU     |    |              
|    SLIDES     |    |              
|    MOCKUPS    |    |