import React, {Component} from 'react';
import './style.css';
import img from './asset';

export default class Page9 extends Component {
    line() {
        document.getElementById("line").style.display = "block";
        document.getElementById("line2").style.display = "none";
    }

    line2() {
        document.getElementById("line").style.display = "none";
        document.getElementById("line2").style.display = "block";
    }
    lineTitle(){
        document.getElementById("hr").style.display = "block";
        document.getElementById("hr33").style.display = "none";
        document.getElementById("hr44").style.display = "none";
    }
    lineTitle2(){
        document.getElementById("hr").style.display = "none";
        document.getElementById("hr33").style.display = "block";
        document.getElementById("hr44").style.display = "none";
    }
    lineTitle3(){
        document.getElementById("hr").style.display = "none";
        document.getElementById("hr33").style.display = "none";
        document.getElementById("hr44").style.display = "block";
    }
    render() {
        return (
            <section className="content1">
                    <div className="row m-0">
                        <div className="left col-xs-12 col-sm-12 col-md-8 col-lg-8">
                            <p className="text-title">
                                <span className="text-title1">Trang chủ -
                                </span>
                                <span className="text-title2">Sự kiện</span>
                            </p>
                            <hr className="hr1"/>
                            <span onClick={this.lineTitle} style={{cursor: 'pointer'}}>
                            <span className="mon">MON |</span>
                            <span className="day" style={{marginLeft: "5px"}}>
                                02.07.2020</span>
                            </span>

                            {" "}
                            <span onClick={this.lineTitle2} className="text1">CATEGORY ARCHIVES</span>
                            {" "}
                            <span onClick={this.lineTitle3} className="text2">TIN TỨC VÀ SỰ KIỆN</span>
                            <div className="hr2">
                                <div className="hr" id="hr"/>
                                <div className="hr33" id="hr33"/>
                                <div className="hr44" id="hr44"/>
                            </div>
                            <div className="title row">
                                <img className="col-md-2"
                                    style={
                                        {
                                            marginTop: 10,
                                            height: 35,
                                            width: 60
                                        }
                                    }
                                    src={
                                        img.imgarraw
                                    }/>
                                <h4 className="col-md-8"
                                    style={
                                        {display: "inline-block"}
                                }>
                                    ĐÂU LÀ ĐỊA CHỈ CUNG CẤP PHẦN MỀM NHÂN SỰ GIÁ TỐT NHẤT HIỆN NAY?
                                </h4>
                            </div>
                            <div className="text3">
                                <p>
                                    Hiện nay, khi mà các doanh nghiệp đã hiểu rõ được tầm quan trọng của
                                                phần mềm nhân sự thì nhu cầu mua chúng ngày càng tăng cao. Song song
                                                với nhu cầu cũng chính là hàng loạt các đơn vị bán phần mềm ra đời.
                                                Vậy đâu là địa chỉ cung cấp phần mềm nhân sự giá tốt nhất hiện nay
                                                là câu hỏi của nhiều doanh nghiệp. Hãy cùng gsotgroup.vn chia sẻ địa
                                                chỉ bán phần mềm này uy tín trong bài viết dưới đây.
                                </p>
                            </div>
                            <div className="img2">
                                <img src={
                                    img.img1
                                }/>
                            </div>
                            <hr className="hr3"/>
                            <div className="text4">
                                <p>Những vấn đề người mua phần mềm nhân sự thường gặp phải</p>
                                <p>
                                    Doanh nghiệp bạn mong muốn sở hữu một loại phần mềm nhân sự đạt
                                                chuẩn mà giá cả phải chăng để có thể tăng hiệu suất làm việc. Tuy
                                                vậy, trên thị trường hiện nay xuất hiện nhiều công ty phần mềm, bên
                                                cạnh những công ty uy tín thì cũng có những gian thương bán sản phẩm
                                                kém chất lượng.
                                </p>
                                <p>
                                    Điều này đã khiến người tiêu dùng băn khoăn không biết nên chọn công
                                                ty phần mềm nào để gửi gắm niềm tin. Đừng lo lắng, hãy chia sẻ mọi
                                                vấn đề bạn quan tâm hay thắc mắc gửi tới công ty cổ phần giải pháp
                                                thông minh xanh (GSOT). Tin rằng những nhân viên giàu kinh nghiệm
                                                tại đây sẽ tư vấn cho bạn các loại phần mềm phù hợp với mô hình kinh
                                                doanh của doanh nghiệp bạn
                                </p>
                            </div>
                            <div className="img3">
                                <img style={
                                        {
                                            width: "100%",
                                            height: 366
                                        }
                                    }
                                    src={
                                        img.img2
                                    }/>
                            </div>
                            <div className="text5">
                                <p className="text5-title">
                                    GSOT – Tự hào là đơn vị cung cấp phần mềm nhân sự giá tốt và uy tín
                                                nhất
                                </p>
                                <p>
                                    Tại TPHCM, đơn vị GSOT là đơn vị cung cấp phần mềm nhân sự giá tốt
                                                được mọi người rất tin tưởng. Trải qua nhiều năm hoạt động trong
                                                lĩnh vực tư vấn và thiết kế phần mềm, đơn vị chúng tôi tự tin sẽ đáp
                                                ứng mọi yêu cầu của bạn. Đến với đơn vị GSOT, bạn sẽ được trải
                                                nghiệm chất lượng dịch vụ vô cùng hoàn hảo.
                                </p>
                                <p>
                                    Thông qua đội ngũ nhân viên tư vấn và kỹ thuật chuyên nghiệp, tài
                                                năng. Họ sẽ dựa vào mô hình kinh doanh của doanh nghiệp bạn để thiết
                                                kế ra những phần mềm nhân sự riêng biệt và đáp ứng tốt nhu cầu đề
                                                ra.
                                </p>
                                <p>
                                    Những phần mềm thông minh tại đơn vị GSOT đều được dựa trên nền tảng
                                                kỹ thuật hiện đại và tập trung vào các yếu tố sau: tích hợp toàn
                                                diện, dễ dàng sử dụng và chi phí hợp lý. Qua đó giúp doanh nghiệp
                                                bạn quản lý nhân viên hiệu quả và ngày càng phát triển hơn.
                                </p>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 p-0">
                            <div className="right"
                                style={
                                    {
                                        width: 319,
                                        marginLeft: "auto",
                                        marginTop: "65px"
                                    }
                            }>
                                <div className="bar position-relative">
                                    <div className="line" id="line"/>
                                    <div className="line2" id="line2"/>
                                    <span className="mr-2" onClick={this.line} style={{cursor: 'pointer'}}>TIN GSOT |</span>
                                    <span className="right-title" style={{cursor: 'pointer'}} onClick={this.line2}>
                                        KIẾN THỨC CÔNG NGHỆ{" "}
                                        <img className="img"
                                            style={
                                                {
                                                    marginLeft: 27,
                                                    width: 25,
                                                    height: 25
                                                }
                                            }
                                            src={
                                                img.imggray
                                            }/>
                                    </span>
                                </div>
                                <div className="card-group">
                                    <div className="row row-boder-bottom m-0">
                                        <div className="img col-md-4 p-0">
                                            <img src={
                                                    img.imgcard
                                                }
                                                alt/>
                                        </div>
                                        <div className="col-md-8 width-responsive p-0">
                                            <h6 className="card-title">
                                                ĐÂU LÀ ĐỊA CHỈ CUNG CẤP PHẦN MỀM NHÂN SỰ TỐT NHẤT HIỆN NAY?
                                            </h6>
                                            <p className="card-text">
                                                MON | 02.07.2020
                                                <img className="img"
                                                    style={
                                                        {
                                                            marginLeft: 55,
                                                            width: 25,
                                                            height: 25
                                                        }
                                                    }
                                                    src={
                                                        img.imgred
                                                    }/>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row row-boder-bottom m-0">
                                        <div className="img col-md-4 p-0">
                                            <img src={
                                                    img.imgcard
                                                }
                                                alt/>
                                        </div>
                                        <div className="col-md-8 width-responsive p-0">
                                            <h6 className="card-title">
                                                ĐÂU LÀ ĐỊA CHỈ CUNG CẤP PHẦN MỀM NHÂN SỰ TỐT NHẤT HIỆN NAY?
                                            </h6>
                                            <p className="card-text">
                                                MON | 02.07.2020
                                                <img className="img"
                                                    style={
                                                        {
                                                            marginLeft: 55,
                                                            width: 25,
                                                            height: 25
                                                        }
                                                    }
                                                    src={
                                                        img.imgred
                                                    }/>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row row-boder-bottom m-0">
                                        <div className="img col-md-4 p-0">
                                            <img src={
                                                    img.imgcard
                                                }
                                                alt/>
                                        </div>
                                        <div className="col-md-8 width-responsive p-0">
                                            <h6 className="card-title">
                                                ĐÂU LÀ ĐỊA CHỈ CUNG CẤP PHẦN MỀM NHÂN SỰ TỐT NHẤT HIỆN NAY?
                                            </h6>
                                            <p className="card-text">
                                                MON | 02.07.2020
                                                <img className="img"
                                                    style={
                                                        {
                                                            marginLeft: 55,
                                                            width: 25,
                                                            height: 25
                                                        }
                                                    }
                                                    src={
                                                        img.imgred
                                                    }/>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row row-boder-bottom m-0">
                                        <div className="img col-md-4 p-0">
                                            <img src={
                                                    img.imgcard
                                                }
                                                alt/>
                                        </div>
                                        <div className="col-md-8 width-responsive p-0">
                                            <h6 className="card-title">
                                                ĐÂU LÀ ĐỊA CHỈ CUNG CẤP PHẦN MỀM NHÂN SỰ TỐT NHẤT HIỆN NAY?
                                            </h6>
                                            <p className="card-text">
                                                MON | 02.07.2020
                                                <img className="img"
                                                    style={
                                                        {
                                                            marginLeft: 55,
                                                            width: 25,
                                                            height: 25
                                                        }
                                                    }
                                                    src={
                                                        img.imgred
                                                    }/>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div style={
                                    {marginTop: 20}
                                }>
                                    <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fgsotgroup&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                                        width={319}
                                        height={500}
                                        style={
                                            {
                                                border: "none",
                                                overflow: "hidden"
                                            }
                                        }
                                        scrolling="no"
                                        frameBorder={0}
                                        allowTransparency="true"
                                        allow="encrypted-media"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
        )
    }
}

