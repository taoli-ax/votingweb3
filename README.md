# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```

## Caution!
Dont for get to install `@nomicfoundation/hardhat-toolbox` after initialize hardhat `npx hardhat`, it has contains ehters and everything you need. 
so , **do not install ethers again**, it will confict for different version.  
But if your start a react-app in hardhat, then you need install ethers in react-app
```
votingweb3
├─ .gitignore
├─ client
│  ├─ .eslintrc.cjs
│  ├─ .gitignore
│  ├─ index.html
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ public
│  │  └─ vite.svg
│  ├─ README.md
│  ├─ src
│  │  ├─ App.css
│  │  ├─ App.jsx
│  │  ├─ assets
│  │  │  └─ react.svg
│  │  ├─ index.css
│  │  └─ main.jsx
│  └─ vite.config.js
├─ contracts
│  └─ Lock.sol
├─ hardhat.config.js
├─ package-lock.json
├─ package.json
├─ README.md
├─ scripts
│  └─ deploy.js
└─ test
   └─ Lock.js

```


In your react-app ,it will use its own version of ehters instead of hardhat project, I like ethers@5.7.2  

thats a little tricky.


In my case `"npm install @nomicfoundation/hardhat-toolbox"` will install ehters@6.7.1 automaticly
but I want use ethers@5.7.2, so be careful when you `import {ethers} from "ethers"` in your react-app, dont import from hardhat, it will conflict like `"No loader found for .node...."" `

