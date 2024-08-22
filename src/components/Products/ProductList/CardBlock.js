import React from 'react';
import { deleteSingleProduct, getProducts } from '../../../redux/slices/products';
import { useDispatch,useSelector } from 'react-redux';
import { useEffect } from 'react';
import ProductConfirModal from '../../Modals/ProductDelConfirModal';

function CardBlock(props) {
    const {isModal, setIsModal,deleteId, setDeleteId}=props;
    const dispatch=useDispatch();

    const { products } = useSelector((state) => state.products || {});

    useEffect(()=>{
     dispatch(getProducts())
    },[])
  
    const deleteProduct =(id)=>{
      dispatch(deleteSingleProduct(deleteId))
    }
    const onDeleteClick = (productId) => {
        setIsModal(true);
        setDeleteId(productId);
      };

    return (
        <div className="card mb-3 bg-transparent p-2">
            {
                products.map((product) => {
                    return <div  className="card border-0 mb-1">
                        <div className="form-check form-switch position-absolute top-0 end-0 py-3 px-3 d-none d-md-block">
                            <button className="btn btn-outline-secondary">
                            <i className="icofont-edit text-success"></i>
                            </button>
                            <button onClick={() => {
                                 onDeleteClick(product._id);

                                     // deleteSingleProduct(product._id);
                                      }} type="button" className="btn btn-outline-secondary deleterow">
                                      <i className="icofont-ui-delete text-danger"></i>
                                    </button>                        </div>
                        <div className="card-body d-flex align-items-center flex-column flex-md-row">
                            <div >
                                <img className="w120 rounded img-fluid" src={product.image} alt="" />
                            </div>
                            <div className="ms-md-4 m-0 mt-4 mt-md-0 text-md-start text-center w-100">
                                <div><h6 className="mb-3 fw-bold">{product.name}<span className="text-muted small fw-light d-block">{product.sku}</span></h6></div>
                                <div className="d-flex flex-row flex-wrap align-items-center justify-content-center justify-content-md-start">
                                    <div className="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                                        <div className="text-muted small">Category</div>
                                        <strong>{product.categoryId.name}</strong>
                                    </div>
                                    <div className="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                                        <div className="text-muted small">Quantity</div>
                                        <strong>{product.quantity}</strong>
                                    </div>
                                    <div className="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                                        <div className="text-muted small">Price</div>
                                        <strong>{product.price}</strong>
                                    </div>
                                    <div className="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                                        <div className="text-muted small">Status</div>
                                        <strong>{product.status? "Published" : "Unpublished"}</strong>
                                    </div>
                                    <div className="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                                        <div className="text-muted small">Ratings</div>
                                        <strong><i className="icofont-star text-warning"></i>{product.rating} <span className="text-muted">{product.ratingnumber}</span></strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                })
            }
            <ProductConfirModal isModal={isModal} setIsModal={setIsModal} deleteProduct={deleteProduct}/>
        </div>
    )
}
export default CardBlock;