import React, { Component } from 'react'
import img from './asset/index'
import './layout12.css'

export default class Page12 extends Component {
    render() {
        return (
            <section className="section12">
                <div className="container">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb m-0">
                            <li className="breadcrumb-item"><a href="#">Trang chủ</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Tuyển dụng</li>
                        </ol>
                    </nav>
                    <div className="row ">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-9">
                            <hr className="hr m-0" />
                            <div className="position-relative section12__title">
                                <h2 className="cover">LET BUILD SOMETHING GREATE. TOGETHER</h2>
                                <h2 className="cover__text">LET BUILD SOMETHING GREATE. TOGETHER</h2>
                            </div>
                            <div className="row item">
                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 section12__item">
                                    <h3>TRỤ SỞ CHÍNH</h3>
                                    <p className="m-0">Địa chỉ: 81/15/18 Huỳnh Văn Nghệ, Phường 12, Quận Gò Vấp, Tp. HCM.</p>
                                    <p className="m-0">Số điện thoại: (028) 6286 1906</p>
                                    <p className="m-0">Mobile: 0938 939 484</p>
                                    <p className="m-0">Email: Info@gsotgroup.vn</p>
                                </div>
                                <div className="col-12 col-sm-12 col-md-4 col-lg-4 map">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1167943814653!2d106.64427641462271!3d10.802365892303932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752974fd410c2b%3A0xd7dd5f74c0918d3d!2zQ8O0bmcgdHkgcGjhuqduIG3hu4FtIEdTT1Q!5e0!3m2!1sen!2s!4v1596178146718!5m2!1sen!2s" width="250px" height frameBorder={0} style={{ border: 0 }} allowFullScreen aria-hidden="false" tabIndex={0} />
                                </div>
                            </div>
                            <div className="row item">
                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 section12__item">
                                    <h3>TRỤ SỞ CHÍNH</h3>
                                    <p className="m-0">Địa chỉ: 81/15/18 Huỳnh Văn Nghệ, Phường 12, Quận Gò Vấp, Tp. HCM.</p>
                                    <p className="m-0">Số điện thoại: (028) 6286 1906</p>
                                    <p className="m-0">Mobile: 0938 939 484</p>
                                    <p className="m-0">Email: Info@gsotgroup.vn</p>
                                </div>
                                <div className="col-12 col-sm-12 col-md-4 col-lg-4 map">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1167943814653!2d106.64427641462271!3d10.802365892303932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752974fd410c2b%3A0xd7dd5f74c0918d3d!2zQ8O0bmcgdHkgcGjhuqduIG3hu4FtIEdTT1Q!5e0!3m2!1sen!2s!4v1596178146718!5m2!1sen!2s" width="250px" height frameBorder={0} style={{ border: 0 }} allowFullScreen aria-hidden="false" tabIndex={0} />
                                </div>
                            </div>
                            <div className="row item">
                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 section12__item">
                                    <h3>TRỤ SỞ CHÍNH</h3>
                                    <p className="m-0">Địa chỉ: 81/15/18 Huỳnh Văn Nghệ, Phường 12, Quận Gò Vấp, Tp. HCM.</p>
                                    <p className="m-0">Số điện thoại: (028) 6286 1906</p>
                                    <p className="m-0">Mobile: 0938 939 484</p>
                                    <p className="m-0">Email: Info@gsotgroup.vn</p>
                                </div>
                                <div className="col-12 col-sm-12 col-md-4 col-lg-4 map">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1167943814653!2d106.64427641462271!3d10.802365892303932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752974fd410c2b%3A0xd7dd5f74c0918d3d!2zQ8O0bmcgdHkgcGjhuqduIG3hu4FtIEdTT1Q!5e0!3m2!1sen!2s!4v1596178146718!5m2!1sen!2s" width="250px" height frameBorder={0} style={{ border: 0 }} allowFullScreen aria-hidden="false" tabIndex={0} />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-3 item__right">
                            <img src={img.img_right} className="img-fluid img-right" alt />
                            <h3>YÊU CẦU BÁO GIÁ</h3>
                            <div className="input"><img src={img.icon1} className="icon" alt /> Họ tên: <input type="text" name id /></div>
                            <div className="input"><img src={img.icon2} className="icon" alt /> Địa chỉ: <input type="text" name id /></div>
                            <div className="input"><img src={img.icon3} className="icon" alt /> Điện thoại: <input type="text" name id /></div>
                            <div className="input"><img src={img.icon4} className="icon" alt /> Email: <input type="text" name id /></div>
                            <div className="input"><img src={img.icon5} className="icon" alt /> Tính năng về phần mềm,
          thông
          tin cần báo giá: <p><textarea name id cols rows={5} defaultValue={""} /></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}
