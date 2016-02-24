app = angular.module "bookApp", []

app.controller "bookCtrl", ->
    @book = bookData
    return
    
    
app.controller "showCommentsCtrl", ->    

        
app.controller "commentCtrl", ->
    @showButton = false
    @comments = commentData
    
    
    @book = bookData
    
    for aux3 in @book
        
        #alert aux3.id
        for aux2,i in @comments
            #alert aux2.idbook
            if aux2.idbook is aux3.id
                #alert commentData[i]
                @commentsBook = commentData[i]

    #@commentsBook ={comment: "The book is wonderful", nameComment: "John Doe", id: 1, idbook: 1}
                
    
    @edit = {}
    @editComment = (id) ->
        #alert @idComment
        @idComment = id
        #alert @scope.idComment
        for aux,i in commentData
            #alert aux
            #alert aux.id
            if id is aux.id
                angular.copy(@comments[i], @edit)
                #alert @edit #object
                @showButton = true
        return
    @saveComment = ->
        #alert @idComment
        for aux,i in commentData
            if @idComment is aux.id
                angular.copy(@edit, @comments[i])
                @idComment = ""
                @showButton = false
        return
    @cancelComment = ->
        @edit = []
        @idComment = ""
        @showButton = false
        return
    @loadComments = ->  
        return @edit
    return

        
        
    
bookData = [
    {
    name: "La princesa de Hielo",
    type: "black novel",
    author: "Camilla Lackberg",
    image: "./img/book1.jpg",
    price: 5.95,
    id: 1
    },
    {
    name: "Deja en paz al diablo",
    type: "black novel",
    author: "John Verdon",
    image: "./img/book2.jpg",
    price: 9.95,
    id: 2
    },
    {
    name: "Blancanieves debe morir",
    type: "black novel",
    author: "Nele Neuhaus",
    image: "./img/book3.jpg",
    price: 3.95,
    id: 3
    }, 
    {
    name: "La sombra de la sirena",
    type: "black novel",
    author: "Camilla Lackberg",
    image: "./img/book4.jpg",
    price: 14.95,
    id: 4
    }  
    
]

commentData = [
    {
    comment: "The book is wonderful",
    nameComment: "John Doe",
    id: 1,
    idbook: 1
    },
    {
    comment: "It's the worst book of the history",
    nameComment: "Mark Adams",
    id: 2,
    idbook:1
    },
    {
    comment: "I've read three times",
    nameComment: "Mary",
    id: 3,
    idbook: 2
    },
    {
    comment: "I prefer other type of books",
    nameComment: "Paul",
    id: 4,
    idbook: 3
    }    
]

