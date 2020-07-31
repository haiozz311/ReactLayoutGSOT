import React, {Component} from 'react'
import './HomePage.css';
import './HomePageResposive.css';
import img from './asset/index';
export default class HomePage extends Component {
    render() {
        return (
            <div className="homepage">
                <section className="about-us">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-5 col-lg-5">
                                <div className="row">
                                    <div className="col-6">
                                        <img className="img-fluid" src={img.img1} alt/>
                                    </div>
                                    <div className="col-6">
                                        <img className="img-fluid" src={img.img2} alt/>
                                    </div>
                                    <div className="col-12">
                                        <img className="img-fluid" src={img.img3} alt/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-7 col-lg-7 about-Right">
                                <h1 className="title">VỀ CHÚNG TÔI</h1>
                                <p className="about-Right__content">
                                    Là công ty chuyên tư vấn, xây dựng và triển khai các giải pháp quản
                                                lý thông minh bằng phần mềm trong toàn bộ hoạt động quản lý vận
                                                hành, sản xuất, kinh doanh của doanh nghiệp. Các giải pháp của chúng
                                                tôi được xây dựng dựa trên các công nghệ hiện đại nhất thế giới, phú
                                                hợp với từng khách hàng cụ thể
                                </p>
                                <div className="text-right ml-auto">
                                    <img style={
                                            {
                                                width: 150,
                                                height: 50
                                            }
                                        }
                                        src={img.img4}
                                        alt/>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div className="position-relative">
                            <div className="circle"></div>
                        </div>
                    </div>
                </section>
                <section className="info ">
                    <div className="container-fluid">
                        <div className="row ">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-4">
                                <p className="info__co1">
                                    VẤN ĐỀ
                                    <br/>
                                    DOANH NGHIỆP
                                    <br/>
                                    ĐANG GẶP PHẢI ?
                                </p>
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-8">
                                <div className="row">
                                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 ">
                                        <div className="info__col2">
                                            <i className="fa fa-calendar"/>
                                            <h3 className="title text-danger">QUẢN LÝ THỦ CÔNG</h3>
                                            <p>
                                                Hồ sơ, sổ sách của doanh nghiệp đang được quản lý một cách thủ
                                                                  công hoặc thông qua các công cụ quản lý đơn giản như MS Office
                                                                  =&gt; Không phát huy được tối đa năng suất làm việc nhân viên.{" "} </p>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                        <div className="info__col3">
                                            <i className="fa fa-file"/>
                                            <h3 className="title text-white">KIỂM SOÁT CHƯA TỐT</h3>
                                            <p>
                                                Công tác đánh giá hoạt động kinh doanh của doanh nghiệp chưa
                                                                  thật sự tốt, không chủ động kiểm soát được doanh nghiệp mọi
                                                                  lúc, mọi nơi =&gt; Gây lãng phí về thời gian và tiền bạc.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 ">
                                        <div className="info__col2">
                                            <i className="fa fa-address-card"/>
                                            <h3 className="title text-danger">KHÔNG THỎA MÃN</h3>
                                            <p>
                                                Doanh nghiệp không thỏa mãn với các chức năng, sự tùy biến và
                                                                  cảm thấy không phù hợp của các phần mềm đóng gói ngoài thị
                                                                  trường. =&gt; Và anh chị cần điều gì đó cho riêng mình.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid position-relative">
                        <div className="row">
                            <div className="col-12 overflow"></div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row info_right position-relative">
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                <div className="row img-left">
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                        <div className="img-cuscom ">
                                        <img className="img-fluid" src={img.img5} alt/>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                        <div className="img-cuscom my-1">
                                            <img className="img-fluid" src={img.img6} alt/>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                        <div className="img-cuscom my-1">
                                            <img className="img-fluid" src={img.img7} alt/>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                        <div className="img-cuscom my-1">
                                            <img className="img-fluid" src={img.img8} alt/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                <div className="row img-right">
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 mb-3">
                                        <img className="img-fluid w-100" src={img.img9} alt/>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                        <img className="img-fluid w-100 mb-3" src={img.img10} alt/>
                                    </div>
                                    <div className="col-12">
                                        <img className="img-fluid" src={img.img11} alt/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="service mt-3 ">
                    <h2 className="text-center pt-3">
                        <p className="font-weight-bold">GSOT SẼ GIÚP ANH CHỊ</p>
                        <div className="line1"></div>
                    </h2>
                    <div className="container-fluid">
                        <div className="row content__service">
                            <div className="col-12 col-sm-12 col-md-12 col-xl-6">
                                <h3>XÂY DỰNG HỆ THỐNG PHẦN MỀM THÔNG MINH</h3>
                                <div className="row">
                                    <div className="col-12 col-sm-4 col-md-4 col-lg-4 ">
                                        <div className="service__item">
                                            Xây dựng cho riêng anh chị một Hệ thống phần mềm thông minh. Đáp
                                                            ứng đầy đủ các yêu cầu về mặt kỹ thuật, để giải quyết các khó
                                                            khăn cho doanh nghiệp của mình.
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-4 col-md-4 col-lg-4 ">
                                        <div className="service__item">
                                            Các hệ thống phần mềm của GSOT được xây dựng trên các nền tảng
                                                            kỹ thuật hiện đại nhất. Có thể dễ dàng kết nối với các thiết bị
                                                            như: Máy chấm công, Máy in mã vạch, Camera
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-4 col-md-4 col-lg-4 ">
                                        <div className="service__item">
                                            Các hệ thống phần mềm GSOT được xây dựng tập trung vào các yếu
                                                            tố chính: Tích hợp toàn diện, dễ dàng sử dụng, phù hợp với doanh
                                                            nghiệp Việt và chi phí hợp lý.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-xl-6">
                                <h3>XÂY DỰNG HỆ THỐNG PHẦN MỀM THÔNG MINH</h3>
                                <div className="row">
                                    <div className="col-12 col-sm-4 col-md-4 col-lg-4 ">
                                        <div className="service__item">
                                            Tư vấn sử dụng một hệ thống cơ sở hạ tầng phù hợp cho Hệ thống
                                                            phần mềm của doanh nghiệp. Điều này sẽ làm giảm đáng kể chi phí
                                                            vận hành hàng năm mà anh chị phải trả.
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-4 col-md-4 col-lg-4 ">
                                        <div className="service__item">
                                            Tư vấn và đạo tạo cho đội ngũ nhân viên của anh chị về mặt kỹ
                                                            thuật cách sử dụng Hệ thống phần mềm một cách dễ dàng nhất. Nhằm
                                                            tiết kiệm thời gian vận hành sau này.
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-4 col-md-4 col-lg-4 ">
                                        <div className="service__item">
                                            Hỗ trợ tư vấn cho doanh nghiệp anh chị các thiết bị phần cứng
                                                            phù hợp; Nhằm gia tăng hiệu suất làm việc của các thiết bị cũng
                                                            như tối ưu thời gian sử dụng lâu dài.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="title">
                    <div className="carousel_info__content">
                        <h2 className="text-center title">
                            Tại sao
                            <span>PHẢI LÀ</span>
                            {" "}
                            <img className="img-fluid" src={img.img12} alt/>{" "} </h2>
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-sm-12 col-md-6 col-lg-4 mb-md-3">
                                    <div className="carousel_info__item bg-white">
                                        <i className="fa fa-cogs text-success"/>
                                        <h3 className="text-center">THIẾT KẾ RIÊNG BIỆT</h3>
                                        <p>
                                            Hệ thống phần mềm của được thiết kế và xây dựng theo đặc điểm,
                                                            nghiệp vụ và quy trình riêng đặc biệt phù hợp đối với từng lĩnh
                                                            vực, mô hình kinh doanh.{" "} </p>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-12 col-md-6 col-lg-4 mb-md-3">
                                    <div className="carousel_info__item bg-green text-white">
                                        <i className="fa fa-cogs"/>
                                        <h3 className="text-center">CẢI TIẾN LIÊN TỤC</h3>
                                        <p>
                                            Hệ thống phần mềm của được thiết kế và xây dựng theo đặc điểm,
                                                            nghiệp vụ và quy trình riêng đặc biệt phù hợp đối với từng lĩnh
                                                            vực, mô hình kinh doanh.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-12 col-md-12 col-lg-4">
                                    <div className="carousel_info__item bg-white">
                                        <i className="fa fa-cogs text-success"/>
                                        <h3 className="text-center">ĐỘI NGŨ CHUYÊN NGHIỆP</h3>
                                        <p>
                                            Hệ thống phần mềm của được thiết kế và xây dựng theo đặc điểm,
                                                            nghiệp vụ và quy trình riêng đặc biệt phù hợp đối với từng lĩnh
                                                            vực, mô hình kinh doanh.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <div className="position-relative">
                                <div className="circle2"></div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="cumstomer">
                    <h3 className="text-center title font-weight-bold">KHÁCH HÀNG CỦA GSOT</h3>
                    <div className="line"></div>
                    <div className="container">
                        <div className="row justify-content-center w-100 cumstomer__content my-5">
                            <div className="col-6 col-sm-6 col-md">
                                <img className="rsi" src={img.img13}/>
                            </div>
                            <div className="col-6 col-sm-6 col-md">
                                <img className="rsi" src={img.img13}/>
                            </div>
                            <div className="col-6 col-sm-6 col-md">
                                <img className="rsi" src={img.img13}/>
                            </div>
                            <div className="col-6 col-sm-6 col-md">
                                <img className="rsi" src={img.img13}/>
                            </div>
                            <div className="col-6 col-sm-6 col-md">
                                <img className="rsi" src={img.img13}/>
                            </div>
                        </div>
                        <div className="row justify-content-center w-100 cumstomer__content my-5">
                            <div className="col-6 col-sm-6 col-md">
                                <img className="rsi" src={img.img13}/>
                            </div>
                            <div className="col-6 col-sm-6 col-md">
                                <img className="rsi" src={img.img13}/>
                            </div>
                            <div className="col-6 col-sm-6 col-md">
                                <img className="rsi" src={img.img13}/>
                            </div>
                            <div className="col-6 col-sm-6 col-md">
                                <img className="rsi" src={img.img13}/>
                            </div>
                            <div className="col-6 col-sm-6 col-md">
                                <img className="rsi" src={img.img13}/>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

