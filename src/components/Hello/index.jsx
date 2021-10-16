import React from "react";

// props это пропсы , входящие параментр 
// при отрисовке переменная в {}
const Hello = props => {
    const {name, surname} = props;
    return <div>Hello, {name} {surname}!!!</div>;
};

export default Hello;