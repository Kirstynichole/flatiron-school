function Item( {item}) {
    //OR
    // const { name, price } = item;
    //OR:
    //function Item( {item: { name, price }}) {
    return(
        <>
            <em>{item.name} (${item.price})</em>
        </>
    )
}
export default Item;

//React props are very flexible...
//EXAMPLE:
// export default function Biography(props) {
//     return (
//     <h1>
//     {props.name} ({props.born}{props.died && `- ${props.died}`}): {props.summary}
//     </h1>
//     )
//     }
//     
//     <Biography> can render with any of the following invocaitons:
//     
//     <Biography />
//     <Biography name={"Ada Lovelace"} born={1815} died={1852} summary={"Discovered that a computer could be used for more than pure calculation."} />
//     <Biography name={"Ada Lovelace"} born={1815} summary={"Discovered that a computer could be used for more than pure calculation."} />
//     <Biography firstName={"Ada"} lastName={"Lovelace"} born={1815} summary={"Discovered that a computer could be used for more than pure calculation."} />
