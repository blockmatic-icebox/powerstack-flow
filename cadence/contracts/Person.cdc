

// A simple Person contract 
// 
// reference: https://developers.flow.com/cadence/language/contracts
pub contract Person {
    // declaration of a public variable
    pub var name: String


    // initialization method for our contracts, this gets run on deployment
    init() {
        self.name = "Alice"

    }

    pub fun sayHello(): String {
        return "Hello, my name is ".concat(self.name)
    }

    // create a new friendship resource 
    pub fun makeFriends(): @Friendship {
        return <-create Friendship()
    }

    // Friendship resource are types of values that can only exist in one place 
    // 
    // read more about this unique and powerful Cadence feature here https://developers.flow.com/cadence/language/resources
    pub resource Friendship {
        init() {}
        pub fun yaay() {
            log("such a nice friend") // we can log to output, useful on emualtor for debugging
        }
    }
}


 
