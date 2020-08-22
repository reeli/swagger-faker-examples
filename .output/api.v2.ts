import { createRequestAction } from 'utils/requestActionCreators';

 export const addPet = createRequestAction<{
  body: IPet;
}>("addPet", ({ body }) => ({
  url: `/api/v2/pet`,
  method: "post",
  data: body,
  headers: { "Content-Type": "application/json" },
}));

export const createItem = createRequestAction<
  {
    item?: IItem;
  },
  IMessage
>("createItem", ({ item }) => ({
  url: `/api/v2/items`,
  method: "post",
  data: item,
  headers: { "Content-Type": "application/json" },
}));

export const createUser = createRequestAction<{
  body: IUser;
}>("createUser", ({ body }) => ({
  url: `/api/v2/user`,
  method: "post",
  data: body,
  headers: { "Content-Type": "application/json" },
}));

export const createUsersWithArrayInput = createRequestAction<{
  body: IUser[];
}>("createUsersWithArrayInput", ({ body }) => ({
  url: `/api/v2/user/createWithArray`,
  method: "post",
  data: body,
  headers: { "Content-Type": "application/json" },
}));

export const createUsersWithListInput = createRequestAction<{
  body: IUser[];
}>("createUsersWithListInput", ({ body }) => ({
  url: `/api/v2/user/createWithList`,
  method: "post",
  data: body,
  headers: { "Content-Type": "application/json" },
}));

export const deleteAttachmentUsingDELETE = createRequestAction<{
  id: string;
}>("deleteAttachmentUsingDELETE", ({ id }) => ({ url: `/api/v2/${id}`, method: "delete" }));

export const deleteOrder = createRequestAction<{
  orderId: number;
}>("deleteOrder", ({ orderId }) => ({ url: `/api/v2/store/order/${orderId}`, method: "delete" }));

export const deletePet = createRequestAction<{
  petId: number;
}>("deletePet", ({ petId }) => ({ url: `/api/v2/pet/${petId}`, method: "delete" }));

export const deleteUser = createRequestAction<{
  username: string;
}>("deleteUser", ({ username }) => ({ url: `/api/v2/user/${username}`, method: "delete" }));

export const downloadUsingGET = createRequestAction<
  {
    id: string;
  },
  IResource
>("downloadUsingGET", ({ id }) => ({ url: `/api/v2/${id}`, method: "get" }));

export const findBookByIdUsingGET = createRequestAction<
  {
    id: string;
  },
  IBookDetailVo
>("findBookByIdUsingGET", ({ id }) => ({ url: `/api/v2/book/${id}`, method: "get" }));

export const findPetsByStatus = createRequestAction<
  {
    status: keyof typeof FindPetsByStatusStatus[];
  },
  IPet[]
>("findPetsByStatus", ({ status }) => ({
  url: `/api/v2/pet/findByStatus`,
  method: "get",
  params: {
    status,
  },
}));

/**
 * @deprecated findPetsByTags
 */

export const findPetsByTags = createRequestAction<
  {
    tags: string[];
  },
  IPet[]
>("findPetsByTags", ({ tags }) => ({
  url: `/api/v2/pet/findByTags`,
  method: "get",
  params: {
    tags,
  },
}));

export const getAgencyResponseListUsingGET = createRequestAction<
  {
    addressType: keyof typeof GetAgencyResponseListUsingGetAddressType;
  },
  IResource[]
>("getAgencyResponseListUsingGET", ({ addressType }) => ({
  url: `/api/v2/agency-responses`,
  method: "get",
  params: {
    addressType,
  },
}));

export const getAgencyResponseUsingGET = createRequestAction<
  {
    addressType: keyof typeof GetAgencyResponseUsingGetAddressType;
    responseDate: string;
  },
  IResource
>("getAgencyResponseUsingGET", ({ responseDate, addressType }) => ({
  url: `/api/v2/agency-response`,
  method: "get",
  params: {
    responseDate,
    addressType,
  },
}));

export const getDocumentByIdUsingGET = createRequestAction<
  {
    documentId: string;
    from?: keyof typeof GetDocumentByIdUsingGetFrom;
  },
  IDocumentVo
>("getDocumentByIdUsingGET", ({ documentId, from }) => ({
  url: `/api/v2/documents/${documentId}/doc`,
  method: "get",
  params: {
    from,
  },
}));

export const getHealthCheckUsingHEAD = createRequestAction<
  {
    flight_no: string;
  },
  IDocumentVo
>("getHealthCheckUsingHEAD", ({ flight_no }) => ({ url: `/api/v2/health-check/${flight_no}`, method: "head" }));

export const getInventory = createRequestAction<undefined, { [key: string]: number }>("getInventory", () => ({
  url: `/api/v2/store/inventory`,
  method: "get",
}));

export const getItems = createRequestAction<
  {
    limit?: number;
    page?: number;
    sort?: string[];
  },
  TItems
