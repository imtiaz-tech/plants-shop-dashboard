import React, { useEffect, useState } from "react";
import { Nav, Row, Col } from "react-bootstrap";
import RecentTransaction from "../../components/dashboard/RecentTransaction";
import { useDispatch, useSelector } from "react-redux";
import { getDashboardDetails } from "../../redux/slices/products";
import moment from "moment";
import { round } from "lodash";
function Dashboard() {
  const dispatch = useDispatch();

  const { dashboarddetails } = useSelector((state) => state.products || {});

  const [activeNavLink, setActiveNavLink] = useState("today");

  const onDateSelect = (period) => {
    let startTime = "";
    let endTime = "";
    if (period === "today") {
        setActiveNavLink("today")
      startTime = moment().startOf("D").format();
      endTime = moment().endOf("D").format();
    } else if (period === "week") {
        setActiveNavLink("week")
      startTime = moment().startOf("W").format();
      endTime = moment().endOf("W").format();
    } else if (period === "month") {
        setActiveNavLink("month")
      startTime = moment().startOf("M").format();
      endTime = moment().endOf("M").format();
    } else if (period === "year") {
        setActiveNavLink("year")
      startTime = moment().startOf("Y").format();
      endTime = moment().endOf("Y").format();
    }
    dispatch(getDashboardDetails({ startTime, endTime }));
  };

  useEffect(() => {
    const startTime = moment().startOf("D").format();
    const endTime = moment().endOf("D").format();
    dispatch(getDashboardDetails({ startTime, endTime }));
  }, []);

  return (
    <div className="body d-flex py-3">
      <div className="container-xxl">
        <div className="mt-1">
          <div id="left-tabs-example" defaultActiveKey="today" className="col-lg-12 col-md-12">
            <Row>
              <Col sm={12}>
                <div className="tab-filter d-flex align-items-center justify-content-between mb-3 flex-wrap">
                  <Nav
                    variant="pills"
                    className="nav nav-tabs tab-card tab-body-header rounded  d-inline-flex w-sm-100"
                    onSelect={(selected) => onDateSelect(selected)}
                  >
                    <Nav.Item className="nav-item">
                      <Nav.Link className={activeNavLink === "today" ? "active" : "unactive"} eventKey="today">
                        Today
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="nav-item">
                      <Nav.Link className={activeNavLink === "week" ? "active" : "unactive"} eventKey="week">
                        Week
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="nav-item">
                      <Nav.Link className={activeNavLink === "month" ? "active" : "unactive"} eventKey="month">
                        Month
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="nav-item">
                      <Nav.Link className={activeNavLink === "year" ? "active" : "unactive"} eventKey="year">
                        Year
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <div className="date-filter d-flex align-items-center mt-2 mt-sm-0 w-sm-100">
                    <div className="input-group">
                      <input type="date" className="form-control" />
                      <button className="btn btn-primary" type="button">
                        <i className="icofont-filter fs-5"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </Col>
              <Col sm={12}>
                <div className="tab-content mt-1">
                  <div className="fade show" id="summery-today">
                    <div className="row g-1 g-sm-3 mb-3 row-deck">
                      <div key={"todaydata"} className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                        <div className="card">
                          <div className="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                            <div className="left-info">
                              <div className="h6 mb-0">Customer</div>
                              <span className="text-muted">Customer</span>
                              <div>
                                <span className="fs-6 fw-bold me-2">{dashboarddetails.customerCount}</span>
                              </div>
                            </div>
                            <div className="right-icon">
                              <i className="icofont-student-alt fs-3 color-light-orange"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div key={"todaydata"} className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                        <div className="card">
                          <div className="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                            <div className="left-info">
                              <div className="h6 mb-0">Order</div>
                              <span className="text-muted">Order</span>
                              <div>
                                <span className="fs-6 fw-bold me-2">{dashboarddetails.orderCount}</span>
                              </div>
                            </div>
                            <div className="right-icon">
                              <i className="icofont-shopping-cart fs-3 color-lavender-purple"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div key={"todaydata"} className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                        <div className="card">
                          <div className="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                            <div className="left-info">
                              <div className="h6 mb-0">Avg Sale</div>
                              <span className="text-muted">Avg Sale</span>
                              <div>
                                <span className="fs-6 fw-bold me-2">{round(dashboarddetails.average, 0)}</span>
                              </div>
                            </div>
                            <div className="right-icon">
                              <i className="icofont-sale-discount fs-3 color-santa-fe"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col sm={12}>
                <div className="tab-content mt-1">
                  <div className="fade show" id="summery-today">
                    <div className="row g-1 g-sm-3 mb-3 row-deck">
                      <div key={"todaydata"} className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                        <div className="card">
                          <div className="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                            <div className="left-info">
                              <div className="h6 mb-0">Avg Item Sale</div>
                              <span className="text-muted">Avg Item Sale</span>
                              <div>
                                <span className="fs-6 fw-bold me-2">{round(dashboarddetails.averageItemSale, 0)}</span>
                              </div>
                            </div>
                            <div className="right-icon">
                              <i className="icofont-calculator-alt-2 fs-3 color-danger"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div key={"todaydata"} className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                        <div className="card">
                          <div className="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                            <div className="left-info">
                              <div className="h6 mb-0">Total Sale</div>
                              <span className="text-muted">Total Sale</span>
                              <div>
                                <span className="fs-6 fw-bold me-2">
                                  {dashboarddetails.orderSalesCount?.[0]?.totalSales}
                                </span>
                              </div>
                            </div>
                            <div className="right-icon">
                              <i className="icofont-calculator-alt-1 fs-3 color-lightblue"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div key={"todaydata"} className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                        <div className="card">
                          <div className="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                            <div className="left-info">
                              <div className="h6 mb-0">Total Products</div>
                              <span className="text-muted">Total Products</span>
                              <div>
                                <span className="fs-6 fw-bold me-2">{dashboarddetails.productCount}</span>
                              </div>
                            </div>
                            <div className="right-icon">
                              <i className="icofont-bag fs-3 color-light-orange"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className="row g-3 mb-3">
          <div className="col-md-12">
            <RecentTransaction />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
