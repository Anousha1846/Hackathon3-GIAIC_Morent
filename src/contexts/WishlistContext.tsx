"use client";
import { createContext, useContext, ReactNode, useState, useEffect } from "react";
import { StaticImageData } from "next/image";

interface Car {
  name: string;
  type: string;
  image: string | StaticImageData;
  fuelCapacity: string | number;
  transmission: string;
  seatingCapacity: string | number;
  pricePerDay: number | string;
  originalPrice?: number;
}

interface WishlistContextType {
  wishlist: Car[];
  addToWishlist: (car: Car) => void;
  removeFromWishlist: (car: Car) => void;
  toggleWishlist: (car: Car) => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [wishlist, setWishlist] = useState<Car[]>([]);

  // Load wishlist from local storage on component mount
  useEffect(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    if (savedWishlist) {
      setWishlist(JSON.parse(savedWishlist));
    }
  }, []);

  // Save wishlist to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWishlist = (car: Car) => {
    setWishlist((prevWishlist) => [...prevWishlist, car]);
  };

  const removeFromWishlist = (car: Car) => {
    setWishlist((prevWishlist) => prevWishlist.filter(item => item.name !== car.name));
  };

  const toggleWishlist = (car: Car) => {
    setWishlist((prevWishlist) =>
      prevWishlist.some(item => item.name === car.name)
        ? prevWishlist.filter(item => item.name !== car.name)
        : [...prevWishlist, car]
    );
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist, toggleWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = (): WishlistContextType => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
};