>("getItems", ({ page, limit, sort }) => ({
  url: `/api/v2/items`,
  method: "get",
  params: {
    page,
    limit,
    sort,
  },
}));

export const getOrderById = createRequestAction<
  {
    orderId: number;
  },
  IOrder
>("getOrderById", ({ orderId }) => ({ url: `/api/v2/store/order/${orderId}`, method: "get" }));

export const getPetById = createRequestAction<
  {
    petId: number;
  },
  IPet
>("getPetById", ({ petId }) => ({ url: `/api/v2/pet/${petId}`, method: "get" }));

export const getScheduleDetailsByDateUsingGET = createRequestAction<
  {
    roleId?: string;
    scheduleDate: number;
  },
  IScheduleVo[]
>("getScheduleDetailsByDateUsingGET", ({ scheduleDate, roleId }) => ({
  url: `/api/v2/schedules`,
  method: "get",
  params: {
    scheduleDate,
    roleId,
  },
}));

export const getTeamListByUsingGET = createRequestAction<{
  limit?: number;
  offset?: number;
}>("getTeamListByUsingGET", ({ offset, limit }) => ({
  url: `/api/v2/teams`,
  method: "get",
  params: {
    offset,
    limit,
  },
}));

export const getUserByName = createRequestAction<
  {
    username: string;
  },
  IUser
>("getUserByName", ({ username }) => ({ url: `/api/v2/user/${username}`, method: "get" }));

export const getUserListByUsingGET = createRequestAction<{
  limit?: number;
  offset?: number;
}>("getUserListByUsingGET", ({ offset, limit }) => ({
  url: `/api/v2/users`,
  method: "get",
  params: {
    offset,
    limit,
  },
}));

export const loginUser = createRequestAction<
  {
    password: string;
    username: string;
  },
  string
>("loginUser", ({ username, password }) => ({
  url: `/api/v2/user/login`,
  method: "get",
  params: {
    username,
    password,
  },
}));

export const logoutUser = createRequestAction("logoutUser", () => ({ url: `/api/v2/user/logout`, method: "get" }));

export const placeOrder = createRequestAction<
  {
    body: IOrder;
  },
  IOrder
>("placeOrder", ({ body }) => ({
  url: `/api/v2/store/order`,
  method: "post",
  data: body,
  headers: { "Content-Type": "application/json" },
}));

export const updateBookByIdUsingPUT = createRequestAction<{
  id: string;
  updateBookRequest: IUpdateBookRequest;
}>("updateBookByIdUsingPUT", ({ id, updateBookRequest }) => ({
  url: `/api/v2/book/${id}`,
  method: "put",
  data: updateBookRequest,
  headers: { "Content-Type": "application/json" },
}));

export const updatePet = createRequestAction<{
  body: IPet;
}>("updatePet", ({ body }) => ({
  url: `/api/v2/pet`,
  method: "put",
  data: body,
  headers: { "Content-Type": "application/json" },
}));

export const updatePetWithForm = createRequestAction<{
  name?: string;
  petId: number;
  status?: string;
}>("updatePetWithForm", ({ petId, name, status }) => ({
  url: `/api/v2/pet/${petId}`,
  method: "post",
  data: { name, status },
  headers: { "Content-Type": "multipart/form-data" },
}));

export const updateUser = createRequestAction<{
  body: IUser;
  username: string;
}>("updateUser", ({ username, body }) => ({
  url: `/api/v2/user/${username}`,
  method: "put",
  data: body,
  headers: { "Content-Type": "application/json" },
}));

export const uploadAttachmentUsingPOST = createRequestAction<
  {
    attachment: File;
  },
  IAttachmentBo
>("uploadAttachmentUsingPOST", ({ attachment }) => ({
  url: `/api/v2`,
  method: "post",
  data: attachment,
  headers: { "Content-Type": "multipart/form-data" },
}));

export const uploadFile = createRequestAction<
  {
    additionalMetadata?: string;
    file?: File;
    petId: number;
  },
  IApiResponse
>("uploadFile", ({ petId, additionalMetadata, file }) => ({
  url: `/api/v2/pet/${petId}/uploadImage`,
  method: "post",
  data: { additionalMetadata, file },
  headers: { "Content-Type": "multipart/form-data" },
}));

export interface IApiResponse {
  code?: number;
  message?: string;
  type?: string;
}

export interface IAttachmentBo {
  authorName?: string;
  createdDate?: number;
  fileName?: string;
  id?: string;
  mimeType?: string;
  path?: string;
}

export interface IBookDetailVo {
  attachment?: IScheduleVo;
  authorName?: string;
  createdDate?: number;
  fileName?: string;
  id?: string;
  mimeType?: string;
  path?: string;
}

export interface IBookVo {
  address?: string;
  price?: string;
}

export interface IBookingResponse {
  data: IDocumentVo;
  errors?: IErrorInfo[];
}

