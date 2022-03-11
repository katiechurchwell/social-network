const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
  {
    userName: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      match: [/.+\@.+\..+/, 'Please fill a valid email address']
    },
    thoughts: {
      //array of _id values referencing the thought model
    },
    friends: {
      //array of _id values referencing the user model (self-reference)
    }
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

// get total count of thoughts and reactions on retrieval
// friend count as virtual?
UserSchema.virtual('friendCount').get(function () {
  return this.friends.reduce(
    (total, friends) => total + friends.length + 1,
    0
  );
});

const User = model('User', UserSchema);
module.exports = User;
