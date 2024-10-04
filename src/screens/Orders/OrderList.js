import React from "react";
import PageHeader1 from "../../components/common/PageHeader1";
import OrdersList from "../../components/Data/OrderListData";
function OrderList() {
  return (
    <div className="body d-flex py-3">
      <div className="container-xxl">
        <PageHeader1 pagetitle="Orders List" />
        <div className="row g-3 mb-3">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <div id="myDataTable_wrapper" className="dataTables_wrapper dt-bootstrap5 no-footer">
                  <div className="row">
                    <div className="col-sm-12">
                      {/* import OrderList from OrderListData to show orders in list */}
                      <OrdersList />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default OrderList;
