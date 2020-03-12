import React, { useState } from "react";

/**
 * Form Register
 * @param {*} props
 */
export const FormRegister = props => {
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [type, setType] = useState("customer");
  const [password, setPassword] = useState();
  const [isAgree, setIsAgree] = useState(false);

  const handleSubmit = e => {
    let payload = { name, phone, email, type, password, isAgree };
    console.log(payload);
    e.preventDefault();
  };

  const handleCheckbox = e => {
    const target = e.target;
    const value = target.name === "isAgree" ? target.checked : target.value;
    setIsAgree(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nama</label>
        <input
          type="text"
          name="nama"
          onChange={e => setName(e.target.value)}
        />
      </div>

      <div>
        <label>Nomor telpon</label>
        <input
          type="tel"
          name="phone"
          onChange={e => setPhone(e.target.value)}
        />
      </div>

      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          onChange={e => setEmail(e.target.value)}
        />
      </div>

      <div>
        <label>Daftar sebagai</label>
        <select onChange={e => setType(e.target.value)}>
          <option value="customer">customer</option>
          <option value="shop owner">shop owner</option>
        </select>
      </div>

      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          onChange={e => setPassword(e.target.value)}
        />
      </div>

      <div>
        <input
          id="is-agree"
          type="checkbox"
          name="isAgree"
          checked={isAgree}
          onChange={handleCheckbox}
        />
        <label htmlFor="is-agree">i am agree</label>
      </div>

      <input type="submit" value="Submit" />
    </form>
  );
};

/**
 * Form Login
 * @param {*} props
 */
export const FormLogin = props => {
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    let payload = { email, password };
    console.log(payload);
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username</label>
        <input
          type="text"
          name="username"
          onChange={e => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <input type="submit" value="Submit" />
    </form>
  );
};

/**
 * Form Reset Password
 * @param {*} props
 */
export const FormResetPassword = props => {
  const [email, setEmail] = useState();

  const handleChange = e => setEmail(e.target.value);

  const handleSubmit = e => {
    let payload = { email };
    console.log(payload);
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" onChange={handleChange} />
      </div>
      <input type="submit" value="submit" />
    </form>
  );
};

/**
 * Form Comments
 * @param {*} props
 */
export const FormComments = props => {
  const [name, setName] = useState("Jhone Doe");
  const [comments, setComments] = useState(
    "Aute consequat minim deserunt ea duis elit duis ipsum sunt sint"
  );
  const [isAgree, setIsAgree] = useState("no");

  const handleSubmit = e => {
    console.log({ name, comments, isAgree });
  };

  return (
    <div>
      <div>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Comments</label>
        <textarea
          value={comments}
          onChange={e => setComments(e.target.value)}
        ></textarea>
      </div>
      <div>
        <select value={isAgree} onChange={e => setIsAgree(e.target.value)}>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};
