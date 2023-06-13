// 8
// import { createContext } from "react";

// //returns an object
// const UserContext = createContext();

// // UserContext -> UserContext.Provider -> Provider Component (react)

// const UserContextProvider = ({ children }) => {          //thats out custom compoenent
//     const user = {id: 1, city: 'Hyderabad', state: 'Telangana'}
//     return <UserContext.Provider value={user}>{children}</UserContext.Provider>;

// };

// export default UserContextProvider;


// // whatever comes in b/w UserContextProvider will be the children and here in UserContextProvider (custom comp)
// // we returning Children in b/w UserContext.Provider (react comp) and whatever comes in b/w UserContext.Provider
// // will get the value 
// /*
// <UserContextProvider>
//     <Header />
//     <Footer />
//     <Main />
// </UserContextProvider>
// */


//--------------------------------------------------------------------------------------------------------

// 9
import { createContext } from "react";

const UserContext = createContext();

export default UserContext;

