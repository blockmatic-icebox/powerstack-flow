### 👋 Welcome Flow Developer!
Welcome to your new Flow project. We've created the basic folder structure you will need to develop your project and provided some examples of contracts and transactions you can modify. We've also added some of the most common contracts, transactions and scripts but feel free to just delete what you don't need. 

### 🔨 Getting started
Getting started can feel overwhelming, but we are here for you. Depending on how accustomed you are to Flow here's a list of resources you might find useful:
- **[Cadence documentation](https://developers.flow.com/cadence/language)**: here you will find language reference for Cadence, which will be the language in which you develop your smart contracts,
- **[Visual Studio Code](https://code.visualstudio.com/?wt.mc_id=DX_841432)** and **[Cadence extension](https://marketplace.visualstudio.com/items?itemName=onflow.cadence)**: we suggest using Visual Studio Code IDE for writing Cadence with the Cadence extension installed, that will give you nice syntax highlitning and additional smart features,
- **[SDKs](https://developers.flow.com/tools#sdks)**: here you will find a list of SDKs you can use to ease the interaction with Flow network (sending transactions, fetching accounts etc),
- **[Tools](https://developers.flow.com/tools#development-tools)**: development tools you can use to make your development easier, [Flowser](https://docs.flowser.dev/) can be super handy to see what's going on the blockchain while you develop


### 📦 Project Structure
Your project comes with some standard folders which have a special purpose:
- `/cadence` inside here is where your Cadence smart contracts code lives
- `/web` put your web client if needed inside this folder, remove if not needed
- `/api` put your backend code if needed inside this folder, remove if not needed
- `flow.json` configuration file for your project, you can think of it as package.json, but you don't need to worry, flow dev command will configure it for you

Inside `cadence` folder you will find:
- `/contracts` location for Cadence contracts go in this folder
- `/scripts` location for Cadence scripts goes here
- `/transactions` location for Cadence transactions goes in this folder
- `/tests` all the integration tests for your dapp and Cadence tests go into this folder


### 👨‍💻 Start Developing
After creating the project using the `flow setup` you should then start the emulator by running `flow emulator` and start the development command by running:
```shell
> flow dev
```
After the command is started it will automatically watch any changes you make to Cadence files and make sure to continiously sync those changes on the emulator network. If you make any mistakes it will report the errors as well. Read more [about the command here](https://developers.flow.com/tools/flow-cli/super-commands)

**Importing Contracts**

When you want to import the contracts you've just created you can simply do so by writing the import statement:
```
import "Foo"
```
We will automatically find your project contract named `Foo` and handle the importing for you. 

**Deploying to specific accounts**

By default all contracts are deployed to a default account. If you want to seperate contracts to different accounts you can easily do so by creating a folder inside the contracts folder and we will create the account for you which will have the same name as the folder you just created. All the contracts inside that folder will be deployed automatically to the newly created account.

Example deploying to charlie account:

_folder structure_
```
/contracts
    Bar.cdc
    /charlie
        Foo.cdc
```

You can then import the `Foo` contract in `Bar` contract the same way as any other contract:
```
import "Foo"
```


### Further Reading

- Cadence Language Reference https://developers.flow.com/cadence/language
- Flow Smart Contract Project Development Standards https://developers.flow.com/cadence/style-guide/project-development-tips
- Cadence anti-patterns https://developers.flow.com/cadence/anti-patterns
