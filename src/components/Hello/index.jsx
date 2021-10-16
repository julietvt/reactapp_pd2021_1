import React from "react";
import styles from "./Hello.module.scss"

// props это пропсы , входящие параментр 
// при отрисовке переменная в {}
const Hello = props => {
    const {name, surname} = props;
    return <div className={styles.wrapper_hello}>Hello, {name} {surname}!!!</div>;
};

export default Hello;