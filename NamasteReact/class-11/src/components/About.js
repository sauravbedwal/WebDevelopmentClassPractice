import React from 'react'
import User from './User';
import UserClass from './UserClass';
import UserContext from '../utils/UserContext';

class About extends React.Component {
    constructor(props) {
        super(props)

        // console.log("Parent Constructor");
    }

    componentDidMount() {
        // console.log("Parent Component Did Mount");
    }

    render() {
        // console.log("Parent render");
        return (
            <div>
                <h1>About</h1>
                <div>
                    LoggedIn User
                    {/* destructured it as if write data then access it by data.loggedInUser */}
                    <UserContext.Consumer>
                        {({ loggedInUser }) => (
                            <h1 className="text-xl font-bold">{loggedInUser}</h1>
                        )}
                    </UserContext.Consumer>
                </div>
                <h2>This is Namaste React Web Series</h2>
                <UserClass name={"First (class)"} location={"Delhi Class"} />
                {/* <UserClass name={"Second (class)"} location={"US"} /> */}
                {/* <User /> */}
            </div>
        );
    }
}
// const About = () => {
//     return (
//         <div>
//             <h1>About</h1>
//             <h2>This is Namaste React Web Series</h2>
//             <UserClass name={"Saurav Bedwal (class)"} location={"Delhi Class"} />
//         </div>
//     );
// };

export default About;

/**
   - Parent constructor
   - Parent render
   
      - First constructor
      - First render

      - Second constructor
      - Second render

    <DOM UPDATED - IN SINGLE BATCH>

      - First componentDidMount
      - Second componentDidMount

   -Parent componentDidMount

 */