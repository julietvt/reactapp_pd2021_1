import React from "react";

// props это пропсы , входящие параментр 
// при отрисовке переменная в {}
const Hello = props => {
    const {name} = props;
    return <div>Hello, {name}!!!</div>;
};

export default Hello;