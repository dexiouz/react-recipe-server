const UserQuery = {
  getCurrentUser: async (_, args, { datasources, req }, info) => {
    const { User } = datasources;
    console.log(req.user, "req.user");
    return await new User().getCurrentUser(req.user);
  },
};

const UserMutation = {
  signupUser: (_, { data }, { datasources }, info) => {
    const { User } = datasources;
    return new User().signupUser(data);
  },
  signinUser: (_, { data }, { datasources }, info) => {
    const { User } = datasources;
    return new User().signinUser(data);
  },
};

module.exports = {
  UserQuery,
  UserMutation,
};
