/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      preferred_username
      bio
      image
      recipes {
        items {
          type
          id
          name
          servings
          prepTime
          cookTime
          ingredients
          category
          description
          directions
          images
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        preferred_username
        bio
        image
        recipes {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getRecipe = /* GraphQL */ `
  query GetRecipe($id: ID!) {
    getRecipe(id: $id) {
      type
      id
      authorObject {
        id
        username
        preferred_username
        bio
        image
        recipes {
          nextToken
        }
        createdAt
        updatedAt
      }
      name
      servings
      prepTime
      cookTime
      ingredients
      category
      description
      directions
      images
      createdAt
      updatedAt
    }
  }
`;
export const listRecipes = /* GraphQL */ `
  query ListRecipes(
    $filter: ModelRecipeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRecipes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        type
        id
        authorObject {
          id
          username
          preferred_username
          bio
          image
          createdAt
          updatedAt
        }
        name
        servings
        prepTime
        cookTime
        ingredients
        category
        description
        directions
        images
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
