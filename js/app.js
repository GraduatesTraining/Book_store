(function() {
  var app, bookData, commentData;

  app = angular.module("bookApp", []);

  app.controller("bookCtrl", function() {
    this.book = bookData;
  });

  app.controller("showCommentsCtrl", function() {});

  app.controller("commentCtrl", function() {
    var aux2, aux3, i, _i, _j, _len, _len1, _ref, _ref1;
    this.showButton = false;
    this.comments = commentData;
    this.book = bookData;
    _ref = this.book;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      aux3 = _ref[_i];
      _ref1 = this.comments;
      for (i = _j = 0, _len1 = _ref1.length; _j < _len1; i = ++_j) {
        aux2 = _ref1[i];
        if (aux2.idbook === aux3.id) {
          this.commentsBook = commentData[i];
        }
      }
    }
    this.edit = {};
    this.editComment = function(id) {
      var aux, _k, _len2;
      this.idComment = id;
      for (i = _k = 0, _len2 = commentData.length; _k < _len2; i = ++_k) {
        aux = commentData[i];
        if (id === aux.id) {
          angular.copy(this.comments[i], this.edit);
          this.showButton = true;
        }
      }
    };
    this.saveComment = function() {
      var aux, _k, _len2;
      for (i = _k = 0, _len2 = commentData.length; _k < _len2; i = ++_k) {
        aux = commentData[i];
        if (this.idComment === aux.id) {
          angular.copy(this.edit, this.comments[i]);
          this.idComment = "";
          this.showButton = false;
        }
      }
    };
    this.cancelComment = function() {
      this.edit = [];
      this.idComment = "";
      this.showButton = false;
    };
    this.loadComments = function() {
      return this.edit;
    };
  });

  bookData = [
    {
      name: "La princesa de Hielo",
      type: "black novel",
      author: "Camilla Lackberg",
      image: "./img/book1.jpg",
      price: 5.95,
      id: 1
    }, {
      name: "Deja en paz al diablo",
      type: "black novel",
      author: "John Verdon",
      image: "./img/book2.jpg",
      price: 9.95,
      id: 2
    }, {
      name: "Blancanieves debe morir",
      type: "black novel",
      author: "Nele Neuhaus",
      image: "./img/book3.jpg",
      price: 3.95,
      id: 3
    }, {
      name: "La sombra de la sirena",
      type: "black novel",
      author: "Camilla Lackberg",
      image: "./img/book4.jpg",
      price: 14.95,
      id: 4
    }
  ];

  commentData = [
    {
      comment: "The book is wonderful",
      nameComment: "John Doe",
      id: 1,
      idbook: 1
    }, {
      comment: "It's the worst book of the history",
      nameComment: "Mark Adams",
      id: 2,
      idbook: 1
    }, {
      comment: "I've read three times",
      nameComment: "Mary",
      id: 3,
      idbook: 2
    }, {
      comment: "I prefer other type of books",
      nameComment: "Paul",
      id: 4,
      idbook: 3
    }
  ];

}).call(this);
