export type Scalars = {
    String: string,
    Boolean: boolean,
    ID: string,
    Int: number,
    DateTime: any,
    EmailAddress: any,
    JSON: any,
    JSONObject: any,
    PositiveFloat: any,
    PositiveInt: any,
    URL: any,
    UnsignedFloat: any,
    UnsignedInt: any,
    Upload: any,
}


/** The blockchains supported by Niftory. */
export type Blockchain = 'FLOW' | 'ETHEREUM' | 'POLYGON'


/** A currency that can be accepted for payment. */
export type Currency = 'USD'


/** The upload state of a File. */
export type FileState = 'PENDING' | 'GENERATED_UPLOAD_URL' | 'UPLOADED_TO_CLOUD_STORAGE' | 'UPLOADED_TO_IPFS' | 'READY' | 'ERROR'


/** The state of an invoice. */
export type InvoiceState = 'CREATED' | 'PENDING' | 'COMPLETED' | 'ERROR'


/** The state of a listing. */
export type ListingState = 'INACTIVE' | 'ACTIVE' | 'SOLD' | 'HIDE_FROM_STORE' | 'SHOW_IN_STORE' | 'NOT_AVAILAIBLE_FOR_PURCHASE'


/** The state of an NFT on the blockchain. */
export type NFTBlockchainState = 'UNMINTED' | 'MINTING' | 'TRANSFERRING' | 'MINTED' | 'TRANSFERRED' | 'ERROR'


/** The state of an NFT Model on the blockchain. */
export type NFTModelBlockchainState = 'UNMINTED' | 'MINTING' | 'MINTED' | 'ERROR' | 'COMPLETED'


/** The state of an NFT Set on the blockchain. */
export type NFTSetBlockchainState = 'UNMINTED' | 'MINTING' | 'MINTED' | 'ERROR'


/** Roles for users of the Niftory admin portal and APIs. */
export type Role = 'CREATOR' | 'MANAGER' | 'MINTER' | 'ADMINISTRATOR'


/** The state of an item for sale. */
export type SaleProcessingState = 'CREATED' | 'AVAILABLE' | 'RESERVED' | 'LOCKED' | 'TRANSFERRING' | 'SOLD' | 'ERROR'


/** The state of an item being sold. */
export type SaleState = 'AVAILABLE' | 'RESERVED' | 'PAID' | 'FULFILLED'


/** The default rarity levels in the Niftory API. */
export type SimpleRarityLevel = 'COMMON' | 'RARE' | 'LEGENDARY'


/** Status of this resource for user workflows. */
export type Status = 'DRAFT' | 'IN_PROGRESS' | 'TO_DO' | 'DONE'


/** The state of an item being transferred. */
export type TransferState = 'AVAILABLE' | 'RESERVED' | 'IN_PROGRESS' | 'SUCCESS' | 'ERROR'


/** The state of a wallet. */
export type WalletState = 'PENDING_CREATION' | 'UNVERIFIED' | 'VERIFIED' | 'READY' | 'CREATION_FAILED'


/** The type of wallet. */
export type WalletType = 'EXTERNAL' | 'CUSTODIAL'


/** An interface representing properties common to all objects that exist on the blockchain */
export type BlockchainEntity = (NFT | NFTModel | NFTSet) & { __isUnion?: true }


/** An interface representing properties common to all objects that exist on the blockchain */
export type BlockchainResource = (NFTModel | NFTSet) & { __isUnion?: true }


/** An interface containing common data about files. */
export type File = (NFTFile | SimpleFile) & { __isUnion?: true }


/** An interface representing properties common to all user-managed resources in the Niftory API. */
export type Resource = (NFTModel | NFTSet) & { __isUnion?: true }


/** An interface representing properties common to all objects that can be bought and sold */
export type SellableEntity = (NFT) & { __isUnion?: true }


/** An interface containing common data about users. */
export type UserData = (AdminUser | AppUser) & { __isUnion?: true }


/** Current Prisma Mapping: User (with role >= MARKETER). A user of the Niftory admin portal and APIs. */
export interface AdminUser {
    /** This user's email. */
    email?: Scalars['EmailAddress']
    /** The URL for this user's image. */
    image?: Scalars['String']
    /** The user's full name. */
    name?: Scalars['String']
    /** A unique identifier for this object in the Niftory API. */
    id: Scalars['ID']
    /** The apps this user is an admin for. */
    apps?: (App | undefined)[]
    /** The organizations this user belongs to. */
    organizations?: (Organization | undefined)[]
    __typename: 'AdminUser'
}


/** An application in the Niftory ecosystem. Read more [here](https://docs.niftory.com/home/v/api/core-concepts/app-and-appuser). */
export interface App {
    /** A unique identifier for this object in the Niftory API. */
    id: Scalars['ID']
    /** The name for this app. */
    name?: Scalars['String']
    /** The contract associated with this app. */
    contract?: Contract
    __typename: 'App'
}


/** Represents a user of a particular Niftory [App]({{Types.App}}). Read more [here](https://docs.niftory.com/home/v/api/core-concepts/app-and-appuser). */
export interface AppUser {
    /** This user's email. */
    email?: Scalars['EmailAddress']
    /** The URL for this user's image. */
    image?: Scalars['String']
    /** The user's full name. */
    name?: Scalars['String']
    /** A unique identifier for this object in the Niftory API. */
    id: Scalars['ID']
    /** Creation date of this item */
    createdAt: Scalars['DateTime']
    /** Most recent updated date of this item, if any */
    updatedAt?: Scalars['DateTime']
    /**
     * @deprecated Use primaryWallet or wallets instead.
     * The wallet owned by this user.
     */
    wallet?: Wallet
    /** The primary wallet used by this user. */
    primaryWallet?: Wallet
    /** All wallets owned by this user. */
    wallets?: (Wallet | undefined)[]
    /** The app this user is scoped to. */
    app?: App
    __typename: 'AppUser'
}


/** Represents a list of [AppUser]({{Types.AppUser}})s of a particular Niftory [App]({{Types.App}}). Read more [here](https://docs.niftory.com/home/v/api/core-concepts/app-and-appuser). */
export interface AppUserList {
    /** The cursor to use to fetch the next page of results, if any. */
    cursor?: Scalars['String']
    /** The AppUsers in this list. */
    items?: (AppUser | undefined)[]
    __typename: 'AppUserList'
}


/** Transaction performed on a blockchain. */
export interface BlockchainTransaction {
    /** The blockchain where the transaction was perfomed. */
    blockchain: Blockchain
    /** The hash of the blockchain transaction. */
    hash: Scalars['String']
    /** Name of the transaction performed */
    name: Scalars['String']
    __typename: 'BlockchainTransaction'
}


/** The response from initiating a checkout with Dapper Wallet. */
export interface CheckoutWithDapperWalletResponse {
    /** The cadence code for the transaction. */
    cadence?: Scalars['String']
    /** The registry address for the transaction. */
    registryAddress?: Scalars['String']
    /** The brand for the transaction. */
    brand?: Scalars['String']
    /** The NFT blockchain hash if the NFT has already been minted. */
    nftId?: Scalars['String']
    /** A reference to the cadence NFT type to be used in the transaction. */
    nftTypeRef?: Scalars['String']
    /** The database ID representing the NFT. To be used for [completeCheckoutWithDapperWallet]({{Mutations.completeCheckoutWithDapperWallet}}) */
    nftDatabaseId?: Scalars['String']
    /** The set ID from which to send an NFT. */
    setId?: Scalars['String']
    /** The template ID from which to send an NFT. */
    templateId?: Scalars['String']
    /** The price to sell the NFT at. */
    price?: Scalars['String']
    /** A time when this listing will expire. */
    expiry?: Scalars['String']
    /** The key ID of the signer that must authorize this transaction */
    signerKeyId?: Scalars['Int']
    /** The address of the signer that must authorize this transaction. */
    signerAddress?: Scalars['String']
    __typename: 'CheckoutWithDapperWalletResponse'
}


/** A smart contract on the blockchain. Read more [here](https://docs.niftory.com/home/v/api/core-concepts/contract). */
export interface Contract {
    /** A unique identifier for this object in the Niftory API. */
    id: Scalars['ID']
    /** The address at which this contract is deployed. */
    address?: Scalars['String']
    /** The blockchain in which this contract is deployed. */
    blockchain?: Blockchain
    /** The name of this contract. */
    name?: Scalars['String']
    __typename: 'Contract'
}


/** A simple pricing strategy for listings with fixed prices. */
export interface FixedPricing {
    /** The currency at which this price is set. */
    currency: Currency
    /** The price in the specified currency at which this item is for sale. */
    price: Scalars['PositiveFloat']
    __typename: 'FixedPricing'
}


/** The response from initiating a purchase checkout. */
export interface InitiateCheckoutResponse {
    /** The URL to redirect the user to. */
    redirectUrl?: Scalars['URL']
    /** The status of the payment */
    status?: Scalars['String']
    /** A message to display to the user which contains checkout information */
    statusMessage?: Scalars['String']
    __typename: 'InitiateCheckoutResponse'
}


/** A purchase invoice for an NFT. The invoice is created when an NFT is reserved using reserve, and updated when a payment is initiated with checkout */
export interface Invoice {
    /** The ID of the Niftory invoice for an NFT purchase */
    id: Scalars['ID']
    /** Creation date of this item */
    createdAt: Scalars['DateTime']
    /** Most recent updated date of this item, if any */
    updatedAt?: Scalars['DateTime']
    /** The state of this invoice */
    state?: InvoiceState
    /** The total spent in USD in this invoice */
    total?: Scalars['PositiveFloat']
    /** The listing associated with this invoice */
    listingId?: Scalars['String']
    /** The user id associated with this invoice */
    userId?: Scalars['String']
    __typename: 'Invoice'
}


/** A list of completed invoices for this app */
export interface InvoiceList {
    /** The cursor to use to fetch the next page of results, if any. */
    cursor?: Scalars['String']
    /** The invoices in this list. */
    items?: (Invoice | undefined)[]
    __typename: 'InvoiceList'
}


/** Respresentation of a [non-fungible token](https://en.wikipedia.org/wiki/Non-fungible_token) in the Niftory ecosystem (it doesn't have to be minted on the blockchain yet). Read more [here](https://docs.niftory.com/home/v/api/core-concepts/nfts). */
export interface NFT {
    /** The ID of this resource on the blockchain. */
    blockchainId?: Scalars['String']
    /** A mapping of properties that will be added to the blockchain. */
    metadata?: Scalars['JSONObject']
    /** This state of this object's sale. */
    saleState?: SaleState
    /** A unique identifier for this object in the Niftory API. */
    id: Scalars['ID']
    /** The serial number for this NFT within its model. */
    serialNumber?: Scalars['Int']
    /** The state of this NFT on the blockchain */
    blockchainState: NFTBlockchainState
    /** The ID of the NFTModel from which this NFT was created */
    modelId?: Scalars['ID']
    /** The NFTModel from which this NFT was created. */
    model?: NFTModel
    /** The wallet containing this NFT, if it is owned by a user. */
    wallet?: Wallet
    /**
     * @deprecated Use blockchainState or saleState instead.
     * The status of this NFT (e.g. if it is available or being transferred to a user
     */
    status?: TransferState
    /** Blockchain transcations for this NFT */
    transactions?: (BlockchainTransaction | undefined)[]
    __typename: 'NFT'
}


/** The content for an NFT. */
export interface NFTContent {
    /** A unique identifier for this object in the Niftory API. */
    id: Scalars['ID']
    /** The file content in this NFT. */
    files?: (NFTFile | undefined)[]
    /** The poster file for this NFT's content */
    poster?: SimpleFile
    __typename: 'NFTContent'
}


/** File (with ipfsContentUrl and ipfsMetadataUrl). A file to be included in an NFT. Extends [File]({{Types.File}}) to includes the IPFS addresses for the content and metadata. */
export interface NFTFile {
    /** A unique identifier for this file in the Niftory API. */
    id: Scalars['ID']
    /** The cloud storage URL for this file. If state is GENERATED_UPLOAD_URL, then this url is the presigned URL to upload to. */
    url: Scalars['URL']
    /** The upload state of the file. */
    state: FileState
    /** A friendly name for the file. */
    name: Scalars['String']
    /** The MIME content type for this file. */
    contentType?: Scalars['String']
    /** The MD5 hash of this file. */
    md5?: Scalars['String']
    /** The IPFS address for the content of this file. */
    ipfsContentAddress: Scalars['String']
    /** The IPFS address for the metadata of this file. */
    ipfsMetadataAddress: Scalars['String']
    __typename: 'NFTFile'
}


/** A list of NFTs. */
export interface NFTList {
    /** The cursor to use to fetch the next page of results, if any. */
    cursor?: Scalars['String']
    /** The NFTs in this list. */
    items?: (NFT | undefined)[]
    __typename: 'NFTList'
}


