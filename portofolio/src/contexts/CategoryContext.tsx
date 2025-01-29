import React, { createContext, useContext, useState } from 'react';

type CategoryType = 'project' | 'experience' | 'certificate' | null;

interface CategoryContextType {
    activeCategory: CategoryType;
    setActiveCategory: (category: CategoryType) => void;
}

const CategoryContext = createContext<CategoryContextType | undefined>(undefined);

export const CategoryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [activeCategory, setActiveCategory] = useState<CategoryType>(null);

    return (
        <CategoryContext.Provider value={{ activeCategory, setActiveCategory }}>
            {children}
        </CategoryContext.Provider>
    );
};

export const useCategory = () => {
    const context = useContext(CategoryContext);
    if (!context) throw new Error('useCategory must be used within CategoryProvider');
    return context;
};