export interface ICategory {
  id?: number;
  name?: string;
}

export interface IDictionary {
  category?: ICategory;
  dictionary1?: { age: number; name: string; [key: string]: string | number };
  dictionary2?: { age: string; name: string; [key: string]: string };
  dictionary3?: { age?: number; name?: string; [key: string]: any };
  dictionary4?: { [key: string]: any };
  dictionary?: { [key: string]: { code?: number; text?: string } };
  id?: number;
  name: string;
  photoUrls: string[];
  status?: keyof typeof DictionaryStatus;
  tags?: ITag[];
}

export enum DictionaryStatus {
  "available" = "available",
  "pending" = "pending",
  "sold" = "sold",
}

export interface IDocumentVo {
  attachment?: IBookDetailVo;
  authorName?: string;
  createdDate?: number;
  id?: string;
  note?: string;
  title?: string;
}

export interface IError {
  code?: number;
  field?: string;
  message?: string;
}

export interface IErrorInfo {
  errorMessage?: string;
}

export type TErrors = IError[];

export interface IFile {
  absolute?: boolean;
  absoluteFile?: IFile;
  absolutePath?: string;
  canonicalFile?: IFile;
  canonicalPath?: string;
  directory?: boolean;
  executable?: boolean;
  file?: boolean;
  freeSpace?: number;
  hidden?: boolean;
  lastModified?: number;
  name?: string;
  parent?: string;
  parentFile?: IFile;
  path?: string;
  readable?: boolean;
  totalSpace?: number;
  usableSpace?: number;
  writable?: boolean;
}

export enum FindPetsByStatusStatus {
  "available" = "available",
  "pending" = "pending",
  "sold" = "sold",
}

export enum GetAgencyResponseListUsingGetAddressType {
  "AAA" = "AAA",
  "BBB" = "BBB",
}

export enum GetAgencyResponseUsingGetAddressType {
  "AAA" = "AAA",
  "BBB" = "BBB",
}

export enum GetDocumentByIdUsingGetFrom {
  "AAA" = "AAA",
  "BBB" = "BBB",
}

export interface IInputStream {
  [key: string]: any;
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

export interface IOrder {
  complete?: boolean;
  id?: number;
  petId?: number;
  quantity?: number;
  shipDate?: string;
  status?: keyof typeof OrderStatus;
}

export enum OrderStatus {
  "placed" = "placed",
  "approved" = "approved",
  "delivered" = "delivered",
}

export interface IPet {
  category?: ICategory;
  id?: number;
  name: string;
  photoUrls: string[];
  status?: keyof typeof PetStatus;
  tags?: ITag[];
}

export enum PetStatus {
  "available" = "available",
  "pending" = "pending",
  "sold" = "sold",
}

export interface IResource {
  description?: string;
  file?: IFile;
  filename?: string;
  inputStream?: IInputStream;
  open?: boolean;
  readable?: boolean;
  uri?: IUri;
  url?: IUrl;
}

export interface IScheduleVo {
  contentType?: TScheduleVoContentType;
  reason?: TScheduleVoReason;
  schedules?: IBookVo[][];
  shiftId?: string;
  team?: string;
}

export type TScheduleVoContentType = "01" | "02" | "03" | "04" | "05" | "06";

export type TScheduleVoReason = "1" | "3" | "4" | "5" | "6";

export interface ITag {
  id?: number;
  name?: string;
}

export interface IUpdateBookRequest {
  birthCountry?: string;
  citizenship?: string;
  dateOfBirth?: number;
  employmentStatus?: string;
  ethnicity?: string;
  gender?: string;
  idNumber?: string;
  idType?: string;
  roleId?: string;
  spokenLanguage?: string[];
}

export interface IUri {
  absolute?: boolean;
  authority?: string;
  fragment?: string;
  host?: string;
  opaque?: boolean;
  path?: string;
  port?: number;
  query?: string;
  rawAuthority?: string;
  rawFragment?: string;
  rawPath?: string;
  rawQuery?: string;
  rawSchemeSpecificPart?: string;
  rawUserInfo?: string;
  scheme?: string;
  schemeSpecificPart?: string;
  userInfo?: string;
}

export interface IUrl {
  authority?: string;
  content?: { [key: string]: any };
  defaultPort?: number;
  deserializedFields?: IUrlStreamHandler;
  file?: string;
  host?: string;
  path?: string;
  port?: number;
  protocol?: string;
  query?: string;
  ref?: string;
  serializedHashCode?: number;
  userInfo?: string;
}

export interface IUrlStreamHandler {
  [key: string]: any;
}

export interface IUser {
  email?: string;
  firstName?: string;
  id?: number;
  lastName?: string;
  password?: string;
  phone?: string;
  userStatus?: number;
  username?: string;
}

export interface IValidationError {
  errors?: TErrors;
  message?: string;
}