/** A listing of NFTs for sale. */
export interface NFTListing {
    /** A mapping of attributes for this object. These will be stored in the Niftory API but will not be added to the blockchain. */
    attributes?: Scalars['JSONObject']
    /** A unique identifier for this object in the Niftory API. */
    id: Scalars['ID']
    /** Creation date of this item */
    createdAt: Scalars['DateTime']
    /** Most recent updated date of this item, if any */
    updatedAt?: Scalars['DateTime']
    /** The title of the listing. */
    title?: Scalars['String']
    /** The description of the listing. */
    description?: Scalars['String']
    /** The pricing for this listing */
    pricing: FixedPricing
    /** The appId of the app this NFTListing belongs to. */
    appId: Scalars['ID']
    /** The NFT Model for this listing, NFTs from this model will be sold when a user checks out with this listing */
    nftModel: NFTModel
    /** The state of this listing. */
    state: ListingState
    __typename: 'NFTListing'
}


/** A list of NFTListings. */
export interface NFTListingList {
    /** The cursor to use to fetch the next page of results, if any. */
    cursor?: Scalars['String']
    /** The NFTListings in this list. */
    items?: (NFTListing | undefined)[]
    __typename: 'NFTListingList'
}


/** The blueprint for an NFT, containing everything needed to mint one -- file content, blockchain metadata, etc. Read more [here](https://docs.niftory.com/home/v/api/core-concepts/nfts). */
export interface NFTModel {
    /** A unique identifier for this object in the Niftory API. */
    id: Scalars['ID']
    /** A mapping of attributes for this object. These will be stored in the Niftory API but will not be added to the blockchain. */
    attributes?: Scalars['JSONObject']
    /** Creation date of this item */
    createdAt: Scalars['DateTime']
    /** Most recent updated date of this item, if any */
    updatedAt?: Scalars['DateTime']
    /** The status of this resource. Can be used to track progress in designing and creating resources. */
    status?: Status
    /** The ID of this resource on the blockchain. */
    blockchainId?: Scalars['String']
    /** A mapping of properties that will be added to the blockchain. */
    metadata?: Scalars['JSONObject']
    /** The user-friendly title for this model. */
    title: Scalars['String']
    /** The user-friendly description for this model. */
    description: Scalars['String']
    /** The rarity of the NFTs in this model. */
    rarity?: SimpleRarityLevel
    /** The total quantity of NFTs that will be available for this model. */
    quantity?: Scalars['PositiveInt']
    /** The total quantity of NFTs that have been minted from this model. */
    quantityMinted?: Scalars['UnsignedInt']
    /** This NFT model's content. */
    content?: NFTContent
    /** The state of this NFT Model on the blockchain */
    state: NFTModelBlockchainState
    /** The NFT model set containing this model. */
    set: NFTSet
    /** The NFTs created using this model. */
    nfts?: (NFT | undefined)[]
    /** The listings for this model. These can be used to sell the NFTs creating using this model */
    nftListings?: (NFTListing | undefined)[]
    __typename: 'NFTModel'
}


/** A list of NFTModels. */
export interface NFTModelList {
    /** The cursor to use to fetch the next page of results, if any. */
    cursor?: Scalars['String']
    /** The NFTModels in this list. */
    items?: (NFTModel | undefined)[]
    __typename: 'NFTModelList'
}


/** A set of NFTModels, to help you organize your NFTs. Read more [here](https://docs.niftory.com/home/v/api/core-concepts/nfts). */
export interface NFTSet {
    /** A unique identifier for this object in the Niftory API. */
    id: Scalars['ID']
    /** A mapping of attributes for this object. These will be stored in the Niftory API but will not be added to the blockchain. */
    attributes?: Scalars['JSONObject']
    /** Creation date of this item */
    createdAt: Scalars['DateTime']
    /** Most recent updated date of this item, if any */
    updatedAt?: Scalars['DateTime']
    /** The status of this resource. Can be used to track progress in designing and creating resources. */
    status?: Status
    /** The ID of this resource on the blockchain. */
    blockchainId?: Scalars['String']
    /** A mapping of properties that will be added to the blockchain. */
    metadata?: Scalars['JSONObject']
    /** The display image for this set. */
    title: Scalars['String']
    /** The image to represent this set. */
    image?: Scalars['URL']
    /** The state of this NFT Set on the blockchain */
    state: NFTSetBlockchainState
    /** String labels to tag this NFTSet with. These will be stored in the Niftory API but will not be added to the blockchain. */
    tags?: (Scalars['String'] | undefined)[]
    /** Models contained in this set. */
    models?: (NFTModel | undefined)[]
    /** The app this set belongs to. */
    app?: App
    __typename: 'NFTSet'
}


/** An organization within the Niftory ecosystem. Organization manages [App]({{Types.App}})s. Read more [here](https://docs.niftory.com/home/v/admin/explore/org-and-apps). */
export interface Organization {
    /** A unique identifier for this object in the Niftory API. */
    id: Scalars['ID']
    name?: Scalars['String']
    /** The apps belonging to this Organization. */
    apps?: (App | undefined)[]
    /** This organization's members. */
    members?: (AdminUser | undefined)[]
    __typename: 'Organization'
}


/** A file uploaded to the Niftory API. */
export interface SimpleFile {
    /** A unique identifier for this file in the Niftory API. */
    id: Scalars['ID']
    /** The cloud storage URL for this file. If state is GENERATED_UPLOAD_URL, then this url is the presigned URL to upload to. */
    url: Scalars['URL']
    /** The upload state of the file. */
    state: FileState
    /** A friendly name for the file. */
    name: Scalars['String']
    /** The MIME content type for this file. */
    contentType?: Scalars['String']
    /** The MD5 hash of this file. */
    md5?: Scalars['String']
    __typename: 'SimpleFile'
}


/** Represents a blockchain wallet scoped to a particular [App]({{Types.App}}) and [AppUser]({{Types.AppUser}}). Read more [here](https://docs.niftory.com/home/v/api/core-concepts/wallets). */
export interface Wallet {
    /** A mapping of attributes for this object. These will be stored in the Niftory API but will not be added to the blockchain. */
    attributes?: Scalars['JSONObject']
    /** A unique identifier for this object in the Niftory API. */
    id: Scalars['ID']
    /** Creation date of this item */
    createdAt: Scalars['DateTime']
    /** Most recent updated date of this item, if any */
    updatedAt?: Scalars['DateTime']
    /** This wallet's address on the blockchain. */
    address: Scalars['String']
    /** The state of this wallet. */
    state: WalletState
    /** The verification code that can be used to verify this wallet for this user. */
    verificationCode?: Scalars['String']
    /** The NFTs from the current app that are in this wallet. */
    nfts?: (NFT | undefined)[]
    /** The User who owns the wallet */
    appUser?: AppUser
    /** The type of wallet. This represents if the wallet was linked externally or created by Niftory */
    walletType?: WalletType
    __typename: 'Wallet'
}


/** A list of Wallets. */
export interface WalletList {
    /** The cursor to use to fetch the next page of results, if any. */
    cursor?: Scalars['String']
    /** The Wallets in this list. */
    items?: (Wallet | undefined)[]
    __typename: 'WalletList'
}


/** An interface representing objects with unique IDs */
export type Identifiable = (AdminUser | App | AppUser | Contract | Invoice | NFT | NFTContent | NFTListing | NFTModel | NFTSet | Organization | Wallet) & { __isUnion?: true }


/** An interface representing objects that have attributes property for non-blockchain property storage. */
export type Attributable = (NFTListing | NFTModel | NFTSet | Wallet) & { __isUnion?: true }


/** An interface representing objects with a creation and update time */
export type HasTimes = (AppUser | Invoice | NFTListing | NFTModel | NFTSet | Wallet) & { __isUnion?: true }


/** An interface representing lists that can be paginated with a cursor. */
export type Pageable = (AppUserList | InvoiceList | NFTList | NFTListingList | NFTModelList | WalletList) & { __isUnion?: true }

export interface Query {
    /** Gets the currently signed in [AdminUser]({{Types.AdminUser}}). */
    adminUser?: AdminUser
    /** Gets the currently logged-in [AppUser]({{Types.AppUser}}) context. Read more [here](https://docs.niftory.com/home/v/api/core-concepts/app-and-appuser). */
    appUser?: AppUser
    /** Gets an [AppUser]({{Types.AppUser}}) by its ID. Read more [here](https://docs.niftory.com/home/v/api/core-concepts/app-and-appuser). */
    appUserById?: AppUser
    /** Gets the list of users for your app. Read more [here](https://docs.niftory.com/home/v/api/core-concepts/app-and-appuser). */
    appUsers?: AppUserList
    /** Gets the [App]({{Types.App}}) for the current application context. Read more [here](https://docs.niftory.com/home/v/api/core-concepts/app-and-appuser). */
    app?: App
    /** Gets an [App]({{Types.App}}) by its ID. Read more [here](https://docs.niftory.com/home/v/api/core-concepts/app-and-appuser). */
    appById?: App
    /** Creates the [App]({{Types.App}}) on the specified organization for the user. */
    createApp?: App
    /** Gets the [Contract]({{Types.Contract}}) from the currently authenticated app. Read more [here](https://docs.niftory.com/home/v/api/core-concepts/contract). */
    contract?: Contract
    /** Gets a [File]({{Types.File}}) by its ID. */
    file?: SimpleFile
    /** Gets a [NFTContent]({{Types.NFTContent}}) by ID. */
    nftContent?: NFTContent
    /** Gets an [NFTFile]({{Types.NFTFile}}) by its ID, cloud storage, or IPFS URL. */
    nftFile?: NFTFile
    /** Gets a [Invoice]({{Types.Invoice}}) by ID. */
    invoice?: Invoice
    /** Gets a [Organization]({{Types.Organization}}) by ID. */
    organization?: Organization
    /** Gets the list of invoices for your app. */
    invoices?: InvoiceList
    /** Gets an [NFTListing]({{Types.NFTListing}}) by ID. */
    nftListing?: NFTListing
    /** Gets [NFTListing]({{Types.NFTListing}})s for the current [App]({{Types.App}}) context */
    nftListings?: NFTListingList
    /** Gets an [NFTModel]({{Types.NFTModel}}) by database ID. Read more [here](https://docs.niftory.com/home/v/api/core-concepts/nfts/querying-nfts). */
    nftModel?: NFTModel
    /** Gets [NFTModel]({{Types.NFTModel}})s for the current [App]({{Types.App}}) context. Read more [here](https://docs.niftory.com/home/v/api/core-concepts/nfts/querying-nfts). */
    nftModels?: NFTModelList
    /** Gets an [NFTSet]({{Types.NFTSet}}) by database ID. */
    set?: NFTSet
    /** Gets [NFTSet]({{Types.NFTSet}})s for the current [App]({{Types.App}}) context. */
    sets?: (NFTSet | undefined)[]
    /** Gets an [NFT]({{Types.NFT}}) by database ID. Read more [here](https://docs.niftory.com/home/v/api/core-concepts/nfts/querying-nfts). */
    nft?: NFT
    /** Gets [NFT]({{Types.NFT}})s associated with the current [AppUser]({{Types.AppUser}}) context, including those that are transferring or failed to transfer. Read more [here](https://docs.niftory.com/home/v/api/core-concepts/nfts/querying-nfts). */
    nfts?: NFTList
    /** Gets [NFT]({{Types.NFT}})s associated with the current wallet, including those that are transferring or failed to transfer. Read more [here](https://docs.niftory.com/home/v/api/core-concepts/nfts/querying-nfts). */
    nftsByWallet?: NFTList
    /** Gets the primary [Wallet]({{Types.Wallet}}) belonging to the current [AppUser]({{Types.AppUser}}) context. Read more [here](https://docs.niftory.com/home/v/api/core-concepts/wallets/query-wallets). */
    wallet?: Wallet
    /** Gets a [Wallet]({{Types.Wallet}}) by its database ID. Read more [here](https://docs.niftory.com/home/v/api/core-concepts/wallets/query-wallets). */
    walletById?: Wallet
    /** Gets a [Wallet]({{Types.Wallet}}) by its blockchain address. Wallet must be registered using [registerWallet]({{Mutations.registerWallet}}) before this request succeeds. Read more [here](https://docs.niftory.com/home/v/api/core-concepts/wallets/query-wallets). */
    walletByAddress?: Wallet
    /** Gets the primary [Wallet]({{Types.Wallet}}) for a given [AppUser]({{Types.AppUser}}). Read more [here](https://docs.niftory.com/home/v/api/core-concepts/wallets/query-wallets). */
    walletByUserId?: Wallet
    /** Gets all [Wallet]({{Types.Wallet}})s for a given app. Read more [here](https://docs.niftory.com/home/v/api/core-concepts/wallets/query-wallets). */
    wallets?: WalletList
    __typename: 'Query'
}

