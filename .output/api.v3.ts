import { createRequestAction } from 'utils/requestActionCreators';

 export const addPet = createRequestAction<
  {
    requestBody: INewPet;
  },
  IPet
>("addPet", ({ requestBody }) => ({
  url: `/api/v3/pets`,
  method: "POST",
  data: requestBody,
  headers: { "Content-Type": "application/json" },
}));

export const createItem = createRequestAction<
  {
    item?: IItem;
  },
  IMessage
>("createItem", ({ item }) => ({
  url: `/api/v3/items`,
  method: "POST",
  params: {
    item,
  },
}));

export const deletePet = createRequestAction<{
  id: number;
}>("deletePet", ({ id }) => ({ url: `/api/v3/pets/${id}`, method: "DELETE" }));

export const findPetById = createRequestAction<
  {
    id: number;
  },
  IPet
>("findPetById", ({ id }) => ({ url: `/api/v3/pets/${id}`, method: "GET" }));

export const findPets = createRequestAction<
  {
    fee: { age?: number; text: string };
    limit?: number;
    status: keyof typeof FindPetsStatus[];
    tags?: keyof typeof FindPetsTags[];
  },
  IPet[]
>("findPets", ({ tags, fee, limit, status }) => ({
  url: `/api/v3/pets`,
  method: "GET",
  params: {
    tags,
    fee,
    limit,
    status,
  },
}));

export const formMultipartWithFile = createRequestAction<{
  requestBody: { data?: IPet; file: string; slice?: string[]; string?: string };
}>("formMultipartWithFile", ({ requestBody }) => ({
  url: `/api/v3/demo/forms/multipart`,
  method: "POST",
  data: requestBody,
  headers: { "Content-Type": "multipart/form-data" },
}));

export const formMultipartWithFiles = createRequestAction<{
  requestBody: { files: string[] };
}>("formMultipartWithFiles", ({ requestBody }) => ({
  url: `/api/v3/demo/forms/multipart-with-files`,
  method: "POST",
  data: requestBody,
  headers: { "Content-Type": "multipart/form-data" },
}));

export const formUrlEncoded = createRequestAction<{
  requestBody: IRequestForm;
}>("formUrlEncoded", ({ requestBody }) => ({
  url: `/api/v3/demo/forms/url-encoded`,
  method: "POST",
  data: requestBody,
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
}));

export const generateFeedbackAndLeadReportUsingGet = createRequestAction<undefined, IResource>(
  "generateFeedbackAndLeadReportUsingGet",
  () => ({ url: `/api/v3/demo/feedback`, method: "GET" }),
);

export const getItems = createRequestAction<
  {
    limit?: number;
    page?: number;
    sort?: string[];
  },
  TItems
>("getItems", ({ page, limit, sort }) => ({
  url: `/api/v3/items`,
  method: "GET",
  params: {
    page,
    limit,
    sort,
  },
}));

export const postBody = createRequestAction<{
  requestBody: IPet;
}>("postBody", ({ requestBody }) => ({
  url: `/api/v3/body`,
  method: "POST",
  data: requestBody,
  headers: { "Content-Type": "application/json" },
}));

export const updatePet = createRequestAction<{
  requestBody?: ICat | IDog;
}>("updatePet", ({ requestBody }) => ({
  url: `/api/v3/pets`,
  method: "PATCH",
  data: requestBody,
  headers: { "Content-Type": "application/json" },
}));

export interface ICat extends IPet {
  age?: number;
  hunts?: boolean;
}

export type TCatA = { country?: string; kind?: keyof typeof CatAKind };

export enum CatAKind {
  "Red Cat" = "Red Cat",
  "Blue Cat" = "Blue Cat",
}

export type TCatB = { age?: boolean; kind?: keyof typeof CatBKind; name?: string };

export enum CatBKind {
  "Red Cat" = "Red Cat",
  "Blue Cat" = "Blue Cat",
}

export type TCatC = ICat & string;

export type TCatD = string & (ICat | IDog);

export type TCatE = { country?: string };

export type TCatF = ICat[] & IItem[];

export interface ICategory {
  id?: number;
  name?: string;
}

export interface IDictionary {
  dictionary?: { [key: string]: { code?: number; text?: string } };
  dictionaryA?: { age: number; name: string; [key: string]: string | number };
  dictionaryB?: { age: string; name: string; [key: string]: string };
  dictionaryC?: { age?: number; name?: string; [key: string]: any };
  dictionaryD?: { [key: string]: any };
}

export interface IDog extends IPet {
  bark?: boolean;
  breed?: keyof typeof DogBreed;
}

export enum DogBreed {
  "Dingo" = "Dingo",
  "Husky" = "Husky",
  "Retriever" = "Retriever",
  "Shepherd" = "Shepherd",
}

export interface IError {
  code: number;
  message: string;
}

export enum FindPetsStatus {
  "available" = "available",
  "pending" = "pending",
  "sold" = "sold",
}

export enum FindPetsTags {
  "z" = "z",
  "b" = "b",
  "c" = "c",
  "a" = "a",
}

export interface IItem {
  color?: string;
  id?: string;
  name?: string;
  price?: string;
}

export type TItems = IItem[];

export interface IMessage {
  message?: string;
}

export interface INewPet {
  contentType?: TNewPetContentType;
  name: string;
  reason?: TNewPetReason;
  tag?: string;
}

export type TNewPetContentType = "01" | "02" | "03" | "04" | "05" | "06";

export type TNewPetReason = "1" | "3" | "4" | "5" | "6";

export interface IPet extends INewPet {
  categories?: ICategory[];
  id: number;
}

export type TPets = IPet[];

export interface IRequestForm {
  data: IPet;
  slice: string[];
  string: string;
}

export interface IResource {
  description?: string;
  filename?: string;
  open?: boolean;
  readable?: boolean;
}
