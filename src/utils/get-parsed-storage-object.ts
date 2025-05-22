import {
  LOCAL_STORAGE_KEY,
  SESSION_STORAGE_KEY,
} from "@/constants/storage-key";
import { ValueOf } from "@/types/value-of";

type StorageKey =
  | ValueOf<typeof LOCAL_STORAGE_KEY>
  | ValueOf<typeof SESSION_STORAGE_KEY>;

/**
 *
 * @param key
 * @returns
 */
export function getParsedStorageObject<T extends object>(
  key: StorageKey,
): T | null {
  if (typeof localStorage === "undefined") return null;

  const storageString = localStorage.getItem(key);

  return storageString && JSON.parse(storageString);
}
