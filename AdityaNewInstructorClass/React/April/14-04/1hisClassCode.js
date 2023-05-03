function Header() {
  return (
    <>
      <header>This is the header part of the page</header>
      <Button />
    </>
  );
}

// <Header /> -> <header>This is the header part of the page</header>

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
        <li>FAQ</li>
      </ul>
    </nav>
  );
};

// <Nav /> ->

function Main() {
  return (
    <main>
      <article>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, enim
        accusamus illum quia incidunt, corrupti quam pariatur sapiente
        aspernatur ad itaque rerum nobis? Molestias, laborum.
      </article>
      <article>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis,
        commodi quae nemo cupiditate in repellendus suscipit facilis, quis nulla
        esse totam similique debitis! Fugit dolorem, obcaecati fuga doloremque
        odit sit modi itaque quaerat nisi ipsa possimus, natus, alias ea
        laboriosam?
      </article>
    </main>
  );
}

// <Main />

const Footer = () => {
  return (
    <footer>
      <a href="/">Go to top</a>
      <p>Nice to see you!</p>
    </footer>
  );
};

// <Footer /> ->

const Button = () => {
  return <button>Re-usable button</button>;
};

// <Button /> ->

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <Main />
      <br />
      <Footer />
    </div>
  );
}

export default App;



// Expressions

// "string";
// 1;
// true;
// false;
// null;
// undefined;
// NaN;
// [1,2,3];
// ({id: 1});

// function greet() {
//   return "Hello"
// }

// greet()

// 5 * 10
// 10 + 8 / 1 * 10

// 10 > 9
// 10 === 11
// 9 <= 1
// "a" == "a"

//true ? "hey" : "bye";
//false ? "hey" : "bye";

//it retruns apple which is true cox its a truthy value
// const isHappy = "happy";
// isHappy ? "🍎" : "🔥"

//it retruns fire which is false cox its a falsy value
// const isHappy = null
// isHappy ? "🍎" : "🔥"

// && || !
// if the left side is truthy then it returns the right side and if the left side is falsy then it returns the left side  
// true && "one" => "one"
// false && true => false
// null && true => null
// "hey" && false => false
// true && true => true
// true && false && true => false && true => false
// "hey" && "what" && "are" && false => "what" && "are" && false => "are" && false => false


// OR operator keep searching for a truthy value once it finds the truthy value it retruns that and if it doesnt find the truthy value and reach to the end then simply retrun the last one
// true || false => true
// false || true => true
// "hey" || null => "hey"
// "hey" || null || "whatever" => "hey"
// false || null || "whatever" => "whatever"
// false || "hey" || "whatever" => "hey"

//it takes the value whawtever we have and gives us the oppstie of it in a boolean value
// !null => true
// !"hey" => false


// Convert a value to boolean
// !!null => !true => false
// !!"hey" => !false => true

//Boolean("hey") => true  
// Boolean(null) => false

// "HELLO".toLowerCase()
// [1,2,3].includes(1)
// [1,2,3,4].map(element => element * 2)
// filter, some, find, findIndex



// -----------------------------------------------My Notes----------------------------------------

// JSX - JSX is basically a HTML looklike code within JS. like we create normal js app without any react framework just created HTML file and if we add any js file there we cannot actually add the elemnts like this we doing in App.jsx as itwill throw the error bcoz js engine does not understand the elements like this.
// JS engine only undertsnads array, objects, boolean etc like stuff as it doesnt understand HTML like this.
// only HTML parsal undrstands HTML but here we are using actual HTML like looking code within our JS here which is not possible in regular JS file.
//  JSX is a syntax extension for js its basically called as JS XML as it helps us to write html like markup inside the js file.

// Rules

// 1. if its single statement(tags) then it can be done inside any tag and it will run but if there are more than one statements(tags)
// then those tags has to be inside a top element/tag 0r wrapper element. ex- <div></div>, <main></main>
// function App() {
//   return (
//   <div>
//     <h1>Hello, Mom</h1>
//     <h2>Hello, Dad</h2>
//   </div>
//   );
// }

// 2. js has some reserved keywords i.e. predefined keywords that we cant use as function or variable name.
// as for these reserved keywords there will be corresponding camelCase version we can use that like for (in js is for loops)
// so we can use htmlFor (for html) as whatever we write is not actual html as react is allowing us to write html like code here
//for our convience as all of that will convert into js object and we dont want any conflicts with js other reserved keywords
// thats why we dont use reserved keywords in jsx

// 3. in html if we forgot the closing tag then also html works fine and it will add the closing tag by itself
// but in jsx if we dont use closing tag it will throw error as in jsx must always add the closing tag as cannot leave it open.

// 4. in html we have some tags which dont have any closing tag like <img>, <input>, <br> etc but in jsx we have to
// give a closing tag like this <img />, <input />, <br />. and we can also give closing tag in html as it will not give any error.

// 5. in html all the tags are case insensitive as we can create tags with all capital letts or small letters or combinatipn of both
/* <H1>Hello World</h1> */
// BUT in JSX we cant do this as in JSX all the tags must be in lower case.

// 6. in html there is an attribute autoplay as there is two differnet words auto and play but entire attribute is in lowercase
// infact every attribute is in lowercase but when we use such attribute in react then we have to use them in
// camelCase.
//  <video src="video.mp4" autoPlay />

//for getting random text just to check the contect we can use article tag inside taht write Lorem50(then words) and enter it will print those much words from that website direclty
/* <article>Lorem165</article> */

//We can reuse the components and use them multiple times and use different compoenent in each pther also.


// function sum() {  //function is not exactly an expression but function calls an expression 
//   return 2;
// }

// sum();
 //if we return then its an expression but if we dont return then also it called an expression bcoz it still returns undefined 
//as long as something is retruning back some value is an expression 