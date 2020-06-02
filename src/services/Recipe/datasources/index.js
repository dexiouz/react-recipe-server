import Base from "../../../../Base";
import _Recipe from "../../../models/Recipe";

class Recipe extends Base {
  constructor() {
    super("Recipe");
  }

  // Queries
  async getAllRecipes() {
    return await _Recipe.find();
  }

  // Mutations
  async addRecipe(data) {
    const result = _Recipe.create({
      ...data,
    });
    return result;
  }
}

module.exports = Recipe;
