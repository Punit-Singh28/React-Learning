const Basic = () => {
  let n = 4;
  let rows=[];
  for (let i = 0; i < n; i++) {
    let row = "";

    for (let j = 0; j <= i; j++) {
      row = row + "* ";
    }
    console.log(row);
    rows.push(row)
  }
  return (
    <>
      <div>{rows.map((r,i)=>
        <div key={i}>{r}</div>
      )}</div>
    </>
  );
};

export default Basic;
