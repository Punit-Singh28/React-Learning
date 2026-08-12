import React from "react";

export const Form = ({ props, button }) => {
  const [formData, setFormData] = React.useState({});


  const handleChange = (e) =>{
    const { name, type, value } = e.target;


  setFormData((prev) => ({
    ...prev,
    [name]: type === "radio" ? value : value,
  }));

  }
  
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log("Form Data: ", formData)
  };
  return (
    <form onSubmit={handlesubmit}>
      {props?.map((el) => {
        return (
          <div
            key={el.id}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              width: "30%",
              marginBottom: "10px",
            }}
          >
            {el.name === "gender" ? (
              <>
                <label>{el.name}</label>
                <div style={{ display: "flex", gap: "5px" }}>
                  {" "}
                  <div>
                    <label htmlFor="male">Male</label>
                    <input type={el.type} value="male" onChange={handleChange}/>
                  </div>
                  <div>
                    <label htmlFor="female">Female</label>
                    <input type={el.type} value="female" onChange={handleChange}/>
                  </div>
                </div>
              </>
            ) : (
              <>
                <label htmlFor={el.name}>{el.name}</label>
                <input id={el.name} type={el.name} name={el.name} onChange={handleChange}/>
              </>
            )}
          </div>
        );
      })}

      <button>{button}</button>
      <button type="submit">{button}</button>
    </form>
  );
};
