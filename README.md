## Decentralized Drive

### Overview
Our project aims to develop a decentralized alternative to traditional cloud storage services like Google Drive. By leveraging blockchain technology, we prioritize data control, privacy, and security while providing efficient file sharing capabilities.

### Technologies Used

- **Frontend Development with React.js**: We utilize React.js to create an intuitive user interface, enabling users to interact with the application seamlessly.
- **Smart Contract Development with Hardhat**: Hardhat is utilized as our Ethereum development environment for constructing resilient smart contracts that govern storage and access control logic. These smart contracts are authored in Solidity.
- **Interacting with Ethereum using Ether.js**: Ether.js simplifies communication with the Ethereum blockchain, facilitating various operations such as file uploading, access control, and file sharing.
- **IPFS**: For storing data in decentralized manner.
### Features 
- **User Registration and Authentication:**
  - Secure account creation and authentication enabled through blockchain technology for transparency and immutability.
  
- **Decentralized Storage:**
  - Utilization of decentralized storage system distributes user files across multiple network nodes, reducing single points of failure and enhancing data availability.

- **Data Control and Privacy:**
  - Complete user control over data ensured with cryptographic techniques for privacy and security.
  - Smart contracts govern access control, allowing users to define permissions and selectively share files.

- **Data Integrity and Security:**
  - Blockchain ensures data integrity and security by storing cryptographic hashes of uploaded files, enabling verification and preventing tampering.

- **Efficient File Sharing:**
  - Streamlined file sharing directly between users facilitated by smart contracts managing access permissions.

- **Cost-Effectiveness:**
  - Blockchain technology reduces costs associated with centralized cloud storage by allowing users to contribute unused storage resources and earn incentives or pay only for utilized storage.





### Project Components
1. Smart Contract:

- **User Access Control:** 
  - The contract allows users to grant or revoke access to their uploaded files by other addresses.
  - Access is managed through the `allow` and `disallow` functions, where users can specify which addresses have permission to access their files.

- **File Uploading and Storage:**
  - Users can upload files by calling the `add` function, providing the URL of the file to be stored.
  - The contract stores uploaded files associated with each user's address.

- **Access Management:**
  - The contract maintains a list of addresses with access permissions for each user through the `accessList` mapping.
  - Users can query the access permissions granted to their files by calling the `shareAccess` function.

- **Data Privacy and Security:**
  - Access to files is restricted to authorized addresses, ensuring data privacy and security.
  - Access permissions are stored on the blockchain, providing transparency and immutability.

- **Ownership Tracking:**
  - The contract tracks ownership of files through the `ownership` mapping, allowing users to manage access rights effectively.

Overall, the Upload smart contract offers a decentralized solution for secure file uploading and access management, leveraging blockchain technology to ensure data integrity and user control.
   ![image](https://github.com/Abchoudhary2512/Decentralised_Drive/assets/97343691/4605b47c-aa80-4d45-9433-3e710d54e19f)


2. **User Registration, Authentication, and Data Storage:**

Users can securely create accounts and authenticate themselves within our application. Leveraging blockchain technology ensures transparency and immutability in both user registration and authentication processes. Additionally, we utilize IPFS (InterPlanetary File System) in conjunction with Pinata services for decentralized data storage. This allows us to store data in a distributed manner, enhancing security and availability while ensuring data integrity.
![image](https://github.com/Abchoudhary2512/Decentralised_Drive/assets/97343691/10d46087-e4cd-45da-aa3e-71bc8bf89851)

3. **Displaying Data for a Specific Address:**

Our application provides a feature to display data specifically associated with a particular address. Users can view their own uploaded files or files shared with them by others. This functionality ensures privacy and security by restricting access to data only to authorized individuals. Users can confidently access and manage their data knowing that it is securely stored and accessible only to them or those they have granted permission to.

![image](https://github.com/Abchoudhary2512/Decentralised_Drive/assets/97343691/d63d42f3-9b10-4822-a1f5-062811d88f7c)

4. **Granting Access to Another Address:**

Our application allows users to securely grant access to their stored data to another Ethereum address. Through smart contracts, users can define permissions and selectively share files with specific addresses. This feature ensures controlled data sharing, maintaining privacy and security while facilitating collaboration and information exchange among authorized users. By leveraging blockchain technology, access permissions are transparent, immutable, and enforceable, enhancing trust and accountability in data sharing processes.
![image](https://github.com/Abchoudhary2512/Decentralised_Drive/assets/97343691/32ffe79b-7ceb-46fb-8674-e2b0af27551c)




## Hardhat Commands
Try running some of the following tasks:
```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.js
```
