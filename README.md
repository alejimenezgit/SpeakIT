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
|   /register     |   Home Page    
|   /mainpage     |   Main Page     
|   /profile      |   Main Page        
|   /videochat    |   VideoChat         



# ROUTES del back (api)
|  Method           |    Endpoint Routes Backend     |     Description                          |   
|-------------------|--------------------------------|------------------------------------------|
|    POST           |    `/user/`                    |     Get an user                          | 
|    GET            |    `/user/random`              |     Get a random user                    |
|    GET            |    `/user/all`                 |     Get all the users (with param ?)     |
|    POST           |    `/user/add`                 |     Create an user                       |
|    PUT            |    `/user/update`              |     Update a user                        | 
|    DELETE         |    `/user/delete `             |     Delete a user                        |
|-------------------|--------------------------------|------------------------------------------|
|    GET            |    `/language/`                |     Get a language                       |
|    GET            |    `/language/all`             |     Get all the languages                |
|    POST           |    `/language/add`             |     Create a language                    |
|    PUT            |    `/language/update`          |     Update a language                    |
|    DELETE         |    `/language/delete`          |     Delete a language                    |
|-------------------|--------------------------------|------------------------------------------|
|    GET            |    `/languageUser/`            |     Get a language by User               |
|    GET            |    `/languageUser/all`         |     Get all the languages by User        |
|    POST           |    `/languageUser/add`         |     Create a language by User            |
|    PUT            |    `/languageUser/update`      |     Update a language by User            |
|    DELETE         |    `/languageUser/delete`      |     Delete a language by User            |
|-------------------|--------------------------------|------------------------------------------|
|    GET            |    `/comunication/`            |     Get a language comunication          |
|    GET            |    `/comunication/all`         |     Get all the languages comunications  |
|    POST           |    `/comunication/add`         |     Create a language comunication       |
|    PUT            |    `/comunication/update`      |     Update a language comunication       |
|    DELETE         |    `/comunication/delete`      |     Delete a language comunication       |

# MODELS 
## User model
```javascript
    {
        id_user:          { Type: ObjectId(), required: true, unique: true}
        name:             { Type: String,     required: true }
        surnames:         { Type: String,     required: true }
        email:            { type: String,     required: true , unique: true}
        password:         { Type: String,     required: true }
        nativeLanguages:  { Type: Array }
        comunications:    { Type: ObjectId(), ref: 'Comunication'  }
    }
```

## Language model
```javascript
    {
        id_language:     { Type: ObjectId(), required: true}
        language:        { Type: String,     required: true}
    }
```

## Comunication model
```javascript
    {
        sender:         { Type: ObjectId(),  required: true}
        receiver:       { Type: ObjectId(),  required: true}             
        status:         { Type: String,      required: true} 
        chat:           { Type: Array }
    }
```

# Links 

|   APP           |  LINK    |  
|-----------------|--------------|
|    TRELLO       |  https://trello.com/b/ClMyEmqs/speak-it           |           
|    GITHUB       |  https://github.com/alejimenezgit/SpeakIT         |  
|    GITHUB       |  https://github.com/alejimenezgit/API-SpeakIT     |              
|    HEROKU front |  https://speakproyect.herokuapp.com               | 
|    HEROKU back  |  https://backendspeakit.herokuapp.com/            |              
|    SLIDES       |  https://docs.google.com/presentation/d/1yt-0nvfTelu5vgauSA7NJYeb8M9hharbokSweb-IChE/edit?usp=sharing   |       