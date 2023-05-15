{/* <script>
    const Avatar = ({ size, src }) => {
        let width, height;
        if (size === "s") {
            width = 50;
            height = 50;
        }
        else {
            width = 100;
            height = 100;
        }

        return <img src={src} width={width} height={height} className="avatar" />;

    };
</script> */}


// <!----------------------------------------------------------------------------------------------------------->



// it is app.jsx file

// import "./App.css";

// const Avatar = () => {
// return (
// <img // src="https://static.independent.co.uk/2020/11/12/16/newFile-14.jpg?width=1200" // width={100} // height={100}
//     className="avatar" // />
// );
// };

// // App -> Parent component
// // It has two children
// // Avatar -> Child component
// export const App = () => {
// return (
// <div>
//     //
//     <Avatar />
//     //
//     <Avatar />
//     //
// </div>
// );
// };


/* -------------------- How to make this Avatar dynamic ? ------------------- */
// const Avatar = ({ image }) => {
// const { src, width, height } = image;
// return <img src={src} width={width} height={height} className="avatar" />;
// };

// Three ways to use the props
// Method 1 ❌
// const Avatar = (props) => {
// return (
// <img // src={props.src} // width={props.width} // height={props.height} // className="avatar" // />
// );
// };

// Method 2 (My personal preference - Use this for more than 5 props - JUST FOR FORMATTING)
// const Avatar = (props) => {
// // Instead of destructuring on two different lines :
// // const { image } = props;
// // const { src, height, width } = image;

// // Destructure on a single line
// const {
// image: { height, width, src },
// } = props;
// return <img src={src} width={width} height={height} className="avatar" />;
// };

// Method 3 (My personal preference - Use this for upto 5 props - JUST FOR FORMATTING)
// const Avatar = ({ image: { height, width, src } }) => {
// return <img src={src} width={width} height={height} className="avatar" />;
// };

// // export const App = () => {
// // return (
// // <div>
//     // {/* Sending individual props */}
//     // {/*
//     <Avatar // height={100} // width={100} //
//         src="https://static.independent.co.uk/2020/11/12/16/newFile-14.jpg?width=1200" // />
//     //
//     <Avatar // height={50} // width={50} //
//         src="https://c4.wallpaperflare.com/wallpaper/819/537/101/movie-spider-man-into-the-spider-verse-marvel-comics-miles-morales-spider-man-hd-wallpaper-preview.jpg"
//         // /> */}

//     // {/* Sending all props as one object */}
//     // {/*
//     <Avatar // image={{ // height: 100, // width: 100, //
//         src: "https://static.independent.co.uk/2020/11/12/16/newFile-14.jpg?width=1200" , // }} // />
//     //
//     <Avatar // image={{ // height: 50, // width: 50, //
//         src: "https://static.independent.co.uk/2020/11/12/16/newFile-14.jpg?width=1200" , // }} // /> */}
//     //
// </div>
// // );
// // };

/*
Props :
{
image: {
height: 100,
width: 100,
src: "https://static.independent.co.uk/2020/11/12/16/newFile-14.jpg?width=1200",
}
}
*/

/* ------------------- Another way to use props in Avatar ------------------- */

const Avatar = ({ size, src }) => {
const sizes = {
s: { width: 40, height: 50 },
m: { width: 120, height: 100 },
xs: { width: 25, height: 30 },
};

const { width, height } = sizes[size] || sizes.m;

return <img src={src} width={width} height={height} className="avatar" />;
};

export const App = () => {
return (
<div>
    {/* Avatar can accept two sizes : "s" and "m" */}
    <Avatar size="m" src="https://static.independent.co.uk/2020/11/12/16/newFile-14.jpg?width=1200" />
    <Avatar size="s"
        src="https://c4.wallpaperflare.com/wallpaper/819/537/101/movie-spider-man-into-the-spider-verse-marvel-comics-miles-morales-spider-man-hd-wallpaper-preview.jpg" />
</div>
);
};