export interface Mutation {
    /** Deploys the [Contract]({{Types.Contract}}) from the currently authenticated app. Read more [here](https://docs.niftory.com/home/v/api/core-concepts/contract). */
    deployContract?: Contract
    /** Generates a pre-signed URL that can then be used to upload a file. Once the file has been uploaded to the URL, it will automatically be uploaded to IPFS (if desired). Use the returned [File]({{Types.SimpleFile}}).state to track the upload. */
    createFileUploadUrl?: File
    /** Deletes the specified file from cloud storage (but not IPFS). */
    deleteFile?: File
    /** Creates an [NFTContent]({{Types.NFTContent}}) object containing pre-signed URLs that can then be used to upload a file and poster. The primary file will automatically be uploaded to IPFS once it's been uploaded to the pre-signed URL. Each returned [File]({{Types.SimpleFile}}) has a 'state' property to track the upload. */
    uploadNFTContent?: NFTContent
    /** Marks the checkout with Dapper Wallet as complete, and updates the [NFT]({{Types.NFT}}) as belonging to specified wallet. Called after [checkoutWithDapperWallet]({{Mutations.checkoutWithDapperWallet}}) once purchase is completed. */
    completeCheckoutWithDapperWallet?: NFT
    /** Creates a new [NFTListing]({{Types.NFTListing}}). */
    createNFTListing?: NFTListing
    /** Initiates checkout for a reserved NFT. */
    checkout?: InitiateCheckoutResponse
    /** Initiates checkout with Dapper Wallet of specified [NFTModel]({{Types.NFTModel}})s, and returns a signed transaction to complete checkout with. Flow blockchain only. */
    checkoutWithDapperWallet?: CheckoutWithDapperWalletResponse
    /** Reserves an [NFT]({{Types.NFT}}) for an [AppUser]({{Types.AppUser}}) and returns an [Invoice]({{Types.Invoice}}) for purchase. */
    reserve?: Invoice
    /** Signs a transaction for Dapper Wallet. */
    signTransactionForDapperWallet?: Scalars['String']
    /** Updates an existing [NFTListing]({{Types.NFTListing}}). */
    updateNFTListing?: NFTListing
    /** Deletes an existing [NFTListing]({{Types.NFTListing}}). */
    deleteNFTListing?: NFTListing
    /** Initiates minting for a given [NFTModel]({{Types.NFTmodel}}). */
    mintNFTModel?: NFTModel
    /** Creates a new [NFTModel]({{Types.NFTModel}}). */
    createNFTModel?: NFTModel
    /** Deletes an existing [NFTModel]({{Types.NFTModel}}). This operation will only be perfomed if no NFTs have been minted from this NFTModel */
    deleteNFTModel?: NFTModel
    /** Updates an existing [NFTModel]({{Types.NFTModel}}). Note that if this NFTModel has already been used to mint an NFT, the update operation will fail for any properties that affect the blockchain (such as 'quantity', 'title', 'metadata', etc.), whereas updating 'attributes' will succeed. */
    updateNFTModel?: NFTModel
    /** Creates a new [NFTSet]({{Types.NFTSet}}). */
    createNFTSet?: NFTSet
    /** Updates an existing [NFTSet]({{Types.NFTSet}}). */
    updateNFTSet?: NFTSet
    /** Initiates minting for a given [NFT]({{Types.NFT}}). */
    mintNFT?: NFT
    /** Initiates the transfer of an [NFT]({{Types.NFT}}) to the currently-logged in [AppUser]({{Types.AppUser}}). The NFT is reserved for the user in database, and you can use the NFT.status field to check on the transfer progress. */
    transfer?: NFT
    /** Initiates the withdrawal of an [NFT]({{Types.NFT}}) from a custodial Niftory [Wallet]{{Types.Wallet}} to a receiver [Wallet]({{Types.Wallet}}) address */
    withdraw?: NFT
    createOrganization: Organization
    /** Provisions a custodial Niftory [Wallet]({{Types.Wallet}}) and, if specified, associates it with the given [AppUser]({{Types.AppUser}}). Note: The call fails if the user already has a wallet. */
    createNiftoryWallet?: Wallet
    /** Marks a [Wallet]({{Types.Wallet}}) as ready, indicating that the wallet is ready to receive [NFT]({{Types.NFT}})s from the app's [Contract]({{Types.Contract}}). The wallet must be verified before this succeeds. Read more [here](https://docs.niftory.com/home/v/api/core-concepts/wallets/set-up-wallets). */
    readyWallet?: Wallet
    /** Registers a [Wallet]({{Types.Wallet}}), associating it with the currently signed-in [AppUser]({{Types.AppUser}}) if specified. Read more [here](https://docs.niftory.com/home/v/api/core-concepts/wallets/set-up-wallets). */
    registerWallet?: Wallet
    /** Sets the primary [Wallet]({{Types.Wallet}}) for the currently signed in user. */
    setPrimaryWallet?: Wallet
    /** Unlinks the specified [Wallet]({{Types.Wallet}}) from the currently signed in user. */
    unlinkWallet?: Wallet
    /** Update a [Wallet]({{Types.Wallet}}) of the currently signed-in user. Read more [here](https://docs.niftory.com/home/v/api/core-concepts/wallets/set-up-wallets). */
    updateWallet?: Wallet
    /** Verifies a [Wallet]({{Types.Wallet}}) to the currently signed-in user. If the signed verification code fails to decode with the wallet's public key or doesn't match the wallet's verification code, the request will fail. Read more [here](https://docs.niftory.com/home/v/api/core-concepts/wallets/set-up-wallets). */
    verifyWallet?: Wallet
    __typename: 'Mutation'
}

export interface AppCreateInput {
/** Name of the app */
name?: (Scalars['String'] | null),
/** The blockchain in which this app is deployed. */
blockchain?: (Blockchain | null),
/** The id of the organization to create app in */
organizationId?: (Scalars['String'] | null),
/** The URIs to redirect to after signin. Only required if using oauth */
redirectUris?: ((Scalars['String'] | null)[] | null)}

export interface CreateFileOptionsInput {
/** Whether to asynchronously trigger an IPFS upload after the file has been uploaded to the returned cloud storage URL. */
uploadToIPFS?: (Scalars['Boolean'] | null),
/** The Content-Type (MIME type) of the file to be uploaded. This must match the Content-Type header you will use to upload the file to the returned URL. If this is left empty, your Content-Type header must also be empty. */
contentType?: (Scalars['String'] | null),
/** Required if the file to be uploaded is a video, and uploadToIPFS=true. In that case a poster must have already been uploaded (so it can be used as the image on IPFS). */
posterFileId?: (Scalars['ID'] | null)}


/** The input to create an [NFTListing]({{Types.NFTListing}}). */
export interface CreateNFTListingInput {
/** The title of the listing */
title?: (Scalars['String'] | null),
/** The description of the listing */
description?: (Scalars['String'] | null),
/** The price of the NFTlisting. Must be greater than 0. */
price: Scalars['PositiveFloat'],
/** The metadata for this listing in JSON format */
attributes?: (Scalars['JSONObject'] | null),
/** The ID of the NFT models to list for sale in this NFT listing. */
nftModelId: Scalars['ID']}


/** The input to create a custodial Niftory [Wallet]({{Types.Wallet}}). */
export interface CreateNiftoryWalletInput {
/** A mapping of attributes for this resource. These will be stored in the Niftory API but will not be added to the blockchain. */
attributes?: (Scalars['JSONObject'] | null)}


/** A simple pricing strategy for listings with fixed prices. */
export interface FixedPricingInput {
/** The currency at which this price is set. */
currency: Currency,
/** The price in the specified currency at which this item is for sale. */
price: Scalars['PositiveFloat']}


/** The input to create or update [NFTContent]({{Types.NFTContent}}). */
export interface NFTContentInput {
/** The ID of the [NFTFile]({{Types.NFTFile}}) content. This can be created using [createFileUploadUrl]({{Mutations.createFileUploadUrl}}). */
fileId: Scalars['ID'],
/** The ID of the poster [File]({{Types.File}}). This can be created using [createFileUploadUrl]({{Mutations.createFileUploadUrl}}). */
posterId?: (Scalars['ID'] | null)}


/** Properties to filter [NFT]({{Types.NFT}})s by when querying them. */
export interface NFTFilterInput {
/** The IDs of the [NFTModel]({{Types.NFTModel}}) that the [NFT]({{Types.NFT}}) should belong to. */
nftModelIds?: ((Scalars['ID'] | null)[] | null),
/** Database IDs of the [NFT]({{Types.NFT}})s to find. */
ids?: ((Scalars['ID'] | null)[] | null),
/** Blockchain IDs of the [NFT]({{Types.NFT}})s to find. */
blockchainIds?: ((Scalars['String'] | null)[] | null),
/** Sale states of the [NFT]({{Types.NFT}})s to find. When querying within a user context, defaults to [PAID, FULFILLED]. Otherwise, defaults to all. */
saleStates?: ((SaleState | null)[] | null),
/** Blockchain states of the [NFT]({{Types.NFT}})s to find. Defaults to all. */
blockchainStates?: ((NFTBlockchainState | null)[] | null),
/** Transfer states of the [NFT]({{Types.NFT}})s to find. Defaults to all. */
transferStates?: ((TransferState | null)[] | null)}

export interface NFTListingFilterInput {
/** The ID of the NFTModel that the NFTListing should belong to. */
state?: (ListingState | null),
/** The title of the NFTListing. */
title?: (Scalars['String'] | null),
/** The IDs of the NFTListing. */
ids?: ((Scalars['ID'] | null)[] | null)}


/** The input to create an [NFTModel]({{Types.NFTModel}}). */
export interface NFTModelCreateInput {
/** The user-friendly title for this model. This will be added to the blockchain metadata when an NFT is minted. */
title: Scalars['String'],
/** The user-friendly details about this model. This will be added to the blockchain metadata when an NFT is minted. */
description?: (Scalars['String'] | null),
/** The user-friendly subtitle for this model. This will be added to the blockchain metadata when an NFT is minted. */
subtitle?: (Scalars['String'] | null),
/** The total supply of NFTs that can be available for this model. This can be updated until the NFTModel is minted. */
quantity?: (Scalars['PositiveInt'] | null),
/** The ID of the [NFTContent]({{Types.NFTContent}}) for this model. Either 'content' or 'contentId' must be specified. */
contentId?: (Scalars['ID'] | null),
/** The file content for this model. Either 'content' or 'contentId' must be specified. */
content?: (NFTContentInput | null),
/** The status of the model. */
status?: (Status | null),
/** Metadata that will be added to the blockchain for any NFTs minted from this model. */
metadata?: (Scalars['JSONObject'] | null),
/** A mapping of attributes for this resource. These will be stored in the Niftory API but will not be added to the blockchain. */
attributes?: (Scalars['JSONObject'] | null),
/** String labels to tag this [NFTModel]({{Types.NFTModel}}) with. These will be stored in the Niftory API but will not be added to the blockchain. */
tags?: ((Scalars['String'] | null)[] | null)}


/** Properties to filter [NFTModel]({{Types.NFTModel}})s when querying them. */
export interface NFTModelFilterInput {
/** Filter by [NFTModel]({{Types.NFTModel}}) status. */
status?: (Status | null),
/** The IDs of the [NFTSet]({{Types.NFTSet}})s that the [NFTModel]({{Types.NFTModel}}) should belong to. */
setIds?: ((Scalars['ID'] | null)[] | null),
/** Database IDs of the [NFTModel]({{Types.NFTModel}})s to find. */
ids?: ((Scalars['ID'] | null)[] | null),
/** Blockchain IDs of the [NFTModel]({{Types.NFTModel}})s to find. */
blockchainIds?: ((Scalars['String'] | null)[] | null),
/** The tags in the [NFTModel]({{Types.NFTModel}}) to find. The models returned will contain every tag specified. */
tags?: ((Scalars['String'] | null)[] | null)}


