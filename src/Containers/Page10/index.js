import React, { Component } from 'react'
import './Page10.css'
import img from './asset/index';

export default class Page10 extends Component {
    render() {
        return (
            <section className="section10">
                <div className="container">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb m-0">
                            <li className="breadcrumb-item"><a href="#">Trang chủ</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Tuyển dụng</li>
                        </ol>
                    </nav>
                    <hr className="hr" />
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 section10__title custom-icons">
                            <h3 className="m-0">HÃY CÙNG GSOT</h3>
                            <h3 className="m-0">THAY ĐỔI THẾ GIỚI</h3>
                            <div className="section10__title__item text-left">
                                <i className="fa fa-quote-left ml-4" />
                                <p className="m-0">
                                    Bằng một khát vọng không ngừng nghỉ, GSOT phấn đấu trở thành Công ty phát triển phần mềm
            <span className="font-weight-bold">thông minh</span> có <span className="font-weight-bold">uy
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
                                <i className="fa fa-quote-right" />
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 position-relative">
                            <img src={img.banner} className="img-fluid img__layout9" alt />
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-9 info__title custom-content">
                            <div className="resize">
                                <div className="position-relative">
                                    <h4 className="font-weight-bold">VỊ TRÍ TUYỂN DỤNG</h4>
                                </div>
                                <div className="row">
                                    <div className="col-4 col-sm-4 col-md-6 col-lg-6">
                                        <input type="text" className="form-control" placeholder="Nhập từ khóa tìm kiếm" />
                                    </div>
                                    <div className="col-4 col-sm-4 col-md-3 col-lg-3">
                                        <div className="form-group">
                                            <select className="form-control form-custom" id="exampleFormControlSelect1">
                                                <option>Chọn tỉnh/thành</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-4 col-sm-4 col-md-3 col-lg-3">
                                        <button className="btn custom-btn w-100 text-white">Tìm Kiếm <i className="fa fa-search text-white" /></button>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <div className="row">
                                        <div className="col-6 text-center">
                                            <p className="m-0 dev">DOT NET DEVELOPER</p>
                                        </div>
                                        <div className="col-6 text-center">
                                            <p className="m-0"><i className="fa fa-map-marker-alt" /> Hồ Chí Minh</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-3 text-center">
                                    <p className="m-0 font-weight-bold">03/08/2018</p>
                                </div>
                                <div className="col-3 text-center">
                                    <button className="btn w-100 text-white">Apply</button>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-6">
                                    <div className="row">
                                        <div className="col-6 text-center">
                                            <p className="m-0 dev">NHÂN VIÊN KẾ TOÁN</p>
                                        </div>
                                        <div className="col-6 text-center">
                                            <p className="m-0"><i className="fa fa-map-marker-alt" /> Hồ Chí Minh</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-3 text-center">
                                    <p className="m-0 font-weight-bold">03/08/2018</p>
                                </div>
                                <div className="col-3 text-center">
                                    <button className="btn w-100 text-white">Apply</button>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-6">
                                    <div className="row">
                                        <div className="col-6 text-center">
                                            <p className="m-0 dev">DOT NET DEVELOPER</p>
                                        </div>
                                        <div className="col-6 text-center">
                                            <p className="m-0"><i className="fa fa-map-marker-alt" /> Hồ Chí Minh</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-3 text-center">
                                    <p className="m-0 font-weight-bold">03/08/2018</p>
                                </div>
                                <div className="col-3 text-center">
                                    <button className="btn w-100 text-white">Apply</button>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-6">
                                    <div className="row">
                                        <div className="col-6 text-center">
                                            <p className="m-0 dev">NHÂN VIÊN KẾ TOÁN</p>
                                        </div>
                                        <div className="col-6 text-center">
                                            <p className="m-0"><i className="fa fa-map-marker-alt" /> Hồ Chí Minh</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-3 text-center">
                                    <p className="m-0 font-weight-bold">03/08/2018</p>
                                </div>
                                <div className="col-3 text-center">
                                    <button className="btn w-100 text-white">Apply</button>
                                </div>
                            </div>
                            <hr />
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
