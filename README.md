# README Modulo3

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



# ROUTES del back (api)
|  Method           |    Endpoint Routes Backend     |     Description                          |       Body
|-------------------|--------------------------------|------------------------------------------|-----------------------
|    GET            |    `/user/`                    |     Get an user                          | `{ username, password }`
|    GET            |    `/user/random`              |     Get a random user                    |
|    GET            |    `/user/all`                 |     Get all the users (with param ?)     |
|    POST           |    `/user/add`                 |     Create an user                       |
|    PUT            |    `/user/update`              |     Update a user                        |
|    DELETE         |    `/user/delete `             |     Delete a user                        |
|-------------------|--------------------------------|------------------------------------------|-----------------------
|    GET            |    `/language/`                |     Get a language                       |
|    GET            |    `/language/all`             |     Get all the languages                |
|    POST           |    `/language/add`             |     Create a language                    |
|    PUT            |    `/language/update`          |     Update a language                    |
|    DELETE         |    `/language/delete`          |     Delete a language                    |
|-------------------|--------------------------------|------------------------------------------|-----------------------
|    GET            |    `/languageUser/`            |     Get a language by User               |
|    GET            |    `/languageUser/all`         |     Get all the languages by User        |
|    POST           |    `/languageUser/add`         |     Create a language by User            |
|    PUT            |    `/languageUser/update`      |     Update a language by User            |
|    DELETE         |    `/languageUser/delete`      |     Delete a language by User            |
|-------------------|--------------------------------|------------------------------------------|-----------------------
|    GET            |    `/comunication/`            |     Get a language comunication          |
|    GET            |    `/comunication/all`         |     Get all the languages comunications  |
|    POST           |    `/comunication/add`         |     Create a language comunication       |
|    PUT            |    `/comunication/update`      |     Update a language comunication       |
|    DELETE         |    `/comunication/delete`      |     Delete a language comunication       |

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
        puntuación:     { Type: Number }
        hash:           { Type: String,     required: true, unique: true}
        languages:      { Type: Array,      required: true }
        comunications:  { Type: Array }
    }   

    Language model
    {
        id_language:     { Type: ObjectId(), required: true, unique: true}
        name:            { Type: String,     required: true}
    }

    LanguageUser model
    {
        id_language_user:    { Type: ObjectId(), required: true, unique: true}
        level:               { Type: Number,     required: true}
        id_language:         { Type: ObjectId(), required: true}
    }

    Comunication model
    {
        id_language_user:    { Type: ObjectId(), required: true, unique: true}
        language:            { Type: Number,     required: true}                 // es objectid de language
        users:               { Type: Array,       required: true}                // Array de objectid de User
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
|    TRELLO     |  https://trello.com/b/ClMyEmqs/speak-it           |           
|    GITHUB     |  https://github.com/alejimenezgit/SpeakIT         |  
|    GITHUB     |  https://github.com/alejimenezgit/API-SpeakIT     |              
|    HEROKU     |           |              
|    SLIDES     |           |              
|    MOCKUPS    |           |