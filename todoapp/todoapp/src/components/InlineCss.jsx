import styles from "../components/inlineCss.module.css"//module styling
import "../css-optional/app.css"//external
const heading = {color:"green", fontSize:"52px"};//inline
export default function InlineCss(){
    // return(<h2 style={{color:"blue", fontSize:"48px"}}>Welcome Home</h2>);
    // or
    return(<>
    <h2 style={heading}>Welcome Home - inline css</h2>
    <h2 className="heading" >Welcome Home - external css</h2>
    <h2 className={styles.heading}>styling using modules css</h2>
    </>);
}

//https://www.youtube.com/watch?v=avrYe4CkOB4&list=PLSsAz5wf2lkK_ekd0J__44KG6QoXetZza&index=35