import React, { Component } from 'react'
import img from './asset/index'
import './page7.css'

export default class Page7 extends Component {
    render() {
        return (
          <section className="page7">
          <div style={{ margin: "0 auto", width: "85%" }}>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-9 pr-0">
                <div className="col-md-12 bg-boder">
                  <ul className="nav nav-pills " id="pills-tab" role="tablist">
                    <li className="nav-item position-relative paddings">
                      <a
                        className="nav-link active"
                        id="pills-home-tab"
                        data-toggle="pill"
                        href="#pills-home"
                        role="tab"
                        aria-controls="pills-home"
                        aria-selected="true"
                      >
                        TIN CÔNG NGHỆ
                        <div className="boder position-absolute" />
                      </a>
                    </li>
                    <li className="nav-item position-relative paddings">
                      <a
                        className="nav-link "
                        id="pills-profile-tab"
                        data-toggle="pill"
                        href="#pills-profile"
                        role="tab"
                        aria-controls="pills-profile"
                        aria-selected="false"
                      >
                        TIN GSOTGROUP
                        <div className="boder position-absolute" />
                      </a>
                    </li>
                    <li className="nav-item position-relative paddings ">
                      <a
                        className="nav-link "
                        id="pills-contact-tab"
                        data-toggle="pill"
                        href="#pills-contact"
                        role="tab"
                        aria-controls="pills-contact"
                        aria-selected="false"
                      >
                        KIẾN THỨC CÔNG NGHỆ
                        <div className="boder position-absolute" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="row m-0 mt-4 boder-row">
                  <div className="col-md-5 p-0">
                    <div className="img1">
                      <img className="img1-1" src={img.icon1} alt />
                    </div>
                  </div>
                  <div className="col-md-7 p-0">
                    <h3 className="text-title mb-0">
                      ĐÂU LÀ ĐỊA CHỈ CUNG CẤP PHẦN MỀM NHÂN SỰ GIÁ TỐT NHẤT HIỆN NAY?
                    </h3>
                    <p className="text-p ">
                      Hiện nay, khi mà các doanh nghiệp đã hiểu rõ được tầm quan trọng
                      của phần mềm nhân sự thì nhu cầu mua chúng ngày càng tăng cao.
                    </p>
                    <p className="text-title1 mb-0">
                      MON | <b>02.07.2020</b>{" "}
                      <img
                        className="img-muiten"
                        style={{ marginLeft: 265 }}
                        src={img.arrowred}
                        alt
                      />
                    </p>
                  </div>
                </div>
                <div className="row m-0 mt-4 boder-row">
                  <div className="col-md-5 p-0">
                    <div className="img1">
                      <img className="img1-1" src={img.icon2} alt />
                    </div>
                  </div>
                  <div className="col-md-7 p-0">
                    <h3 className="text-title mb-0">
                      GSOT – CÔNG TY PHẦN MỀM CHUYÊN NGHIỆP NHẤT TẠI TP.HCM
                    </h3>
                    <p className="text-p ">
                      Bạn đang dự định mua phần mềm quản lý nhân sự để giúp doanh nghiệp
                      mình tăng hiệu suất làm việc. Tuy vậy, trước sự xuất hiện của
                      nhiều công ty phần mềm khiến bạn băn khoăn trong việc chọn lựa.
                    </p>
                    <p className="text-title1 mb-0">
                      MON | <b>02.07.2020</b>{" "}
                      <img
                        className="img-muiten"
                        style={{ marginLeft: 265 }}
                        src={img.arrowred}
                        alt
                      />
                    </p>
                  </div>
                </div>
                <div className="row m-0 mt-4 boder-row">
                  <div className="col-md-5 p-0">
                    <div className="img1">
                      <img className="img1-1" src={img.icon3} alt />
                    </div>
                  </div>
                  <div className="col-md-7 p-0">
                    <h3 className="text-title mb-0">
                      LƯU Ý VÀNG BẠN NÊN BIẾT KHI TÌM CÔNG TY CUNG CẤP PHẦN MỀM QUẢN LÝ
                      NHÂN SỰ.
                    </h3>
                    <p className="text-p ">
                      Sắp tới, doanh nghiệp bạn dự định mua phần mềm quản lý nhân sự để
                      đánh giá năng lực của nhân viên và tăng hiệu suất làm việc. Tuy
                      vậy, trước nhiều công ty phần mềm ra đời.
                    </p>
                    <p className="text-title1 mb-0">
                      MON | <b>02.07.2020</b>{" "}
                      <img
                        className="img-muiten"
                        style={{ marginLeft: 265 }}
                        src={img.arrowred}
                        alt
                      />
                    </p>
                  </div>
                </div>
                <div className="row m-0 mt-4 boder-row">
                  <div className="col-md-5 p-0">
                    <div className="img1">
                      <img className="img1-1" src={img.icon4} alt />
                    </div>
                  </div>
                  <div className="col-md-7 p-0">
                    <h3 className="text-title mb-0">
                      ĐÂU LÀ ĐỊA CHỈ CUNG CẤP PHẦN MỀM NHÂN SỰ GIÁ TỐT NHẤT HIỆN NAY?
                    </h3>
                    <p className="text-p ">
                      Hiện nay, hầu hết các doanh nghiệp đều hiểu rõ giá trị mà phần mềm
                      môi trường đem lại. Đặc biệt là giúp họ hiểu rõ hơn về thông tin
                      về môi trường đất, nước không khí nhằm cải thiện tình hình môi
                      trường xung quanh doanh nghiệp
                    </p>
                    <p className="text-title1 mb-0">
                      MON | <b>02.07.2020</b>{" "}
                      <img
                        className="img-muiten"
                        style={{ marginLeft: 265 }}
                        src={img.arrowred}
                        alt
                      />
                    </p>
                  </div>
                </div>
                <div className="row m-0 mt-4 boder-row">
                  <div className="col-md-5 p-0">
                    <div className="img1">
                      <img className="img1-1" src={img.icon5} alt />
                    </div>
                  </div>
                  <div className="col-md-7 p-0">
                    <h3 className="text-title mb-0">
                      NHỮNG CÁCH CÓ ĐƯỢC BẢNG BÁO GIÁ PHẦN MỀM GIS HIỆU QUẢ
                    </h3>
                    <p className="text-p ">
                      Phần mềm GIS là bộ não của ứng dụng GIS và giúp cho việc lưu trữ,
                      cập nhật, phân tích thông tin liên quan đến vị trí hiệu quả. Hiện
                      nay, các doanh nghiệp đã thấy được giá trị quan trọng của phần mềm
                      này
                    </p>
                    <p className="text-title1 mb-0">
                      MON | <b>02.07.2020</b>{" "}
                      <img
                        className="img-muiten"
                        style={{ marginLeft: 265 }}
                        src={img.arrowred}
                        alt
                      />
                    </p>
                  </div>
                </div>
                <div className="row m-0 mt-4 boder-row">
                  <div className="col-md-5 p-0">
                    <div className="img1">
                      <img className="img1-1" src={img.icon6} alt />
                    </div>
                  </div>
                  <div className="col-md-7 p-0">
                    <h3 className="text-title mb-0">PHẦN MỀM ERP LÀ GÌ?</h3>
                    <p className="text-p ">
                      Hầu hết các nhà quản trị chắc hẳn đã khá quen thuộc với thuật ngữ
                      ERP – một trong những hệ thống đóng vai trò xương sống trong các
                      doanh nghiệp kinh doanh. Mặc dù là trước đây hay cho đến thời buổi
                      công nghiệp 4.0 đang trở thành làn sóng lớn thì ERP vẫn được ứng
                      dụng rất nhiều.{" "}
                    </p>
                    <p className="text-title1 mb-0">
                      MON | <b>02.07.2020</b>{" "}
                      <img
                        className="img-muiten"
                        style={{ marginLeft: 265 }}
                        src={img.arrowred}
                        alt
                      />
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-3  p-0 right">
                <div
                  className="title-right"
                  style={{ width: "81%", marginLeft: "auto" }}
                >
                  <ul className="bg-boder nav nav-pills " id="pills-tab" role="tablist">
                    <li className="nav-item position-relative">
                      <a
                        className="nav-link active"
                        id="pills-home-tab"
                        data-toggle="pill"
                        href="#pills-home"
                        role="tab"
                        aria-controls="pills-home"
                        aria-selected="true"
                      >
                        BÀI VIẾT MỚI <div className="boder position-absolute" />
                      </a>
                    </li>
                    <samp className="cols position-absolute">|</samp>
                    <li className="nav-item text-hot">
                      <a
                        className="nav-link  "
                        id="pills-profile-tab"
                        data-toggle="pill"
                        href="#pills-profile"
                        role="tab"
                        aria-controls="pills-profile"
                        aria-selected="false"
                      >
                        HOT
                        <div className="boder position-absolute" />
                      </a>
                    </li>
                  </ul>
                  <div className="con">
                    <div className="row">
                      <div className="col-md-3 mt-3 text-circ">
                        <div className="ar">
                          <div className="circ">
                            <h2>02</h2>
                            <p>07.2020</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-9 p-0 text-justi mt-3">
                        <p className="text-right1 mt-3">
                          Đâu là địa chỉ cung cấp phần mềm nhân sự giá tốt nhất hiện
                          nay?
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-3 text-circ">
                        <div className="ar">
                          <div className="circ">
                            <h2>02</h2>
                            <p>07.2020</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-9 p-0 mt-3 text-justi">
                        <p className="text-right1">
                          Đâu là địa chỉ cung cấp phần mềm nhân sự giá tốt nhất hiện
                          nay?
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-3 text-circ">
                        <div className="ar">
                          <div className="circ">
                            <h2>02</h2>
                            <p>07.2020</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-9 p-0 mt-3 text-justi">
                        <p className="text-right1">
                          Đâu là địa chỉ cung cấp phần mềm nhân sự giá tốt nhất hiện
                          nay?
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-3 text-circ">
                        <div className="ar">
                          <div className="circ">
                            <h2>02</h2>
                            <p>07.2020</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-9 p-0 mt-3 text-justi">
                        <p className="text-right1">
                          Đâu là địa chỉ cung cấp phần mềm nhân sự giá tốt nhất hiện
                          nay?
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-3 text-circ">
                        <div className="ar">
                          <div className="circ">
                            <h2>02</h2>
                            <p>07.2020</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-9 p-0 mt-3 text-justi">
                        <p className="text-right1">
                          Đâu là địa chỉ cung cấp phần mềm nhân sự giá tốt nhất hiện
                          nay?
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="iframe">
                    <iframe
                      src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fpg%2Fgsotgroup%2Fabout%2F&tabs=timeline&width=320&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                      width={"100%"}
                      height={500}
                      style={{ border: "none", overflow: "hidden" }}
                      scrolling="no"
                      frameBorder={0}
                      allowTransparency="true"
                      allow="encrypted-media"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>        
        )
    }
}
