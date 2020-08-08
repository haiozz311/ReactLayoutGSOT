import React, {Component} from 'react';
import './style.css';
import img from './asset';

export default class Services2 extends Component {
    render() {
        return (
            <div className="page4" style={{paddingTop: '80px'}}>
                    <section className="DV position-relative">
                    <div className="bg"></div>
                            <div className="subtitle">
                                Trang chủ - 
                                <span>Dịch vụ</span>
                            </div>
                            <div className="title">
                                DỊCH VỤ TƯ VẤN, THIẾT KẾ
                                <br/>
                                VÀ XÂY DỰNG PHẦN MỀM THEO YÊU CẦU
                            </div>
                            <div className="line-DV"/>
                            <div className="row margin-0"
                                style={
                                    {justifyContent: "center"}
                            }>
                                <div className="col-md-3">
                                    <div className="card box-shadow-green">
                                      <img className="card-img-top" src={img.img47} alt/>
                                        <div className="card-body">
                                            <p className="card-text">
                                                GSOT sẽ viết cho riêng anh chị một Hệ thống phần mềm thông minh
                                                                đáp ứng đầy đủ các yêu cầu của doanh nghiệp anh chị.
                                            </p>
                                            <img className="arrowCard"
                                            src={img.imggeihoang}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 mt-15">
                                    <div className="card box-shadow-green">
                                        <img className="card-img-top" src={img.img48} alt/>
                                        <div className="card-body">
                                            <p className="card-text">
                                                Hệ thống phần mềm được xây dựng trên các nền tảng kỹ thuật hiện
                                                                đại. Dễ dàng kết nối với các thiết bị như: Máy chấm công, Máy in
                                                                mã vạch...
                                            </p>
                                            <img className="arrowCard"
                                                src={img.imggeihoang}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 mt-15">
                                    <div className="card box-shadow-green">
                                        <img className="card-img-top" src={img.img49} alt/>
                                        <div className="card-body">
                                            <p className="card-text">
                                                Hệ thống phần mềm GSOT được xây dựng tập trung vào các yếu tố
                                                                chính: Tích hợp toàn diện, dễ dàng sử dụng, phù hợp với doanh
                                                                nghiệp Việt và chi phí hợp lý.
                                            </p>
                                            <img className="arrowCard"
                                            src={img.imggeihoang}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className="button-group">
                                <img className="button-img" src={img.img25}/>
                                <button className="button"/>
                                <button className="button-upper text-my-bold content-1-button button-upper">
                                    XEM THÊM
                                </button>
                            </p>
                    </section>
                    <section className="IMG-GROUP">
                            <div className="img-group">
                                <div className="row" style={{margin: 0}}>
                                    <div className="col-40 p-0">
                                        <div className="img1">
                                            <img src={img.imghoanggei1}/>
                                        </div>
                                        <div className="img2">
                                            <img src={img.imghoanggei2}/>
                                        </div>
                                    </div>
                                    <div className="col-60 p-0">
                                        <div className="img3">
                                            <img src={img.imghoanggei3}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </section>
                    <section className="contact position-relative">
                            <h3>ANH CHỊ HÃY NHẬP THÔNG TIN ĐỂ ĐƯỢC TƯ VẤN CỤ THỂ HƠN</h3>
                            <div className="form-row"
                                style={
                                    {justifyContent: "center",width: "875.51px",margin: 'auto'}
                            }>
                                <div className="col-md-6 form-group padding-0" style={{paddingRight: '20px'}}>
                                    <input type="text" className="form-control" placeholder=" Họ tên"/>
                                    <input type="text" className="form-control" placeholder=" Địa chỉ"/>
                                    <input type="text" className="form-control" placeholder=" Điện thoại"/>
                                    <input type="text" className="form-control" placeholder=" Email"/>
                                </div>
                                <div className="col-md-6 form-group padding-0" style={{paddingLeft: "20px"}}>
                                    <textarea className="form-control"
                                        rows={3}
                                        placeholder=" Nội dung"
                                        defaultValue={""}/>
                                </div>
                            </div>
                            <p className="button-group">
                                <img className="button-img" src={img.img25}/>
                                <button className="button"/>
                                <button className="button-upper text-my-bold content-1-button button-upper">
                                    XEM THÊM
                                </button>
                            </p>
                    </section>
            </div>
        )
    }
}
