import React from "react";
import Speaker from "./speaker";

export default ({speakers}) => <ul>
{speakers.map(speaker => <Speaker {...speaker}/>)}
</ul>
