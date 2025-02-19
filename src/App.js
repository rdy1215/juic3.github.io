import { useState } from "react";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import "./App.css";

const App = () => {
  const [submit, setSubmit] = useState(false);
  const [email, setEmail] = useState({
    "entry.1858518904": "", //name
  });
  const [emailError, setEmailError] = useState(false);

  const validateEmail = (email) => {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
  };

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail((prevState) => ({
      ...prevState,
      ["entry.1858518904"]: newEmail,
    }));
    setEmailError(!validateEmail(newEmail) && newEmail !== "");
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmit(true);
    let url = `https://docs.google.com/forms/u/0/d/e/1FAIpQLSfy5QNKp0cNzSc_LBXqtW9ntPySKbC1u7EPZ3a9TdK_EqXW_g/formResponse?entry.1858518904=${email["entry.1858518904"]}`;

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="p-6">
        <div className="container flex justify-between items-center">
          <div>
            <img src="images/JUIC3labs.png" width={"150px"} alt="JUIC3 Labs" />
          </div>
          <div className="text-lg font-bold">Early Access</div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container px-6 py-2 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-5xl font-bold leading-tight tracking-wide">
            Unlock the Energy Markets. For Everyone.
          </h1>
          <p className="px-4 text-lg text-2xl font-bold">
            Connect ESSs<br></br>
            Stake Energy, <br></br>Earn High Yield—all with ease.
          </p>
          <p className="px-4 text-lg font-bold">
            Monetize Energy assets & fuel the decentralized energy revolution
            <span className="p-2 text-2xl font-bold">NOW.</span>
          </p>
        </div>
        {submit ? (
          <Button
            fullWidth
            variant="contained"
            disabled
            sx={{
              "&.Mui-disabled": {
                background: "white",
                color: "#c0c0c0",
              },
            }}
          >
            Submitted Successfully
          </Button>
        ) : (
          <form
            className="grid gap-4 max-w-md"
            onSubmit={handleSubmit}
            target="_self"
          >
            <TextField
              fullWidth
              variant="outlined"
              type="email"
              placeholder="Enter your email address"
              value={email["entry.1858518904"]}
              onChange={handleEmailChange}
              error={emailError}
              helperText={
                emailError ? "Please enter a valid email address" : ""
              }
              className="mui-input-override"
            />
            <Button
              fullWidth
              variant="contained"
              disabled={emailError || !email["entry.1858518904"]}
              sx={{
                "&.Mui-disabled": {
                  background: "white",
                  color: "#c0c0c0",
                },
              }}
              type="submit"
            >
              Join Waitlist
            </Button>
          </form>
        )}
      </section>

      {/* Footer */}
      <footer className="container px-6 py-4 mt-20 border-t border-gray-800">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-400">
            © 2025 JUIC3. All rights reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};
export default App;
