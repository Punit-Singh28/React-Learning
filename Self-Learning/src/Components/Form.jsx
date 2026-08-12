import React from "react";

export const Form = ({ props, button }) => {
  const [formData, setFormData] = React.useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data: ", formData);
  };

  return (
    <form onSubmit={handleSubmit} style={{
            display: "flex",
            marginTop: "15px",
             gap: "5px",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",}}>
      {props?.map((el) => (
        <div
          key={el.id}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            width: "30%",
            marginBottom: "10px",
          }}
        >
          {el.name === "gender" ? (
            <>
              <label>{el.name}</label>
              <div style={{ display: "flex", gap: "5px" }}>
                <div>
                  <label htmlFor="male">Male</label>
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="female">Female</label>
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </>
          ) : (
            <>
              <label htmlFor={el.name}>{el.name}</label>
              <input
                id={el.name}
                type={el.type}
                name={el.name}
                onChange={handleChange}
              />
            </>
          )}
        </div>
      ))}

      <button type="submit">{button}</button>
    </form>
  );
};
