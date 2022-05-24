/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
import React from 'react';

export const CategoryContext = React.createContext();

export function CategoryProvider({ children }) {
  const [categoryName, setCategoryName] = React.useState(null);
  const [menu, setMenu] = React.useState([]);

  return (
    <CategoryContext.Provider
      value={{ categoryName, setCategoryName, menu, setMenu }}
    >
      {children}
    </CategoryContext.Provider>
  );
}
