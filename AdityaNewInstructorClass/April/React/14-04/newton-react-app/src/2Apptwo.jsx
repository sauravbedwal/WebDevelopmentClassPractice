//as long as both the compoenets in same jsx file there is no need to export every component as we can simply use it
// like we did here

function Header() {
  return (
    <>
      <header>This is the header part of the page</header>;
      <Button />;
    </>
  );
}

// <Header />  ->  <header>This is the header part of the page</header>

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

function Apptwo() {
  return (
    <div>
      <Header />
      <Nav />
      <Button />
      <Main />
      <br />
      <Footer />
      <br />
      <Button />
    </div>
  );
}

export default Apptwo;
