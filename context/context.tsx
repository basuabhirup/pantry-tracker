"use client";

import { createContext, PropsWithChildren, useState } from "react";
import { db } from "@/config/firebase";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
} from "firebase/firestore";

interface PantryItem {
  name: string;
  count?: number;
}

interface IPantryContext {
  items: PantryItem[];
  updateItems: () => Promise<void>;
  addItem: (itemName: string) => Promise<void>;
  removeItem: (itemName: string) => Promise<void>;
  searchItem: (query: string) => void;
}

const defaultContext: IPantryContext = {
  items: [],
  updateItems: async () => {},
  addItem: async () => {},
  removeItem: async () => {},
  searchItem: async () => {},
};

const PantryContext = createContext<IPantryContext>(defaultContext);

export const PantryProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [items, setItems] = useState<PantryItem[]>([]);

  const updateItems = async () => {
    const pantryItems: PantryItem[] = [];
    getDocs(collection(db, "pantry-items")).then((docs) => {
      docs.forEach((doc) => {
        // console.log(doc.id, doc.data().count);
        pantryItems.push({
          name: doc.id,
          ...doc.data(),
        });
      });
      //   console.log(pantryItems);
      setItems(pantryItems);
    });
  };

  const addItem = async (itemName: string) => {
    const docRef = doc(collection(db, "pantry-items"), itemName);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const { count } = docSnap.data();
      await setDoc(docRef, { count: count + 1 });
    } else {
      await setDoc(docRef, { count: 1 });
    }
    await updateItems();
  };

  const removeItem = async (itemName: string) => {
    const docRef = doc(collection(db, "pantry-items"), itemName);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const { count } = docSnap.data();
      if (count === 1) {
        await deleteDoc(docRef);
      } else {
        await setDoc(docRef, { count: count - 1 });
      }
    }
    await updateItems();
  };

  const searchItem = async (query: string) => {
    if (!query) {
      await updateItems();
    } else {
      const newItems = items.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      setItems(newItems);
    }
  };

  return (
    <PantryContext.Provider
      value={{ items, updateItems, addItem, removeItem, searchItem }}
    >
      {children}
    </PantryContext.Provider>
  );
};

export default PantryContext;
