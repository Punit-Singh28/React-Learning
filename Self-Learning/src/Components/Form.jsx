import React from 'react';
import { ApiCall } from '../Api/ServerApi';

export const Form = ({ fields, button }) => {
  console.log("🚀 ~ fields:", fields);

  // Initialize formData based on fields
  const [formData, setFormData] = React.useState(() =>
    fields.reduce((acc, curr) => {
      acc[curr.name] = '';
      return acc;
    }, {})
  );

  console.log("🚀 ~ formData:", formData);

  const handleInput = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCall = async () => {
    try {
      const res = await ApiCall.post('/user', formData);
      console.log(res);
    } catch (err) {
      console.error("API error:", err);
    }
  };

  return (
    <form>
      {fields?.map((el, i) => (
        <div
          key={i}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            width: '30%',
            marginBottom: '10px',
          }}
        >
          {el.name === 'gender' ? (
            <>
              <label>{el.name}</label>
              <div style={{ display: 'flex', gap: '5px' }}>
                <div>
                  <label htmlFor="male">male</label>
                  <input
                    type={el.type}
                    name="gender"
                    value="male"
                    onChange={handleInput}
                  />
                </div>
                <div>
                  <label htmlFor="female">female</label>
                  <input
                    type={el.type}
                    name="gender"
                    value="female"
                    onChange={handleInput}
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
                placeholder={`enter your ${el.name}`}
                name={el.name}
                onChange={handleInput}
              />
            </>
          )}
        </div>
      ))}

      {/* Prevent default form submit refresh */}
      <button type="button" onClick={handleCall}>
        {button}
      </button>
    </form>
  );
};
