import React from 'react';

function PricingInfo(props) {
    //props pass from parent component
    const {price,setPrice,setSkuNum,skuNum,setQuantity,quantity}=props;

    return (
        <>
            <div className="card-header py-3 d-flex justify-content-between align-items-center bg-transparent border-bottom-0">
                <h6 className="m-0 fw-bold">Pricing Info</h6>
            </div>
            <div className="card-body">
                <div className="row g-3 align-items-center">
                <div className="col-md-12">
                        <label className="form-label">Product Price </label>
                     {/* onchange function called when setPrice in input fields */}
                        <input type="text" className="form-control" value={price} onChange={(e) =>setPrice(e.target.value)} />
                    </div>
                    
                    <div className="card-header py-3 d-flex justify-content-between align-items-center bg-transparent border-bottom-0">
                <h6 className="m-0 fw-bold">Inventory Info</h6>
            </div>
            <div className="card-body">
                <div className="row g-3 align-items-center">
                <div className="col-md-12">
                        <label className="form-label">SKU</label>
                        {/* onchange function called when setSkuNum in input fields */}
                        <input type="text" className="form-control" value={skuNum} onChange={(e) =>setSkuNum(e.target.value) } />
                    </div>
                    <div className="col-md-12">
                        <label className="form-label">Total Stock Quantity</label>
                        {/* onchange function called when setQuantity in input fields */}
                        <input type="text" className="form-control" value={quantity} onChange={(e) =>setQuantity(e.target.value)} />
                    </div>
                </div>
            </div>
                </div>
            </div>
        </>
    )
}
export default PricingInfo;