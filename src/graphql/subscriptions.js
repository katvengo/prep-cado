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
        owner
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
      owner
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
        owner
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
      owner
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
        owner
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
      owner
    }
  }
`;
