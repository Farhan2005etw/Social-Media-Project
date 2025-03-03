const WelconmMessage = ({getPostClicked}) => {
    return(
        
        <center className="welcome-message"><h1>There are no post</h1>
        <button type="button" className="btn btn-primary" onClick={getPostClicked} >Get Post From Server</button>
        </center>
    );
};

export default WelconmMessage;