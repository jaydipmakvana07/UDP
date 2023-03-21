import "./rightBar.scss";
import jaydip from "../../assets/jaydip.jpg";

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          
          <span>Latest Achievement</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://www.shareicon.net/data/512x512/2016/09/15/829452_user_512x512.png"
                alt=""
              />
              <p>
                <span>Divisha Makwana</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          
          <div className="user">
            <div className="userInfo">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwZkSEm6tkwEyPiz1kmz9BMlcBsbjl8q__XQ&usqp=CAU"
                alt=""
              />
              <p>
                <span>Soham Patel</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector.png"
                alt=""
              />
              <p>
                <span>Arpit Patel</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>
        
         
          </div>
        </div>
      
  );
};

export default RightBar;
