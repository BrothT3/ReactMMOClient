import React, { useState } from 'react';
import LogInForm from './logincomponent';


//a "provider" class that wrapps the LogInForm and allows us to acces the information outside
function GetToken() {
  const [data, setData] = useState(null);



  const handleSetData = (newData) => {
    setData(JSON.stringify(newData));
  };


  return (
    <div>
      <LogInForm setData={handleSetData} />
      {/* Pass setData as a prop to LogInForm */}
      <div ></div>
      <p>{data}</p>
      { /*do something with the data, it just breaks at this point because it can't show an object */}
    </div>
  );


}

export default GetToken;


