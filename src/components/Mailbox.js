import React from "react";

const Mailbox = props => {
  const { messages } = props;
  return (
    <div>
      <h1>Hello!</h1>
      {messages.length > 0 && (
        <h2>
          You have <span style={{ color: "red" }}>{messages.length}</span>{" "}
          unread messages.
        </h2>
      )}
    </div>
  );
};

export default Mailbox;
