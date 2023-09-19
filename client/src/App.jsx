import { useEffect, useState } from 'react'
import './App.css'
import { ethers, providers } from 'ethers'
import Lock from "./artifacts/contracts/Lock.sol/Lock.json"
function App() {
  const [count, setCount] = useState(0)
  const [myProvider, setMyProvider] = useState()
  const [mySinger, setMySinger] = useState()
  const [myWallet, setMyWallet] = useState()
  const [myContract, setMyContract] = useState()
  const contractAddr = "0x2eC7677d70e2Ba2e14BfbAfC017DF25dE4f43dCE"
  function stringify(obj) {
    let cache = [];
    let str = JSON.stringify(obj, function(key, value) {
      if (typeof value === "object" && value !== null) {
        if (cache.indexOf(value) !== -1) {
          // Circular reference found, discard key
          return;
        }
        // Store value in our collection
        cache.push(value);
      }
      return value;
    });
    cache = null; // reset the cache
    return str;
  }
  useEffect(()=>{
    async function connectWallet(){
      console.log(window.ethereum)
      setCount(ethers.version)
      console.log(window.ethereum.isConnected())
      const acc = await window.ethereum.request({
        "method": "eth_accounts",
        "params": []
      });
      console.log(acc[0])
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      console.log(provider[0])
      const wallet = await provider.send("eth_requestAccounts", []);
      const singer =  provider.getSigner()
      const contract = new ethers.Contract(contractAddr, Lock.abi, singer)
      setMyProvider(provider)
      setMySinger(singer)
      setMyWallet(wallet)
      setMyContract(contract)
  }
    connectWallet();
  },[])
  async function callContract(){
      const result = await myContract.withdraw()
      console.log(result)
  }

  return (
    <>
      <div className='App'>
          <ul>
            {ethers.version}
            {/* <li>provider: {stringify(myProvider)}</li> */}
            {/* <li>singer: {stringify(mySinger)}</li> */}
            {/* <li>wallet: {stringify(myWallet)}</li> */}
            {/* <li>contract: {stringify(myContract)}</li> */}
          </ul>
          <button >check ethers version</button>
          <div>
            <button onClick={callContract}>width draw</button>
          </div>
      </div>
    </>
  )
}

export default App
