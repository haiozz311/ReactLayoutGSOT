import React, { Component } from 'react'
import './Page11.css'
import img from './asset/index';
export default class Page11 extends Component {
    render() {
        return (
            <section className="section11">
                <div className="container">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb m-0">
                            <li className="breadcrumb-item"><a href="#">Trang chủ</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Tuyển dụng</li>
                        </ol>
                    </nav>
                    <hr className="hr m-0 p-0" />
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-7 section10__title custom-icons">
                            <h3 className="m-0">HÃY CÙNG GSOT</h3>
                            <h3 className="m-0">THAY ĐỔI THẾ GIỚI</h3>
                            <div className="section10__title__item text-left">
                                <i className="fa fa-quote-left" style={{ opacity: 0 }} />
                                <p className="m-0">
                                    Bằng một khát vọng không ngừng nghỉ, GSOT phấn đấu trở thành Công ty phát triển phần mềm
            <span className="font-weight-bold"> thông minh </span> có <span className="font-weight-bold">uy
              tín</span> và vị thế <span className="font-weight-bold">hàng đầu</span> tại Việt Nam và khu
            vực Châu Á.
          </p>
                                <p className="m-0">
                                    Để làm được điều đó, GSOT đang cần những người bạn đồng hành. Nếu bạn thật sự là người có
                                    đam mê, có khát khao được thể hiện bản thân mình qua các dự án lớn của GSOT và đối tác, cũng
                                    như khát khao được làm nên những phần mềm thông minh có ích cộng đồng…
          </p>
                                <p className="m-0">
                                    GSOT luôn sẵn sàng
                                    chào đón bạn!
          </p>
                                <i className="fa fa-quote-right" style={{ opacity: 0 }} />
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-5 position-relative ">
                            <img src={img.banner} className=" img__layout9 d-sm-none d-lg-block" alt />
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-9 custom-navs">
                            <ul className="nav nav-tabs position-relative" id="myTab" role="tablist">
                                <li className="col-12 col-sm-12 col-md-12 col-lg-4 nav-item ">
                                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">MÔ TẢ CÔNG VIỆC</a>
                                </li>
                                <li className="col-12 col-sm-12 col-md-12 col-lg-4 nav-item">
                                    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">KINH NGHIỆM/KỸ NĂNG</a>
                                </li>
                                <li className="col-12 col-sm-12 col-md-12 col-lg-4 nav-item ">
                                    <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">THÔNG TIN LIÊN HỆ</a>
                                </li>
                            </ul>
                            <div className="tab-content" id="myTabContent">
                                <div className="col-12 tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 p-0 text-center">
                                            <p><span style={{ fontFamily: "Bold" }}><i className="fa fa-user-secret" aria-hidden="true" /> Chức Danh: </span>Nhân Viên Lập Trình</p>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-3 col-lg-3 p-0 text-center">
                                            <p><span style={{ fontFamily: "Bold" }}>
                                                <i className="fa fa-life-ring" aria-hidden="true" /> Nơi làm việc: </span>Hồ Chí Minh</p>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-5 col-lg-5 p-0 text-center">
                                            <p><span style={{ fontFamily: "Bold" }}><i className="fa fa-usd" aria-hidden="true" />
                                            &nbsp; Mức Lương: </span> 8.000.000-25.000.000 VNĐ</p>
                                        </div>
                                    </div>
                                    <div className="position-relative">
                                        <hr className="p-0 m-0 mb-2 " />
                                        <div className="circle" />
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 p-0 text-center">
                                            <p><span style={{ fontFamily: "Bold" }}><i className="fa fa-briefcase" aria-hidden="true" />
                                            &nbsp;Công Việc: </span> Toàn thời gian cố định
                </p>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-3 col-lg-3 p-0 text-center">
                                            <p><span style={{ fontFamily: "Bold" }}><i className="fa fa-signal" />
                                            &nbsp;Cấp bật: </span> Chuyên viên </p>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-5 col-lg-5 p-0 text-center">
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-6 col-lg-6 text-center">
                                                    <p><span style={{ fontFamily: "Bold" }}> <i className="fa fa-user-md" aria-hidden="true" />
                                                    &nbsp;Giới tính: </span> Nam/Nữ </p>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-6 col-lg-6 text-center">
                                                    <p><span style={{ fontFamily: "Bold" }}><i className="fa fa-area-chart" aria-hidden="true" />
                                                    &nbsp;Độ tuổi: </span> 20 - 40 </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row info__item1">
                                        <div className="cover_circle">
                                            <div className="d-inline-block cirlce__destop">
                                                <i className="fa fa-desktop" aria-hidden="true" />
                                            </div>
                                        </div>
                                        <h5 style={{ fontFamily: "Bold" }} className="align-items-center">Mô tả chi tiết công việc:</h5>
                                        <div className="cover_icons">
                                            <p className="m-0"> <i className="fa fa-angle-right" aria-hidden="true" /> Phân tích,
                  thiết kế hệ
                  thống và
                  thiết kế chức năng cho phần mềm ở nhiều lĩnh vực khác nhau.</p>
                                            <p className="m-0"><i className="fa fa-angle-right" aria-hidden="true" /> Xây dựng và phát
                  triển phần
                  mềm trên nền tảng DOT NET và MSSQL.</p>
                                            <p className="m-0"><i className="fa fa-angle-right" aria-hidden="true" /> Đề ra giải pháp
                  tối ưu
                  (smart
                  solution) để giải quyết tất cả các vấn đề trên nền tảng ứng dụng CNTT.</p>
                                            <p className="m-0"><i className="fa fa-angle-right" aria-hidden="true" /> Phân tích và tối
                  ưu hóa hệ
                  thống, phân tích và tối ưu hóa trải nghiệm người sử dụng (user experience).</p>
                                            <p className="m-0"><i className="fa fa-angle-right" aria-hidden="true" /> Quản lý tiến độ
                  triển khai
                  dự
                  án theo từng module, thực hiện unit test và release module.</p>
                                        </div>
                                    </div>
                                    <div className="row info__item1">
                                        <div className="cover_circle">
                                            <div className="d-inline-block cirlce__destop">
                                                <i className="fa fa-desktop" aria-hidden="true" />
                                            </div>
                                        </div>
                                        <h5 style={{ fontFamily: "Bold" }} className="align-items-center">Quyền lời &amp; chế độ:</h5>
                                        <div className="cover_icons">
                                            <p className="m-0"> <i className="fa fa-angle-right" aria-hidden="true" /> Được hưởng đầy
                  đủ các quyền
                  lợi theo luật Lao động (BHYT &amp; BHXH) và các quyền lợi khác theo nội quy, quy chế
                  Công t (tham quan, nghỉ mát, thưởng…). </p>
                                            <p className="m-0"><i className="fa fa-angle-right" aria-hidden="true" /> Môi trường làm
                  việc sáng
                  tạo, chuyên nghiệp &amp; thân thiện.</p>
                                            <p className="m-0"><i className="fa fa-angle-right" aria-hidden="true" /> Tham gia các
                  chương trình
                  đào tạo thực tế.</p>
                                            <p className="m-0"><i className="fa fa-angle-right" aria-hidden="true" /> Thu nhập xứng
                  đáng với kết
                  quả công việc.</p>
                                            <p className="m-0"><i className="fa fa-angle-right" aria-hidden="true" /> Có nhiều cơ hội
                  thăng tiến
                  và phát triển nghề nghiệp.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    <div className="row">
                                        <div className="col-6 p-0 text-center">
                                            <p><span style={{ fontFamily: "Bold" }}><i className="fa fa-user-secret" aria-hidden="true" /> Trình độ học vấn: </span>Cao đẳng – Đại học
                  chuyên ngành CNTT</p>
                                        </div>
                                        <div className="col-6 p-0 text-center">
                                            <p><span style={{ fontFamily: "Bold" }}><i className="fa fa-life-ring" aria-hidden="true" />
                    Kinh nghiệm: </span>Không yêu cầu kinh nghiệm
                </p>
                                        </div>
                                    </div>
                                    <div className="position-relative">
                                        <hr className="p-0 m-0 mb-2 " />
                                        <div className="circle" />
                                    </div>
                                    <div className="row info__item1">
                                        <div className="cover_circle">
                                            <div className="d-inline-block cirlce__destop">
                                                <i className="fa fa-desktop" aria-hidden="true" />
                                            </div>
                                        </div>
                                        <h5 className="align-items-center"> Kinh nghiệm/Kỹ năng chi tiết: </h5>
                                        <div className="cover_icons">
                                            <p className="m-0"> <i className="fa fa-angle-right" aria-hidden="true" /> Chăm chỉ, cần
                  cù với công việc, chịu được áp lực của công việc. </p>
                                            <p className="m-0"><i className="fa fa-angle-right" aria-hidden="true" /> Thông thạo ngôn
                  ngữ lập trình C#, ASP.NET, MS SQL, Javascript, lập trình hướng đối tượng OOP.
                </p>
                                            <p className="m-0"><i className="fa fa-angle-right" aria-hidden="true" /> Hiểu biết tốt về
                  store procedure, trigger, function trong MS SQL. </p>
                                            <p className="m-0"><i className="fa fa-angle-right" aria-hidden="true" /> Hiểu biết về
                  kiến trúc MVC.</p>
                                            <p className="m-0"><i className="fa fa-angle-right" aria-hidden="true" /> Có kinh nghiệm
                  phát triển web bằng DOT NET (Đã từng làm qua ít nhất 1 website bằng DOT NET)
                </p>
                                            <p className="m-0"><i className="fa fa-angle-right" aria-hidden="true" /> Có Có hiểu biết
                  cơ bản về HTML/CSS </p>
                                            <p className="m-0"><i className="fa fa-angle-right" aria-hidden="true" /> Có Có kiến thức
                  về quản lý version source code </p>
                                            <p className="m-0"><i className="fa fa-angle-right" aria-hidden="true" /> Có Hiểu biết
                  tổng quan về kiến trúc web (client, server)
                </p>
                                        </div>
                                    </div>
                                    <div className="row info__item1">
                                        <div className="cover_circle">
                                            <div className="d-inline-block cirlce__destop">
                                                <i className="fa fa-desktop" aria-hidden="true" />
                                            </div>
                                        </div>
                                        <h5 className="align-items-center">Ưu tiên: </h5>
                                        <div className="cover_icons">
                                            <p className="m-0"> <i className="fa fa-angle-right" aria-hidden="true" /> Có khả năng
                  thiết kế cơ bản trên HTML, CSS và Animation. </p>
                                            <p className="m-0"><i className="fa fa-angle-right" aria-hidden="true" /> Có hiểu biết về
                  các trình duyệt IE, Cốc Cốc, Opera, Safari.</p>
                                            <p className="m-0"><i className="fa fa-angle-right" aria-hidden="true" /> Có kinh nghiệm
                  xử lý hiển thị giao diện web (HTML, CSS, Javascript) trên các trình duyệt sử
                  dụng trên Mobile.</p>
                                            <p className="m-0"><i className="fa fa-angle-right" aria-hidden="true" /> Có hiểu biết về
                  tối ưu hóa hệ thống (performance, security) cho cả client-side &amp; server-side.
                </p>
                                            <p className="m-0"><i className="fa fa-angle-right" aria-hidden="true" /> Có kiến thức về
                  lập trình mobile (Android, iOS) là một lợi thế.</p>
                                            <p className="m-0"><i className="fa fa-angle-right" aria-hidden="true" /> Đã từng sử dụng
                  một trong các công cụ quản lý mã nguồn như SVN, GIT. </p>
                                            <p className="m-0"><i className="fa fa-angle-right" aria-hidden="true" /> Khả năng đọc
                  hiểu tài liệu tiếng Anh tốt.
                </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 tab-pane fade text-center " id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                    <p className="m-0">Các ứng cử viên quan tâm, vui lòng gửi hồ sơ qua địa chỉ mail:
              <span>tuyendung@gsotgroup.vn</span></p>
                                    <p className="m-0">Nhận hồ sơ ứng viên bằng ngôn ngữ: Tiếng Việt/Tiếng Anh </p>
                                    <p className="m-0">Người liên hệ: Phòng Hành Chính nhân sự – GSOT</p>
                                    <p className="m-0"><span>Địa chỉ: </span> Phòng 202 Tòa nhà 236A/1-3 Lê Văn Sỹ, P.1, Q.Tân Bình,
              TP.HCM </p>
                                    <p className="m-0"><span>Người liên hệ: </span> Anh Tâm – <span>0966662580</span></p>
                                    <p><span>Website: </span>http://gsotgroup.vn/
            </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-3 custom-form-group ">
                            <div className="info__title1 position-relative">
                                <h4>YÊU CẦU HỒ SƠ</h4>
                            </div>
                            <div className="form-group custom-form-group__item">
                                <i className="fa fa-file-text-o" aria-hidden="true" /> BẢN SAO THÔNG TIN ỨNG VIÊN - TẢI VỀ
        </div>
                            <div className="form-group custom-form-group__item">
                                <i className="fa fa-envelope" /> BẰNG CHUYÊN MÔN (CHỨNG THỰC)
        </div>
                            <div className="form-group custom-form-group__item">
                                <i className="fa fa-user" /> CHỨNG THỰC CHỨNG CHỈ LIÊN QUAN
        </div>
                            <div className="form-group custom-form-group__item">
                                <i className="fa fa-file-text-o" aria-hidden="true" /> BẢN SAO HỒ SƠ - LÝ LỊCH ỨNG VIÊN
        </div>
                            <div className="form-group custom-form-group__item">
                                <i className="fa fa-user" /> CHỨNG MINH NHÂN DÂN, HỘ KHẨU
        </div>
                            <div className="form-group custom-form-group__item">
                                <i className="fa fa-file-text-o" aria-hidden="true" /> THƯ DỰ TUYỂN
        </div>
                            <div className="form-group custom-form-group__item">
                                <i className="fa fa-user" /> ẢNH THẺ (3x4)
        </div>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}
