import { useState } from 'react';

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  let labelClassesEmail = "block mb-2 text-xs font-bold tracking-wide uppercase";

  if(emailNotValid) {
    labelClassesEmail += " text-red-400";
  } else {
    labelClassesEmail += " text-stnoe-300";
  }

  let labelClassesPass = "block mb-2 text-xs font-bold tracking-wide uppercase";

  if(passwordNotValid) {
    labelClassesPass += " text-red-400";
  } else {
    labelClassesPass += " text-stnoe-300";
  }

  let inputClassesEmail = "w-full px-3 py-2 leading-light border rounded shadow";

  if(emailNotValid) {
    inputClassesEmail += " text-red-500 bg-red-100 border-red-300";
  } else {
    inputClassesEmail += " text-gray-700 bg-stone-300";
  }
  
  let inputClassesPass = "w-full px-3 py-2 leading-light border rounded shadow";

  if(passwordNotValid) {
    inputClassesPass += " text-red-500 bg-red-100 border-red-300";
  } else {
    inputClassesPass += " text-gray-700 bg-stone-300";
  }

  return (
    <div id="auth-inputs" className="mx-auto w-full max-w-sm p-8 rounded bg-gradient-to-b from-stone-700 to-stone-800">
      <div className="flex flex-col gap-2 mb-6">
        <p>
          <label className={labelClassesEmail}>Email</label>
          <input
            type="email"
            className={inputClassesEmail}
            onChange={(event) => handleInputChange('email', event.target.value)}
          />
        </p>
        <p>
          <label className={labelClassesPass}>Password</label>
          <input
            type="password" className={inputClassesPass}
            onChange={(event) =>
              handleInputChange('password', event.target.value)
            }
          />
        </p>
      </div>
      <div className="flex justify-end gap-4">
        <button type="button" className="text-amber-400 hover:text-amber-500">
          Create a new account
        </button>
        <button className="px-4 py-2 font-semibold uppercase rounded text-stone-900 bg-amber-400 hover:bg-amber-500" onClick={handleLogin}>Sign In</button>
      </div>
    </div>
  );
}
