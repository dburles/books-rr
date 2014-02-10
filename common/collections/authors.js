Authors = new Meteor.Collection('authors');

Authors.helpers({
  fullName: function() {
    return this.firstName + ' ' + this.lastName;
  },
  books: function() {
    return Books.find({ authorId: this._id });
  }
});
