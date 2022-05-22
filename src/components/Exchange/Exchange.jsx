import React,{ useState,useEffect } from 'react';
import { MoralisProvider, useMoralis } from 'react-moralis'
import { SwapWidget } from '@uniswap/widgets'
import '@uniswap/widgets/fonts.css'
import { MoralisDappProvider } from '../../providers/MoralisDappProvider/MoralisDappProvider';
const jsonRpcEndpoint = "https://speedy-nodes-nyc.moralis.io/ab0e0a21707e2841cfe6c992/polygon/mumbai";
const MY_TOKEN_LIST = [
    {
    "name": "MIRA DAO",
    "address": "0x1187a6CD89bE874Da19097172b4f6188Cb105bB3",
    "symbol": "MIRA",
    "decimals": 18,
    "chainId": 80001,
    "logoURI": `${window.location.origin}/miranew.png`
  },
    {
    "name": "USDC Coin",
    "address": "0x9aa7fEc87CA69695Dd1f879567CcF49F3ba417E2",
    "symbol": "USDC",
    "decimals": 6,
    "chainId": 80001,
    "logoURI": `${window.location.origin}/usdc-logo.png`
  }]
const  Exchange = ()=> {
  const [providerr,setProvider]  = useState();

  const { Moralis,user,provider } = useMoralis()
 

   useEffect(()=>{
       console.log(window.location.origin)
      if(provider)
        setProvider(provider);
   },[provider])   
  if(!provider)
     return null;

  return (
    
    
     <div className="Uniswap mt-28">
          <SwapWidget
      provider={providerr}
      tokenList={MY_TOKEN_LIST}

            />
  </div>
  
  )
}
export default Exchange;