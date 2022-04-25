import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import SelectWalletModal from './Modal';
import { Web3ReactProvider } from '@web3-react/core'

import { Web3Provider } from "@ethersproject/providers";

function getLibrary(provider) {

return new Web3Provider(provider);

}
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ChakraProvider>
    <Web3ReactProvider getLibrary={getLibrary}>


<SelectWalletModal isOpen={true}/>
</Web3ReactProvider>
    </ChakraProvider>
  </StrictMode>,
  rootElement
);
