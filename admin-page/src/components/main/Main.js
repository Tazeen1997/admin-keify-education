import './Main.css';
import hello from '../../assets/hello.jpg';
import Chart from "../charts/Chart";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import TodayIcon from '@material-ui/icons/Today';
import VideocamIcon from '@material-ui/icons/Videocam';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';


const Main = () => {
    return(
         <main>
             <div className="main__container">
                 <div className="main__title">
                     {/* <img src={hello} alt="hello" /> */}
                     <div className="main__greeting">
                         <h1>Hello!! User</h1>
                         <p>Welcome to your admin dashboard</p>
                     </div>
                 </div>

                 <div className="main__cards">

                     <div className="card">
                         <i>
                            <AccountCircleIcon />
                         </i>
                         <div className="card__inner">
                             <p className="text-primary-p">Numbers of Students</p>
                             <span className="font-bold text-title">983</span>
                         </div>
                     </div>

                     <div className="card">
                         <i>
                            <TodayIcon />
                         </i>
                         <div className="card__inner">
                             <p className="text-primary-p">weekly Downloads</p>
                             <span className="font-bold text-title">5840</span>
                         </div>
                     </div>

                     <div className="card">
                         <i>
                            <VideocamIcon />
                         </i>
                         <div className="card__inner">
                             <p className="text-primary-p">Number of videos</p>
                             <span className="font-bold text-title">263</span>
                         </div>
                     </div>

                     <div className="card">
                         <i>
                            <ThumbUpIcon />
                         </i>
                         <div className="card__inner">
                             <p className="text-primary-p">Number of Likes</p>
                             <span className="font-bold text-title">3021</span>
                         </div>
                     </div>

                 </div>

                <div className="charts">
                    <div className="charts__left">
                        <div className="charts__left__title">
                            <div>
                                <h1>Daily Updates</h1>
                                <p>Amsterdam, Netherlands</p>
                            </div>
                            <i>
                            <AttachMoneyIcon />
                            </i>
                        </div>
                        <Chart />
                    </div>
                    
                    <div className="charts__right">
                        <div className="charts__right__title">
                            <div>
                                <h1>Start Update</h1>
                                <p>Amsterdam, Netherlands</p>
                            </div>
                            <i>
<AttachMoneyIcon />
                            </i>
                        </div>

                        <div className="charts__right__cards">
                            <div className="card1">
                                <h1>Income</h1>
                                <p>$75,503</p>
                            </div>
                            <div className="card2">
                                <h1>Sales</h1>
                                <p>$162,831</p>
                            </div>
                            <div className="card3">
                                <h1>Users</h1>
                                <p>6973</p>
                            </div>
                            <div className="card4">
                                <h1>Orders</h1>
                                <p>19734</p>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
         </main>
    )
    
}

export default Main;