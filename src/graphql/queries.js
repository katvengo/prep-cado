/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      email
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
          cuisine
          description
          directions
          images
          url
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
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
        email
        preferred_username
        bio
        image
        recipes {
          nextToken
        }
        createdAt
        updatedAt
        owner
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
        email
        preferred_username
        bio
        image
        recipes {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      name
      servings
      prepTime
      cookTime
      ingredients
      category
      cuisine
      description
      directions
      images
      url
      createdAt
      updatedAt
      owner
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
          email
          preferred_username
          bio
          image
          createdAt
          updatedAt
          owner
        }
        name
        servings
        prepTime
        cookTime
        ingredients
        category
        cuisine
        description
        directions
        images
        url
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
