"use client";

import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useState,
} from "react";
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
  addItem: (itemName: string, itemCount?: number) => Promise<void>;
  removeItem: (itemName: string) => Promise<void>;
  searchItem: (query: string) => void;
  recipeSuggestion: string;
  setRecipeSuggestion: Dispatch<SetStateAction<string>>;
}

const defaultContext: IPantryContext = {
  items: [],
  updateItems: async () => {},
  addItem: async () => {},
  removeItem: async () => {},
  searchItem: async () => {},
  recipeSuggestion: "",
  setRecipeSuggestion: () => {},
};

const PantryContext = createContext<IPantryContext>(defaultContext);

export const PantryProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [items, setItems] = useState<PantryItem[]>([]);
  const [recipeSuggestion, setRecipeSuggestion] = useState<string>("");

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
      // console.log(pantryItems);
      setItems(pantryItems);
      setRecipeSuggestion("");
    });
  };

  const addItem = async (itemName: string, itemCount?: number) => {
    const docRef = doc(collection(db, "pantry-items"), itemName);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const { count } = docSnap.data();
      await setDoc(docRef, {
        count: itemCount ? count + itemCount : count + 1,
      });
    } else {
      await setDoc(docRef, { count: itemCount ? itemCount : 1 });
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
      value={{
        items,
        updateItems,
        addItem,
        removeItem,
        searchItem,
        recipeSuggestion,
        setRecipeSuggestion,
      }}
    >
      {children}
    </PantryContext.Provider>
  );
};

export default PantryContext;
