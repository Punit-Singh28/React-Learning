import React from "react";
import { user } from "../../db.json";

import "../Css/home.css"


const Home = () => {
  console.log(user);

  return (
    <>

{/* <table border="2">
  <thead>
    <tr>
      <th>hello</th>
      <th>hello</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>hello</td>
      <td>hello</td>
    </tr>
  </tbody>
</table> */}


      <table>
        <thead>
          <tr>
            <th>Sr no</th>
            <th>email</th>
            <th>password</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        {user?.map((el) => (
          <tr key={el.id}>
            <td>{el.id}</td>
            <td>{el.email}</td>
            <td>{el.password}</td>
            <td>
            <button>edit</button>
            <button>delete</button>
            </td>
          </tr>
        ))}
      </tbody>
      </table>      
    </>
  );
};

export default Home;
