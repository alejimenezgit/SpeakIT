# README Modulo3



![imghome](https://github.com/alejimenezgit/SpeakIT/blob/master/public/images/home.png?raw=true)

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
|  Method           |    Endpoint Routes Backend                   |     Description                          |   
|-------------------|----------------------------------------------|------------------------------------------|
|    POST           |    `/user/`                                  |     Set an user                          | 
|    GET            |    `/user/:id`                               |     Get an user                          | 
|    GET            |    `/user/random`                            |     Get a random user                    |
|    GET            |    `/user/all`                               |     Get all the users (with param ?)     |
|    POST           |    `/user/add`                               |     Create an user                       |
|    PUT            |    `/user/update/:id`                        |     Update a user                        | 
|    DELETE         |    `/user/delete/:id`                        |     Delete a user                        |
|    POST           |    `/user/oneUserMatches/:id`                |     Get all the users with his status and chat  |
|    POST           |    `/user/createMatch`                       |     Create match and assign values to users     |
|    PUT            |    `/user/pushComunication/:id`              |     Push a comunication in a user        |
|    PUT            |    `/user/pushMatch/:id`                     |     Push a match in a user               |
|    GET            |    `/user/logout`                            |     Delete session                       |
|    POST           |    `/user/allbyLanguage`                     |     Get all the users by language        |
|    GET            |    `/user/whouseris`                         |     Know if I have a session             |
|-------------------|----------------------------------------------|------------------------------------------|
|    GET            |    `/language/:id`                           |     Get a language                       |
|    GET            |    `/language/all`                           |     Get all the languages                |
|    POST           |    `/language/add`                           |     Create a language                    |
|    PUT            |    `/language/update/:id`                    |     Update a language                    |
|    DELETE         |    `/language/delete/:id`                    |     Delete a language                    |
|    POST           |    `/language/allById`                       |     Find all the languages by id         |
|-------------------|----------------------------------------------|------------------------------------------|
|    GET            |    `/comunication/:id`                       |     Get a language comunication          |
|    GET            |    `/comunication/all`                       |     Get all the languages comunications  |
|    POST           |    `/comunication/add`                       |     Create a language comunication       |
|    PUT            |    `/comunication/update/:id`                |     Update a language comunication       |
|    DELETE         |    `/comunication/delete/:id`                |     Delete a language comunication       |
|    GET            |    `/comunication/allByIds/:id`              |     Delete all the  language comunication by ids |
|    PUT            |    `/comunication/pushComunication/:id`      |     add a chat in a comunicatoin       |


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
|    SLIDES       |  https://docs.google.com/presentation/d/1yt-0nvfTelu5vgauSA7NJYeb8M9hharbokSweb-IChE/edit?usp=sharing   

# How to use

The website is not designed for mobile, only computer and tablet

Without being registered you can access:
     - / = contains information about the web
     - / login = login access with a user
     - / register = access to the user creation form

Once registered / logged in, we access / mainpage, which contains three parts
     - CHAT = we can chat with users who have an accepted match
     - SEARCH = search users by native language and make a request
     - MATCH = see the request (by states) in which if it is sent it will have to wait and if it is received it can be accepted or denied

In the navbar you can access:
     / profile = you can see our data and modify it
     or log out to log out