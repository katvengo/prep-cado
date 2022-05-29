/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateRecipe = /* GraphQL */ `
  subscription OnCreateRecipe {
    onCreateRecipe {
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
export const onUpdateRecipe = /* GraphQL */ `
  subscription OnUpdateRecipe {
    onUpdateRecipe {
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
export const onDeleteRecipe = /* GraphQL */ `
  subscription OnDeleteRecipe {
    onDeleteRecipe {
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
