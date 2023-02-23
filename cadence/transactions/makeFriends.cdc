// read more about Cadence transactions here https://developers.flow.com/cadence/language/transactions
import "Person"

transaction {
    let acc: AuthAccount

    prepare(signer: AuthAccount) {
        self.acc = signer    
    }

    pre {}

    execute {
        // save the resource to the storage, read more about it here https://developers.flow.com/cadence/language/accounts#account-storage
        self.acc.save<@Person.Friendship>(<-Person.makeFriends(), to: StoragePath(identifier: "friendship")!)
    }

    post {}
}
