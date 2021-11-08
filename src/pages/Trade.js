/*~~~~~~~~~~~~~~~DESCRIPTION~~~~~~~~~~~~~~~~~~~~~~~~~~~
This page allows you to trade one coin for another

~~~~~~~~~~~~~~~~PROPS TO PASS~~~~~~~~~~~~~~~~~~~~~~~~~~
user = the current user
*/
function Trade(props) {
    return ( 
    <>
    {props.user.userName}
        for trading
    </>
     );
}

export default Trade;