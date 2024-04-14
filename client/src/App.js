import Upload from "./artifacts/contracts/Upload.sol/Upload.json";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import FileUpload from "./components/FileUpload";
import Display from "./components/Display";
import Modal from "./components/Modal";
import Typewriter from "typewriter-effect";

import "./App.css";

function App() {
  const [account, setAccount] = useState("");
  const [showFileUpload, setShowFileUpload] = useState(true);
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const loadProvider = async () => {
      if (provider) {
        window.ethereum.on("chainChanged", () => {
          window.location.reload();
        });

        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);
        let contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

        const contract = new ethers.Contract(
          contractAddress,
          Upload.abi,
          signer
        );
        //console.log(contract);
        setContract(contract);
        setProvider(provider);
      } else {
        console.error("Metamask is not installed");
      }
    };
    provider && loadProvider();
  }, []);
  return (
    <div className="conatainerxyz">
      <div className="bgImage">
        <img src="https://www.pngall.com/wp-content/uploads/13/Grid-PNG-File.png" />
      </div>
      
      <div class='animation-example'>
        <div class='item'>
          <div class='line'></div>
          <div class='dot'></div>
          <div class='circle'></div>
        </div>
        <div class='item'>
          <div class='line'></div>
          <div class='dot'></div>
          <div class='circle'></div>
        </div>
        <div class='item'>
          <div class='line'></div>
          <div class='dot'></div>
          <div class='circle'></div>
        </div>
        <div class='item'>
          <div class='line'></div>
          <div class='dot'></div>
          <div class='circle'></div>
        </div>
        <div class='item -type2'>
          <div class='line'></div>
          <div class='dot'></div>
          <div class='circle'></div>
        </div>
        <div class='item -type2'>
          <div class='line'></div>
          <div class='dot'></div>
          <div class='circle'></div>
        </div>
        <div class='item -type2'>
          <div class='line'></div>
          <div class='dot'></div>
          <div class='circle'></div>
        </div>
        <div class='item -type2'>
          <div class='line'></div>
          <div class='dot'></div>
          <div class='circle'></div>
        </div>
        <div class='center'>
          <div class='circle'></div>
          <div class='circle'></div>
          <div class='circle'></div>
        </div>
      </div>
      <div class="pozycja">
        <div class="srodek kolor-tla">
          <div id="qlogo">
            <div class="poziomq">
              <figure class="liscie">
                <span class="lisc-lewy"><span class="after"></span></span>
                <span class="lisc-lewy drugi"><span class="after"></span></span>
                <span class="lisc-prawy"><span class="after"></span></span>
                <span class="lisc-prawy drugi"><span class="after"></span></span>
                <span class="lodyga"></span>
              </figure>
              <figure class="rece">
                <span class="reka reka-lewa"></span>
                <span class="reka reka-prawa"></span>
              </figure>
              <figure class="cialo">
                <span class="twarz">
                  <span class="oczy">
                    <span class="oko oko-lewe"></span>
                    <span class="oko oko-prawe"></span>
                  </span>
                  <span class="piegi">
                    <span class="pieg pieg-lewy"></span>
                    <span class="pieg pieg-prawy"></span>
                  </span>
                  <span class="buzia">
                    <span class="gardlo"></span>
                    <span class="zuby"></span>
                  </span>
                </span>
              </figure>
              <figure class="nogi">
                <span class="noga-lewa"></span>
                <span class="noga-prawa"></span>
              </figure>
            </div>
            <figure class="cien"></figure>
            <figure class="tekst">Hover Me!</figure>
          </div>
        </div>
      </div>
      <div className="navbar">
        <div className="siteName">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("D-Drive 4.O")
                .pauseFor(1000)
                .start();
            }}
          />
        </div>
        <div>
          {!modalOpen && (
            <button className="share" onClick={() => setModalOpen(true)}>
              Share
            </button>
          )}
          {modalOpen && (
            <Modal setModalOpen={setModalOpen} contract={contract}></Modal>
          )}
        </div>
      </div>

      <div className="App">

        <div className="connectedOrNot">
          <p style={{ color: account ? "green" : "red" }}>
            <span>Account :</span> {account ? account : "Not connected"}
          </p>
        </div>

        <div className="cardNav">
          <button
            style={{ backgroundColor: showFileUpload ? "green" : "white" }}
            className="button-1" onClick={() => setShowFileUpload(true)}>Upload File</button>
          <button
            style={{ backgroundColor: !showFileUpload ? "green" : "white" }}
            className="button-2" onClick={() => setShowFileUpload(false)}>Get Files</button>
        </div>
        <div className="cardContainer">
          {showFileUpload ? (
            <FileUpload account={account} provider={provider} contract={contract} />
          ) : (
            <Display contract={contract} account={account} />
          )}
        </div>

      </div>
    </div>
  );
}

export default App;
