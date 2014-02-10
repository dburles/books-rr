Reactive = {
  authorsWithBooks: {
    cursor: function() { return Authors.find({}, { sort: { createdAt: -1 }, limit: 5 }); },
    relations: [{
      collection: function() { return Books; },
      key: 'authorId',
      filter: {},
      options: {}
    }]
  },
  booksWithAuthors: {
    cursor: function() { return Books.find({}, { sort: { createdAt: -1 }, limit: 10 }); },
    relations: [{
      collection: function() { return Authors; },
      parentKey: 'authorId',
      filter: {},
      options: {}
    }]
  }
};