import React,{useState} from 'react';
import { useDispatch } from "react-redux";
import { updateOrderStatus } from '../../../redux/slices/products';
import ConfirmationModal from './ConfirmationModal';
import { useNavigate } from "react-router-dom";

function StatusOrderBlock(props) {
    const {order} = props;
    const dispatch = useDispatch();
    //useNavigate hook provides a simple API for navigating between pages in your React application.
    const navigate = useNavigate();
  // usestate hook used for set setIsModal,setOrderId,setComents,setStatus,setErrorText
    const [isModal, setIsModal] = useState(false);
    const [orderId, setOrderId] = useState("");
    const [comments,setComents]= useState("");
    const [status,setStatus]= useState("");
    const [errorText, setErrorText] = useState("");

    // const changeStatus = () => {
    //     setStatus();
    //   };
      // function for update order status and after update status navigate to order list
      const updateStatus=()=> {
        const data ={
            id:order._id,
            status,comments
        }
        dispatch(updateOrderStatus(data)).then(({ payload }) => {
            if (payload.message) {
              navigate("/order-list");
            } else {
              setErrorText(payload.message)
            }
          });
      }
    //    show modal for update order status
      const onClickUpdate = (orderId) => {
        setIsModal(true);
        setOrderId(orderId);
      };

     return (
        <div className="card mb-3">
            <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                <h6 className="mb-0 fw-bold ">Status Orders</h6>
            </div>
            <div className="card-body">
                <form>
                    <div className="row g-3 align-items-center">
                        <div className="col-md-12">
                            <label className="form-label">Order ID</label>
                            <input  className="form-control" value={order._id} disabled={true}   />
                        </div>
                        <div className="col-md-12">
                            <label className="form-label">Order Status</label>
                             {/* onChange function call when order status changed by user */}
                            <select className="form-select" onChange={(e)=>setStatus(e?.target?.value)} value={status} >
                                <option value="Progress">Progress</option>
                                <option value="Completed">Completed</option>
                                <option value="Pending">Pending</option>
                            </select>
                        </div>
                        <div className="col-md-12">
                            <label htmlFor="comment" className="form-label">Comment</label>
                         {/* onChange function call when any comments add by user */}
                            <textarea className="form-control" id="comment" rows="4" value={comments} onChange={(e) => setComents(e.target.value)}/>
                        </div>
                    </div>
                    {/* onClick function call when user change order status and add comments before action execute it shows confirmation modal */}
                    <button type="button" className="btn btn-primary mt-4 text-uppercase" onClick={() => {onClickUpdate(order._id)
                                      }}>Submit</button>
                </form>
                {/* pass updateStatus function to confirmation modal to change order status  */}
                <ConfirmationModal setIsModal={setIsModal} isModal={isModal} onConfirm={updateStatus}/>
            </div>
        </div>
    )
}
export default StatusOrderBlock;