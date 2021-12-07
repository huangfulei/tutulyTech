import { db } from "../clientApp";
import { serverTimestamp, setDoc } from "@firebase/firestore";
import { doc } from "@firebase/firestore";

export const writeToDoc = async (
  path: string,
  data: any,
  merge?: boolean
): Promise<void> => {
  const docRef = doc(db, path);
  return await setDoc(
    docRef,
    { ...data, timestamp: serverTimestamp() },
    { merge }
  );
};
