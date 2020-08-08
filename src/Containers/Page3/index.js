import React, {Component} from 'react';
import './style.css';
import img from './asset';

export default class Services extends Component {
    render() {
        return (
            <div style={{paddingTop: '80px'}}>
            <section className="services">
            <div className="container">
              <div className="row row-boder1">
                <div className="col-xs-12 col-sm-12 col-md-2 col-border1 p-0 position-relative pb-3 ">
                  <p className="text-responsive">
                    <span className="ct">Trang chủ - </span>
                    <span className="dv">Dịch vụ</span>
                  </p>
                  <h4 className="title">
                    DỊCH VỤ
                    <br />
                    của CHÚNG TÔI
                  </h4>
                  <div className="border-title" />
                  <div className="circle" />
                </div>
                <div className="col-xs-12 col-sm-12 col-md-8 col-border2 pb-3   ">
                  <p className="text">
                    Chúng tôi rất vinh dự được phục vụ hầu hết các công ty nổi tiếng trong
                    một số ngành: FMCG, Dược phẩm, Giao thông vận tải, Bán lẻ &amp; Thương
                    mại điện tử. Chúng tôi tập trung vào giải pháp DMS, Gia công phần mềm
                    - Hệ thống sản xuất kỹ thuật số và lòng trung thành.
                  </p>
                </div>
                <div className="col-md-2 col-border3 pb-3   ">
                  <div className="img-hand">
                    <img src={img.img55} />
                  </div>
                </div>
              </div>
              <div className="row row-border2">
                <div className="col-md-2 col-border4">
                  <div className="circle" />
                  <div className="img2">
                    <img src={img.img44} />
                  </div>
                  <div className="bg-img2" />
                </div>
                <div className="col-md-8 col-border5">
                  <div className="row" style={{ marginTop: 20 }}>
                    <div className="col-md-7">
                      <h4 className="row-title">
                        DỊCH VỤ TƯ VẤN, THIẾT KẾ VÀ XÂY DỰNG PHẦN MỀM THEO YÊU CẦU
                      </h4>
                      <div className="boder" />
                      <p className="row-text">
                        GSOT sẽ viết cho riêng anh chị một Hệ thống phần mềm thông minh
                        đáp ứng đầy đủ các yêu cầu của doanh nghiệp anh chị.
                      </p>
                      <p className="row-text">
                        Các hệ thống phần mềm của GSOT được xây dựng trên các nền tảng kỹ
                        thuật hiện đại nhất. Có thể và dễ dàng kết nối với các thiết bị
                        như: Máy chấm công, Máy in mã vạch, Camera…
                      </p>
                    </div>
                    <div className="col-md-5">
                      <div className="img3">
                        <img src={img.img45} />
                      </div>
                    </div>
                  </div>
                  <div className="bg-col-5" />
                </div>
                <div className="col-md-2 col-border6">
                  <div className="img-4">
                    <img src={img.img46} />
                  </div>
                  <div className="bg-img4" />
                </div>
              </div>
            </div>
          </section>          
            </div>
        )
    }
}