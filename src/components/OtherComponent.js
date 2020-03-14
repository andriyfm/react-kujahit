import React, { useEffect, useState } from "react";

export default function OtherComponent() {
  const [user, setUser] = useState();
  const getData = async () => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(response => response.json())
      .then(json => {
        setUser(json);
        console.log(json);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      {user ? (
        <h1>
          Data berhasil diload <br /> {user.title}
        </h1>
      ) : null}
    </div>
  );
}
