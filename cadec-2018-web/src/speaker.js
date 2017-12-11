import React from "react";

export default ({ name, bio, twitter, linkedIn, email, phone, pic, talks }) => (
  <div>
    <h1>{name}</h1>
    <p>{bio}</p>
    <ul>
      <li>{twitter}</li>
      <li>{linkedIn}</li>
      <li>{email}</li>
      <li>{phone}</li>
    </ul>
  </div>
);
