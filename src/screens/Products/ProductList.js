import React,{useState} from "react";
import CardBlock from "../../components/Products/ProductList/CardBlock";
import PageHeader1 from "../../components/common/PageHeader1";

function ProductList() {

  const [isModal, setIsModal] = useState(false);
  const [deleteId, setDeleteId] = useState("");

   

  return (
    <div className="body d-flex py-3">
      <div className="container-xxl">
        <PageHeader1 pagetitle="Products List" righttitle="Add Products" link="/product-add" routebutton={true} />
        <div className="row g-3 mb-3">
          <div className="col-md-12 no-padding">
            <div className="card mb-3 bg-transparent p-2">
            <div className="card mb-3 bg-transparent p-2">
           <CardBlock isModal={isModal} setIsModal={setIsModal} deleteId={deleteId} setDeleteId={setDeleteId}/>
        </div>
              <div className="row g-3 mb-3">
                <div className="col-md-12">
                  <nav className="justify-content-end d-flex">
                    <ul className="pagination">
                      <li className="page-item disabled">
                        <a className="page-link" href="#!">
                          Previous
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#!">
                          1
                        </a>
                      </li>
                      <li className="page-item active" aria-current="page">
                        <a className="page-link" href="#!">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#!">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#!">
                          Next
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductList;
