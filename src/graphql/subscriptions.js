/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateRecipe = /* GraphQL */ `
  subscription OnCreateRecipe {
    onCreateRecipe {
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
export const onUpdateRecipe = /* GraphQL */ `
  subscription OnUpdateRecipe {
    onUpdateRecipe {
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
export const onDeleteRecipe = /* GraphQL */ `
  subscription OnDeleteRecipe {
    onDeleteRecipe {
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
