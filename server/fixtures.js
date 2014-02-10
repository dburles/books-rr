Meteor.startup(function() {
  var author1, author2;

  if (Authors.find().count() === 0) {
    author1 = Authors.insert({
      createdAt: Date.now(),
      firstName: 'Dog',
      lastName: 'Doggington',
    });
    author2 = Authors.insert({
      createdAt: Date.now(),
      firstName: 'Cat',
      lastName: 'Cattington',
    });
  }

  if (Books.find().count() === 0) {
    Books.insert({
      createdAt: Date.now(),
      authorId: author1,
      name: 'Book 1'
    });
    Books.insert({
      createdAt: Date.now(),
      authorId: author1,
      name: 'Book 2'
    });
    Books.insert({
      createdAt: Date.now(),
      authorId: author1,
      name: 'Book 3'
    });

    Books.insert({
      createdAt: Date.now(),
      authorId: author2,
      name: 'Book 4'
    });
    Books.insert({
      createdAt: Date.now(),
      authorId: author2,
      name: 'Book 5'
    });
    Books.insert({
      createdAt: Date.now(),
      authorId: author2,
      name: 'Book 6'
    });
  }
});
