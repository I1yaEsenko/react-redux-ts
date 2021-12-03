import React from "react";

type TechnoPropsType = {
  value: string
}

function Technologies(props: TechnoPropsType) {
  return  (
    <div>
      <ul>
        <li>css</li>
        <li>html</li>
        <li>js</li>
        <li>react</li>
      </ul>
    </div>
  );
}

export default Technologies;