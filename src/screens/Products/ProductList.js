import React from "react";
import CardBlock from "../../components/Products/ProductList/CardBlock";
import PageHeader1 from "../../components/common/PageHeader1";

function ProductList() {
  return (
    <div className="body d-flex py-3">
      <div className="container-xxl">
                {/* link to product add page */}
        <PageHeader1 pagetitle="Products List" righttitle="Add Products" link="/product-add" routebutton={true} />
        <div className="row g-3 mb-3">
          <div className="col-md-12 no-padding">
            <CardBlock />
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductList;