/** The input to update an NFT model. */
export interface NFTModelUpdateInput {
/** The user-friendly title for this model. This will be added to the blockchain metadata when an NFT is minted. */
title?: (Scalars['String'] | null),
/** The user-friendly details about this model. This will be added to the blockchain metadata when an NFT is minted. */
description?: (Scalars['String'] | null),
/** The user-friendly subtitle for this model. This will be added to the blockchain metadata when an NFT is minted. */
subtitle?: (Scalars['String'] | null),
/** The total supply of NFTs that can be available for this model. This can be updated until the NFTModel is minted. */
quantity?: (Scalars['PositiveInt'] | null),
/** The ID of the [NFTContent]({{Types.NFTContent}}) for this model. */
contentId?: (Scalars['ID'] | null),
/** The file content for this model. This can be updated until the NFTModel is minted. */
content?: (NFTContentInput | null),
/** The status of the model. */
status?: (Status | null),
/** Metadata that will be added to the blockchain for any NFTs minted from this model. This can be updated until the NFTModel is minted */
metadata?: (Scalars['JSONObject'] | null),
/** A mapping of attributes for this resource. These will be stored in the Niftory API but will not be added to the blockchain. */
attributes?: (Scalars['JSONObject'] | null),
/** String labels to tag this [NFTModel]({{Types.NFTModel}}) with. These will be stored in the Niftory API but will not be added to the blockchain. Updating this will replace the existing tags. */
tags?: ((Scalars['String'] | null)[] | null)}


/** The input to create an [NFTSet]({{Types.NFTSet}}). */
export interface NFTSetCreateInput {
/** The user-friendly title for this model. */
title: Scalars['String'],
/** A mapping of attributes for this resource. These will be stored in the Niftory API but will not be added to the blockchain. */
attributes?: (Scalars['JSONObject'] | null),
/** String labels to tag this [NFTSet]({{Types.NFTSet}}) with. These will be stored in the Niftory API but will not be added to the blockchain. */
tags?: ((Scalars['String'] | null)[] | null)}

export interface NFTSetFilterInput {
/** Database IDs of the [NFTSet]({{Types.NFTSet}})s to find. */
ids?: ((Scalars['ID'] | null)[] | null),
/** Blockchain IDs of the [NFTSet]({{Types.NFTSet}})s to find. */
blockchainIds?: ((Scalars['String'] | null)[] | null),
/** The title of the [NFTSet]({{Types.NFTSet}}) to find. */
title?: (Scalars['String'] | null),
/** The tags in the [NFTSet]({{Types.NFTSet}}) to find. The sets returned will contain every tag specified. */
tags?: ((Scalars['String'] | null)[] | null)}


/** The input to update an [NFTSet]({{Types.NFTSet}}). */
export interface NFTSetUpdateInput {
/** The user-friendly title for this set. */
title?: (Scalars['String'] | null),
/** A mapping of attributes for this resource. These will be stored in the Niftory API but will not be added to the blockchain. */
attributes?: (Scalars['JSONObject'] | null),
/** String labels to tag this [NFTSet]({{Types.NFTSet}}) with. These will be stored in the Niftory API but will not be added to the blockchain. Updating this will replace the existing tags. */
tags?: ((Scalars['String'] | null)[] | null)}

export interface OrganizationCreateInput {name: Scalars['String']}


/** The input to register a [Wallet]({{Types.Wallet}}). */
export interface RegisterWalletInput {
/** A mapping of attributes for this resource. These will be stored in the Niftory API but will not be added to the blockchain. */
attributes?: (Scalars['JSONObject'] | null)}


/** The input to update an [NFTListing]({{Types.NFTListing}}). */
export interface UpdateNFTListingInput {
/** The title of the listing */
title?: (Scalars['String'] | null),
/** The description of the listing */
description?: (Scalars['String'] | null),
/** The price of the NFTlisting. Must be greater than 0. */
price?: (Scalars['PositiveFloat'] | null),
/** The ID of the NFTModel to list for sale in this NFT listing. */
nftModelId?: (Scalars['ID'] | null),
/** The metadata for this listing in JSON format */
attributes?: (Scalars['JSONObject'] | null)}


/** The input to update [Wallet]({{Types.Wallet}}) data. */
export interface UpdateWalletInput {
/** A mapping of attributes for this resource. These will be stored in the Niftory API but will not be added to the blockchain. */
attributes?: (Scalars['JSONObject'] | null)}


