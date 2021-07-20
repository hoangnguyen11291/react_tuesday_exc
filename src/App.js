import "./App.css";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Result from "./components/Result";
import Button from "./components/Button";

function App() {
  // const [count, setCount] = useState(0);
  // const handleAdd = () => {
  //   setCount(count + 1);
  // };
  // const handleDes = () => {
  //   setCount(count - 1);
  //   console.log(count);
  // };
  // const handleAddTen = () => {
  //   setCount(count + 10);
  // };
  // const handleDesTen = () => {
  //   setCount(count - 10);
  // };

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [password2, setPassword2] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const dataform = { email, password, password2 };
  //   console.log(dataform);
  //   if (password != password2) {
  //     alert("Wrong Pass");
  //   }
  // };

  // const hanldeEmail = (e) => {
  //   setEmail(e.target.value);
  // };

  // const hanldePassword = (e) => {
  //   setPassword(e.target.value);
  // };

  // const handleConfirm = (e) => {
  //   setPassword2(e.target.value);
  // };
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    gender: "",
    DOB: "",
    email: "",
    password: "",
    password2: "",
    intro: "",
  });

  const { name, phone, gender, DOB, email, password, password2, intro } =
    formData;
  const [startDate, setStartDate] = useState(new Date());

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      alert("Wrong Pass");
    }
    console.log(formData);
    localStorage.setItem("formData", JSON.stringify(formData));
    // window.localStorage.user = JSON.stringify(formData);
  };

  return (
    <div className="App">
      <h2>Demo Form</h2>
      <div>
        {/* 
      <Result count={count} />
      <Button
        handleAdd={handleAdd}
        handleDes={handleDes}
        handleAddTen={handleAddTen}
        handleDesTen={handleDesTen}
      /> */}
      </div>
      <form onSubmit={handleSubmit}>
        <label for="name">Name:</label>
        <br />
        <input type="text" id="name" name="name" onChange={handleChange} />
        <br />
        <label for="name">Gender:</label>
        <br />
        <select name="gender" id="gender" onChange={handleChange}>
          <option value="none" selected disabled hidden>
            Select your Gender
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <br />
        <label for="DOB">Date of Birth:</label>
        <br />
        <DatePicker
          name="DOB"
          selected={startDate}
          onSelect={(date) => {
            setStartDate(date);
            setFormData({ ...formData, DOB: date });
          }}
          // onChange={(date) => setStartDate(date)}
        />
        {/* <input
          type="checkbox"
          id="vehicle1"
          name="gender"
          value="Male"
          onChange={handleChange}
        />
        <label for="vehicle1"> Male</label>
        <input
          type="checkbox"
          id="vehicle1"
          name="gender"
          value="Female"
          onChange={handleChange}
        />
        <label for="vehicle1"> Female</label> */}
        <br />
        <label for="name">Phone:</label>
        <br />
        <input type="number" id="phone" name="phone" onChange={handleChange} />
        <br />
        <label for="email">Email:</label>
        <br />
        <input type="email" id="email" name="email" onChange={handleChange} />
        <br />
        <label for="password">Password:</label>
        <br />
        <input
          type="password"
          id="password"
          name="password"
          onChange={handleChange}
        />
        <br />
        <label for="password">Confirm Password:</label>
        <br />
        <input
          type="password"
          id="password"
          name="password2"
          onChange={handleChange}
        />
        <br />
        <div class="form-group">
          <label for="exampleFormControlTextarea1">
            Somethine about Yourself
          </label>
          <br />
          <textarea
            name="intro"
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            onChange={handleChange}
          ></textarea>
        </div>
        <br />
        <button type="submit" value="Submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
