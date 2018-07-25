import { Type } from "../shared/type";

export interface Pokemon {
  id: string;
  name: string;
  nickName: string;
  weight: number;
  height: number;
  types: Type[];
}
