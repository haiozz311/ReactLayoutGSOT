import React, { Component } from 'react'
import './HomePage.css';
import './HomePageResposive.css';
import img from './asset/index';
export default class HomePage extends Component {
    render() {
        return (
            <div className="homePage">
                <div className="intro">
                    <div className="container">
                        <div className="row" style={{ paddingBottom: 23 }}>
                            <div className="col-lg-5 col-md-5 d-flex flex-column">
                                <div className="d-flex flex-wrap justify-content-around">
                                    <div className="img12">
                                        <span className="img1">
                                            <img src={img.img1} width="100%" alt />
                                        </span>
                                        <span className="img2">
                                            <img src={img.img2} width="100%" alt />
                                        </span>
                                    </div>
                                    <span className="img3 pt-3 d-flex flex-row">
                                        <img src={img.img3} width="100%" alt />
                                    </span>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-7 ">
                                <div className="intro-content">
                                    <span className="intro-title font-bold">VỀ CHÚNG TÔI</span>
                                    <p className="intro-des">Là công ty chuyên tư vấn, xây dựng và triển khai các giải pháp quản lý
                                    thông minh bằng phần
                                    mềm trong toàn bộ hoạt động
                                    quản lý vận hành, sản xuất, kinh doanh của doanh nghiệp. Các giải pháp của chúng tôi
                                    được
                                    xây dựng dựa trên các công
                                    nghệ hiện đại nhất thế giới, phú hợp với từng khách hàng cụ thể
          </p>
                                    <div className="btn-more float-lg-right">
                                        <a href="#" className="d-flex">
                                            <img src={img.img4} alt />
                                            <div className="btn-text">XEM THÊM</div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dot-mid" />
                    </div>
                </div>

                <div className="problem container" style={{ marginTop: "20px", marginBottom: "50px" }}>
                    <div className="block-right" />
                    <div className="icon">
                        <div className="icon-arrow d-flex d-md-flex d-none">
                            <div className="rotate"><img src={img.img5} alt /></div>
                            <div className="icon-left pl-2"><img src={img.img5} alt /></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-12" style={{ paddingRight: 46 }}>
                            <div className="prob-img1 flex-column d-lg-flex d-md-none">
                                <img src={img.img6} width="100%" alt />
                            </div>
                            <div className="text-center">
                                <span className="problem-title font-bold d-md-block d-lg-none pb-4">VẤN ĐỀ DOANH NGHIỆP ĐANG GẶP
          PHẢI</span>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-12">
                            <div className="row">
                                <div className="col-md-4 col-12 pl-0 pr-0">
                                    <div className="ql">
                                        <div className="card prob-card card-gradient">
                                            <div className="prob-img text-center m-auto">
                                                <img src={img.img7} className="imgs" />
                                                <img src={img.img8} className="imgs-hover" alt />
                                            </div>
                                            <span style={{ color: "#fd7e14" }} className="text-center font-semibold" >QUẢN
                                            LÍ THỦ CÔNG
              </span>
                                            <span className="card-des">
                                                Hồ sơ, sổ sách của doanh nghiệp đang được quản lý một cách thủ công hoặc thông
                                                qua các công cụ
                                                quản lý đơn giản như MS Office Không phát huy được tối đa năng suất làm việc
                                                nhân viên.
              </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-12 pl-0 pr-0">
                                    <div className="ql">
                                        <div className="card prob-card card-gradient">
                                            <div className="prob-img text-center m-auto">
                                                <img src={img.img10} className="imgs" />
                                                <img src={img.img9} className="imgs-hover" style={{ width: "42px", height: "55px" }} alt />
                                            </div>
                                            <span className="text-center font-semibold" style={{ color: "#fd7e14" }}>KIỂM SOÁT CHƯA TỐT
              </span>
                                            <span className="card-des">
                                                Công tác đánh giá hoạt động kinh doanh của doanh nghiệp chưa thật sự tốt, không chủ động kiểm soát được doanh nghiệp mọi lúc, mọi nơi => Gây lãng phí về thời gian và tiền bạc.
              </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-12 pl-0 pr-0">
                                    <div className="ql">
                                        <div className="card prob-card card-gradient">
                                            <div className="prob-img text-center m-auto">
                                                <img src={img.img11} className="imgs" />
                                                <img src={img.img12} className="imgs-hover" alt />
                                            </div>
                                            <span className="text-center font-semibold" style={{ color: "#fd7e14" }}>KHÔNG THỎA MÃN
              </span>
                                            <span className="card-des">
                                                Hồ sơ, sổ sách của doanh nghiệp đang được quản lý một cách thủ công hoặc thông qua các công cụ quản lý đơn giản như MS Office Không phát huy được tối đa năng suất làm việc nhân viên.
              </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="software container position-relative mt-4" >
                    <div className="dot-left" />
                    <div className="row">
                        <div className="block-left" />
                        <div className="col-lg-7 col-md-12 padr-107">
                            <div className="mobiles-title mt-4 text-center d-md-block d-lg-none">
                                <span className="mobile-title font-bold pt-3">ANH CHỊ MONG MUỐN MỘT PHẦN MỀM ?</span>
                            </div>
                            <div className="row padl-123">
                                <div className="col-md-6 pl-0 col-left">
                                    <div className="card">
                                        <div className="soft-img text-center ">
                                            <img src={img.img13} />
                                        </div>
                                        <p className="pb-4">Quản lý doanh nghiệp, chặt chẽ, hiệu quả mọi lúc, mọi nơi</p>
                                    </div>
                                </div>
                                <div className="col-md-6 pl-0 col-left">
                                    <div className="card">
                                        <div className="soft-img text-center">
                                            <img src={img.img14} />
                                        </div>
                                        <p>Tăng tối đa năng suất làm việc của đội ngũ nhân viên trong công ty</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row padl-123">
                                <div className="col-md-6 pl-0 col-left">
                                    <div className="card">
                                        <div className="soft-img text-center">
                                            <img src={img.img15} />
                                        </div>
                                        <p>Tiết kiệm chi phí vận hành doanh nghiệp hàng năm, tránh gây thất thoát.</p>
                                    </div>
                                </div>
                                <div className="col-md-6 pl-0 col-left">
                                    <div className="card pl-3 pr-2">
                                        <div className="soft-img text-center">
                                            <img src={img.img16} />
                                        </div>
                                        <p>Tăng trưởng doanh thu và lợi nhuận tối đa với các nguồn lực hiện có</p>
                                    </div>
                                </div>
                            </div>
                            <div className="icon pr-2 float-lg-right pt-3">
                                <img src={img.img5} alt />
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12 col-right">
                            <div className="software-img d-flex flex-column ">
                                <div className="d-flex flex-row justify-content-around ">
                                    <div className="gallery d-lg-flex flex-column d-md-none">
                                        <img src={img.img17} width="100%" alt />
                                    </div>
                                    <div className="gallery d-lg-flex flex-column d-md-none">
                                        <img src={img.img18} width="100%" alt />
                                    </div>
                                </div>
                                <div className="d-flex flex-row justify-content-around" style={{ marginTop: 16 }}>
                                    <div className="gallery d-lg-flex flex-column d-md-none ">
                                        <img src={img.img19} width="100%" alt />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="company-help">
                    <div className="container">
                        <div className="row ">
                            <div className="m-auto p-3">
                                <h2 className="font-bold text-center">GSOT SẼ GIÚP ANH CHỊ</h2>
                                <div className="m-auto" style={{ border: '2px solid white', width: 70 }}>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 text-center d-lg-block d-none" style={{ color: '#FCFC03' }}>
                                <h6>XÂY DỰNG HỆ THỐNG PHẦN MỀM THÔNG MINH</h6>
                            </div>
                            <div className="col-6 text-center d-lg-block d-none" style={{ color: '#FCFC03' }}>
                                <h6>XÂY DỰNG HỆ THỐNG PHẦN MỀM THÔNG MINH</h6>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-12 pr-27">
                                <div className="row m-0">
                                    <div className="col-lg-4 col-12 p-6">
                                        <div className="help-text ">
                                            <div className="left-border" />
                                            <p className="help-des">Xây dựng cho riêng anh chị một Hệ thống phần mềm thông minh. Đáp
                                            ứng
                                            đầy
                                            đủ các yêu cầu
                                            về
                                            mặt kỹ thuật, để giải quyết
                                            các khó khăn cho doanh nghiệp của mình.
              </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-12 p-6">
                                        <div className="help-text">
                                            <p className="help-des">Xây dựng cho riêng anh chị một Hệ thống phần mềm thông minh. Đáp
                                            ứng
                                            đầy
                                            đủ các yêu cầu
                                            về
                                            mặt kỹ
                                            thuật, để giải quyết
                                            các khó khăn cho doanh nghiệp của mình.
              </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-12 p-6">
                                        <div className="help-text">
                                            <p className="help-des">Các hệ thống phần mềm GSOT được xây dựng tập trung vào các yếu
                                            tố
                                            chính:
                                            Tích hợp toàn
                                            diện,
                                            dễ dàng sử dụng, phù hợp
                                            với doanh nghiệp Việt và chi phí hợp lý.
              </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-12 pl-27">
                                <div className=" row m-0">
                                    <div className="col-lg-4 col-12 p-6">
                                        <div className="help-text">
                                            <p className="help-des">Tư vấn sử dụng một hệ thống cơ sở hạ tầng phù hợp cho Hệ thống
                                            phần
                                            mềm
                                            của doanh nghiệp.
                                            Điều này làm giảm đáng kể
                                            chi phí vận hành hàng năm mà anh chị phải trả
              </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-12 p-6">
                                        <div className="help-text ">
                                            <p className="help-des">Tư vấn và đạo tạo cho đội ngũ nhân viên của anh chị về mặt kỹ
                                            thuật
                                            cách
                                            sử dụng Hệ thống
                                            phần mềm một cách dễ dàng
                                            nhất. Nhằm tiết kiệm thời gian vận hành sau này.
              </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-12 p-6">
                                        <div className="help-text">
                                            <p className="help-des">Hỗ trợ tư vấn cho doanh nghiệp anh chị các thiết bị phần cứng
                                            phù
                                            hợp;
                                            Nhằm gia tăng hiệu
                                            suất làm việc của các thiết bị
                                            cũng như tối ưu thời gian sử dụng lâu dài
              </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="company-choice container">
                    <div className="tieude justify-content-center text-center" style={{ color: '#fd9701', marginTop: "40px" }}>
                        <span className="choice-title">Tại sao <span className="cus-title">PHẢI
        LÀ</span>
                        </span>
                        <img src={img.img20} width="185px" height="85px" style={{ marginTop: '-15px' }} />
                    </div>
                    <div className="container">
                        <div className="row cover_content" >
                            <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                                <div className="carousel_info__item bg-white">
                                    <img className="d-block m-auto" src={img.img23} alt />
                                    <h3 className="text-center gsot_bold">THIẾT KẾ RIÊNG BIỆT</h3>
                                    <p className="carousel__title m-0">Hệ thống phần mềm của được thiết kế và xây dựng theo đặc điểm, nghiệp vụ và quy trình
          riêng đặc biệt phù hợp đối với từng lĩnh vực, mô hình kinh doanh. </p>
                                    <div className="show_img">
                                        <img className="d-block ml-auto show_img_item" src={img.img5} style={{ paddingRight: "30px" }} alt />
                                    </div>

                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                                <div className="carousel_info__item bg-green">
                                    <img className="d-block m-auto" src={img.img23} alt />
                                    <h3 className="text-center gsot_bold">CẢI TIẾN LIÊN TỤC</h3>
                                    <p className="carousel__title m-0">Hệ thống phần mềm của được thiết kế và xây dựng theo đặc điểm, nghiệp vụ và quy trình
                                    riêng đặc biệt phù hợp đối với từng lĩnh vực, mô hình kinh doanh.
        </p>
                                    <div className="show_img">
                                        <img className="d-block ml-auto show_img_item" src={img.img5} style={{ paddingRight: "30px" }} alt />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-4">
                                <div className="carousel_info__item bg-white">
                                    <img className="d-block m-auto" src={img.img23} alt />
                                    <h3 className="text-center gsot_bold">ĐỘI NGŨ CHUYÊN NGHIỆP
        </h3>
                                    <p className="carousel__title m-0">Hệ thống phần mềm của được thiết kế và xây dựng theo đặc điểm, nghiệp vụ và quy trình
          riêng đặc biệt phù hợp đối với từng lĩnh vực, mô hình kinh doanh.</p>
                                    <div className="show_img">
                                        <img className="d-block ml-auto show_img_item" src={img.img5} style={{ paddingRight: "30px" }} alt />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="position-relative">
                            <div className="rotate custom-route">
                                <img className="d-block ml-auto" src={img.img5} alt />
                            </div>
                            <div className="icon-left custom-route-right">
                                <img className="d-block ml-auto" src={img.img5} alt />
                            </div>
                        </div>
                        <div className="position-relative">
                            <div className="circle2">
                            </div>
                        </div>
                    </div>

                </div>

                <div className="company-cus">
                    <div className="container">
                        <div className="dot-mid" />
                        <div className="text-center" style={{ marginTop: 33 }}>
                            <span className="cus-title">KHÁCH HÀNG CỦA GSOT</span>
                            <p className="borders" />
                        </div>
                        <div className="cus-flex mt-3 img-gray">
                            <div className="flex-item">
                                <img src="https://img.icons8.com/color/480/000000/coca-cola.png" />
                            </div>
                            <div className="flex-item">
                                <img src="https://img.icons8.com/color/480/000000/coca-cola.png" />
                            </div>
                            <div className="flex-item">
                                <img src="https://img.icons8.com/color/480/000000/coca-cola.png" />
                            </div>
                            <div className="flex-item">
                                <img src="https://img.icons8.com/color/480/000000/coca-cola.png" />
                            </div>
                            <div className="flex-item">
                                <img src="https://img.icons8.com/color/480/000000/coca-cola.png" />
                            </div>
                            <div className="flex-item">
                                <img src="https://img.icons8.com/color/480/000000/coca-cola.png" />
                            </div>
                            <div className="flex-item">
                                <img src="https://img.icons8.com/color/480/000000/coca-cola.png" />
                            </div>
                            <div className="flex-item">
                                <img src="https://img.icons8.com/color/480/000000/coca-cola.png" />
                            </div>
                            <div className="flex-item">
                                <img src="https://img.icons8.com/color/480/000000/coca-cola.png" />
                            </div>
                            <div className="flex-item">
                                <img src="https://img.icons8.com/color/480/000000/coca-cola.png" />
                            </div>
                        </div>
                    </div>
                </div>

            </div >
        )
    }
}

