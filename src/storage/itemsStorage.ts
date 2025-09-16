import AsyncStorage from "@react-native-async-storage/async-storage";
import { FilterStatus } from "@/types/FilterStatus";

const ITEMS_STORAGE_KEY = "@comprar:items";

export type ItemStorage = {
  id: string;
  description: string;
  status: FilterStatus;
  createdAt: Date;
};

async function get(): Promise<ItemStorage[]> {
  try {
    const storage = await AsyncStorage.getItem(ITEMS_STORAGE_KEY);
    return storage ? JSON.parse(storage) : [];
  } catch (error) {
    console.log("Error getting items from storage", error);
    throw new Error("GET_ITEMS_ERROR: " + error);
  }
}

async function getByStatus(status: FilterStatus): Promise<ItemStorage[]> {
  try {
    const items = await get();
    return items.filter((item) => item.status === status);
  } catch (error) {
    console.log("Error getting items by status from storage", error);
    throw new Error("GET_ITEMS_BY_STATUS_ERROR: " + error);
  }
}

async function save(items: ItemStorage[]): Promise<void> {
  try {
    await AsyncStorage.setItem(ITEMS_STORAGE_KEY, JSON.stringify(items));
  } catch (error) {
    console.log("Error setting items in storage", error);
    throw new Error("SAVE_ERROR: " + error);
  }
}

async function add(newItem: ItemStorage): Promise<ItemStorage[]> {
  const items = await get();
  const updatedItems = [...items, newItem];
  await save(updatedItems);

  return updatedItems;
}

async function remove(id: string): Promise<ItemStorage[]> {
  const items = await get();
  const updatedItems = items.filter((item) => item.id !== id);
  await save(updatedItems);

  return updatedItems;
}

async function clear() {
  try {
    await AsyncStorage.removeItem(ITEMS_STORAGE_KEY);
  } catch (error) {
    console.log("Error clearing items from storage", error);
    throw new Error("CLEAR_ERROR: " + error);
  }
}

async function toggleStatus(id: string): Promise<void> {
  const items = await get();
  const updatedItems = items.map((item) =>
    item.id === id
      ? {
          ...item,
          status:
            item.status === FilterStatus.PENDING
              ? FilterStatus.DONE
              : FilterStatus.PENDING,
        }
      : item
  );
  await save(updatedItems);
}

export { get, getByStatus, add, remove, clear, toggleStatus };