/** An interface representing properties common to all objects that exist on the blockchain */
export interface BlockchainEntityGenqlSelection{
    /** The ID of this resource on the blockchain. */
    blockchainId?: boolean | number
    /** A mapping of properties that will be added to the blockchain. */
    metadata?: boolean | number
    on_NFT?: NFTGenqlSelection
    on_NFTModel?: NFTModelGenqlSelection
    on_NFTSet?: NFTSetGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An interface representing properties common to all objects that exist on the blockchain */
export interface BlockchainResourceGenqlSelection{
    /** A unique identifier for this object in the Niftory API. */
    id?: boolean | number
    /** A mapping of attributes for this object. These will be stored in the Niftory API but will not be added to the blockchain. */
    attributes?: boolean | number
    /** Creation date of this item */
    createdAt?: boolean | number
    /** Most recent updated date of this item, if any */
    updatedAt?: boolean | number
    /** The status of this resource. Can be used to track progress in designing and creating resources. */
    status?: boolean | number
    /** The ID of this resource on the blockchain. */
    blockchainId?: boolean | number
    /** A mapping of properties that will be added to the blockchain. */
    metadata?: boolean | number
    on_NFTModel?: NFTModelGenqlSelection
    on_NFTSet?: NFTSetGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An interface containing common data about files. */
export interface FileGenqlSelection{
    /** A unique identifier for this file in the Niftory API. */
    id?: boolean | number
    /** The cloud storage URL for this file. If state is GENERATED_UPLOAD_URL, then this url is the presigned URL to upload to. */
    url?: boolean | number
    /** The upload state of the file. */
    state?: boolean | number
    /** A friendly name for the file. */
    name?: boolean | number
    /** The MIME content type for this file. */
    contentType?: boolean | number
    /** The MD5 hash of this file. */
    md5?: boolean | number
    on_NFTFile?: NFTFileGenqlSelection
    on_SimpleFile?: SimpleFileGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An interface representing properties common to all user-managed resources in the Niftory API. */
export interface ResourceGenqlSelection{
    /** A unique identifier for this object in the Niftory API. */
    id?: boolean | number
    /** A mapping of attributes for this object. These will be stored in the Niftory API but will not be added to the blockchain. */
    attributes?: boolean | number
    /** Creation date of this item */
    createdAt?: boolean | number
    /** Most recent updated date of this item, if any */
    updatedAt?: boolean | number
    /** The status of this resource. Can be used to track progress in designing and creating resources. */
    status?: boolean | number
    on_NFTModel?: NFTModelGenqlSelection
    on_NFTSet?: NFTSetGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An interface representing properties common to all objects that can be bought and sold */
export interface SellableEntityGenqlSelection{
    /** This state of this object's sale. */
    saleState?: boolean | number
    on_NFT?: NFTGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An interface containing common data about users. */
export interface UserDataGenqlSelection{
    /** This user's email. */
    email?: boolean | number
    /** The URL for this user's image. */
    image?: boolean | number
    /** The user's full name. */
    name?: boolean | number
    on_AdminUser?: AdminUserGenqlSelection
    on_AppUser?: AppUserGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Current Prisma Mapping: User (with role >= MARKETER). A user of the Niftory admin portal and APIs. */
export interface AdminUserGenqlSelection{
    /** This user's email. */
    email?: boolean | number
    /** The URL for this user's image. */
    image?: boolean | number
    /** The user's full name. */
    name?: boolean | number
    /** A unique identifier for this object in the Niftory API. */
    id?: boolean | number
    /** The apps this user is an admin for. */
    apps?: AppGenqlSelection
    /** The organizations this user belongs to. */
    organizations?: OrganizationGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An application in the Niftory ecosystem. Read more [here](https://docs.niftory.com/home/v/api/core-concepts/app-and-appuser). */
export interface AppGenqlSelection{
    /** A unique identifier for this object in the Niftory API. */
    id?: boolean | number
    /** The name for this app. */
    name?: boolean | number
    /** The contract associated with this app. */
    contract?: ContractGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Represents a user of a particular Niftory [App]({{Types.App}}). Read more [here](https://docs.niftory.com/home/v/api/core-concepts/app-and-appuser). */
export interface AppUserGenqlSelection{
    /** This user's email. */
    email?: boolean | number
    /** The URL for this user's image. */
    image?: boolean | number
    /** The user's full name. */
    name?: boolean | number
    /** A unique identifier for this object in the Niftory API. */
    id?: boolean | number
    /** Creation date of this item */
    createdAt?: boolean | number
    /** Most recent updated date of this item, if any */
    updatedAt?: boolean | number
    /**
     * @deprecated Use primaryWallet or wallets instead.
     * The wallet owned by this user.
     */
    wallet?: WalletGenqlSelection
    /** The primary wallet used by this user. */
    primaryWallet?: WalletGenqlSelection
    /** All wallets owned by this user. */
    wallets?: WalletGenqlSelection
    /** The app this user is scoped to. */
    app?: AppGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Represents a list of [AppUser]({{Types.AppUser}})s of a particular Niftory [App]({{Types.App}}). Read more [here](https://docs.niftory.com/home/v/api/core-concepts/app-and-appuser). */
export interface AppUserListGenqlSelection{
    /** The cursor to use to fetch the next page of results, if any. */
    cursor?: boolean | number
    /** The AppUsers in this list. */
    items?: AppUserGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Transaction performed on a blockchain. */
export interface BlockchainTransactionGenqlSelection{
    /** The blockchain where the transaction was perfomed. */
    blockchain?: boolean | number
    /** The hash of the blockchain transaction. */
    hash?: boolean | number
    /** Name of the transaction performed */
    name?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** The response from initiating a checkout with Dapper Wallet. */
export interface CheckoutWithDapperWalletResponseGenqlSelection{
    /** The cadence code for the transaction. */
    cadence?: boolean | number
    /** The registry address for the transaction. */
    registryAddress?: boolean | number
    /** The brand for the transaction. */
    brand?: boolean | number
    /** The NFT blockchain hash if the NFT has already been minted. */
    nftId?: boolean | number
    /** A reference to the cadence NFT type to be used in the transaction. */
    nftTypeRef?: boolean | number
    /** The database ID representing the NFT. To be used for [completeCheckoutWithDapperWallet]({{Mutations.completeCheckoutWithDapperWallet}}) */
    nftDatabaseId?: boolean | number
    /** The set ID from which to send an NFT. */
    setId?: boolean | number
    /** The template ID from which to send an NFT. */
    templateId?: boolean | number
    /** The price to sell the NFT at. */
    price?: boolean | number
    /** A time when this listing will expire. */
    expiry?: boolean | number
    /** The key ID of the signer that must authorize this transaction */
    signerKeyId?: boolean | number
    /** The address of the signer that must authorize this transaction. */
    signerAddress?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A smart contract on the blockchain. Read more [here](https://docs.niftory.com/home/v/api/core-concepts/contract). */
export interface ContractGenqlSelection{
    /** A unique identifier for this object in the Niftory API. */
    id?: boolean | number
    /** The address at which this contract is deployed. */
    address?: boolean | number
    /** The blockchain in which this contract is deployed. */
    blockchain?: boolean | number
    /** The name of this contract. */
    name?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A simple pricing strategy for listings with fixed prices. */
export interface FixedPricingGenqlSelection{
    /** The currency at which this price is set. */
    currency?: boolean | number
    /** The price in the specified currency at which this item is for sale. */
    price?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** The response from initiating a purchase checkout. */
export interface InitiateCheckoutResponseGenqlSelection{
    /** The URL to redirect the user to. */
    redirectUrl?: boolean | number
    /** The status of the payment */
    status?: boolean | number
    /** A message to display to the user which contains checkout information */
    statusMessage?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A purchase invoice for an NFT. The invoice is created when an NFT is reserved using reserve, and updated when a payment is initiated with checkout */
export interface InvoiceGenqlSelection{
    /** The ID of the Niftory invoice for an NFT purchase */
    id?: boolean | number
    /** Creation date of this item */
    createdAt?: boolean | number
    /** Most recent updated date of this item, if any */
    updatedAt?: boolean | number
    /** The state of this invoice */
    state?: boolean | number
    /** The total spent in USD in this invoice */
    total?: boolean | number
    /** The listing associated with this invoice */
    listingId?: boolean | number
    /** The user id associated with this invoice */
    userId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A list of completed invoices for this app */
export interface InvoiceListGenqlSelection{
    /** The cursor to use to fetch the next page of results, if any. */
    cursor?: boolean | number
    /** The invoices in this list. */
    items?: InvoiceGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Respresentation of a [non-fungible token](https://en.wikipedia.org/wiki/Non-fungible_token) in the Niftory ecosystem (it doesn't have to be minted on the blockchain yet). Read more [here](https://docs.niftory.com/home/v/api/core-concepts/nfts). */
export interface NFTGenqlSelection{
    /** The ID of this resource on the blockchain. */
    blockchainId?: boolean | number
    /** A mapping of properties that will be added to the blockchain. */
    metadata?: boolean | number
    /** This state of this object's sale. */
    saleState?: boolean | number
    /** A unique identifier for this object in the Niftory API. */
    id?: boolean | number
    /** The serial number for this NFT within its model. */
    serialNumber?: boolean | number
    /** The state of this NFT on the blockchain */
    blockchainState?: boolean | number
    /** The ID of the NFTModel from which this NFT was created */
    modelId?: boolean | number
    /** The NFTModel from which this NFT was created. */
    model?: NFTModelGenqlSelection
    /** The wallet containing this NFT, if it is owned by a user. */
    wallet?: WalletGenqlSelection
    /**
     * @deprecated Use blockchainState or saleState instead.
     * The status of this NFT (e.g. if it is available or being transferred to a user
     */
    status?: boolean | number
    /** Blockchain transcations for this NFT */
    transactions?: BlockchainTransactionGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** The content for an NFT. */
export interface NFTContentGenqlSelection{
    /** A unique identifier for this object in the Niftory API. */
    id?: boolean | number
    /** The file content in this NFT. */
    files?: NFTFileGenqlSelection
    /** The poster file for this NFT's content */
    poster?: SimpleFileGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** File (with ipfsContentUrl and ipfsMetadataUrl). A file to be included in an NFT. Extends [File]({{Types.File}}) to includes the IPFS addresses for the content and metadata. */
export interface NFTFileGenqlSelection{
    /** A unique identifier for this file in the Niftory API. */
    id?: boolean | number
    /** The cloud storage URL for this file. If state is GENERATED_UPLOAD_URL, then this url is the presigned URL to upload to. */
    url?: boolean | number
    /** The upload state of the file. */
    state?: boolean | number
    /** A friendly name for the file. */
    name?: boolean | number
    /** The MIME content type for this file. */
    contentType?: boolean | number
    /** The MD5 hash of this file. */
    md5?: boolean | number
    /** The IPFS address for the content of this file. */
    ipfsContentAddress?: boolean | number
    /** The IPFS address for the metadata of this file. */
    ipfsMetadataAddress?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A list of NFTs. */
export interface NFTListGenqlSelection{
    /** The cursor to use to fetch the next page of results, if any. */
    cursor?: boolean | number
    /** The NFTs in this list. */
    items?: NFTGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A listing of NFTs for sale. */
export interface NFTListingGenqlSelection{
    /** A mapping of attributes for this object. These will be stored in the Niftory API but will not be added to the blockchain. */
    attributes?: boolean | number
    /** A unique identifier for this object in the Niftory API. */
    id?: boolean | number
    /** Creation date of this item */
    createdAt?: boolean | number
    /** Most recent updated date of this item, if any */
    updatedAt?: boolean | number
    /** The title of the listing. */
    title?: boolean | number
    /** The description of the listing. */
    description?: boolean | number
    /** The pricing for this listing */
    pricing?: FixedPricingGenqlSelection
    /** The appId of the app this NFTListing belongs to. */
    appId?: boolean | number
    /** The NFT Model for this listing, NFTs from this model will be sold when a user checks out with this listing */
    nftModel?: NFTModelGenqlSelection
    /** The state of this listing. */
    state?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A list of NFTListings. */
export interface NFTListingListGenqlSelection{
    /** The cursor to use to fetch the next page of results, if any. */
    cursor?: boolean | number
    /** The NFTListings in this list. */
    items?: NFTListingGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** The blueprint for an NFT, containing everything needed to mint one -- file content, blockchain metadata, etc. Read more [here](https://docs.niftory.com/home/v/api/core-concepts/nfts). */
export interface NFTModelGenqlSelection{
    /** A unique identifier for this object in the Niftory API. */
    id?: boolean | number
    /** A mapping of attributes for this object. These will be stored in the Niftory API but will not be added to the blockchain. */
    attributes?: boolean | number
    /** Creation date of this item */
    createdAt?: boolean | number
    /** Most recent updated date of this item, if any */
    updatedAt?: boolean | number
    /** The status of this resource. Can be used to track progress in designing and creating resources. */
    status?: boolean | number
    /** The ID of this resource on the blockchain. */
    blockchainId?: boolean | number
    /** A mapping of properties that will be added to the blockchain. */
    metadata?: boolean | number
    /** The user-friendly title for this model. */
    title?: boolean | number
    /** The user-friendly description for this model. */
    description?: boolean | number
    /** The rarity of the NFTs in this model. */
    rarity?: boolean | number
    /** The total quantity of NFTs that will be available for this model. */
    quantity?: boolean | number
    /** The total quantity of NFTs that have been minted from this model. */
    quantityMinted?: boolean | number
    /** This NFT model's content. */
    content?: NFTContentGenqlSelection
    /** The state of this NFT Model on the blockchain */
    state?: boolean | number
    /** The NFT model set containing this model. */
    set?: NFTSetGenqlSelection
    /** The NFTs created using this model. */
    nfts?: NFTGenqlSelection
    /** The listings for this model. These can be used to sell the NFTs creating using this model */
    nftListings?: NFTListingGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A list of NFTModels. */
export interface NFTModelListGenqlSelection{
    /** The cursor to use to fetch the next page of results, if any. */
    cursor?: boolean | number
    /** The NFTModels in this list. */
    items?: NFTModelGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A set of NFTModels, to help you organize your NFTs. Read more [here](https://docs.niftory.com/home/v/api/core-concepts/nfts). */
export interface NFTSetGenqlSelection{
    /** A unique identifier for this object in the Niftory API. */
    id?: boolean | number
    /** A mapping of attributes for this object. These will be stored in the Niftory API but will not be added to the blockchain. */
    attributes?: boolean | number
    /** Creation date of this item */
    createdAt?: boolean | number
    /** Most recent updated date of this item, if any */
    updatedAt?: boolean | number
    /** The status of this resource. Can be used to track progress in designing and creating resources. */
    status?: boolean | number
    /** The ID of this resource on the blockchain. */
    blockchainId?: boolean | number
    /** A mapping of properties that will be added to the blockchain. */
    metadata?: boolean | number
    /** The display image for this set. */
    title?: boolean | number
    /** The image to represent this set. */
    image?: boolean | number
    /** The state of this NFT Set on the blockchain */
    state?: boolean | number
    /** String labels to tag this NFTSet with. These will be stored in the Niftory API but will not be added to the blockchain. */
    tags?: boolean | number
    /** Models contained in this set. */
    models?: NFTModelGenqlSelection
    /** The app this set belongs to. */
    app?: AppGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An organization within the Niftory ecosystem. Organization manages [App]({{Types.App}})s. Read more [here](https://docs.niftory.com/home/v/admin/explore/org-and-apps). */
export interface OrganizationGenqlSelection{
    /** A unique identifier for this object in the Niftory API. */
    id?: boolean | number
    name?: boolean | number
    /** The apps belonging to this Organization. */
    apps?: AppGenqlSelection
    /** This organization's members. */
    members?: AdminUserGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A file uploaded to the Niftory API. */
export interface SimpleFileGenqlSelection{
    /** A unique identifier for this file in the Niftory API. */
    id?: boolean | number
    /** The cloud storage URL for this file. If state is GENERATED_UPLOAD_URL, then this url is the presigned URL to upload to. */
    url?: boolean | number
    /** The upload state of the file. */
    state?: boolean | number
    /** A friendly name for the file. */
    name?: boolean | number
    /** The MIME content type for this file. */
    contentType?: boolean | number
    /** The MD5 hash of this file. */
    md5?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Represents a blockchain wallet scoped to a particular [App]({{Types.App}}) and [AppUser]({{Types.AppUser}}). Read more [here](https://docs.niftory.com/home/v/api/core-concepts/wallets). */
export interface WalletGenqlSelection{
    /** A mapping of attributes for this object. These will be stored in the Niftory API but will not be added to the blockchain. */
    attributes?: boolean | number
    /** A unique identifier for this object in the Niftory API. */
    id?: boolean | number
    /** Creation date of this item */
    createdAt?: boolean | number
    /** Most recent updated date of this item, if any */
    updatedAt?: boolean | number
    /** This wallet's address on the blockchain. */
    address?: boolean | number
    /** The state of this wallet. */
    state?: boolean | number
    /** The verification code that can be used to verify this wallet for this user. */
    verificationCode?: boolean | number
    /** The NFTs from the current app that are in this wallet. */
    nfts?: NFTGenqlSelection
    /** The User who owns the wallet */
    appUser?: AppUserGenqlSelection
    /** The type of wallet. This represents if the wallet was linked externally or created by Niftory */
    walletType?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A list of Wallets. */
export interface WalletListGenqlSelection{
    /** The cursor to use to fetch the next page of results, if any. */
    cursor?: boolean | number
    /** The Wallets in this list. */
    items?: WalletGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An interface representing objects with unique IDs */
export interface IdentifiableGenqlSelection{
    /** A unique identifier for this object in the Niftory API. */
    id?: boolean | number
    on_AdminUser?: AdminUserGenqlSelection
    on_App?: AppGenqlSelection
    on_AppUser?: AppUserGenqlSelection
    on_Contract?: ContractGenqlSelection
    on_Invoice?: InvoiceGenqlSelection
    on_NFT?: NFTGenqlSelection
    on_NFTContent?: NFTContentGenqlSelection
    on_NFTListing?: NFTListingGenqlSelection
    on_NFTModel?: NFTModelGenqlSelection
    on_NFTSet?: NFTSetGenqlSelection
    on_Organization?: OrganizationGenqlSelection
    on_Wallet?: WalletGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An interface representing objects that have attributes property for non-blockchain property storage. */
export interface AttributableGenqlSelection{
    /** A mapping of attributes for this object. These will be stored in the Niftory API but will not be added to the blockchain. */
    attributes?: boolean | number
    on_NFTListing?: NFTListingGenqlSelection
    on_NFTModel?: NFTModelGenqlSelection
    on_NFTSet?: NFTSetGenqlSelection
    on_Wallet?: WalletGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An interface representing objects with a creation and update time */
export interface HasTimesGenqlSelection{
    /** Creation date of this item */
    createdAt?: boolean | number
    /** Most recent updated date of this item, if any */
    updatedAt?: boolean | number
    on_AppUser?: AppUserGenqlSelection
    on_Invoice?: InvoiceGenqlSelection
    on_NFTListing?: NFTListingGenqlSelection
    on_NFTModel?: NFTModelGenqlSelection
    on_NFTSet?: NFTSetGenqlSelection
    on_Wallet?: WalletGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An interface representing lists that can be paginated with a cursor. */
export interface PageableGenqlSelection{
    /** The cursor to use to fetch the next page of results, if any. */
    cursor?: boolean | number
    on_AppUserList?: AppUserListGenqlSelection
    on_InvoiceList?: InvoiceListGenqlSelection
    on_NFTList?: NFTListGenqlSelection
    on_NFTListingList?: NFTListingListGenqlSelection
    on_NFTModelList?: NFTModelListGenqlSelection
    on_WalletList?: WalletListGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface QueryGenqlSelection{
    /** Gets the currently signed in [AdminUser]({{Types.AdminUser}}). */
    adminUser?: AdminUserGenqlSelection
    /** Gets the currently logged-in [AppUser]({{Types.AppUser}}) context. Read more [here](https://docs.niftory.com/home/v/api/core-concepts/app-and-appuser). */
    appUser?: AppUserGenqlSelection
    /** Gets an [AppUser]({{Types.AppUser}}) by its ID. Read more [here](https://docs.niftory.com/home/v/api/core-concepts/app-and-appuser). */
    appUserById?: (AppUserGenqlSelection & { __args: {
    /** The ID of the AppUser to retrieve. */
    id: Scalars['ID']} })
    /** Gets the list of users for your app. Read more [here](https://docs.niftory.com/home/v/api/core-concepts/app-and-appuser). */
    appUsers?: (AppUserListGenqlSelection & { __args?: {
    /** The pagination cursor returned by your last call to appUsers */
    cursor?: (Scalars['String'] | null), 
    /** The maximum number of results to return. Defaults to 50, max is 100. */
    maxResults?: (Scalars['PositiveInt'] | null)} })
    /** Gets the [App]({{Types.App}}) for the current application context. Read more [here](https://docs.niftory.com/home/v/api/core-concepts/app-and-appuser). */
    app?: AppGenqlSelection
    /** Gets an [App]({{Types.App}}) by its ID. Read more [here](https://docs.niftory.com/home/v/api/core-concepts/app-and-appuser). */
    appById?: (AppGenqlSelection & { __args?: {
    /** The ID of the App to retrieve. If unspecified, then 'name' must be specified. */
    id?: (Scalars['ID'] | null), 
    /** The name of the App to retrieve. If unspecified, then 'id' must be specified. */
    name?: (Scalars['String'] | null)} })
    /** Creates the [App]({{Types.App}}) on the specified organization for the user. */
    createApp?: (AppGenqlSelection & { __args: {data: AppCreateInput} })
    /** Gets the [Contract]({{Types.Contract}}) from the currently authenticated app. Read more [here](https://docs.niftory.com/home/v/api/core-concepts/contract). */
    contract?: ContractGenqlSelection
    /** Gets a [File]({{Types.File}}) by its ID. */
    file?: (SimpleFileGenqlSelection & { __args: {
    /** The database ID of the NFTFile to retrieve. */
    id: Scalars['ID']} })
    /** Gets a [NFTContent]({{Types.NFTContent}}) by ID. */
    nftContent?: (NFTContentGenqlSelection & { __args: {
    /** The ID of the NFTContent to retrieve. */
    id: Scalars['ID']} })
    /** Gets an [NFTFile]({{Types.NFTFile}}) by its ID, cloud storage, or IPFS URL. */
    nftFile?: (NFTFileGenqlSelection & { __args?: {
    /** The database ID of the NFTFile to retrieve. If unspecified, then url or ipfsUrl must be specified. */
    id?: (Scalars['String'] | null), 
    /** The cloud storage URL of the NFTFile to retrieve. If unspecified, then id or ipfsUrl must be specified. */
    url?: (Scalars['String'] | null), 
    /** The IPFS URL of the NFTFile to retrieve. If unspecified, then id or url must be specified. */
    ipfsUrl?: (Scalars['String'] | null)} })
    /** Gets a [Invoice]({{Types.Invoice}}) by ID. */
    invoice?: (InvoiceGenqlSelection & { __args: {
    /** The ID of the Invoice to retrieve. */
    id: Scalars['ID']} })
    /** Gets a [Organization]({{Types.Organization}}) by ID. */
    organization?: (OrganizationGenqlSelection & { __args: {
    /** The ID of the Organization to retrieve. */
    id: Scalars['ID']} })
    /** Gets the list of invoices for your app. */
    invoices?: (InvoiceListGenqlSelection & { __args?: {
    /** The ID of the client app. */
    appId?: (Scalars['ID'] | null), 
    /** The pagination cursor returned by your last call to appUsers */
    cursor?: (Scalars['String'] | null), 
    /** The maximum number of results to return. Defaults to 50, max is 100. */
    maxResults?: (Scalars['PositiveInt'] | null)} })
    /** Gets an [NFTListing]({{Types.NFTListing}}) by ID. */
    nftListing?: (NFTListingGenqlSelection & { __args: {
    /** The ID of the NFTListing to retrieve. */
    id: Scalars['ID']} })
    /** Gets [NFTListing]({{Types.NFTListing}})s for the current [App]({{Types.App}}) context */
    nftListings?: (NFTListingListGenqlSelection & { __args?: {
    /** Properties to filter NFTListings by. */
    filter?: (NFTListingFilterInput | null), 
    /** The pagination cursor returned by your last call to NFTListings */
    cursor?: (Scalars['String'] | null), 
    /** The maximum number of results to return. Defaults to 50, max is 100. */
    maxResults?: (Scalars['PositiveInt'] | null)} })
    /** Gets an [NFTModel]({{Types.NFTModel}}) by database ID. Read more [here](https://docs.niftory.com/home/v/api/core-concepts/nfts/querying-nfts). */
    nftModel?: (NFTModelGenqlSelection & { __args: {
    /** The database ID of the NFTModel to retrieve. */
    id: Scalars['ID']} })
    /** Gets [NFTModel]({{Types.NFTModel}})s for the current [App]({{Types.App}}) context. Read more [here](https://docs.niftory.com/home/v/api/core-concepts/nfts/querying-nfts). */
    nftModels?: (NFTModelListGenqlSelection & { __args?: {
    /** The app ID these NFT Models belong to. Only supported if calling with admin credentials. */
    appId?: (Scalars['ID'] | null), 
    /** Properties to filter NFT Models by. */
    filter?: (NFTModelFilterInput | null), 
    /** The pagination cursor returned by your last call to nftModels */
    cursor?: (Scalars['String'] | null), 
    /** The maximum number of results to return. Defaults to 50, max is 100. */
    maxResults?: (Scalars['PositiveInt'] | null)} })
    /** Gets an [NFTSet]({{Types.NFTSet}}) by database ID. */
    set?: (NFTSetGenqlSelection & { __args: {
    /** The database ID of the NFTSet to retrieve. */
    id: Scalars['ID']} })
    /** Gets [NFTSet]({{Types.NFTSet}})s for the current [App]({{Types.App}}) context. */
    sets?: (NFTSetGenqlSelection & { __args?: {
    /** Properties to filter NFTSets by. */
    filter?: (NFTSetFilterInput | null), 
    /** The app ID this set belongs to. Only supported if calling with admin credentials. */
    appId?: (Scalars['ID'] | null)} })
    /** Gets an [NFT]({{Types.NFT}}) by database ID. Read more [here](https://docs.niftory.com/home/v/api/core-concepts/nfts/querying-nfts). */
    nft?: (NFTGenqlSelection & { __args: {
    /** The database ID of the NFT to retrieve. */
    id: Scalars['ID']} })
    /** Gets [NFT]({{Types.NFT}})s associated with the current [AppUser]({{Types.AppUser}}) context, including those that are transferring or failed to transfer. Read more [here](https://docs.niftory.com/home/v/api/core-concepts/nfts/querying-nfts). */
    nfts?: (NFTListGenqlSelection & { __args?: {
    /** The ID of the [AppUser]({{Types.AppUser}}) to filter by. Can only be the currently logged in user without privileged token. */
    userId?: (Scalars['ID'] | null), 
    /** The ID of the client app. */
    appId?: (Scalars['ID'] | null), 
    /** Properties to filter NFT's by. */
    filter?: (NFTFilterInput | null), 
    /** The pagination cursor returned by your last call to nfts */
    cursor?: (Scalars['String'] | null), 
    /** The maximum number of results to return. Defaults to 50, max is 100. */
    maxResults?: (Scalars['PositiveInt'] | null)} })
    /** Gets [NFT]({{Types.NFT}})s associated with the current wallet, including those that are transferring or failed to transfer. Read more [here](https://docs.niftory.com/home/v/api/core-concepts/nfts/querying-nfts). */
    nftsByWallet?: (NFTListGenqlSelection & { __args?: {
    /** The database ID of the [Wallet]({{Types.Wallet}}) to filter by. This query requires the ID or the Wallet Address. */
    walletId?: (Scalars['ID'] | null), 
    /** The address of the [Wallet]({{Types.Wallet}}) to filter by. This query requires the ID or the Wallet Address. */
    address?: (Scalars['String'] | null), 
    /** Properties to filter NFT's by. */
    filter?: (NFTFilterInput | null), 
    /** The pagination cursor returned by your last call to nfts */
    cursor?: (Scalars['String'] | null), 
    /** The maximum number of results to return. Defaults to 50, max is 100. */
    maxResults?: (Scalars['PositiveInt'] | null)} })
    /** Gets the primary [Wallet]({{Types.Wallet}}) belonging to the current [AppUser]({{Types.AppUser}}) context. Read more [here](https://docs.niftory.com/home/v/api/core-concepts/wallets/query-wallets). */
    wallet?: WalletGenqlSelection
    /** Gets a [Wallet]({{Types.Wallet}}) by its database ID. Read more [here](https://docs.niftory.com/home/v/api/core-concepts/wallets/query-wallets). */
    walletById?: (WalletGenqlSelection & { __args: {
    /** The ID of the Wallet to retrieve. */
    id: Scalars['ID']} })
    /** Gets a [Wallet]({{Types.Wallet}}) by its blockchain address. Wallet must be registered using [registerWallet]({{Mutations.registerWallet}}) before this request succeeds. Read more [here](https://docs.niftory.com/home/v/api/core-concepts/wallets/query-wallets). */
    walletByAddress?: (WalletGenqlSelection & { __args: {
    /** The ID of the App to retrieve the wallet for. Only supported when calling with admin credentials. */
    appId?: (Scalars['ID'] | null), 
    /** The address of the Wallet to retrieve. */
    address: Scalars['String']} })
    /** Gets the primary [Wallet]({{Types.Wallet}}) for a given [AppUser]({{Types.AppUser}}). Read more [here](https://docs.niftory.com/home/v/api/core-concepts/wallets/query-wallets). */
    walletByUserId?: (WalletGenqlSelection & { __args: {
    /** The ID of the AppUser to retrieve the wallet for. */
    userId: Scalars['ID']} })
    /** Gets all [Wallet]({{Types.Wallet}})s for a given app. Read more [here](https://docs.niftory.com/home/v/api/core-concepts/wallets/query-wallets). */
    wallets?: (WalletListGenqlSelection & { __args: {
    /** The ID of the App to retrieve the wallet for. */
    appId: Scalars['ID'], 
    /** The pagination cursor returned by your last call to nftModels */
    cursor?: (Scalars['String'] | null), 
    /** The maximum number of results to return. Defaults to 50, max is 100. */
    maxResults?: (Scalars['PositiveInt'] | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MutationGenqlSelection{
    /** Deploys the [Contract]({{Types.Contract}}) from the currently authenticated app. Read more [here](https://docs.niftory.com/home/v/api/core-concepts/contract). */
    deployContract?: (ContractGenqlSelection & { __args: {
    /** The id of the app to deploy */
    appId: Scalars['String'], 
    /** The name of the contract */
    name: Scalars['String'], 
    /** The blockchain to deploy the contract */
    blockchain: Blockchain} })
    /** Generates a pre-signed URL that can then be used to upload a file. Once the file has been uploaded to the URL, it will automatically be uploaded to IPFS (if desired). Use the returned [File]({{Types.SimpleFile}}).state to track the upload. */
    createFileUploadUrl?: (FileGenqlSelection & { __args: {
    /** A friendly name for the file. */
    name: Scalars['String'], 
    /** Description about the file. If specified, and uploadToIpfs=true, this description will be added to the IPFS file metadata. */
    description?: (Scalars['String'] | null), 
    /** The app ID this file should be uploaded to. Only supported if calling with admin credentials. */
    appId?: (Scalars['ID'] | null), 
    /** File upload options, such as whether to upload to IPFS. */
    options?: (CreateFileOptionsInput | null)} })
    /** Deletes the specified file from cloud storage (but not IPFS). */
    deleteFile?: (FileGenqlSelection & { __args?: {
    /** The ID of the [File]({{Types.SimpleFile}}) to delete. */
    id?: (Scalars['ID'] | null), 
    /** The cloud storage URL of the [File]({{Types.SimpleFile}}) to delete. */
    url?: (Scalars['String'] | null)} })
    /** Creates an [NFTContent]({{Types.NFTContent}}) object containing pre-signed URLs that can then be used to upload a file and poster. The primary file will automatically be uploaded to IPFS once it's been uploaded to the pre-signed URL. Each returned [File]({{Types.SimpleFile}}) has a 'state' property to track the upload. */
    uploadNFTContent?: (NFTContentGenqlSelection & { __args?: {
    /** A friendly name for the file. */
    name?: (Scalars['String'] | null), 
    /** Description about the file. If specified, this description will be added to the IPFS file metadata. */
    description?: (Scalars['String'] | null), 
    /** The Content-Type (MIME type) of the file to be uploaded. This must match the Content-Type header you will use to upload the file to the returned URL. If this is left empty, your Content-Type header must also be empty. */
    contentType?: (Scalars['String'] | null), 
    /** The Content-Type (MIME type) of the poster file to be uploaded. This must match the Content-Type header you will use to upload the poster to the returned URL. If this is left empty, your Content-Type header must also be empty. */
    posterContentType?: (Scalars['String'] | null)} })
    /** Marks the checkout with Dapper Wallet as complete, and updates the [NFT]({{Types.NFT}}) as belonging to specified wallet. Called after [checkoutWithDapperWallet]({{Mutations.checkoutWithDapperWallet}}) once purchase is completed. */
    completeCheckoutWithDapperWallet?: (NFTGenqlSelection & { __args: {
    /** The completed Dapper Wallet transaction ID. */
    transactionId: Scalars['String'], 
    /** Database ID of the [NFT]({{Types.NFT}}), returned from [checkoutWithDapperWallet]({{Mutations.checkoutWithDapperWallet}}). */
    nftDatabaseId?: (Scalars['String'] | null)} })
    /** Creates a new [NFTListing]({{Types.NFTListing}}). */
    createNFTListing?: (NFTListingGenqlSelection & { __args: {
    /** The data to create the [NFTListing]({{Types.NFTListing}}) with. */
    data: CreateNFTListingInput} })
    /** Initiates checkout for a reserved NFT. */
    checkout?: (InitiateCheckoutResponseGenqlSelection & { __args: {
    /** The ID of the Invoice representing the reserved NFT. This can be generated using reserve . */
    invoiceId: Scalars['String'], 
    /** The URL to redirect to on successful payment. */
    onSuccess: Scalars['String'], 
    /** The URL to redirect to on payment error. */
    onError: Scalars['String']} })
    /** Initiates checkout with Dapper Wallet of specified [NFTModel]({{Types.NFTModel}})s, and returns a signed transaction to complete checkout with. Flow blockchain only. */
    checkoutWithDapperWallet?: (CheckoutWithDapperWalletResponseGenqlSelection & { __args: {
    /** [NFTModel]({{Types.NFTModel}}) IDs to include in the checkout. One [NFT]({{Types.NFT}}) will be randomly reserved from each NFTModel specified. */
    nftModelId: Scalars['ID'], 
    /** The ID of the [AppUser]({{Types.AppUser}}) to send the NFT to. */
    userId?: (Scalars['ID'] | null), 
    /** The database ID of the [Wallet]({{Types.Wallet}}) to transfer to. This mutation requires `userId`, `walletId' or the wallet `address` to be specified. */
    walletId?: (Scalars['ID'] | null), 
    /** The address of the [Wallet]({{Types.Wallet}}) to transfer to. This mutation requires `userId`, `walletId' or the wallet `address` to be specified. */
    address?: (Scalars['String'] | null), 
    /** The price in DUC to apply to the checkout. */
    price?: (Scalars['UnsignedFloat'] | null), 
    /** The expiry of this checkout as a unix timestamp. */
    expiry?: (Scalars['UnsignedInt'] | null)} })
    /** Reserves an [NFT]({{Types.NFT}}) for an [AppUser]({{Types.AppUser}}) and returns an [Invoice]({{Types.Invoice}}) for purchase. */
    reserve?: (InvoiceGenqlSelection & { __args: {
    /** The ID of the listing to reserve an NFT from. */
    listingId: Scalars['ID']} })
    /** Signs a transaction for Dapper Wallet. */
    signTransactionForDapperWallet?: { __args: {
    /** The transaction to sign. */
    transaction?: (Scalars['String'] | null)} } | boolean | number
    /** Updates an existing [NFTListing]({{Types.NFTListing}}). */
    updateNFTListing?: (NFTListingGenqlSelection & { __args: {
    /** The ID of the [NFTListing]({{Types.NFTListing}}) to activate. */
    id: Scalars['ID'], 
    /** The data to update the [NFTlisting]({{Types.NFTListing}}) with. */
    data: UpdateNFTListingInput} })
    /** Deletes an existing [NFTListing]({{Types.NFTListing}}). */
    deleteNFTListing?: (NFTListingGenqlSelection & { __args: {
    /** The ID of the [NFTListing]({{Types.NFTListing}}) to delete. */
    id: Scalars['ID']} })
    /** Initiates minting for a given [NFTModel]({{Types.NFTmodel}}). */
    mintNFTModel?: (NFTModelGenqlSelection & { __args: {
    /** The ID of the [NFTModel]({{Types.NFTmodel}}) to mint [NFT]({{Types.NFT}})s from. */
    id: Scalars['ID'], 
    /** The number of NFTs to mint. Defaults to minting all NFTs in the model. If quantity exceeds the quantity defined in the model, the latter is used. */
    quantity?: (Scalars['PositiveInt'] | null), 
    /** The app ID this [NFTModel]({{Types.NFTModel}}) belongs/mints to. Only supported if calling with admin credentials. */
    appId?: (Scalars['ID'] | null)} })
    /** Creates a new [NFTModel]({{Types.NFTModel}}). */
    createNFTModel?: (NFTModelGenqlSelection & { __args: {
    /** The ID of the [NFTSet]({{Types.NFTSet}}) that this model should belong to. This can be created using [createNFTSet]({{Mutations.createSet}}) or retrieved using This can be created using [sets]({{Queries.sets}}). */
    setId: Scalars['ID'], 
    /** The data to create the NFTModel. */
    data: NFTModelCreateInput, 
    /** The app ID this [NFTModel]({{Types.NFTModel}}) should be belong to. Only supported if calling with admin credentials. */
    appId?: (Scalars['ID'] | null)} })
    /** Deletes an existing [NFTModel]({{Types.NFTModel}}). This operation will only be perfomed if no NFTs have been minted from this NFTModel */
    deleteNFTModel?: (NFTModelGenqlSelection & { __args: {
    /** The ID of the NFT model to delete. */
    id: Scalars['ID']} })
    /** Updates an existing [NFTModel]({{Types.NFTModel}}). Note that if this NFTModel has already been used to mint an NFT, the update operation will fail for any properties that affect the blockchain (such as 'quantity', 'title', 'metadata', etc.), whereas updating 'attributes' will succeed. */
    updateNFTModel?: (NFTModelGenqlSelection & { __args: {
    /** The ID of the NFT model to update. */
    id: Scalars['ID'], 
    /** The data to update the NFTModel. */
    data: NFTModelUpdateInput} })
    /** Creates a new [NFTSet]({{Types.NFTSet}}). */
    createNFTSet?: (NFTSetGenqlSelection & { __args: {
    /** The input data for the NFTSet. */
    data: NFTSetCreateInput, 
    /** The app ID this set should be created in. Only supported if calling with admin credentials. */
    appId?: (Scalars['ID'] | null)} })
    /** Updates an existing [NFTSet]({{Types.NFTSet}}). */
    updateNFTSet?: (NFTSetGenqlSelection & { __args: {
    /** The ID of the NFTSet to update. */
    id: Scalars['ID'], 
    /** The input data for the NFTSet. */
    data: NFTSetUpdateInput} })
    /** Initiates minting for a given [NFT]({{Types.NFT}}). */
    mintNFT?: (NFTGenqlSelection & { __args: {
    /** The ID of the [NFTModel]({{Types.NFTModel}}) to mint from. */
    nftModelId: Scalars['ID']} })
    /** Initiates the transfer of an [NFT]({{Types.NFT}}) to the currently-logged in [AppUser]({{Types.AppUser}}). The NFT is reserved for the user in database, and you can use the NFT.status field to check on the transfer progress. */
    transfer?: (NFTGenqlSelection & { __args?: {
    /** The ID of the [NFT]({{Types.NFT}}) to send. */
    id?: (Scalars['ID'] | null), 
    /** Used if NFT ID is unspecified to randomly select an NFT from the [NFTModel]({{Types.NFTModel}}) */
    nftModelId?: (Scalars['ID'] | null), 
    /** The ID of the [AppUser]({{Types.AppUser}}) to send the NFT to. This mutation requires the `userId`, `walletId' or the wallet `address` to be specified. */
    userId?: (Scalars['ID'] | null), 
    /** The database ID of the [Wallet]({{Types.Wallet}}) to filter by. This mutation requires the `userId`, `walletId' or the wallet `address` to be specified. */
    walletId?: (Scalars['ID'] | null), 
    /** The address of the [Wallet]({{Types.Wallet}}) to filter by. This mutation requires the `userId`, `walletId' or the wallet `address` to be specified. */
    address?: (Scalars['String'] | null), 
    /** The appId of the [App]({{Types.App}}) to which the NFT belongs. */
    appId?: (Scalars['ID'] | null), 
    /** Force transfer an [NFT]({{Types.NFT}}) that has failed previously. */
    force?: (Scalars['Boolean'] | null)} })
    /** Initiates the withdrawal of an [NFT]({{Types.NFT}}) from a custodial Niftory [Wallet]{{Types.Wallet}} to a receiver [Wallet]({{Types.Wallet}}) address */
    withdraw?: (NFTGenqlSelection & { __args: {
    /** The database ID of the [NFT]({{Types.NFT}}) to send. */
    id: Scalars['ID'], 
    /** The address of the [Wallet]({{Types.Wallet}}) to withdraw to */
    receiverAddress: Scalars['String'], 
    /** The address of the custodial Niftory [Wallet]({{Types.Wallet}}) to withdraw from. Only supported if calling with admin credentials. */
    niftoryWalletAddress?: (Scalars['String'] | null), 
    /** The appId of the [App]({{Types.App}}) to which the NFT belongs. Only supported if calling with admin credentials. */
    appId?: (Scalars['ID'] | null)} })
    createOrganization?: (OrganizationGenqlSelection & { __args: {data: OrganizationCreateInput} })
    /** Provisions a custodial Niftory [Wallet]({{Types.Wallet}}) and, if specified, associates it with the given [AppUser]({{Types.AppUser}}). Note: The call fails if the user already has a wallet. */
    createNiftoryWallet?: (WalletGenqlSelection & { __args?: {
    /** The ID of the [AppUser]({{Types.AppUser}}) to associate with the created Wallet. If unspecified, the caller is responsible for mapping the Wallet to their user. */
    userId?: (Scalars['ID'] | null), data?: (CreateNiftoryWalletInput | null), 
    /** The app ID this wallet should belong to. Only supported if calling with admin credentials. */
    appId?: (Scalars['ID'] | null)} })
    /** Marks a [Wallet]({{Types.Wallet}}) as ready, indicating that the wallet is ready to receive [NFT]({{Types.NFT}})s from the app's [Contract]({{Types.Contract}}). The wallet must be verified before this succeeds. Read more [here](https://docs.niftory.com/home/v/api/core-concepts/wallets/set-up-wallets). */
    readyWallet?: (WalletGenqlSelection & { __args: {
    /** The address of the wallet. */
    address: Scalars['String']} })
    /** Registers a [Wallet]({{Types.Wallet}}), associating it with the currently signed-in [AppUser]({{Types.AppUser}}) if specified. Read more [here](https://docs.niftory.com/home/v/api/core-concepts/wallets/set-up-wallets). */
    registerWallet?: (WalletGenqlSelection & { __args: {
    /** The address of the wallet. */
    address: Scalars['String'], data?: (RegisterWalletInput | null)} })
    /** Sets the primary [Wallet]({{Types.Wallet}}) for the currently signed in user. */
    setPrimaryWallet?: (WalletGenqlSelection & { __args?: {
    /** The ID of the wallet to set as primary. Must belong to the currently signed-in user. */
    walletId?: (Scalars['String'] | null), 
    /** The address of the wallet to set as primary. Must belong to the currently signed-in user. */
    address?: (Scalars['String'] | null)} })
    /** Unlinks the specified [Wallet]({{Types.Wallet}}) from the currently signed in user. */
    unlinkWallet?: (WalletGenqlSelection & { __args?: {
    /** The ID of the wallet to unlink. Must belong to the currently signed-in user. If the user has other wallets and this is their primary wallet, another of their wallets will be randomly selected to be the new primary. */
    walletId?: (Scalars['String'] | null), 
    /** The address of the wallet to unlink. Must belong to the currently signed-in user. */
    address?: (Scalars['String'] | null)} })
    /** Update a [Wallet]({{Types.Wallet}}) of the currently signed-in user. Read more [here](https://docs.niftory.com/home/v/api/core-concepts/wallets/set-up-wallets). */
    updateWallet?: (WalletGenqlSelection & { __args: {
    /** The address of the wallet. */
    address: Scalars['String'], data?: (UpdateWalletInput | null)} })
    /** Verifies a [Wallet]({{Types.Wallet}}) to the currently signed-in user. If the signed verification code fails to decode with the wallet's public key or doesn't match the wallet's verification code, the request will fail. Read more [here](https://docs.niftory.com/home/v/api/core-concepts/wallets/set-up-wallets). */
    verifyWallet?: (WalletGenqlSelection & { __args: {
    /** The address of the wallet. */
    address: Scalars['String'], 
    /** The verification code of the wallet signed by the wallet's private key. */
    signedVerificationCode: Scalars['JSON']} })
    __typename?: boolean | number
    __scalar?: boolean | number
}


    const BlockchainEntity_possibleTypes: string[] = ['NFT','NFTModel','NFTSet']
    export const isBlockchainEntity = (obj?: { __typename?: any } | null): obj is BlockchainEntity => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBlockchainEntity"')
      return BlockchainEntity_possibleTypes.includes(obj.__typename)
    }
    


    const BlockchainResource_possibleTypes: string[] = ['NFTModel','NFTSet']
    export const isBlockchainResource = (obj?: { __typename?: any } | null): obj is BlockchainResource => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBlockchainResource"')
      return BlockchainResource_possibleTypes.includes(obj.__typename)
    }
    


    const File_possibleTypes: string[] = ['NFTFile','SimpleFile']
    export const isFile = (obj?: { __typename?: any } | null): obj is File => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFile"')
      return File_possibleTypes.includes(obj.__typename)
    }
    


    const Resource_possibleTypes: string[] = ['NFTModel','NFTSet']
    export const isResource = (obj?: { __typename?: any } | null): obj is Resource => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isResource"')
      return Resource_possibleTypes.includes(obj.__typename)
    }
    


    const SellableEntity_possibleTypes: string[] = ['NFT']
    export const isSellableEntity = (obj?: { __typename?: any } | null): obj is SellableEntity => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSellableEntity"')
      return SellableEntity_possibleTypes.includes(obj.__typename)
    }
    


    const UserData_possibleTypes: string[] = ['AdminUser','AppUser']
    export const isUserData = (obj?: { __typename?: any } | null): obj is UserData => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserData"')
      return UserData_possibleTypes.includes(obj.__typename)
    }
    


    const AdminUser_possibleTypes: string[] = ['AdminUser']
    export const isAdminUser = (obj?: { __typename?: any } | null): obj is AdminUser => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAdminUser"')
      return AdminUser_possibleTypes.includes(obj.__typename)
    }
    


    const App_possibleTypes: string[] = ['App']
    export const isApp = (obj?: { __typename?: any } | null): obj is App => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isApp"')
      return App_possibleTypes.includes(obj.__typename)
    }
    


    const AppUser_possibleTypes: string[] = ['AppUser']
    export const isAppUser = (obj?: { __typename?: any } | null): obj is AppUser => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAppUser"')
      return AppUser_possibleTypes.includes(obj.__typename)
    }
    


    const AppUserList_possibleTypes: string[] = ['AppUserList']
    export const isAppUserList = (obj?: { __typename?: any } | null): obj is AppUserList => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAppUserList"')
      return AppUserList_possibleTypes.includes(obj.__typename)
    }
    


    const BlockchainTransaction_possibleTypes: string[] = ['BlockchainTransaction']
    export const isBlockchainTransaction = (obj?: { __typename?: any } | null): obj is BlockchainTransaction => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBlockchainTransaction"')
      return BlockchainTransaction_possibleTypes.includes(obj.__typename)
    }
    


    const CheckoutWithDapperWalletResponse_possibleTypes: string[] = ['CheckoutWithDapperWalletResponse']
    export const isCheckoutWithDapperWalletResponse = (obj?: { __typename?: any } | null): obj is CheckoutWithDapperWalletResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCheckoutWithDapperWalletResponse"')
      return CheckoutWithDapperWalletResponse_possibleTypes.includes(obj.__typename)
    }
    


    const Contract_possibleTypes: string[] = ['Contract']
    export const isContract = (obj?: { __typename?: any } | null): obj is Contract => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isContract"')
      return Contract_possibleTypes.includes(obj.__typename)
    }
    


    const FixedPricing_possibleTypes: string[] = ['FixedPricing']
    export const isFixedPricing = (obj?: { __typename?: any } | null): obj is FixedPricing => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFixedPricing"')
      return FixedPricing_possibleTypes.includes(obj.__typename)
    }
    


    const InitiateCheckoutResponse_possibleTypes: string[] = ['InitiateCheckoutResponse']
    export const isInitiateCheckoutResponse = (obj?: { __typename?: any } | null): obj is InitiateCheckoutResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isInitiateCheckoutResponse"')
      return InitiateCheckoutResponse_possibleTypes.includes(obj.__typename)
    }
    


    const Invoice_possibleTypes: string[] = ['Invoice']
    export const isInvoice = (obj?: { __typename?: any } | null): obj is Invoice => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isInvoice"')
      return Invoice_possibleTypes.includes(obj.__typename)
    }
    


    const InvoiceList_possibleTypes: string[] = ['InvoiceList']
    export const isInvoiceList = (obj?: { __typename?: any } | null): obj is InvoiceList => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isInvoiceList"')
      return InvoiceList_possibleTypes.includes(obj.__typename)
    }
    


    const NFT_possibleTypes: string[] = ['NFT']
    export const isNFT = (obj?: { __typename?: any } | null): obj is NFT => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isNFT"')
      return NFT_possibleTypes.includes(obj.__typename)
    }
    


    const NFTContent_possibleTypes: string[] = ['NFTContent']
    export const isNFTContent = (obj?: { __typename?: any } | null): obj is NFTContent => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isNFTContent"')
      return NFTContent_possibleTypes.includes(obj.__typename)
    }
    


    const NFTFile_possibleTypes: string[] = ['NFTFile']
    export const isNFTFile = (obj?: { __typename?: any } | null): obj is NFTFile => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isNFTFile"')
      return NFTFile_possibleTypes.includes(obj.__typename)
    }
    


    const NFTList_possibleTypes: string[] = ['NFTList']
    export const isNFTList = (obj?: { __typename?: any } | null): obj is NFTList => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isNFTList"')
      return NFTList_possibleTypes.includes(obj.__typename)
    }
    


    const NFTListing_possibleTypes: string[] = ['NFTListing']
    export const isNFTListing = (obj?: { __typename?: any } | null): obj is NFTListing => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isNFTListing"')
      return NFTListing_possibleTypes.includes(obj.__typename)
    }
    


    const NFTListingList_possibleTypes: string[] = ['NFTListingList']
    export const isNFTListingList = (obj?: { __typename?: any } | null): obj is NFTListingList => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isNFTListingList"')
      return NFTListingList_possibleTypes.includes(obj.__typename)
    }
    


    const NFTModel_possibleTypes: string[] = ['NFTModel']
    export const isNFTModel = (obj?: { __typename?: any } | null): obj is NFTModel => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isNFTModel"')
      return NFTModel_possibleTypes.includes(obj.__typename)
    }
    


    const NFTModelList_possibleTypes: string[] = ['NFTModelList']
    export const isNFTModelList = (obj?: { __typename?: any } | null): obj is NFTModelList => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isNFTModelList"')
      return NFTModelList_possibleTypes.includes(obj.__typename)
    }
    


    const NFTSet_possibleTypes: string[] = ['NFTSet']
    export const isNFTSet = (obj?: { __typename?: any } | null): obj is NFTSet => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isNFTSet"')
      return NFTSet_possibleTypes.includes(obj.__typename)
    }
    


    const Organization_possibleTypes: string[] = ['Organization']
    export const isOrganization = (obj?: { __typename?: any } | null): obj is Organization => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isOrganization"')
      return Organization_possibleTypes.includes(obj.__typename)
    }
    


    const SimpleFile_possibleTypes: string[] = ['SimpleFile']
    export const isSimpleFile = (obj?: { __typename?: any } | null): obj is SimpleFile => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSimpleFile"')
      return SimpleFile_possibleTypes.includes(obj.__typename)
    }
    


    const Wallet_possibleTypes: string[] = ['Wallet']
    export const isWallet = (obj?: { __typename?: any } | null): obj is Wallet => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isWallet"')
      return Wallet_possibleTypes.includes(obj.__typename)
    }
    


    const WalletList_possibleTypes: string[] = ['WalletList']
    export const isWalletList = (obj?: { __typename?: any } | null): obj is WalletList => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isWalletList"')
      return WalletList_possibleTypes.includes(obj.__typename)
    }
    


    const Identifiable_possibleTypes: string[] = ['AdminUser','App','AppUser','Contract','Invoice','NFT','NFTContent','NFTListing','NFTModel','NFTSet','Organization','Wallet']
    export const isIdentifiable = (obj?: { __typename?: any } | null): obj is Identifiable => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isIdentifiable"')
      return Identifiable_possibleTypes.includes(obj.__typename)
    }
    


    const Attributable_possibleTypes: string[] = ['NFTListing','NFTModel','NFTSet','Wallet']
    export const isAttributable = (obj?: { __typename?: any } | null): obj is Attributable => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAttributable"')
      return Attributable_possibleTypes.includes(obj.__typename)
    }
    


    const HasTimes_possibleTypes: string[] = ['AppUser','Invoice','NFTListing','NFTModel','NFTSet','Wallet']
    export const isHasTimes = (obj?: { __typename?: any } | null): obj is HasTimes => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isHasTimes"')
      return HasTimes_possibleTypes.includes(obj.__typename)
    }
    


    const Pageable_possibleTypes: string[] = ['AppUserList','InvoiceList','NFTList','NFTListingList','NFTModelList','WalletList']
    export const isPageable = (obj?: { __typename?: any } | null): obj is Pageable => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPageable"')
      return Pageable_possibleTypes.includes(obj.__typename)
    }
    


    const Query_possibleTypes: string[] = ['Query']
    export const isQuery = (obj?: { __typename?: any } | null): obj is Query => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isQuery"')
      return Query_possibleTypes.includes(obj.__typename)
    }
    


    const Mutation_possibleTypes: string[] = ['Mutation']
    export const isMutation = (obj?: { __typename?: any } | null): obj is Mutation => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMutation"')
      return Mutation_possibleTypes.includes(obj.__typename)
    }
    

export const enumBlockchain = {
   FLOW: 'FLOW' as const,
   ETHEREUM: 'ETHEREUM' as const,
   POLYGON: 'POLYGON' as const
}

export const enumCurrency = {
   USD: 'USD' as const
}

export const enumFileState = {
   PENDING: 'PENDING' as const,
   GENERATED_UPLOAD_URL: 'GENERATED_UPLOAD_URL' as const,
   UPLOADED_TO_CLOUD_STORAGE: 'UPLOADED_TO_CLOUD_STORAGE' as const,
   UPLOADED_TO_IPFS: 'UPLOADED_TO_IPFS' as const,
   READY: 'READY' as const,
   ERROR: 'ERROR' as const
}

export const enumInvoiceState = {
   CREATED: 'CREATED' as const,
   PENDING: 'PENDING' as const,
   COMPLETED: 'COMPLETED' as const,
   ERROR: 'ERROR' as const
}

export const enumListingState = {
   INACTIVE: 'INACTIVE' as const,
   ACTIVE: 'ACTIVE' as const,
   SOLD: 'SOLD' as const,
   HIDE_FROM_STORE: 'HIDE_FROM_STORE' as const,
   SHOW_IN_STORE: 'SHOW_IN_STORE' as const,
   NOT_AVAILAIBLE_FOR_PURCHASE: 'NOT_AVAILAIBLE_FOR_PURCHASE' as const
}

export const enumNftBlockchainState = {
   UNMINTED: 'UNMINTED' as const,
   MINTING: 'MINTING' as const,
   TRANSFERRING: 'TRANSFERRING' as const,
   MINTED: 'MINTED' as const,
   TRANSFERRED: 'TRANSFERRED' as const,
   ERROR: 'ERROR' as const
}

export const enumNftModelBlockchainState = {
   UNMINTED: 'UNMINTED' as const,
   MINTING: 'MINTING' as const,
   MINTED: 'MINTED' as const,
   ERROR: 'ERROR' as const,
   COMPLETED: 'COMPLETED' as const
}

export const enumNftSetBlockchainState = {
   UNMINTED: 'UNMINTED' as const,
   MINTING: 'MINTING' as const,
   MINTED: 'MINTED' as const,
   ERROR: 'ERROR' as const
}

export const enumRole = {
   CREATOR: 'CREATOR' as const,
   MANAGER: 'MANAGER' as const,
   MINTER: 'MINTER' as const,
   ADMINISTRATOR: 'ADMINISTRATOR' as const
}

export const enumSaleProcessingState = {
   CREATED: 'CREATED' as const,
   AVAILABLE: 'AVAILABLE' as const,
   RESERVED: 'RESERVED' as const,
   LOCKED: 'LOCKED' as const,
   TRANSFERRING: 'TRANSFERRING' as const,
   SOLD: 'SOLD' as const,
   ERROR: 'ERROR' as const
}

export const enumSaleState = {
   AVAILABLE: 'AVAILABLE' as const,
   RESERVED: 'RESERVED' as const,
   PAID: 'PAID' as const,
   FULFILLED: 'FULFILLED' as const
}

export const enumSimpleRarityLevel = {
   COMMON: 'COMMON' as const,
   RARE: 'RARE' as const,
   LEGENDARY: 'LEGENDARY' as const
}

export const enumStatus = {
   DRAFT: 'DRAFT' as const,
   IN_PROGRESS: 'IN_PROGRESS' as const,
   TO_DO: 'TO_DO' as const,
   DONE: 'DONE' as const
}

export const enumTransferState = {
   AVAILABLE: 'AVAILABLE' as const,
   RESERVED: 'RESERVED' as const,
   IN_PROGRESS: 'IN_PROGRESS' as const,
   SUCCESS: 'SUCCESS' as const,
   ERROR: 'ERROR' as const
}

export const enumWalletState = {
   PENDING_CREATION: 'PENDING_CREATION' as const,
   UNVERIFIED: 'UNVERIFIED' as const,
   VERIFIED: 'VERIFIED' as const,
   READY: 'READY' as const,
   CREATION_FAILED: 'CREATION_FAILED' as const
}

export const enumWalletType = {
   EXTERNAL: 'EXTERNAL' as const,
   CUSTODIAL: 'CUSTODIAL' as const
}
