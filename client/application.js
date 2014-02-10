Meteor.subscribeReactive('authorsWithBooks');
Meteor.subscribeReactive('booksWithAuthors');

Template.booksList.helpers({
  books: function() {
    return Books.find({}, { sort: { createdAt: -1 }, limit: 10 });
  }
});

Template.authorsList.helpers({
  authors: function() {
    return Authors.find({}, { sort: { createdAt: -1 }, limit: 5 });
  }
});

Template.authorsList.events({
  'click .delete': function(event) {
    event.preventDefault();
    Books.remove(this._id);
  }
});

Template.books.events({
  'click .add': function(event) {
    event.preventDefault();

    var authorId = Authors.insert({
      createdAt: Date.now(),
      firstName: Fake.user().name,
      lastName: Fake.user().name
    });
    _.times(3, function() {
      Books.insert({
        createdAt: Date.now(),
        authorId: authorId,
        name: Fake.sentence(3)
      });
    });
  }
});
