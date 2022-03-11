const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
  {
    // thoughts: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: 'Thought',
    //   },
    // ],
    // friends: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'Friends', //??
    // },
    userName: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      match: [/.+\@.+\..+/, 'Please fill a valid email address']
    },
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
// UserSchema.virtual('thoughtCount').get(function () {
//   return this.thoughts.reduce(
//     (total, thought) => total + thought.reactions.length + 1,
//     0
//   );
// });

const User = model('User', UserSchema);
module.exports = User;
