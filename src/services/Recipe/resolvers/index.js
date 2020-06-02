const RecipeQuery = {
  getAllRecipes: async (_, args, { datasources }, info) => {
    const { Recipe } = datasources;
    return await new Recipe().getAllRecipes();
  },
};

const RecipeMutation = {
  addRecipe: async (_, { data }, { datasources }, info) => {
    const { Recipe } = datasources;
    return await new Recipe().addRecipe(data);
  },
};

module.exports = {
  RecipeMutation,
  RecipeQuery,
};
