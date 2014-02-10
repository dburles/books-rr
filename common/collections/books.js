Books = new Meteor.Collection('books');

Books.helpers({
  author: function() {
    return Authors.findOne(this.authorId);
  }
});
