import {
  getDoc,
  doc,
  DocumentSnapshot,
  DocumentData,
} from "@firebase/firestore";
import { db } from "../clientApp";

export const readDoc = async (
  //   collecName: string,
  //   docName: string
  path: string
): Promise<DocumentSnapshot<DocumentData>> => {
  return await getDoc(doc(db, path));
};
