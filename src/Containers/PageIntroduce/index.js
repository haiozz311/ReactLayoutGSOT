import React, {Component} from 'react';
import './style.css';
import img from './asset';

export default class Introduce extends Component {
    render() {
        return (
            <div style={{paddingTop: '80px'}}>
                <section className="introduce">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-6">
                                <h1 className="title">GIỚI THIỆU GSOT</h1>
                                <div className="border"/>
                                <p className="text">
                                    Công ty Cổ phần Giải Pháp Thông minh xanh (GSOT) là công ty hàng đầu
                                                          tại Việt Nam chuyên cung cấp dịch vụ phát triển và triển khai ứng
                                                          dụng các hệ thống phần mềm công nghệ thông tin vào quản lý sản xuất
                                                          kinh doanh, nhằm nâng cao hiệu quả điều hành, quản trị cho các doanh
                                                          nghiệp, tổ chức kinh doanh – xã hội.
                                </p>
                                <p className="text">
                                    Các sản phẩm tiêu biểu của GSOT như là: TMS (Transportation
                                                          Management System), Hệ thống CMS (Container Management System), Hệ
                                                          thống HRMS (Human Resource Management System), Các hệ thống quản lý
                                                          bán hàng và Website Thương mại điện tử, Hệ thống quản lý môi trường,
                                                          Hệ thống quản lý rác thải, Hệ thống điều phối giao hàng, Hệ thống
                                                          quản lý giáo dục,…
                                </p>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-5 ml-auto">
                                <div className="img-computer">
                                    <img src={img.imgComputer}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="success">
                    <div className="container-fluid BG p-0">
                        <div className="img">
                            <img src={img.imgSuccess}/>
                        </div>
                    </div>
                </section>
                <section className="success2">
                    <div className="container-fluid BG">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-4 pl-0 pl-responsive mt-responsive">
                                    <div className="card h-100">
                                        <img className="card-img-top" src={img.imgCard1} alt/>
                                        <div className="card-body">
                                            <h4 className="card-title">THẤU HIỂU</h4>
                                            <p className="card-text">
                                                GSOT luôn tin tưởng và tôn trọng các khách hàng trên cơ sở hợp
                                                                            tác, hai bên cùng có lợi, cùng phát triển, cùng thấu hiểu và
                                                                            cùng chia sẻ những khó khăn trong quá trình triển khai dự án.
                                                                            Luôn quan tâm và suy nghĩ làm thế nào để tạo ra những điều tốt
                                                                            đẹp đến khách hàng, để đưa những điều ấy vào sản phẩm và dịch
                                                                            vụ của mình.{" "} </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-4 mt-responsive">
                                    <div className="card card-center h-100">
                                        <img className="card-img-top" src={img.imgCard2} alt/>
                                        <div className="card-body">
                                            <h4 className="card-title">TIỆN ÍCH</h4>
                                            <p className="card-text">
                                                Các sản phẩm của GSOT được tạo ra luôn hướng đến tiêu chí dễ
                                                                            dàng sử dụng và thật sự có ích đối với doanh nghiệp, các tính
                                                                            năng đảm bảo đáp ứng mọi nhu cầu trong quá trình hoạt động
                                                                            kinh doanh của mọi lĩnh vực, đặc biệt áp dụng những công nghệ,
                                                                            thiết bị thông minh để gia tăng thêm sự hài lòng của khách
                                                                            hàng{" "} </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-4 pr-0 pr-responsive mt-responsive">
                                    <div className="card h-100">
                                        <img className="card-img-top" src={img.imgCard3} alt/>
                                        <div className="card-body">
                                            <h4 className="card-title">TẬN TÂM</h4>
                                            <p className="card-text">
                                                Đội ngũ kỹ thuật của GSOT luôn sẵn sàng phục vụ quý khách hàng
                                                                            dù trong hoàn cảnh nào đi nữa. Nhân viên của GSOT từ những kỹ
                                                                            thuật viên đến những người kinh doanh tư vấn và các bộ phận
                                                                            khác luôn luôn tận tâm, tận lực phục vụ vì lợi ích của khách
                                                                            hàng như một người bạn, một người đồng hành thật sự.{" "} </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="datagram">
                    <div className="container">
                        <div className="img">
                            <img src={img.imgDiagram} alt=""/>
                        </div>
                    </div>
                </section>
                <section className="section7">
                    <div className="title">
                        <h1>KHÁCH HÀNG CỦA GSOT</h1>
                        <div className="line1"></div>
                    </div>
                    <div className="container">
                        <div className="row justify-content-center mt-3">
                            <div className="col-6 col-sm-6 col-md">
                                <img className="rsi" src={img.imgCocaGray}/>
                            </div>
                            <div className="col-6 col-sm-6 col-md">
                                <img className="rsi" src={img.imgCocaRed}/>
                            </div>
                            <div className="col-6 col-sm-6 col-md">
                                <img className="rsi" src={img.imgCocaGray}/>
                            </div>
                            <div className="col-6 col-sm-6 col-md">
                                <img className="rsi" src={img.imgCocaGray}/>
                            </div>
                            <div className="col-6 col-sm-6 col-md">
                                <img className="rsi" src={img.imgCocaGray}/>
                            </div>
                        </div>
                        <div className="row"
                            style={
                                {justifyContent: "center"}
                        }>
                            <div className="col-6 col-sm-6 col-md">
                                <img className="rsi" src={img.imgCocaGray}/>
                            </div>
                            <div className="col-6 col-sm-6 col-md">
                                <img className="rsi" src={img.imgCocaGray}/>
                            </div>
                            <div className="col-6 col-sm-6 col-md">
                                <img className="rsi" src={img.imgCocaGray}/>
                            </div>
                            <div className="col-6 col-sm-6 col-md">
                                <img className="rsi" src={img.imgCocaGray}/>
                            </div>
                            <div className="col-6 col-sm-6 col-md">
                                <img className="rsi" src={img.imgCocaGray}/>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}