/*~~~~~~~~~~~~~~~DESCRIPTION~~~~~~~~~~~~~~~~~~~~~~~~~~~
This page allows you to trade one coin for another

~~~~~~~~~~~~~~~~PROPS TO PASS~~~~~~~~~~~~~~~~~~~~~~~~~~
user = the current user
*/
function Trade(props) {
    return ( 
    <div style = {{border: "10px solid black"}}>
    {props.user.userName}
        for trading
    </div>
     );
}

export default Trade;