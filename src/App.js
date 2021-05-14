import './App.css';

function App() {
  return (
    <body>
    <main class="header">
      <div class="header-contener">
        <section class="first-section">
          <header class="head">
            <h1 class="heading">Learn to code by watching others</h1>
            <p1 class="heading-text">
              See how experienced developers solve problems in real-time.
              Watching scripted tutorials is great, but understanding how
              developers think is invaluable.
            </p1>
          </header>
        </section>
        <section class="promo-box">
          <div class="promo">
            <h3 class=".promo-lablem">
              <span>Try it free 7 days</span> then 20$/mo. thereafter
            </h3>
          </div>
          <form>
            <input type="text" id="fname" placeholder="Jonathan |" required />
            <label for="fname" class="label"></label>

            <input type="text" id="lname" placeholder="Last Name" required />
            <label for="lname" class="label"></label>

            <input
              type="email"
              id="email"
              placeholder="Email Address"
              required
            />
            <label for="email" class="label"></label>

            <input
              type="password"
              id="password"
              placeholder="Password"
              required
            />
            <label for="password" class="label"></label>

            <input
              type="button"
              name="claim"
              value="CLAIM YOUR FREE TRAIL"
              id="submit"
            />
            <p>
              By clicking the button, you are agreeing to our
              <span> Terms and Services</span>
            </p>
          </form>
        </section>
      </div>
    </main>
  </body>
  );
}

export default App;