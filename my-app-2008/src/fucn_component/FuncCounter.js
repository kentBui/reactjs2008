import React from "react";

// const FuncCounter = ({ data }) => {
//   console.log(`Render func counter: ${data.counter}`);
//   return (
//     <div>
//       <h3>Hello from func counter {data.counter}</h3>
//     </div>
//   );
// };
const FuncCounter = React.memo(({ data }) => {
  console.log(`Render func counter: ${data.counter}`);
  return (
    <div>
      <h3>Hello from func counter {data.counter}</h3>
    </div>
  );
});

export default FuncCounter;
