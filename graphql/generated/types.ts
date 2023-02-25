export default {
    "scalars": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        17,
        19,
        20,
        49,
        68,
        69,
        70,
        71,
        72,
        73,
        74,
        75,
        76,
        77
    ],
    "types": {
        "Blockchain": {},
        "Currency": {},
        "FileState": {},
        "InvoiceState": {},
        "ListingState": {},
        "NFTBlockchainState": {},
        "NFTModelBlockchainState": {},
        "NFTSetBlockchainState": {},
        "Role": {},
        "SaleProcessingState": {},
        "SaleState": {},
        "SimpleRarityLevel": {},
        "Status": {},
        "TransferState": {},
        "WalletState": {},
        "WalletType": {},
        "AppCreateInput": {
            "name": [
                17
            ],
            "blockchain": [
                0
            ],
            "organizationId": [
                17
            ],
            "redirectUris": [
                17
            ],
            "__typename": [
                17
            ]
        },
        "String": {},
        "CreateFileOptionsInput": {
            "uploadToIPFS": [
                19
            ],
            "contentType": [
                17
            ],
            "posterFileId": [
                20
            ],
            "__typename": [
                17
            ]
        },
        "Boolean": {},
        "ID": {},
        "CreateNFTListingInput": {
            "title": [
                17
            ],
            "description": [
                17
            ],
            "price": [
                72
            ],
            "attributes": [
                71
            ],
            "nftModelId": [
                20
            ],
            "__typename": [
                17
            ]
        },
        "CreateNiftoryWalletInput": {
            "attributes": [
                71
            ],
            "__typename": [
                17
            ]
        },
        "FixedPricingInput": {
            "currency": [
                1
            ],
            "price": [
                72
            ],
            "__typename": [
                17
            ]
        },
        "NFTContentInput": {
            "fileId": [
                20
            ],
            "posterId": [
                20
            ],
            "__typename": [
                17
            ]
        },
        "NFTFilterInput": {
            "nftModelIds": [
                20
            ],
            "ids": [
                20
            ],
            "blockchainIds": [
                17
            ],
            "saleStates": [
                10
            ],
            "blockchainStates": [
                5
            ],
            "transferStates": [
                13
            ],
            "__typename": [
                17
            ]
        },
        "NFTListingFilterInput": {
            "state": [
                4
            ],
            "title": [
                17
            ],
            "ids": [
                20
            ],
            "__typename": [
                17
            ]
        },
        "NFTModelCreateInput": {
            "title": [
                17
            ],
            "description": [
                17
            ],
            "subtitle": [
                17
            ],
            "quantity": [
                73
            ],
            "contentId": [
                20
            ],
            "content": [
                24
            ],
            "status": [
                12
            ],
            "metadata": [
                71
            ],
            "attributes": [
                71
            ],
            "tags": [
                17
            ],
            "__typename": [
                17
            ]
        },
        "NFTModelFilterInput": {
            "status": [
                12
            ],
            "setIds": [
                20
            ],
            "ids": [
                20
            ],
            "blockchainIds": [
                17
            ],
            "tags": [
                17
            ],
            "__typename": [
                17
            ]
        },
        "NFTModelUpdateInput": {
            "title": [
                17
            ],
            "description": [
                17
            ],
            "subtitle": [
                17
            ],
            "quantity": [
                73
            ],
            "contentId": [
                20
            ],
            "content": [
                24
            ],
            "status": [
                12
            ],
            "metadata": [
                71
            ],
            "attributes": [
                71
            ],
            "tags": [
                17
            ],
            "__typename": [
                17
            ]
        },
        "NFTSetCreateInput": {
            "title": [
                17
            ],
            "attributes": [
                71
            ],
            "tags": [
                17
            ],
            "__typename": [
                17
            ]
        },
        "NFTSetFilterInput": {
            "ids": [
                20
            ],
            "blockchainIds": [
                17
            ],
            "title": [
                17
            ],
            "tags": [
                17
            ],
            "__typename": [
                17
            ]
        },
        "NFTSetUpdateInput": {
            "title": [
                17
            ],
            "attributes": [
                71
            ],
            "tags": [
                17
            ],
            "__typename": [
                17
            ]
        },
        "OrganizationCreateInput": {
            "name": [
                17
            ],
            "__typename": [
                17
            ]
        },
        "RegisterWalletInput": {
            "attributes": [
                71
            ],
            "__typename": [
                17
            ]
        },
        "UpdateNFTListingInput": {
            "title": [
                17
            ],
            "description": [
                17
            ],
            "price": [
                72
            ],
            "nftModelId": [
                20
            ],
            "attributes": [
                71
            ],
            "__typename": [
                17
            ]
        },
        "UpdateWalletInput": {
            "attributes": [
                71
            ],
            "__typename": [
                17
            ]
        },
        "BlockchainEntity": {
            "blockchainId": [
                17
            ],
            "metadata": [
                71
            ],
            "on_NFT": [
                55
            ],
            "on_NFTModel": [
                61
            ],
            "on_NFTSet": [
                63
            ],
            "__typename": [
                17
            ]
        },
        "BlockchainResource": {
            "id": [
                20
            ],
            "attributes": [
                71
            ],
            "createdAt": [
                68
            ],
            "updatedAt": [
                68
            ],
            "status": [
                12
            ],
            "blockchainId": [
                17
            ],
            "metadata": [
                71
            ],
            "on_NFTModel": [
                61
            ],
            "on_NFTSet": [
                63
            ],
            "__typename": [
                17
            ]
        },
        "File": {
            "id": [
                20
            ],
            "url": [
                74
            ],
            "state": [
                2
            ],
            "name": [
                17
            ],
            "contentType": [
                17
            ],
            "md5": [
                17
            ],
            "on_NFTFile": [
                57
            ],
            "on_SimpleFile": [
                65
            ],
            "__typename": [
                17
            ]
        },
        "Resource": {
            "id": [
                20
            ],
            "attributes": [
                71
            ],
            "createdAt": [
                68
            ],
            "updatedAt": [
                68
            ],
            "status": [
                12
            ],
            "on_NFTModel": [
                61
            ],
            "on_NFTSet": [
                63
            ],
            "__typename": [
                17
            ]
        },
        "SellableEntity": {
            "saleState": [
                10
            ],
            "on_NFT": [
                55
            ],
            "__typename": [
                17
            ]
        },
        "UserData": {
            "email": [
                69
            ],
            "image": [
                17
            ],
            "name": [
                17
            ],
            "on_AdminUser": [
                43
            ],
            "on_AppUser": [
                45
            ],
            "__typename": [
                17
            ]
        },
        "AdminUser": {
            "email": [
                69
            ],
            "image": [
                17
            ],
            "name": [
                17
            ],
            "id": [
                20
            ],
            "apps": [
                44
            ],
            "organizations": [
                64
            ],
            "__typename": [
                17
            ]
        },
        "App": {
            "id": [
                20
            ],
            "name": [
                17
            ],
            "contract": [
                50
            ],
            "__typename": [
                17
            ]
        },
        "AppUser": {
            "email": [
                69
            ],
            "image": [
                17
            ],
            "name": [
                17
            ],
            "id": [
                20
            ],
            "createdAt": [
                68
            ],
            "updatedAt": [
                68
            ],
            "wallet": [
                66
            ],
            "primaryWallet": [
                66
            ],
            "wallets": [
                66
            ],
            "app": [
                44
            ],
            "__typename": [
                17
            ]
        },
        "AppUserList": {
            "cursor": [
                17
            ],
            "items": [
                45
            ],
            "__typename": [
                17
            ]
        },
        "BlockchainTransaction": {
            "blockchain": [
                0
            ],
            "hash": [
                17
            ],
            "name": [
                17
            ],
            "__typename": [
                17
            ]
        },
        "CheckoutWithDapperWalletResponse": {
            "cadence": [
                17
            ],
            "registryAddress": [
                17
            ],
            "brand": [
                17
            ],
            "nftId": [
                17
            ],
            "nftTypeRef": [
                17
            ],
            "nftDatabaseId": [
                17
            ],
            "setId": [
                17
            ],
            "templateId": [
                17
            ],
            "price": [
                17
            ],
            "expiry": [
                17
            ],
            "signerKeyId": [
                49
            ],
            "signerAddress": [
                17
            ],
            "__typename": [
                17
            ]
        },
        "Int": {},
        "Contract": {
            "id": [
                20
            ],
            "address": [
                17
            ],
            "blockchain": [
                0
            ],
            "name": [
                17
            ],
            "__typename": [
                17
            ]
        },
        "FixedPricing": {
            "currency": [
                1
            ],
            "price": [
                72
            ],
            "__typename": [
                17
            ]
        },
        "InitiateCheckoutResponse": {
            "redirectUrl": [
                74
            ],
            "status": [
                17
            ],
            "statusMessage": [
                17
            ],
            "__typename": [
                17
            ]
        },
        "Invoice": {
            "id": [
                20
            ],
            "createdAt": [
                68
            ],
            "updatedAt": [
                68
            ],
            "state": [
                3
            ],
            "total": [
                72
            ],
            "listingId": [
                17
            ],
            "userId": [
                17
            ],
            "__typename": [
                17
            ]
        },
        "InvoiceList": {
            "cursor": [
                17
            ],
            "items": [
                53
            ],
            "__typename": [
                17
            ]
        },
        "NFT": {
            "blockchainId": [
                17
            ],
            "metadata": [
                71
            ],
            "saleState": [
                10
            ],
            "id": [
                20
            ],
            "serialNumber": [
                49
            ],
            "blockchainState": [
                5
            ],
            "modelId": [
                20
            ],
            "model": [
                61
            ],
            "wallet": [
                66
            ],
            "status": [
                13
            ],
            "transactions": [
                47
            ],
            "__typename": [
                17
            ]
        },
        "NFTContent": {
            "id": [
                20
            ],
            "files": [
                57
            ],
            "poster": [
                65
            ],
            "__typename": [
                17
            ]
        },
        "NFTFile": {
            "id": [
                20
            ],
            "url": [
                74
            ],
            "state": [
                2
            ],
            "name": [
                17
            ],
            "contentType": [
                17
            ],
            "md5": [
                17
            ],
            "ipfsContentAddress": [
                17
            ],
            "ipfsMetadataAddress": [
                17
            ],
            "__typename": [
                17
            ]
        },
        "NFTList": {
            "cursor": [
                17
            ],
            "items": [
                55
            ],
            "__typename": [
                17
            ]
        },
        "NFTListing": {
            "attributes": [
                71
            ],
            "id": [
                20
            ],
            "createdAt": [
                68
            ],
            "updatedAt": [
                68
            ],
            "title": [
                17
            ],
            "description": [
                17
            ],
            "pricing": [
                51
            ],
            "appId": [
                20
            ],
            "nftModel": [
                61
            ],
            "state": [
                4
            ],
            "__typename": [
                17
            ]
        },
        "NFTListingList": {
            "cursor": [
                17
            ],
            "items": [
                59
            ],
            "__typename": [
                17
            ]
        },
        "NFTModel": {
            "id": [
                20
            ],
            "attributes": [
                71
            ],
            "createdAt": [
                68
            ],
            "updatedAt": [
                68
            ],
            "status": [
                12
            ],
            "blockchainId": [
                17
            ],
            "metadata": [
                71
            ],
            "title": [
                17
            ],
            "description": [
                17
            ],
            "rarity": [
                11
            ],
            "quantity": [
                73
            ],
            "quantityMinted": [
                76
            ],
            "content": [
                56
            ],
            "state": [
                6
            ],
            "set": [
                63
            ],
            "nfts": [
                55
            ],
            "nftListings": [
                59
            ],
            "__typename": [
                17
            ]
        },
        "NFTModelList": {
            "cursor": [
                17
            ],
            "items": [
                61
            ],
            "__typename": [
                17
            ]
        },
        "NFTSet": {
            "id": [
                20
            ],
            "attributes": [
                71
            ],
            "createdAt": [
                68
            ],
            "updatedAt": [
                68
            ],
            "status": [
                12
            ],
            "blockchainId": [
                17
            ],
            "metadata": [
                71
            ],
            "title": [
                17
            ],
            "image": [
                74
            ],
            "state": [
                7
            ],
            "tags": [
                17
            ],
            "models": [
                61
            ],
            "app": [
                44
            ],
            "__typename": [
                17
            ]
        },
        "Organization": {
            "id": [
                20
            ],
            "name": [
                17
            ],
            "apps": [
                44
            ],
            "members": [
                43
            ],
            "__typename": [
                17
            ]
        },
        "SimpleFile": {
            "id": [
                20
            ],
            "url": [
                74
            ],
            "state": [
                2
            ],
            "name": [
                17
            ],
            "contentType": [
                17
            ],
            "md5": [
                17
            ],
            "__typename": [
                17
            ]
        },
        "Wallet": {
            "attributes": [
                71
            ],
            "id": [
                20
            ],
            "createdAt": [
                68
            ],
            "updatedAt": [
                68
            ],
            "address": [
                17
            ],
            "state": [
                14
            ],
            "verificationCode": [
                17
            ],
            "nfts": [
                55
            ],
            "appUser": [
                45
            ],
            "walletType": [
                15
            ],
            "__typename": [
                17
            ]
        },
        "WalletList": {
            "cursor": [
                17
            ],
            "items": [
                66
            ],
            "__typename": [
                17
            ]
        },
        "DateTime": {},
        "EmailAddress": {},
        "JSON": {},
        "JSONObject": {},
        "PositiveFloat": {},
        "PositiveInt": {},
        "URL": {},
        "UnsignedFloat": {},
        "UnsignedInt": {},
        "Upload": {},
        "Identifiable": {
            "id": [
                20
            ],
            "on_AdminUser": [
                43
            ],
            "on_App": [
                44
            ],
            "on_AppUser": [
                45
            ],
            "on_Contract": [
                50
            ],
            "on_Invoice": [
                53
            ],
            "on_NFT": [
                55
            ],
            "on_NFTContent": [
                56
            ],
            "on_NFTListing": [
                59
            ],
            "on_NFTModel": [
                61
            ],
            "on_NFTSet": [
                63
            ],
            "on_Organization": [
                64
            ],
            "on_Wallet": [
                66
            ],
            "__typename": [
                17
            ]
        },
        "Attributable": {
            "attributes": [
                71
            ],
            "on_NFTListing": [
                59
            ],
            "on_NFTModel": [
                61
            ],
            "on_NFTSet": [
                63
            ],
            "on_Wallet": [
                66
            ],
            "__typename": [
                17
            ]
        },
        "HasTimes": {
            "createdAt": [
                68
            ],
            "updatedAt": [
                68
            ],
            "on_AppUser": [
                45
            ],
            "on_Invoice": [
                53
            ],
            "on_NFTListing": [
                59
            ],
            "on_NFTModel": [
                61
            ],
            "on_NFTSet": [
                63
            ],
            "on_Wallet": [
                66
            ],
            "__typename": [
                17
            ]
        },
        "Pageable": {
            "cursor": [
                17
            ],
            "on_AppUserList": [
                46
            ],
            "on_InvoiceList": [
                54
            ],
            "on_NFTList": [
                58
            ],
            "on_NFTListingList": [
                60
            ],
            "on_NFTModelList": [
                62
            ],
            "on_WalletList": [
                67
            ],
            "__typename": [
                17
            ]
        },
        "Query": {
            "adminUser": [
                43
            ],
            "appUser": [
                45
            ],
            "appUserById": [
                45,
                {
                    "id": [
                        20,
                        "ID!"
                    ]
                }
            ],
            "appUsers": [
                46,
                {
                    "cursor": [
                        17
                    ],
                    "maxResults": [
                        73
                    ]
                }
            ],
            "app": [
                44
            ],
            "appById": [
                44,
                {
                    "id": [
                        20
                    ],
                    "name": [
                        17
                    ]
                }
            ],
            "createApp": [
                44,
                {
                    "data": [
                        16,
                        "AppCreateInput!"
                    ]
                }
            ],
            "contract": [
                50
            ],
            "file": [
                65,
                {
                    "id": [
                        20,
                        "ID!"
                    ]
                }
            ],
            "nftContent": [
                56,
                {
                    "id": [
                        20,
                        "ID!"
                    ]
                }
            ],
            "nftFile": [
                57,
                {
                    "id": [
                        17
                    ],
                    "url": [
                        17
                    ],
                    "ipfsUrl": [
                        17
                    ]
                }
            ],
            "invoice": [
                53,
                {
                    "id": [
                        20,
                        "ID!"
                    ]
                }
            ],
            "organization": [
                64,
                {
                    "id": [
                        20,
                        "ID!"
                    ]
                }
            ],
            "invoices": [
                54,
                {
                    "appId": [
                        20
                    ],
                    "cursor": [
                        17
                    ],
                    "maxResults": [
                        73
                    ]
                }
            ],
            "nftListing": [
                59,
                {
                    "id": [
                        20,
                        "ID!"
                    ]
                }
            ],
            "nftListings": [
                60,
                {
                    "filter": [
                        26
                    ],
                    "cursor": [
                        17
                    ],
                    "maxResults": [
                        73
                    ]
                }
            ],
            "nftModel": [
                61,
                {
                    "id": [
                        20,
                        "ID!"
                    ]
                }
            ],
            "nftModels": [
                62,
                {
                    "appId": [
                        20
                    ],
                    "filter": [
                        28
                    ],
                    "cursor": [
                        17
                    ],
                    "maxResults": [
                        73
                    ]
                }
            ],
            "set": [
                63,
                {
                    "id": [
                        20,
                        "ID!"
                    ]
                }
            ],
            "sets": [
                63,
                {
                    "filter": [
                        31
                    ],
                    "appId": [
                        20
                    ]
                }
            ],
            "nft": [
                55,
                {
                    "id": [
                        20,
                        "ID!"
                    ]
                }
            ],
            "nfts": [
                58,
                {
                    "userId": [
                        20
                    ],
                    "appId": [
                        20
                    ],
                    "filter": [
                        25
                    ],
                    "cursor": [
                        17
                    ],
                    "maxResults": [
                        73
                    ]
                }
            ],
            "nftsByWallet": [
                58,
                {
                    "walletId": [
                        20
                    ],
                    "address": [
                        17
                    ],
                    "filter": [
                        25
                    ],
                    "cursor": [
                        17
                    ],
                    "maxResults": [
                        73
                    ]
                }
            ],
            "wallet": [
                66
            ],
            "walletById": [
                66,
                {
                    "id": [
                        20,
                        "ID!"
                    ]
                }
            ],
            "walletByAddress": [
                66,
                {
                    "appId": [
                        20
                    ],
                    "address": [
                        17,
                        "String!"
                    ]
                }
            ],
            "walletByUserId": [
                66,
                {
                    "userId": [
                        20,
                        "ID!"
                    ]
                }
            ],
            "wallets": [
                67,
                {
                    "appId": [
                        20,
                        "ID!"
                    ],
                    "cursor": [
                        17
                    ],
                    "maxResults": [
                        73
                    ]
                }
            ],
            "__typename": [
                17
            ]
        },
        "Mutation": {
            "deployContract": [
                50,
                {
                    "appId": [
                        17,
                        "String!"
                    ],
                    "name": [
                        17,
                        "String!"
                    ],
                    "blockchain": [
                        0,
                        "Blockchain!"
                    ]
                }
            ],
            "createFileUploadUrl": [
                39,
                {
                    "name": [
                        17,
                        "String!"
                    ],
                    "description": [
                        17
                    ],
                    "appId": [
                        20
                    ],
                    "options": [
                        18
                    ]
                }
            ],
            "deleteFile": [
                39,
                {
                    "id": [
                        20
                    ],
                    "url": [
                        17
                    ]
                }
            ],
            "uploadNFTContent": [
                56,
                {
                    "name": [
                        17
                    ],
                    "description": [
                        17
                    ],
                    "contentType": [
                        17
                    ],
                    "posterContentType": [
                        17
                    ]
                }
            ],
            "completeCheckoutWithDapperWallet": [
                55,
                {
                    "transactionId": [
                        17,
                        "String!"
                    ],
                    "nftDatabaseId": [
                        17
                    ]
                }
            ],
            "createNFTListing": [
                59,
                {
                    "data": [
                        21,
                        "CreateNFTListingInput!"
                    ]
                }
            ],
            "checkout": [
                52,
                {
                    "invoiceId": [
                        17,
                        "String!"
                    ],
                    "onSuccess": [
                        17,
                        "String!"
                    ],
                    "onError": [
                        17,
                        "String!"
                    ]
                }
            ],
            "checkoutWithDapperWallet": [
                48,
                {
                    "nftModelId": [
                        20,
                        "ID!"
                    ],
                    "userId": [
                        20
                    ],
                    "walletId": [
                        20
                    ],
                    "address": [
                        17
                    ],
                    "price": [
                        75
                    ],
                    "expiry": [
                        76
                    ]
                }
            ],
            "reserve": [
                53,
                {
                    "listingId": [
                        20,
                        "ID!"
                    ]
                }
            ],
            "signTransactionForDapperWallet": [
                17,
                {
                    "transaction": [
                        17
                    ]
                }
            ],
            "updateNFTListing": [
                59,
                {
                    "id": [
                        20,
                        "ID!"
                    ],
                    "data": [
                        35,
                        "UpdateNFTListingInput!"
                    ]
                }
            ],
            "deleteNFTListing": [
                59,
                {
                    "id": [
                        20,
                        "ID!"
                    ]
                }
            ],
            "mintNFTModel": [
                61,
                {
                    "id": [
                        20,
                        "ID!"
                    ],
                    "quantity": [
                        73
                    ],
                    "appId": [
                        20
                    ]
                }
            ],
            "createNFTModel": [
                61,
                {
                    "setId": [
                        20,
                        "ID!"
                    ],
                    "data": [
                        27,
                        "NFTModelCreateInput!"
                    ],
                    "appId": [
                        20
                    ]
                }
            ],
            "deleteNFTModel": [
                61,
                {
                    "id": [
                        20,
                        "ID!"
                    ]
                }
            ],
            "updateNFTModel": [
                61,
                {
                    "id": [
                        20,
                        "ID!"
                    ],
                    "data": [
                        29,
                        "NFTModelUpdateInput!"
                    ]
                }
            ],
            "createNFTSet": [
                63,
                {
                    "data": [
                        30,
                        "NFTSetCreateInput!"
                    ],
                    "appId": [
                        20
                    ]
                }
            ],
            "updateNFTSet": [
                63,
                {
                    "id": [
                        20,
                        "ID!"
                    ],
                    "data": [
                        32,
                        "NFTSetUpdateInput!"
                    ]
                }
            ],
            "mintNFT": [
                55,
                {
                    "nftModelId": [
                        20,
                        "ID!"
                    ]
                }
            ],
            "transfer": [
                55,
                {
                    "id": [
                        20
                    ],
                    "nftModelId": [
                        20
                    ],
                    "userId": [
                        20
                    ],
                    "walletId": [
                        20
                    ],
                    "address": [
                        17
                    ],
                    "appId": [
                        20
                    ],
                    "force": [
                        19
                    ]
                }
            ],
            "withdraw": [
                55,
                {
                    "id": [
                        20,
                        "ID!"
                    ],
                    "receiverAddress": [
                        17,
                        "String!"
                    ],
                    "niftoryWalletAddress": [
                        17
                    ],
                    "appId": [
                        20
                    ]
                }
            ],
            "createOrganization": [
                64,
                {
                    "data": [
                        33,
                        "OrganizationCreateInput!"
                    ]
                }
            ],
            "createNiftoryWallet": [
                66,
                {
                    "userId": [
                        20
                    ],
                    "data": [
                        22
                    ],
                    "appId": [
                        20
                    ]
                }
            ],
            "readyWallet": [
                66,
                {
                    "address": [
                        17,
                        "String!"
                    ]
                }
            ],
            "registerWallet": [
                66,
                {
                    "address": [
                        17,
                        "String!"
                    ],
                    "data": [
                        34
                    ]
                }
            ],
            "setPrimaryWallet": [
                66,
                {
                    "walletId": [
                        17
                    ],
                    "address": [
                        17
                    ]
                }
            ],
            "unlinkWallet": [
                66,
                {
                    "walletId": [
                        17
                    ],
                    "address": [
                        17
                    ]
                }
            ],
            "updateWallet": [
                66,
                {
                    "address": [
                        17,
                        "String!"
                    ],
                    "data": [
                        36
                    ]
                }
            ],
            "verifyWallet": [
                66,
                {
                    "address": [
                        17,
                        "String!"
                    ],
                    "signedVerificationCode": [
                        70,
                        "JSON!"
                    ]
                }
            ],
            "__typename": [
                17
            ]
        }
    }
}