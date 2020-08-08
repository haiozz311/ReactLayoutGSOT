/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react';
import './Page5.css';
import img from './asset/index';

export default class Page5 extends Component {
    render() {
        return (
            <div>
            <section className="TMS ">
              <div className="container-fluid ">
                <div className="container">
                  <div className="row" style={{ paddingBottom: 100 }}>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 ">
                      <h3 className="text-title mb-0">
                        TMS (TRANSPORTATION <br />
                        MANAGEMENT SYSTEM)
                      </h3>
                      <div className="boder" />
                      <p className="text mb-0">
                        Là công ty chuyên tư vấn, xây dựng và triển khai các giải pháp
                        quản lý thông minh bằng phần mềm trong toàn bộ hoạt động quản lý
                        vận hành, sản xuất, kinh doanh của doanh nghiệp. Các giải pháp của
                        chúng tôi được xây dựng dựa trên các công nghệ hiện đại nhất thế
                        giới, phú hợp với từng khách hàng cụ thể
                      </p>
                      <a type="button">
                        <img
                          className="button-img"
                          src={img.muiten}
                        />
                      </a>
                      <a type="button" className="button" />
                      <a
                        type="button"
                        className="button-upper text-my-bold content-1-button button-upper"
                      >
                        <p className="font-button-p5 r-0">XEM THÊM</p>
                      </a>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                      <div className="circle" style={{ textAlign: "right" }}>
                        <img
                          className="img-circle"
                          src={img.body2}
                          alt
                        />
                      </div>
                      <div className="img1 position-absolute">
                        <img src={img.body1} alt />
                      </div>
                      <div className="img2 position-absolute">
                        <img src={img.body1} alt />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="CMS">
              <div className="container-fluid ">
                <div className="container">
                  <div className="row ">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 ">
                      <div className="img1">
                        <img src={img.body3} alt />
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6  ">
                      <h3 className="text-title mb-0">
                        CMS (CONTAINER <br />
                        MANAGEMENT SYSTEM)
                      </h3>
                      <div className="boder" />
                      <p className="text mb-0">Dự án CMS được tạo ra với mục tiêu:</p>
                      <p className="text-p mb-0">
                        <img src={img.tron} alt /> Thiết lập hệ thống thông tin
                        thống nhất, đồng bộ và xuyên
                        <br />
                        suốt từ hiện trường đến các nhà điều hành, quản lý và lãnh đạo.
                      </p>
                      <p className="text-p mb-0">
                       <img src={img.tron}  alt /> Lập kế hoạch và thực hiện khai
                        thác container theo chu
                        <br />
                        trình khép kín từ khâu giao nhận với tàu, điều hành xếp dỡ
                        <br />
                        container tại bãi đến khâu giao nhận với khách hàng
                      </p>
                      <p className="text-p mb-0">
                       <img src={img.tron}  alt /> Kiểm soát đánh giá và sử dụng
                        hiệu quả nguồn lực phục vụ
                        <br />
                        khai thác container.
                      </p>
                      <p className="text-p mb-0">
                       <img src={img.tron}  alt /> Giao thương điện tử (EDI) với hệ
                        thống thông tin hàng hải
                        <br />
                        trong nước và quốc tế
                      </p>
                      <a type="button">
                        <img
                          className="button-img"
                          src={img.muiten}
                        />
                      </a>
                      <a type="button" className="button" />
                      <a
                        type="button"
                        className="button-upper text-my-bold content-1-button button-upper"
                      >
                        <p className="font-button-p5 r-0">XEM THÊM</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="VIETDATA ">
              <div className="container-fluid ">
                <div className="container">
                  <div className="row" >
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 ">
                      <h3 className="text-title mb-0">
                        TRANG THÔNG TIN TRUNG TÂM DỮ LIỆU KINH TẾ VIỆT NAM VIETDATA.VN
                      </h3>
                      <div className="boder" />
                      <p className="text mb-0" style={{ marginBottom: "0px !important" }}>
                        GSOT là đơn vị cung cấp đầy đủ và đồng bộ các giải pháp giúp cho
                        việc triển khai các dịch vụ của Vietdata trở nên dễ dàng và nhanh
                        chóng hơn. Các giải pháp đó bao gồm: Tư vấn sử dụng hạ tầng mạng,
                        Xây dựng phần mềm Trung tâm lưu trữ và xử lý dữ liệu của Vietdata,
                        Cổng thông tin và Trang cửa hàng trực tuyến của Vietdata
                      </p>
                      <p className="text mb-0">
                        Vietdata® là Trung tâm dữ liệu trực tuyến về kinh tế, tài chính
                        rất lớn tại Việt Nam hiện nay với số liệu lưu trữ lên đến hàng
                        triệu báo cáo mỗi năm, Số liệu được thu thập dựa trên thời gian
                        thực; Nên đòi hỏi yêu cầu về mặt kỹ thuật lưu trữ tiên tiến và
                        khoa học, áp dụng những công nghệ hiện đại nhất hiện nay.
                      </p>
                      <a type="button">
                        <img
                          className="button-img"
                          src={img.muiten}
                        />
                      </a>
                      <a type="button" className="button" />
                      <a
                        type="button"
                        className="button-upper text-my-bold content-1-button button-upper"
                      >
                        <p className="font-button-p5 r-0">XEM THÊM</p>
                      </a>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6  ">
                      <div style={{ textAlign: "right" }}>
                        <img
                          className="img-circle "
                          src={img.body4}
                          alt
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          
           )
    }
}

