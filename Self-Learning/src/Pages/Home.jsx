import React from "react";
import { user } from "../../db.json";

import { ApiCall } from "../Api/ServerApi";

import "../Css/home.css";

const Home = () => {
  const [changeData, setChangeData] = React.useState({
    email: "",
    password: "",
  });

  const handleEdit = async (id) => {
    try {
      await ApiCall.patch(`/user/${id}`, { isEdit: true });
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancel = async (id) => {
    try {
      await ApiCall.patch(`/user/${id}`, { isEdit: false });
    } catch (error) {
      console.log(error);
    }
  };

  const handleConfirm = async (id) => {
    try {
      console.log("change Data", changeData);
      if (changeData.email === "") {
        const emailValue = user.filter((el) => el.id === id);
        changeData.email = emailValue[0].email;
      }

      await ApiCall.patch(`/user/${id}`, { ...changeData, isEdit: false });
      alert(`Data change Successfully ${JSON.stringify(changeData)}`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const userData=user.filter(el=>el.id===id)
      await ApiCall.delete(`/user/${id}`);
      alert(`Data Deleted successfully ${JSON.stringify(userData[0])}`)
    } catch (error) {
      console.log(error);
    }
  };

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
              <td>
                {el.isEdit ? (
                  <input
                    type="text"
                    name="email"
                    defaultValue={el.email}
                    onChange={(e) => {
                      setChangeData((prev) => {
                        const { name, value } = e.target;
                        console.log("name", name, "value", value);
                        return {
                          ...el,
                          ...prev,
                          [name]: value,
                        };
                      });
                    }}
                  />
                ) : (
                  el.email
                )}
              </td>
              <td>
                {el.isEdit ? (
                  <input
                    name="password"
                    type="text"
                    defaultValue={el.password}
                    onChange={(e) => {
                      setChangeData((prev) => {
                        const { name, value } = e.target;
                        console.log("name", name, "value", value);
                        return {
                          ...el,
                          ...prev,
                          [name]: value,
                        };
                      });
                    }}
                  />
                ) : (
                  el.password
                )}
              </td>
              <td>
                <>
                  {el.isEdit ? (
                    <>
                      <button onClick={() => handleCancel(el.id)}>
                        cancel
                      </button>
                      <button onClick={() => handleConfirm(el.id)}>
                        confirm
                      </button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => handleEdit(el.id)}>edit</button>
                      <button onClick={() => handleDelete(el.id)}>
                        delete
                      </button>
                    </>
                  )}
                </>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Home;
