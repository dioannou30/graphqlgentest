export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  UUID: { input: any; output: any; }
};

export type AddBranchOfficeInput = {
  branchOfficeCode: Scalars['String']['input'];
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  portID: Scalars['String']['input'];
  serviceTypeIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type AddBranchOfficePayload = {
  __typename?: 'AddBranchOfficePayload';
  branchOffice?: Maybe<BranchOfficeDto>;
  errors?: Maybe<Array<Maybe<UserError>>>;
};

export type AddTripInput = {
  from: Scalars['Date']['input'];
  portID: Scalars['String']['input'];
  serviceTypeID?: InputMaybe<Scalars['ID']['input']>;
  to: Scalars['Date']['input'];
};

export type AddTripPayloadBase = {
  __typename?: 'AddTripPayloadBase';
  errors?: Maybe<Array<Maybe<UserError>>>;
  trip?: Maybe<TripDto>;
};

export type AddressDto = {
  __typename?: 'AddressDTO';
  city?: Maybe<Scalars['String']['output']>;
  countryAlpha2?: Maybe<Scalars['String']['output']>;
  number?: Maybe<Scalars['String']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  street?: Maybe<Scalars['String']['output']>;
};

export type AddressDtoFilterInput = {
  and?: InputMaybe<Array<AddressDtoFilterInput>>;
  city?: InputMaybe<StringOperationFilterInput>;
  countryAlpha2?: InputMaybe<StringOperationFilterInput>;
  number?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<AddressDtoFilterInput>>;
  postalCode?: InputMaybe<StringOperationFilterInput>;
  state?: InputMaybe<StringOperationFilterInput>;
  street?: InputMaybe<StringOperationFilterInput>;
};

export type AddressDtoInput = {
  city?: InputMaybe<Scalars['String']['input']>;
  countryAlpha2?: InputMaybe<Scalars['String']['input']>;
  number?: InputMaybe<Scalars['String']['input']>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  street?: InputMaybe<Scalars['String']['input']>;
};

export type AddressDtoSortInput = {
  city?: InputMaybe<SortEnumType>;
  countryAlpha2?: InputMaybe<SortEnumType>;
  number?: InputMaybe<SortEnumType>;
  postalCode?: InputMaybe<SortEnumType>;
  state?: InputMaybe<SortEnumType>;
  street?: InputMaybe<SortEnumType>;
};

/** A connection to a list of items. */
export type AllServiceProvidersConnection = {
  __typename?: 'AllServiceProvidersConnection';
  /** A list of edges. */
  edges?: Maybe<Array<AllServiceProvidersEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Maybe<ServiceProviderDto>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

/** An edge in a connection. */
export type AllServiceProvidersEdge = {
  __typename?: 'AllServiceProvidersEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<ServiceProviderDto>;
};

export enum ApplyPolicy {
  AfterResolver = 'AFTER_RESOLVER',
  BeforeResolver = 'BEFORE_RESOLVER',
  Validation = 'VALIDATION'
}

export type ArgumentError = Error & {
  __typename?: 'ArgumentError';
  message: Scalars['String']['output'];
  paramName?: Maybe<Scalars['String']['output']>;
};

export type BillingDetailsResult = {
  __typename?: 'BillingDetailsResult';
  address2?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  companyName?: Maybe<Scalars['String']['output']>;
  countryAlpha2?: Maybe<Scalars['String']['output']>;
  emailAddress?: Maybe<Scalars['String']['output']>;
  mainAddress?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  serviceProviderID: Scalars['UUID']['output'];
  state?: Maybe<Scalars['String']['output']>;
  tin?: Maybe<Scalars['String']['output']>;
};

export type BooleanOperationFilterInput = {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  neq?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BranchOfficeDto = {
  __typename?: 'BranchOfficeDTO';
  branchOfficeCode?: Maybe<Scalars['String']['output']>;
  branchOfficeID: Scalars['ID']['output'];
  description?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  portID?: Maybe<Scalars['String']['output']>;
  serviceProviderID: Scalars['ID']['output'];
  serviceTypes?: Maybe<Array<Maybe<BranchOfficeServiceTypesDto>>>;
  verified: Scalars['Boolean']['output'];
};

export type BranchOfficeDtoFilterInput = {
  and?: InputMaybe<Array<BranchOfficeDtoFilterInput>>;
  branchOfficeCode?: InputMaybe<StringOperationFilterInput>;
  branchOfficeID?: InputMaybe<UuidOperationFilterInput>;
  description?: InputMaybe<StringOperationFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<BranchOfficeDtoFilterInput>>;
  portID?: InputMaybe<StringOperationFilterInput>;
  serviceProviderID?: InputMaybe<UuidOperationFilterInput>;
  serviceTypes?: InputMaybe<ListFilterInputTypeOfBranchOfficeServiceTypesDtoFilterInput>;
  verified?: InputMaybe<BooleanOperationFilterInput>;
};

export type BranchOfficeDtoSortInput = {
  branchOfficeCode?: InputMaybe<SortEnumType>;
  branchOfficeID?: InputMaybe<SortEnumType>;
  description?: InputMaybe<SortEnumType>;
  name?: InputMaybe<SortEnumType>;
  portID?: InputMaybe<SortEnumType>;
  serviceProviderID?: InputMaybe<SortEnumType>;
  verified?: InputMaybe<SortEnumType>;
};

export type BranchOfficeServiceTypesDto = {
  __typename?: 'BranchOfficeServiceTypesDTO';
  branchOfficeID: Scalars['ID']['output'];
  serviceTypeID: Scalars['ID']['output'];
};

export type BranchOfficeServiceTypesDtoFilterInput = {
  and?: InputMaybe<Array<BranchOfficeServiceTypesDtoFilterInput>>;
  branchOfficeID?: InputMaybe<UuidOperationFilterInput>;
  or?: InputMaybe<Array<BranchOfficeServiceTypesDtoFilterInput>>;
  serviceTypeID?: InputMaybe<UuidOperationFilterInput>;
};

/** A connection to a list of items. */
export type BranchOfficesConnection = {
  __typename?: 'BranchOfficesConnection';
  /** A list of edges. */
  edges?: Maybe<Array<BranchOfficesEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Maybe<BranchOfficeDto>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

/** An edge in a connection. */
export type BranchOfficesEdge = {
  __typename?: 'BranchOfficesEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<BranchOfficeDto>;
};

export type CertificationDocumentResult = {
  __typename?: 'CertificationDocumentResult';
  name?: Maybe<Scalars['String']['output']>;
};

export type CertificationDocumentResultFilterInput = {
  and?: InputMaybe<Array<CertificationDocumentResultFilterInput>>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<CertificationDocumentResultFilterInput>>;
};

export type CertificationError = Error & {
  __typename?: 'CertificationError';
  message: Scalars['String']['output'];
};

export enum CertificationStatus {
  Approved = 'APPROVED',
  Expired = 'EXPIRED',
  NoDocuments = 'NO_DOCUMENTS',
  Pending = 'PENDING'
}

export type CertificationStatusOperationFilterInput = {
  eq?: InputMaybe<CertificationStatus>;
  in?: InputMaybe<Array<CertificationStatus>>;
  neq?: InputMaybe<CertificationStatus>;
  nin?: InputMaybe<Array<CertificationStatus>>;
};

export type ClassApprovalCreateError = CertificationError;

export type ClassApprovalCreateInput = {
  abbreviation?: InputMaybe<Scalars['String']['input']>;
};

export type ClassApprovalCreatePayload = {
  __typename?: 'ClassApprovalCreatePayload';
  classApprovalResult?: Maybe<ClassApprovalResult>;
  errors?: Maybe<Array<ClassApprovalCreateError>>;
};

export type ClassApprovalDto = {
  __typename?: 'ClassApprovalDTO';
  abbreviations?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  serviceProviderID: Scalars['ID']['output'];
};

export type ClassApprovalDeleteInput = {
  abbreviation?: InputMaybe<Scalars['String']['input']>;
};

export type ClassApprovalDeletePayload = {
  __typename?: 'ClassApprovalDeletePayload';
  classApprovalResult?: Maybe<ClassApprovalResult>;
};

export type ClassApprovalInput = {
  abbreviations: Array<InputMaybe<Scalars['String']['input']>>;
};

export type ClassApprovalPayload = {
  __typename?: 'ClassApprovalPayload';
  classApproval?: Maybe<ClassApprovalDto>;
  errors?: Maybe<Array<Maybe<UserError>>>;
};

export type ClassApprovalPublicResult = {
  __typename?: 'ClassApprovalPublicResult';
  abbreviation?: Maybe<Scalars['String']['output']>;
  documents?: Maybe<Array<Maybe<CertificationDocumentResult>>>;
  expirationDate?: Maybe<Scalars['Date']['output']>;
  serviceProviderId?: Maybe<Scalars['ID']['output']>;
  status: PublicCertificationStatus;
};

export type ClassApprovalPublicResultFilterInput = {
  abbreviation?: InputMaybe<StringOperationFilterInput>;
  and?: InputMaybe<Array<ClassApprovalPublicResultFilterInput>>;
  documents?: InputMaybe<ListFilterInputTypeOfCertificationDocumentResultFilterInput>;
  expirationDate?: InputMaybe<DateOperationFilterInput>;
  or?: InputMaybe<Array<ClassApprovalPublicResultFilterInput>>;
  serviceProviderId?: InputMaybe<UuidOperationFilterInput>;
  status?: InputMaybe<PublicCertificationStatusOperationFilterInput>;
};

export type ClassApprovalRemoveDocumentError = CertificationError;

export type ClassApprovalRemoveDocumentInput = {
  abbreviation: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type ClassApprovalRemoveDocumentPayload = {
  __typename?: 'ClassApprovalRemoveDocumentPayload';
  classApprovalResult?: Maybe<ClassApprovalResult>;
  errors?: Maybe<Array<ClassApprovalRemoveDocumentError>>;
};

export type ClassApprovalRemoveDocumentsError = CertificationError;

export type ClassApprovalRemoveDocumentsInput = {
  abbreviation: Scalars['String']['input'];
  names: Array<InputMaybe<Scalars['String']['input']>>;
};

export type ClassApprovalRemoveDocumentsPayload = {
  __typename?: 'ClassApprovalRemoveDocumentsPayload';
  classApprovalResult?: Maybe<ClassApprovalResult>;
  errors?: Maybe<Array<ClassApprovalRemoveDocumentsError>>;
};

export type ClassApprovalResult = {
  __typename?: 'ClassApprovalResult';
  abbreviation?: Maybe<Scalars['String']['output']>;
  documents?: Maybe<Array<Maybe<CertificationDocumentResult>>>;
  expirationDate?: Maybe<Scalars['Date']['output']>;
  serviceProviderId?: Maybe<Scalars['ID']['output']>;
  status: CertificationStatus;
};

export type ClassApprovalResultFilterInput = {
  abbreviation?: InputMaybe<StringOperationFilterInput>;
  and?: InputMaybe<Array<ClassApprovalResultFilterInput>>;
  documents?: InputMaybe<ListFilterInputTypeOfCertificationDocumentResultFilterInput>;
  expirationDate?: InputMaybe<DateOperationFilterInput>;
  or?: InputMaybe<Array<ClassApprovalResultFilterInput>>;
  serviceProviderId?: InputMaybe<UuidOperationFilterInput>;
  status?: InputMaybe<CertificationStatusOperationFilterInput>;
};

export type DateOperationFilterInput = {
  eq?: InputMaybe<Scalars['Date']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  neq?: InputMaybe<Scalars['Date']['input']>;
  ngt?: InputMaybe<Scalars['Date']['input']>;
  ngte?: InputMaybe<Scalars['Date']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  nlt?: InputMaybe<Scalars['Date']['input']>;
  nlte?: InputMaybe<Scalars['Date']['input']>;
};

export type DeleteBranchOfficeInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type DeleteBranchOfficePayload = {
  __typename?: 'DeleteBranchOfficePayload';
  branchOffice?: Maybe<BranchOfficeDto>;
  errors?: Maybe<Array<Maybe<UserError>>>;
};

export type DeleteTripInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type DeleteTripPayloadBase = {
  __typename?: 'DeleteTripPayloadBase';
  errors?: Maybe<Array<Maybe<UserError>>>;
  trip?: Maybe<TripDto>;
};

export type Error = {
  message: Scalars['String']['output'];
};

export type FloatOperationFilterInput = {
  eq?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  neq?: InputMaybe<Scalars['Float']['input']>;
  ngt?: InputMaybe<Scalars['Float']['input']>;
  ngte?: InputMaybe<Scalars['Float']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  nlt?: InputMaybe<Scalars['Float']['input']>;
  nlte?: InputMaybe<Scalars['Float']['input']>;
};

export type GetClassApprovalByAbbreviationInput = {
  abbreviation: Scalars['String']['input'];
};

export type GetIsoCertificationByIdInput = {
  isoCertificationID?: InputMaybe<Scalars['ID']['input']>;
};

export type GetMakersApprovalByIdInput = {
  makersApprovalID?: InputMaybe<Scalars['ID']['input']>;
};

export type HasServiceProviderBillingDetailsResponse = {
  __typename?: 'HasServiceProviderBillingDetailsResponse';
  hasBillingDetails: Scalars['Boolean']['output'];
};

export type IntOperationFilterInput = {
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  neq?: InputMaybe<Scalars['Int']['input']>;
  ngt?: InputMaybe<Scalars['Int']['input']>;
  ngte?: InputMaybe<Scalars['Int']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  nlt?: InputMaybe<Scalars['Int']['input']>;
  nlte?: InputMaybe<Scalars['Int']['input']>;
};

export type IsoCertificationCreateError = CertificationError;

export type IsoCertificationCreateInput = {
  isoCertificationID?: InputMaybe<Scalars['ID']['input']>;
};

export type IsoCertificationCreatePayload = {
  __typename?: 'IsoCertificationCreatePayload';
  errors?: Maybe<Array<IsoCertificationCreateError>>;
  isoCertificationResult?: Maybe<IsoCertificationResult>;
};

export type IsoCertificationDto = {
  __typename?: 'IsoCertificationDTO';
  isoCertifications?: Maybe<Array<Scalars['ID']['output']>>;
  serviceProviderID: Scalars['ID']['output'];
};

export type IsoCertificationDeleteInput = {
  isoCertificationID?: InputMaybe<Scalars['ID']['input']>;
};

export type IsoCertificationDeletePayload = {
  __typename?: 'IsoCertificationDeletePayload';
  isoCertificationResult?: Maybe<IsoCertificationResult>;
};

export type IsoCertificationInput = {
  isoCertificationIDs?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type IsoCertificationPayload = {
  __typename?: 'IsoCertificationPayload';
  errors?: Maybe<Array<Maybe<UserError>>>;
  isoCertification?: Maybe<IsoCertificationDto>;
};

export type IsoCertificationPublicResult = {
  __typename?: 'IsoCertificationPublicResult';
  documents?: Maybe<Array<Maybe<CertificationDocumentResult>>>;
  expirationDate?: Maybe<Scalars['Date']['output']>;
  isoCertificationId?: Maybe<Scalars['ID']['output']>;
  serviceProviderId?: Maybe<Scalars['ID']['output']>;
  status: PublicCertificationStatus;
};

export type IsoCertificationPublicResultFilterInput = {
  and?: InputMaybe<Array<IsoCertificationPublicResultFilterInput>>;
  documents?: InputMaybe<ListFilterInputTypeOfCertificationDocumentResultFilterInput>;
  expirationDate?: InputMaybe<DateOperationFilterInput>;
  isoCertificationId?: InputMaybe<UuidOperationFilterInput>;
  or?: InputMaybe<Array<IsoCertificationPublicResultFilterInput>>;
  serviceProviderId?: InputMaybe<UuidOperationFilterInput>;
  status?: InputMaybe<PublicCertificationStatusOperationFilterInput>;
};

export type IsoCertificationRemoveDocumentError = CertificationError;

export type IsoCertificationRemoveDocumentInput = {
  isoCertificationID?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
};

export type IsoCertificationRemoveDocumentPayload = {
  __typename?: 'IsoCertificationRemoveDocumentPayload';
  errors?: Maybe<Array<IsoCertificationRemoveDocumentError>>;
  isoCertificationResult?: Maybe<IsoCertificationResult>;
};

export type IsoCertificationRemoveDocumentsError = CertificationError;

export type IsoCertificationRemoveDocumentsInput = {
  isoCertificationID?: InputMaybe<Scalars['ID']['input']>;
  names: Array<InputMaybe<Scalars['String']['input']>>;
};

export type IsoCertificationRemoveDocumentsPayload = {
  __typename?: 'IsoCertificationRemoveDocumentsPayload';
  errors?: Maybe<Array<IsoCertificationRemoveDocumentsError>>;
  isoCertificationResult?: Maybe<IsoCertificationResult>;
};

export type IsoCertificationResult = {
  __typename?: 'IsoCertificationResult';
  documents?: Maybe<Array<Maybe<CertificationDocumentResult>>>;
  expirationDate?: Maybe<Scalars['Date']['output']>;
  isoCertificationId?: Maybe<Scalars['ID']['output']>;
  serviceProviderId?: Maybe<Scalars['ID']['output']>;
  status: CertificationStatus;
};

export type IsoCertificationResultFilterInput = {
  and?: InputMaybe<Array<IsoCertificationResultFilterInput>>;
  documents?: InputMaybe<ListFilterInputTypeOfCertificationDocumentResultFilterInput>;
  expirationDate?: InputMaybe<DateOperationFilterInput>;
  isoCertificationId?: InputMaybe<UuidOperationFilterInput>;
  or?: InputMaybe<Array<IsoCertificationResultFilterInput>>;
  serviceProviderId?: InputMaybe<UuidOperationFilterInput>;
  status?: InputMaybe<CertificationStatusOperationFilterInput>;
};

export type LngExperienceDto = {
  __typename?: 'LNGExperienceDTO';
  lngExperiences?: Maybe<Array<Scalars['UUID']['output']>>;
  serviceProviderID: Scalars['UUID']['output'];
};

export type ListFilterInputTypeOfBranchOfficeDtoFilterInput = {
  all?: InputMaybe<BranchOfficeDtoFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<BranchOfficeDtoFilterInput>;
  some?: InputMaybe<BranchOfficeDtoFilterInput>;
};

export type ListFilterInputTypeOfBranchOfficeServiceTypesDtoFilterInput = {
  all?: InputMaybe<BranchOfficeServiceTypesDtoFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<BranchOfficeServiceTypesDtoFilterInput>;
  some?: InputMaybe<BranchOfficeServiceTypesDtoFilterInput>;
};

export type ListFilterInputTypeOfCertificationDocumentResultFilterInput = {
  all?: InputMaybe<CertificationDocumentResultFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<CertificationDocumentResultFilterInput>;
  some?: InputMaybe<CertificationDocumentResultFilterInput>;
};

export type ListFilterInputTypeOfClassApprovalPublicResultFilterInput = {
  all?: InputMaybe<ClassApprovalPublicResultFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<ClassApprovalPublicResultFilterInput>;
  some?: InputMaybe<ClassApprovalPublicResultFilterInput>;
};

export type ListFilterInputTypeOfClassApprovalResultFilterInput = {
  all?: InputMaybe<ClassApprovalResultFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<ClassApprovalResultFilterInput>;
  some?: InputMaybe<ClassApprovalResultFilterInput>;
};

export type ListFilterInputTypeOfIsoCertificationPublicResultFilterInput = {
  all?: InputMaybe<IsoCertificationPublicResultFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<IsoCertificationPublicResultFilterInput>;
  some?: InputMaybe<IsoCertificationPublicResultFilterInput>;
};

export type ListFilterInputTypeOfIsoCertificationResultFilterInput = {
  all?: InputMaybe<IsoCertificationResultFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<IsoCertificationResultFilterInput>;
  some?: InputMaybe<IsoCertificationResultFilterInput>;
};

export type ListFilterInputTypeOfLngExperienceResultFilterInput = {
  all?: InputMaybe<LngExperienceResultFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<LngExperienceResultFilterInput>;
  some?: InputMaybe<LngExperienceResultFilterInput>;
};

export type ListFilterInputTypeOfMakersApprovalPublicResultFilterInput = {
  all?: InputMaybe<MakersApprovalPublicResultFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<MakersApprovalPublicResultFilterInput>;
  some?: InputMaybe<MakersApprovalPublicResultFilterInput>;
};

export type ListFilterInputTypeOfMakersApprovalResultFilterInput = {
  all?: InputMaybe<MakersApprovalResultFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<MakersApprovalResultFilterInput>;
  some?: InputMaybe<MakersApprovalResultFilterInput>;
};

export type LngExperienceResult = {
  __typename?: 'LngExperienceResult';
  serviceCaseID: Scalars['UUID']['output'];
  serviceProviderID: Scalars['UUID']['output'];
};

export type LngExperienceResultFilterInput = {
  and?: InputMaybe<Array<LngExperienceResultFilterInput>>;
  or?: InputMaybe<Array<LngExperienceResultFilterInput>>;
  serviceCaseID?: InputMaybe<UuidOperationFilterInput>;
  serviceProviderID?: InputMaybe<UuidOperationFilterInput>;
};

export type MakersApprovalCreateError = CertificationError;

export type MakersApprovalCreateInput = {
  makersApprovalID?: InputMaybe<Scalars['ID']['input']>;
};

export type MakersApprovalCreatePayload = {
  __typename?: 'MakersApprovalCreatePayload';
  errors?: Maybe<Array<MakersApprovalCreateError>>;
  makersApprovalResult?: Maybe<MakersApprovalResult>;
};

export type MakersApprovalDto = {
  __typename?: 'MakersApprovalDTO';
  makersApprovals?: Maybe<Array<Scalars['ID']['output']>>;
  serviceProviderID: Scalars['ID']['output'];
};

export type MakersApprovalDeleteInput = {
  makersApprovalID?: InputMaybe<Scalars['ID']['input']>;
};

export type MakersApprovalDeletePayload = {
  __typename?: 'MakersApprovalDeletePayload';
  makersApprovalResult?: Maybe<MakersApprovalResult>;
};

export type MakersApprovalInput = {
  makersApprovalIDs?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type MakersApprovalPayload = {
  __typename?: 'MakersApprovalPayload';
  errors?: Maybe<Array<Maybe<UserError>>>;
  makersApproval?: Maybe<MakersApprovalDto>;
};

export type MakersApprovalPublicResult = {
  __typename?: 'MakersApprovalPublicResult';
  documents?: Maybe<Array<Maybe<CertificationDocumentResult>>>;
  expirationDate?: Maybe<Scalars['Date']['output']>;
  makersApprovalId?: Maybe<Scalars['ID']['output']>;
  serviceProviderId?: Maybe<Scalars['ID']['output']>;
  status: PublicCertificationStatus;
};

export type MakersApprovalPublicResultFilterInput = {
  and?: InputMaybe<Array<MakersApprovalPublicResultFilterInput>>;
  documents?: InputMaybe<ListFilterInputTypeOfCertificationDocumentResultFilterInput>;
  expirationDate?: InputMaybe<DateOperationFilterInput>;
  makersApprovalId?: InputMaybe<UuidOperationFilterInput>;
  or?: InputMaybe<Array<MakersApprovalPublicResultFilterInput>>;
  serviceProviderId?: InputMaybe<UuidOperationFilterInput>;
  status?: InputMaybe<PublicCertificationStatusOperationFilterInput>;
};

export type MakersApprovalRemoveDocumentError = CertificationError;

export type MakersApprovalRemoveDocumentInput = {
  makersApprovalID?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
};

export type MakersApprovalRemoveDocumentPayload = {
  __typename?: 'MakersApprovalRemoveDocumentPayload';
  errors?: Maybe<Array<MakersApprovalRemoveDocumentError>>;
  makersApprovalResult?: Maybe<MakersApprovalResult>;
};

export type MakersApprovalRemoveDocumentsError = CertificationError;

export type MakersApprovalRemoveDocumentsInput = {
  makersApprovalID?: InputMaybe<Scalars['ID']['input']>;
  names: Array<InputMaybe<Scalars['String']['input']>>;
};

export type MakersApprovalRemoveDocumentsPayload = {
  __typename?: 'MakersApprovalRemoveDocumentsPayload';
  errors?: Maybe<Array<MakersApprovalRemoveDocumentsError>>;
  makersApprovalResult?: Maybe<MakersApprovalResult>;
};

export type MakersApprovalResult = {
  __typename?: 'MakersApprovalResult';
  documents?: Maybe<Array<Maybe<CertificationDocumentResult>>>;
  expirationDate?: Maybe<Scalars['Date']['output']>;
  makersApprovalId?: Maybe<Scalars['ID']['output']>;
  serviceProviderId?: Maybe<Scalars['ID']['output']>;
  status: CertificationStatus;
};

export type MakersApprovalResultFilterInput = {
  and?: InputMaybe<Array<MakersApprovalResultFilterInput>>;
  documents?: InputMaybe<ListFilterInputTypeOfCertificationDocumentResultFilterInput>;
  expirationDate?: InputMaybe<DateOperationFilterInput>;
  makersApprovalId?: InputMaybe<UuidOperationFilterInput>;
  or?: InputMaybe<Array<MakersApprovalResultFilterInput>>;
  serviceProviderId?: InputMaybe<UuidOperationFilterInput>;
  status?: InputMaybe<CertificationStatusOperationFilterInput>;
};

export type ManagementClassApprovalApproveError = CertificationError;

export type ManagementClassApprovalApproveInput = {
  abbreviation: Scalars['String']['input'];
  serviceProviderID?: InputMaybe<Scalars['ID']['input']>;
};

export type ManagementClassApprovalApprovePayload = {
  __typename?: 'ManagementClassApprovalApprovePayload';
  classApprovalResult?: Maybe<ClassApprovalResult>;
  errors?: Maybe<Array<ManagementClassApprovalApproveError>>;
};

export type ManagementClassApprovalCreateError = CertificationError;

export type ManagementClassApprovalCreateInput = {
  abbreviation: Scalars['String']['input'];
  expiresAt?: InputMaybe<Scalars['Date']['input']>;
  serviceProviderID?: InputMaybe<Scalars['ID']['input']>;
};

export type ManagementClassApprovalCreatePayload = {
  __typename?: 'ManagementClassApprovalCreatePayload';
  classApprovalResult?: Maybe<ClassApprovalResult>;
  errors?: Maybe<Array<ManagementClassApprovalCreateError>>;
};

export type ManagementClassApprovalDeleteInput = {
  abbreviation: Scalars['String']['input'];
  serviceProviderID?: InputMaybe<Scalars['ID']['input']>;
};

export type ManagementClassApprovalDeletePayload = {
  __typename?: 'ManagementClassApprovalDeletePayload';
  classApprovalResult?: Maybe<ClassApprovalResult>;
};

export type ManagementClassApprovalEditExpirationDateError = CertificationError;

export type ManagementClassApprovalEditExpirationDateInput = {
  abbreviation?: InputMaybe<Scalars['ID']['input']>;
  expiresAt?: InputMaybe<Scalars['Date']['input']>;
  serviceProviderID?: InputMaybe<Scalars['ID']['input']>;
};

export type ManagementClassApprovalEditExpirationDatePayload = {
  __typename?: 'ManagementClassApprovalEditExpirationDatePayload';
  classApprovalResult?: Maybe<ClassApprovalResult>;
  errors?: Maybe<Array<ManagementClassApprovalEditExpirationDateError>>;
};

export type ManagementClassApprovalRemoveDocumentError = CertificationError;

export type ManagementClassApprovalRemoveDocumentInput = {
  abbreviation: Scalars['String']['input'];
  name: Scalars['String']['input'];
  serviceProviderID?: InputMaybe<Scalars['ID']['input']>;
};

export type ManagementClassApprovalRemoveDocumentPayload = {
  __typename?: 'ManagementClassApprovalRemoveDocumentPayload';
  classApprovalResult?: Maybe<ClassApprovalResult>;
  errors?: Maybe<Array<ManagementClassApprovalRemoveDocumentError>>;
};

export type ManagementClassApprovalRemoveDocumentsError = CertificationError;

export type ManagementClassApprovalRemoveDocumentsInput = {
  abbreviation: Scalars['String']['input'];
  names: Array<InputMaybe<Scalars['String']['input']>>;
  serviceProviderID?: InputMaybe<Scalars['ID']['input']>;
};

export type ManagementClassApprovalRemoveDocumentsPayload = {
  __typename?: 'ManagementClassApprovalRemoveDocumentsPayload';
  classApprovalResult?: Maybe<ClassApprovalResult>;
  errors?: Maybe<Array<ManagementClassApprovalRemoveDocumentsError>>;
};

/** A connection to a list of items. */
export type ManagementGetAllServiceProvidersConnection = {
  __typename?: 'ManagementGetAllServiceProvidersConnection';
  /** A list of edges. */
  edges?: Maybe<Array<ManagementGetAllServiceProvidersEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Maybe<ServiceProviderDto>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

/** An edge in a connection. */
export type ManagementGetAllServiceProvidersEdge = {
  __typename?: 'ManagementGetAllServiceProvidersEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<ServiceProviderDto>;
};

export type ManagementGetClassApprovalByAbbreviationInput = {
  abbreviation: Scalars['String']['input'];
  serviceProviderID?: InputMaybe<Scalars['ID']['input']>;
};

export type ManagementGetIsoCertificationByIdInput = {
  isoCertificationID?: InputMaybe<Scalars['ID']['input']>;
  serviceProviderID?: InputMaybe<Scalars['ID']['input']>;
};

export type ManagementGetMakersApprovalByIdInput = {
  makersApprovalID?: InputMaybe<Scalars['ID']['input']>;
  serviceProviderID?: InputMaybe<Scalars['ID']['input']>;
};

/** A connection to a list of items. */
export type ManagementGetServiceProviderProfilesConnection = {
  __typename?: 'ManagementGetServiceProviderProfilesConnection';
  /** A list of edges. */
  edges?: Maybe<Array<ManagementGetServiceProviderProfilesEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Maybe<ManagementServiceProviderProfileResult>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

/** An edge in a connection. */
export type ManagementGetServiceProviderProfilesEdge = {
  __typename?: 'ManagementGetServiceProviderProfilesEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<ManagementServiceProviderProfileResult>;
};

/** A connection to a list of items. */
export type ManagementGetServiceProviderPublicProfilesConnection = {
  __typename?: 'ManagementGetServiceProviderPublicProfilesConnection';
  /** A list of edges. */
  edges?: Maybe<Array<ManagementGetServiceProviderPublicProfilesEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Maybe<ServiceProviderPublicProfileResult>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

/** An edge in a connection. */
export type ManagementGetServiceProviderPublicProfilesEdge = {
  __typename?: 'ManagementGetServiceProviderPublicProfilesEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<ServiceProviderPublicProfileResult>;
};

/** A connection to a list of items. */
export type ManagementGetServiceProvidersWithPendingCertificationsConnection = {
  __typename?: 'ManagementGetServiceProvidersWithPendingCertificationsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<ManagementGetServiceProvidersWithPendingCertificationsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Maybe<ManagementServiceProviderProfileResult>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

/** An edge in a connection. */
export type ManagementGetServiceProvidersWithPendingCertificationsEdge = {
  __typename?: 'ManagementGetServiceProvidersWithPendingCertificationsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<ManagementServiceProviderProfileResult>;
};

export type ManagementIsoCertificationApproveError = CertificationError;

export type ManagementIsoCertificationApproveInput = {
  isoCertificationID?: InputMaybe<Scalars['ID']['input']>;
  serviceProviderID?: InputMaybe<Scalars['ID']['input']>;
};

export type ManagementIsoCertificationApprovePayload = {
  __typename?: 'ManagementIsoCertificationApprovePayload';
  errors?: Maybe<Array<ManagementIsoCertificationApproveError>>;
  isoCertificationResult?: Maybe<IsoCertificationResult>;
};

export type ManagementIsoCertificationCreateError = CertificationError;

export type ManagementIsoCertificationCreateInput = {
  expiresAt?: InputMaybe<Scalars['Date']['input']>;
  isoCertificationID?: InputMaybe<Scalars['ID']['input']>;
  serviceProviderID?: InputMaybe<Scalars['ID']['input']>;
};

export type ManagementIsoCertificationCreatePayload = {
  __typename?: 'ManagementIsoCertificationCreatePayload';
  errors?: Maybe<Array<ManagementIsoCertificationCreateError>>;
  isoCertificationResult?: Maybe<IsoCertificationResult>;
};

export type ManagementIsoCertificationDeleteInput = {
  isoCertificationID?: InputMaybe<Scalars['ID']['input']>;
  serviceProviderID?: InputMaybe<Scalars['ID']['input']>;
};

export type ManagementIsoCertificationDeletePayload = {
  __typename?: 'ManagementIsoCertificationDeletePayload';
  isoCertificationResult?: Maybe<IsoCertificationResult>;
};

export type ManagementIsoCertificationEditExpirationDateError = CertificationError;

export type ManagementIsoCertificationEditExpirationDateInput = {
  expiresAt?: InputMaybe<Scalars['Date']['input']>;
  isoCertificationID?: InputMaybe<Scalars['ID']['input']>;
  serviceProviderID?: InputMaybe<Scalars['ID']['input']>;
};

export type ManagementIsoCertificationEditExpirationDatePayload = {
  __typename?: 'ManagementIsoCertificationEditExpirationDatePayload';
  errors?: Maybe<Array<ManagementIsoCertificationEditExpirationDateError>>;
  isoCertificationResult?: Maybe<IsoCertificationResult>;
};

export type ManagementIsoCertificationRemoveDocumentError = CertificationError;

export type ManagementIsoCertificationRemoveDocumentInput = {
  isoCertificationID?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
  serviceProviderID?: InputMaybe<Scalars['ID']['input']>;
};

export type ManagementIsoCertificationRemoveDocumentPayload = {
  __typename?: 'ManagementIsoCertificationRemoveDocumentPayload';
  errors?: Maybe<Array<ManagementIsoCertificationRemoveDocumentError>>;
  isoCertificationResult?: Maybe<IsoCertificationResult>;
};

export type ManagementIsoCertificationRemoveDocumentsError = CertificationError;

export type ManagementIsoCertificationRemoveDocumentsInput = {
  isoCertificationID?: InputMaybe<Scalars['ID']['input']>;
  names: Array<InputMaybe<Scalars['String']['input']>>;
  serviceProviderID?: InputMaybe<Scalars['ID']['input']>;
};

export type ManagementIsoCertificationRemoveDocumentsPayload = {
  __typename?: 'ManagementIsoCertificationRemoveDocumentsPayload';
  errors?: Maybe<Array<ManagementIsoCertificationRemoveDocumentsError>>;
  isoCertificationResult?: Maybe<IsoCertificationResult>;
};

export type ManagementMakersApprovalApproveError = CertificationError;

export type ManagementMakersApprovalApproveInput = {
  makersApprovalID?: InputMaybe<Scalars['ID']['input']>;
  serviceProviderID?: InputMaybe<Scalars['ID']['input']>;
};

export type ManagementMakersApprovalApprovePayload = {
  __typename?: 'ManagementMakersApprovalApprovePayload';
  errors?: Maybe<Array<ManagementMakersApprovalApproveError>>;
  makersApprovalResult?: Maybe<MakersApprovalResult>;
};

export type ManagementMakersApprovalCreateError = CertificationError;

export type ManagementMakersApprovalCreateInput = {
  expiresAt?: InputMaybe<Scalars['Date']['input']>;
  makersApprovalID?: InputMaybe<Scalars['ID']['input']>;
  serviceProviderID?: InputMaybe<Scalars['ID']['input']>;
};

export type ManagementMakersApprovalCreatePayload = {
  __typename?: 'ManagementMakersApprovalCreatePayload';
  errors?: Maybe<Array<ManagementMakersApprovalCreateError>>;
  makersApprovalResult?: Maybe<MakersApprovalResult>;
};

export type ManagementMakersApprovalDeleteInput = {
  makersApprovalID?: InputMaybe<Scalars['ID']['input']>;
  serviceProviderID?: InputMaybe<Scalars['ID']['input']>;
};

export type ManagementMakersApprovalDeletePayload = {
  __typename?: 'ManagementMakersApprovalDeletePayload';
  makersApprovalResult?: Maybe<MakersApprovalResult>;
};

export type ManagementMakersApprovalEditExpirationDateError = CertificationError;

export type ManagementMakersApprovalEditExpirationDateInput = {
  expiresAt?: InputMaybe<Scalars['Date']['input']>;
  makersApprovalID?: InputMaybe<Scalars['ID']['input']>;
  serviceProviderID?: InputMaybe<Scalars['ID']['input']>;
};

export type ManagementMakersApprovalEditExpirationDatePayload = {
  __typename?: 'ManagementMakersApprovalEditExpirationDatePayload';
  errors?: Maybe<Array<ManagementMakersApprovalEditExpirationDateError>>;
  makersApprovalResult?: Maybe<MakersApprovalResult>;
};

export type ManagementMakersApprovalRemoveDocumentError = CertificationError;

export type ManagementMakersApprovalRemoveDocumentInput = {
  makersApprovalID?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
  serviceProviderID?: InputMaybe<Scalars['ID']['input']>;
};

export type ManagementMakersApprovalRemoveDocumentPayload = {
  __typename?: 'ManagementMakersApprovalRemoveDocumentPayload';
  errors?: Maybe<Array<ManagementMakersApprovalRemoveDocumentError>>;
  makersApprovalResult?: Maybe<MakersApprovalResult>;
};

export type ManagementMakersApprovalRemoveDocumentsError = CertificationError;

export type ManagementMakersApprovalRemoveDocumentsInput = {
  makersApprovalID?: InputMaybe<Scalars['ID']['input']>;
  names: Array<InputMaybe<Scalars['String']['input']>>;
  serviceProviderID?: InputMaybe<Scalars['ID']['input']>;
};

export type ManagementMakersApprovalRemoveDocumentsPayload = {
  __typename?: 'ManagementMakersApprovalRemoveDocumentsPayload';
  errors?: Maybe<Array<ManagementMakersApprovalRemoveDocumentsError>>;
  makersApprovalResult?: Maybe<MakersApprovalResult>;
};

export type ManagementServiceProviderProfileResult = {
  __typename?: 'ManagementServiceProviderProfileResult';
  address?: Maybe<AddressDto>;
  branchOffices?: Maybe<Array<Maybe<BranchOfficeDto>>>;
  classApprovals?: Maybe<Array<Maybe<ClassApprovalResult>>>;
  description?: Maybe<Scalars['String']['output']>;
  isoCertifications?: Maybe<Array<Maybe<IsoCertificationResult>>>;
  lngExperiences?: Maybe<Array<Maybe<LngExperienceResult>>>;
  logo?: Maybe<Scalars['String']['output']>;
  makersApprovals?: Maybe<Array<Maybe<MakersApprovalResult>>>;
  name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  rating?: Maybe<RatingDto>;
  serviceProviderID?: Maybe<Scalars['ID']['output']>;
};

export type ManagementServiceProviderProfileResultFilterInput = {
  address?: InputMaybe<AddressDtoFilterInput>;
  and?: InputMaybe<Array<ManagementServiceProviderProfileResultFilterInput>>;
  branchOffices?: InputMaybe<ListFilterInputTypeOfBranchOfficeDtoFilterInput>;
  classApprovals?: InputMaybe<ListFilterInputTypeOfClassApprovalResultFilterInput>;
  description?: InputMaybe<StringOperationFilterInput>;
  isoCertifications?: InputMaybe<ListFilterInputTypeOfIsoCertificationResultFilterInput>;
  lngExperiences?: InputMaybe<ListFilterInputTypeOfLngExperienceResultFilterInput>;
  logo?: InputMaybe<StringOperationFilterInput>;
  makersApprovals?: InputMaybe<ListFilterInputTypeOfMakersApprovalResultFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<ManagementServiceProviderProfileResultFilterInput>>;
  phone?: InputMaybe<StringOperationFilterInput>;
  rating?: InputMaybe<RatingDtoFilterInput>;
  serviceProviderID?: InputMaybe<UuidOperationFilterInput>;
};

export type ManagementServiceProviderProfileResultSortInput = {
  address?: InputMaybe<AddressDtoSortInput>;
  description?: InputMaybe<SortEnumType>;
  logo?: InputMaybe<SortEnumType>;
  name?: InputMaybe<SortEnumType>;
  phone?: InputMaybe<SortEnumType>;
  rating?: InputMaybe<RatingDtoSortInput>;
  serviceProviderID?: InputMaybe<SortEnumType>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addBranchOffice?: Maybe<AddBranchOfficePayload>;
  addTrip?: Maybe<AddTripPayloadBase>;
  classApprovalCreate: ClassApprovalCreatePayload;
  classApprovalDelete: ClassApprovalDeletePayload;
  classApprovalRemoveDocument: ClassApprovalRemoveDocumentPayload;
  classApprovalRemoveDocuments: ClassApprovalRemoveDocumentsPayload;
  deleteBranchOffice?: Maybe<DeleteBranchOfficePayload>;
  deleteTrip?: Maybe<DeleteTripPayloadBase>;
  isoCertificationCreate: IsoCertificationCreatePayload;
  isoCertificationDelete: IsoCertificationDeletePayload;
  isoCertificationRemoveDocument: IsoCertificationRemoveDocumentPayload;
  isoCertificationRemoveDocuments: IsoCertificationRemoveDocumentsPayload;
  makersApprovalCreate: MakersApprovalCreatePayload;
  makersApprovalDelete: MakersApprovalDeletePayload;
  makersApprovalRemoveDocument: MakersApprovalRemoveDocumentPayload;
  makersApprovalRemoveDocuments: MakersApprovalRemoveDocumentsPayload;
  managementClassApprovalApprove: ManagementClassApprovalApprovePayload;
  managementClassApprovalCreate: ManagementClassApprovalCreatePayload;
  managementClassApprovalDelete: ManagementClassApprovalDeletePayload;
  managementClassApprovalEditExpirationDate: ManagementClassApprovalEditExpirationDatePayload;
  managementClassApprovalRemoveDocument: ManagementClassApprovalRemoveDocumentPayload;
  managementClassApprovalRemoveDocuments: ManagementClassApprovalRemoveDocumentsPayload;
  managementIsoCertificationApprove: ManagementIsoCertificationApprovePayload;
  managementIsoCertificationCreate: ManagementIsoCertificationCreatePayload;
  managementIsoCertificationDelete: ManagementIsoCertificationDeletePayload;
  managementIsoCertificationEditExpirationDate: ManagementIsoCertificationEditExpirationDatePayload;
  managementIsoCertificationRemoveDocument: ManagementIsoCertificationRemoveDocumentPayload;
  managementIsoCertificationRemoveDocuments: ManagementIsoCertificationRemoveDocumentsPayload;
  managementMakersApprovalApprove: ManagementMakersApprovalApprovePayload;
  managementMakersApprovalCreate: ManagementMakersApprovalCreatePayload;
  managementMakersApprovalDelete: ManagementMakersApprovalDeletePayload;
  managementMakersApprovalEditExpirationDate: ManagementMakersApprovalEditExpirationDatePayload;
  managementMakersApprovalRemoveDocument: ManagementMakersApprovalRemoveDocumentPayload;
  managementMakersApprovalRemoveDocuments: ManagementMakersApprovalRemoveDocumentsPayload;
  upSertClassApproval?: Maybe<ClassApprovalPayload>;
  upSertIsoCertification?: Maybe<IsoCertificationPayload>;
  upSertMakersApproval?: Maybe<MakersApprovalPayload>;
  updateBranchOffice?: Maybe<UpdateBranchOfficePayload>;
  updateServiceProvider?: Maybe<UpdateServiceProviderPayload>;
  updateTrip?: Maybe<UpdateTripPayloadBase>;
  upsertBillingDetails: UpsertBillingDetailsPayload;
};


export type MutationAddBranchOfficeArgs = {
  input: AddBranchOfficeInput;
};


export type MutationAddTripArgs = {
  input?: InputMaybe<AddTripInput>;
};


export type MutationClassApprovalCreateArgs = {
  input?: InputMaybe<ClassApprovalCreateInput>;
};


export type MutationClassApprovalDeleteArgs = {
  input?: InputMaybe<ClassApprovalDeleteInput>;
};


export type MutationClassApprovalRemoveDocumentArgs = {
  input?: InputMaybe<ClassApprovalRemoveDocumentInput>;
};


export type MutationClassApprovalRemoveDocumentsArgs = {
  input?: InputMaybe<ClassApprovalRemoveDocumentsInput>;
};


export type MutationDeleteBranchOfficeArgs = {
  input: DeleteBranchOfficeInput;
};


export type MutationDeleteTripArgs = {
  input?: InputMaybe<DeleteTripInput>;
};


export type MutationIsoCertificationCreateArgs = {
  input?: InputMaybe<IsoCertificationCreateInput>;
};


export type MutationIsoCertificationDeleteArgs = {
  input?: InputMaybe<IsoCertificationDeleteInput>;
};


export type MutationIsoCertificationRemoveDocumentArgs = {
  input?: InputMaybe<IsoCertificationRemoveDocumentInput>;
};


export type MutationIsoCertificationRemoveDocumentsArgs = {
  input?: InputMaybe<IsoCertificationRemoveDocumentsInput>;
};


export type MutationMakersApprovalCreateArgs = {
  input?: InputMaybe<MakersApprovalCreateInput>;
};


export type MutationMakersApprovalDeleteArgs = {
  input?: InputMaybe<MakersApprovalDeleteInput>;
};


export type MutationMakersApprovalRemoveDocumentArgs = {
  input?: InputMaybe<MakersApprovalRemoveDocumentInput>;
};


export type MutationMakersApprovalRemoveDocumentsArgs = {
  input?: InputMaybe<MakersApprovalRemoveDocumentsInput>;
};


export type MutationManagementClassApprovalApproveArgs = {
  input?: InputMaybe<ManagementClassApprovalApproveInput>;
};


export type MutationManagementClassApprovalCreateArgs = {
  input?: InputMaybe<ManagementClassApprovalCreateInput>;
};


export type MutationManagementClassApprovalDeleteArgs = {
  input?: InputMaybe<ManagementClassApprovalDeleteInput>;
};


export type MutationManagementClassApprovalEditExpirationDateArgs = {
  input?: InputMaybe<ManagementClassApprovalEditExpirationDateInput>;
};


export type MutationManagementClassApprovalRemoveDocumentArgs = {
  input?: InputMaybe<ManagementClassApprovalRemoveDocumentInput>;
};


export type MutationManagementClassApprovalRemoveDocumentsArgs = {
  input?: InputMaybe<ManagementClassApprovalRemoveDocumentsInput>;
};


export type MutationManagementIsoCertificationApproveArgs = {
  input?: InputMaybe<ManagementIsoCertificationApproveInput>;
};


export type MutationManagementIsoCertificationCreateArgs = {
  input?: InputMaybe<ManagementIsoCertificationCreateInput>;
};


export type MutationManagementIsoCertificationDeleteArgs = {
  input?: InputMaybe<ManagementIsoCertificationDeleteInput>;
};


export type MutationManagementIsoCertificationEditExpirationDateArgs = {
  input?: InputMaybe<ManagementIsoCertificationEditExpirationDateInput>;
};


export type MutationManagementIsoCertificationRemoveDocumentArgs = {
  input?: InputMaybe<ManagementIsoCertificationRemoveDocumentInput>;
};


export type MutationManagementIsoCertificationRemoveDocumentsArgs = {
  input?: InputMaybe<ManagementIsoCertificationRemoveDocumentsInput>;
};


export type MutationManagementMakersApprovalApproveArgs = {
  input?: InputMaybe<ManagementMakersApprovalApproveInput>;
};


export type MutationManagementMakersApprovalCreateArgs = {
  input?: InputMaybe<ManagementMakersApprovalCreateInput>;
};


export type MutationManagementMakersApprovalDeleteArgs = {
  input?: InputMaybe<ManagementMakersApprovalDeleteInput>;
};


export type MutationManagementMakersApprovalEditExpirationDateArgs = {
  input?: InputMaybe<ManagementMakersApprovalEditExpirationDateInput>;
};


export type MutationManagementMakersApprovalRemoveDocumentArgs = {
  input?: InputMaybe<ManagementMakersApprovalRemoveDocumentInput>;
};


export type MutationManagementMakersApprovalRemoveDocumentsArgs = {
  input?: InputMaybe<ManagementMakersApprovalRemoveDocumentsInput>;
};


export type MutationUpSertClassApprovalArgs = {
  input?: InputMaybe<ClassApprovalInput>;
};


export type MutationUpSertIsoCertificationArgs = {
  input?: InputMaybe<IsoCertificationInput>;
};


export type MutationUpSertMakersApprovalArgs = {
  input?: InputMaybe<MakersApprovalInput>;
};


export type MutationUpdateBranchOfficeArgs = {
  input: UpdateBranchOfficeInput;
};


export type MutationUpdateServiceProviderArgs = {
  input?: InputMaybe<UpdateServiceProviderInput>;
};


export type MutationUpdateTripArgs = {
  input?: InputMaybe<UpdateTripInput>;
};


export type MutationUpsertBillingDetailsArgs = {
  input?: InputMaybe<UpsertBillingDetailsInput>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** Indicates whether more edges exist following the set defined by the clients arguments. */
  hasNextPage: Scalars['Boolean']['output'];
  /** Indicates whether more edges exist prior the set defined by the clients arguments. */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export enum PublicCertificationStatus {
  Approved = 'APPROVED',
  Else = 'ELSE'
}

export type PublicCertificationStatusOperationFilterInput = {
  eq?: InputMaybe<PublicCertificationStatus>;
  in?: InputMaybe<Array<PublicCertificationStatus>>;
  neq?: InputMaybe<PublicCertificationStatus>;
  nin?: InputMaybe<Array<PublicCertificationStatus>>;
};

export type Query = {
  __typename?: 'Query';
  allServiceProviders?: Maybe<AllServiceProvidersConnection>;
  branchOfficeById?: Maybe<BranchOfficeDto>;
  branchOffices?: Maybe<BranchOfficesConnection>;
  classApprovalByAbbreviation?: Maybe<ClassApprovalResult>;
  classApprovals?: Maybe<Array<Maybe<ClassApprovalResult>>>;
  isoCertificationById?: Maybe<IsoCertificationResult>;
  isoCertifications?: Maybe<Array<Maybe<IsoCertificationResult>>>;
  makersApprovalById?: Maybe<MakersApprovalResult>;
  makersApprovals?: Maybe<Array<Maybe<MakersApprovalResult>>>;
  managementGetAllServiceProviders?: Maybe<ManagementGetAllServiceProvidersConnection>;
  managementGetClassApprovalByAbbreviation?: Maybe<ClassApprovalResult>;
  managementGetIsoCertificationById?: Maybe<IsoCertificationResult>;
  managementGetMakersApprovalById?: Maybe<MakersApprovalResult>;
  managementGetServiceProviderById?: Maybe<ServiceProviderDto>;
  managementGetServiceProviderProfileById?: Maybe<ServiceProviderProfileDto>;
  managementGetServiceProviderProfiles?: Maybe<ManagementGetServiceProviderProfilesConnection>;
  managementGetServiceProviderPublicProfiles?: Maybe<ManagementGetServiceProviderPublicProfilesConnection>;
  managementGetServiceProvidersByIds?: Maybe<Array<Maybe<ServiceProviderDto>>>;
  managementGetServiceProvidersWithPendingCertifications?: Maybe<ManagementGetServiceProvidersWithPendingCertificationsConnection>;
  managementHasServiceProviderBillingDetails?: Maybe<HasServiceProviderBillingDetailsResponse>;
  serviceProvider?: Maybe<ServiceProviderDto>;
  serviceProviderBillingDetails?: Maybe<BillingDetailsResult>;
  serviceProviderById?: Maybe<ServiceProviderDto>;
  serviceProviderProfile?: Maybe<ServiceProviderProfileResult>;
  serviceProviderProfileById?: Maybe<ServiceProviderProfileDto>;
  serviceProviderPublicProfile?: Maybe<ServiceProviderPublicProfileResult>;
  shippingCompanyGetServiceProviderPublicProfiles?: Maybe<ShippingCompanyGetServiceProviderPublicProfilesConnection>;
  tripById?: Maybe<TripDto>;
  trips?: Maybe<TripsConnection>;
  verifiedServiceTypes?: Maybe<Array<Maybe<VerifiedServiceTypeDto>>>;
};


export type QueryAllServiceProvidersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<ServiceProviderDtoSortInput>>;
  where?: InputMaybe<ServiceProviderDtoFilterInput>;
};


export type QueryBranchOfficeByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryBranchOfficesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<BranchOfficeDtoSortInput>>;
  where?: InputMaybe<BranchOfficeDtoFilterInput>;
};


export type QueryClassApprovalByAbbreviationArgs = {
  input?: InputMaybe<GetClassApprovalByAbbreviationInput>;
};


export type QueryIsoCertificationByIdArgs = {
  input?: InputMaybe<GetIsoCertificationByIdInput>;
};


export type QueryMakersApprovalByIdArgs = {
  input?: InputMaybe<GetMakersApprovalByIdInput>;
};


export type QueryManagementGetAllServiceProvidersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<ServiceProviderDtoSortInput>>;
  where?: InputMaybe<ServiceProviderDtoFilterInput>;
};


export type QueryManagementGetClassApprovalByAbbreviationArgs = {
  input?: InputMaybe<ManagementGetClassApprovalByAbbreviationInput>;
};


export type QueryManagementGetIsoCertificationByIdArgs = {
  input?: InputMaybe<ManagementGetIsoCertificationByIdInput>;
};


export type QueryManagementGetMakersApprovalByIdArgs = {
  input?: InputMaybe<ManagementGetMakersApprovalByIdInput>;
};


export type QueryManagementGetServiceProviderByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryManagementGetServiceProviderProfileByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryManagementGetServiceProviderProfilesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<ManagementServiceProviderProfileResultSortInput>>;
  where?: InputMaybe<ManagementServiceProviderProfileResultFilterInput>;
};


export type QueryManagementGetServiceProviderPublicProfilesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<ServiceProviderPublicProfileResultSortInput>>;
  where?: InputMaybe<ServiceProviderPublicProfileResultFilterInput>;
};


export type QueryManagementGetServiceProvidersByIdsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};


export type QueryManagementGetServiceProvidersWithPendingCertificationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<ManagementServiceProviderProfileResultSortInput>>;
  where?: InputMaybe<ManagementServiceProviderProfileResultFilterInput>;
};


export type QueryManagementHasServiceProviderBillingDetailsArgs = {
  serviceProviderId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryServiceProviderByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryServiceProviderProfileByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryShippingCompanyGetServiceProviderPublicProfilesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<ServiceProviderPublicProfileResultSortInput>>;
  where?: InputMaybe<ServiceProviderPublicProfileResultFilterInput>;
};


export type QueryTripByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryTripsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<TripDtoSortInput>>;
  where?: InputMaybe<TripDtoFilterInput>;
};

export type RatingDto = {
  __typename?: 'RatingDTO';
  averageRating: Scalars['Float']['output'];
  count: Scalars['Int']['output'];
};

export type RatingDtoFilterInput = {
  and?: InputMaybe<Array<RatingDtoFilterInput>>;
  averageRating?: InputMaybe<FloatOperationFilterInput>;
  count?: InputMaybe<IntOperationFilterInput>;
  or?: InputMaybe<Array<RatingDtoFilterInput>>;
};

export type RatingDtoSortInput = {
  averageRating?: InputMaybe<SortEnumType>;
  count?: InputMaybe<SortEnumType>;
};

export type ServiceProviderDto = {
  __typename?: 'ServiceProviderDTO';
  address?: Maybe<AddressDto>;
  branchOffices?: Maybe<Array<Maybe<BranchOfficeDto>>>;
  description?: Maybe<Scalars['String']['output']>;
  logo?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  rating?: Maybe<RatingDto>;
  serviceProviderID: Scalars['ID']['output'];
};

export type ServiceProviderDtoFilterInput = {
  address?: InputMaybe<AddressDtoFilterInput>;
  and?: InputMaybe<Array<ServiceProviderDtoFilterInput>>;
  branchOffices?: InputMaybe<ListFilterInputTypeOfBranchOfficeDtoFilterInput>;
  description?: InputMaybe<StringOperationFilterInput>;
  logo?: InputMaybe<StringOperationFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<ServiceProviderDtoFilterInput>>;
  phone?: InputMaybe<StringOperationFilterInput>;
  rating?: InputMaybe<RatingDtoFilterInput>;
  serviceProviderID?: InputMaybe<UuidOperationFilterInput>;
};

export type ServiceProviderDtoSortInput = {
  address?: InputMaybe<AddressDtoSortInput>;
  description?: InputMaybe<SortEnumType>;
  logo?: InputMaybe<SortEnumType>;
  name?: InputMaybe<SortEnumType>;
  phone?: InputMaybe<SortEnumType>;
  rating?: InputMaybe<RatingDtoSortInput>;
  serviceProviderID?: InputMaybe<SortEnumType>;
};

export type ServiceProviderProfileDto = {
  __typename?: 'ServiceProviderProfileDTO';
  address?: Maybe<AddressDto>;
  branchOffices?: Maybe<Array<Maybe<BranchOfficeDto>>>;
  classApprovals?: Maybe<ClassApprovalDto>;
  description?: Maybe<Scalars['String']['output']>;
  isoCertifications?: Maybe<IsoCertificationDto>;
  lngExperiences?: Maybe<LngExperienceDto>;
  logo?: Maybe<Scalars['String']['output']>;
  makersApprovals?: Maybe<MakersApprovalDto>;
  name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  rating?: Maybe<RatingDto>;
  serviceProviderID: Scalars['ID']['output'];
};

export type ServiceProviderProfileResult = {
  __typename?: 'ServiceProviderProfileResult';
  address?: Maybe<AddressDto>;
  branchOffices?: Maybe<Array<Maybe<BranchOfficeDto>>>;
  classApprovals?: Maybe<Array<Maybe<ClassApprovalResult>>>;
  description?: Maybe<Scalars['String']['output']>;
  isoCertifications?: Maybe<Array<Maybe<IsoCertificationResult>>>;
  lngExperiences?: Maybe<Array<Maybe<LngExperienceResult>>>;
  logo?: Maybe<Scalars['String']['output']>;
  makersApprovals?: Maybe<Array<Maybe<MakersApprovalResult>>>;
  name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  rating?: Maybe<RatingDto>;
  serviceProviderID: Scalars['UUID']['output'];
};

export type ServiceProviderPublicProfileResult = {
  __typename?: 'ServiceProviderPublicProfileResult';
  address?: Maybe<AddressDto>;
  branchOffices?: Maybe<Array<Maybe<BranchOfficeDto>>>;
  classApprovals?: Maybe<Array<Maybe<ClassApprovalPublicResult>>>;
  description?: Maybe<Scalars['String']['output']>;
  isoCertifications?: Maybe<Array<Maybe<IsoCertificationPublicResult>>>;
  lngExperiences?: Maybe<Array<Maybe<LngExperienceResult>>>;
  logo?: Maybe<Scalars['String']['output']>;
  makersApprovals?: Maybe<Array<Maybe<MakersApprovalPublicResult>>>;
  name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  rating?: Maybe<RatingDto>;
  serviceProviderID: Scalars['UUID']['output'];
};

export type ServiceProviderPublicProfileResultFilterInput = {
  address?: InputMaybe<AddressDtoFilterInput>;
  and?: InputMaybe<Array<ServiceProviderPublicProfileResultFilterInput>>;
  branchOffices?: InputMaybe<ListFilterInputTypeOfBranchOfficeDtoFilterInput>;
  classApprovals?: InputMaybe<ListFilterInputTypeOfClassApprovalPublicResultFilterInput>;
  description?: InputMaybe<StringOperationFilterInput>;
  isoCertifications?: InputMaybe<ListFilterInputTypeOfIsoCertificationPublicResultFilterInput>;
  lngExperiences?: InputMaybe<ListFilterInputTypeOfLngExperienceResultFilterInput>;
  logo?: InputMaybe<StringOperationFilterInput>;
  makersApprovals?: InputMaybe<ListFilterInputTypeOfMakersApprovalPublicResultFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<ServiceProviderPublicProfileResultFilterInput>>;
  phone?: InputMaybe<StringOperationFilterInput>;
  rating?: InputMaybe<RatingDtoFilterInput>;
  serviceProviderID?: InputMaybe<UuidOperationFilterInput>;
};

export type ServiceProviderPublicProfileResultSortInput = {
  address?: InputMaybe<AddressDtoSortInput>;
  description?: InputMaybe<SortEnumType>;
  logo?: InputMaybe<SortEnumType>;
  name?: InputMaybe<SortEnumType>;
  phone?: InputMaybe<SortEnumType>;
  rating?: InputMaybe<RatingDtoSortInput>;
  serviceProviderID?: InputMaybe<SortEnumType>;
};

/** A connection to a list of items. */
export type ShippingCompanyGetServiceProviderPublicProfilesConnection = {
  __typename?: 'ShippingCompanyGetServiceProviderPublicProfilesConnection';
  /** A list of edges. */
  edges?: Maybe<Array<ShippingCompanyGetServiceProviderPublicProfilesEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Maybe<ServiceProviderPublicProfileResult>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

/** An edge in a connection. */
export type ShippingCompanyGetServiceProviderPublicProfilesEdge = {
  __typename?: 'ShippingCompanyGetServiceProviderPublicProfilesEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<ServiceProviderPublicProfileResult>;
};

export enum SortEnumType {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StringOperationFilterInput = {
  and?: InputMaybe<Array<StringOperationFilterInput>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ncontains?: InputMaybe<Scalars['String']['input']>;
  nendsWith?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nstartsWith?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<StringOperationFilterInput>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type TripDto = {
  __typename?: 'TripDTO';
  from: Scalars['Date']['output'];
  isBookedTrip: Scalars['Boolean']['output'];
  portID?: Maybe<Scalars['String']['output']>;
  serviceProviderID: Scalars['ID']['output'];
  serviceTypeID: Scalars['ID']['output'];
  to: Scalars['Date']['output'];
  tripID: Scalars['ID']['output'];
};

export type TripDtoFilterInput = {
  and?: InputMaybe<Array<TripDtoFilterInput>>;
  from?: InputMaybe<DateOperationFilterInput>;
  isBookedTrip?: InputMaybe<BooleanOperationFilterInput>;
  or?: InputMaybe<Array<TripDtoFilterInput>>;
  portID?: InputMaybe<StringOperationFilterInput>;
  serviceProviderID?: InputMaybe<UuidOperationFilterInput>;
  serviceTypeID?: InputMaybe<UuidOperationFilterInput>;
  to?: InputMaybe<DateOperationFilterInput>;
  tripID?: InputMaybe<UuidOperationFilterInput>;
};

export type TripDtoSortInput = {
  from?: InputMaybe<SortEnumType>;
  isBookedTrip?: InputMaybe<SortEnumType>;
  portID?: InputMaybe<SortEnumType>;
  serviceProviderID?: InputMaybe<SortEnumType>;
  serviceTypeID?: InputMaybe<SortEnumType>;
  to?: InputMaybe<SortEnumType>;
  tripID?: InputMaybe<SortEnumType>;
};

/** A connection to a list of items. */
export type TripsConnection = {
  __typename?: 'TripsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<TripsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Maybe<TripDto>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

/** An edge in a connection. */
export type TripsEdge = {
  __typename?: 'TripsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<TripDto>;
};

export type UpdateBranchOfficeInput = {
  branchOfficeCode: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
  portID: Scalars['String']['input'];
  serviceTypeIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type UpdateBranchOfficePayload = {
  __typename?: 'UpdateBranchOfficePayload';
  branchOffice?: Maybe<BranchOfficeDto>;
  errors?: Maybe<Array<Maybe<UserError>>>;
};

export type UpdateServiceProviderInput = {
  address?: InputMaybe<AddressDtoInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateServiceProviderPayload = {
  __typename?: 'UpdateServiceProviderPayload';
  errors?: Maybe<Array<Maybe<UserError>>>;
  serviceProvider?: Maybe<ServiceProviderDto>;
};

export type UpdateTripInput = {
  from: Scalars['Date']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  portID: Scalars['String']['input'];
  serviceTypeID?: InputMaybe<Scalars['ID']['input']>;
  to: Scalars['Date']['input'];
};

export type UpdateTripPayloadBase = {
  __typename?: 'UpdateTripPayloadBase';
  errors?: Maybe<Array<Maybe<UserError>>>;
  trip?: Maybe<TripDto>;
};

export type UpsertBillingDetailsError = ArgumentError;

export type UpsertBillingDetailsInput = {
  address2?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  companyName?: InputMaybe<Scalars['String']['input']>;
  countryAlpha2?: InputMaybe<Scalars['String']['input']>;
  emailAddress?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  mainAddress?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  tin?: InputMaybe<Scalars['String']['input']>;
};

export type UpsertBillingDetailsPayload = {
  __typename?: 'UpsertBillingDetailsPayload';
  billingDetailsResult?: Maybe<BillingDetailsResult>;
  errors?: Maybe<Array<UpsertBillingDetailsError>>;
};

export type UserError = {
  __typename?: 'UserError';
  code?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

export type UuidOperationFilterInput = {
  eq?: InputMaybe<Scalars['UUID']['input']>;
  gt?: InputMaybe<Scalars['UUID']['input']>;
  gte?: InputMaybe<Scalars['UUID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  lt?: InputMaybe<Scalars['UUID']['input']>;
  lte?: InputMaybe<Scalars['UUID']['input']>;
  neq?: InputMaybe<Scalars['UUID']['input']>;
  ngt?: InputMaybe<Scalars['UUID']['input']>;
  ngte?: InputMaybe<Scalars['UUID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  nlt?: InputMaybe<Scalars['UUID']['input']>;
  nlte?: InputMaybe<Scalars['UUID']['input']>;
};

export type VerifiedServiceTypeDto = {
  __typename?: 'VerifiedServiceTypeDTO';
  serviceTypeID: Scalars['ID']['output'];
};
