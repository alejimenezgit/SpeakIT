T## README Modulo3

# Project Name: 
SPEAKIT

# Creator 
Alejandro Jimenez Regalon 

#  What is SPEAKIT? 
SPEAKIT is an online web that helps you find a person who speaks the language you want to learn both by video call or chat

# Languages 
- HTML
- CSS
- SASS
- Style Component
- Node JS
- React JS
- MongoDB

# App functionnalities 
- Registro de usuarios
- Seleccionar por diferentes layouts los idiomas
- Tener los contactos del mismo idioma en el mismo layout
- Hacer busqueda avanzada de usuarios
- Poder tener llamar
- Poder tener una videollamada
- Poder tener una conversación


# ROUTES del front
|   Path          |   View  
|-----------------|---------------------
|   /             |   HomePage  
|   /login        |   Login    
|   /register     |   HomePage    
|   /mainpage     |   Main Page         



## ROUTES del back (api)
|   Method   |  Endpoint                |     Description                          |       Body
|------------|--------------------------|------------------------------------------|------
|    GET     |    /user/:id             |     Get an user                          |
|    GET     |    /randomUser           |     Get a random user                    |
|    GET     |    /languages            |     Get all the languages                |
|    GET     |    /languagesUser/:id    |     Get all the languages by User        |
|    GET     |    /allUser              |     Get all the users (with param ?)     |
|    POST    |    /user                 |     Create an user                       |
|    POST    |    /language             |     Create a language by user            |
|    DELETE  |    /user                 |     Delete a user                        |
|    DELETE  |    /language             |     Delete a language by user            |
|    PUT     |    /user                 |     Update a user                        |
|    PATH    |    /language             |     Update a language by user            |

?¿ add a language 
?¿ delete a language

# MODELS 

```javascript
    User model
    {
        id_user:        { Type: ObjectId(), required: true, unique: true}
        name:           { Type: String,     required: true }
        surnames:       { Type: String,     required: true }
        foto:           { Type: String      required: true }
        email:          { type: String,     required: true , unique: true}
        password:       { Type: String,     required: true }
        languages:      { Type: Array,      required: true }
        hash:           { Type: String,     required: true, unique: true}
        listContacts:   { Type: Array,      }
        puntuación:     { Type: Number }
    }   


    Language model
    {
        id_language:     { Type: ObjectId(), required: true, unique: true}
        name:            { Type: String,     required: true}
    }



    Language-User model
    {
        id_language_user:    { Type: ObjectId(), required: true, unique: true}
        level:               { Type: Number,     required: true}
        id_language:         { Type: ObjectId(), required: true}
    }

```

#  CRUD 
### Create:
    1) A user
    2) A language

### Read: 
    1) A user
    2) A user Radom
    3) All the Languages
    4) All the users

### Update: 
    1) A user
    2) A language

### Delete: 
    1) A user
    2) A language




# Dependencies 
- ... (tokbox)


# Links 

|   APP         |  LINK    |  
|---------------|--------------|
|    TRELLO     |           |           
|    GITHUB     |  https://github.com/alejimenezgit/SpeakIT         |               
|    HEROKU     |           |              
|    SLIDES     |           |              
|    MOCKUPS    |           |