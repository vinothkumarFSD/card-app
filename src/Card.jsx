import React from "react";

//normal export method using export to beginning of the variable

// //export const Card=()=>{
// return (
//     <div className="cardContainer">
//         <label htmlFor="some-text">name</label>
//         <input type="text" id="some-text"/>
//     </div>
// );

// default export method using export in the end 

// //const Card = () => {
// const name= 'Some Text :';
// return (
//     <div className="cardContainer">
//         <label htmlFor="some-text">name</label>
//         <input type="text" id="some-text"/>
//     </div>
// );
//export default Card;

//without destructure using to pass the attribute of props--> this is not recommened way
// props is only for first argument using,
// here input type doesnt change only taken by first argument type(ex:text)

// //const Card = (props) => {
//     return (
//         <div className="cardContainer">
//             <label htmlFor={props.cardName}>{props.cardName}:</label>
//             <input type="text" id={props.cardName} />
//         </div>
//     );
// }

// export default Card;

//with destructure-->this is efficient recommended way
const Card = ({cardName,inpType="text"}) => {
    return (
        <div className="cardContainer">
            <label htmlFor={cardName}>{cardName}:</label>
            <input type={inpType} id={cardName} />
        </div>
    );
}

export default Card; 
