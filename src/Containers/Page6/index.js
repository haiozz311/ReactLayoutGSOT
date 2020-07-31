import React, {Component} from 'react'
import img from './asset/index'
import './page6.css'

export default class Page6 extends Component {
    render() {
        return (
            <div className="page6">
                <section className="TMS">
                    <div style={
                        {
                            margin: "0 auto",
                            width: "85%"
                        }
                    }>
                        <div className="row ">
                            <div className="col-xs-12 col-sm-12 col-md-9 pr-5 pr-responsive">
                                <h3 className="text-title mb-0">
                                    TMS (TRANSPORTATION MANAGEMENT SYSTEM)
                                </h3>
                                <div className="boder"/>
                                <div>
                                    <p className="text mb-0">
                                        Nhu cầu vận chuyển hàng hóa tại Việt Nam ngày một tăng cao và khách
                                                    hàng cũng đưa ra những yêu cầu khắt khe hơn về chất lượng dịch vụ
                                                    như an toàn hàng hóa được giao nhận, thời gian giao nhận tối thiểu
                                                    hay thủ tục giao nhận hiện đại chính xác và tốn thời gian của khách
                                                    hàng ít nhất. Chính vì điều đó, để nâng cao vị thế cạnh tranh nhằm
                                                    chiếm lĩnh thị trường, các doanh nghiệp bắt đầu ứng dụng công nghệ
                                                    thông tin để khai thác được hiệu quả tối đa hoạt động kinh doanh
                                                    nhằm phát huy tối đa nguồn lực hiện có của doanh nghiệp.
                                    </p>
                                    <p className="text m-0">
                                        Hiểu được điều đó, Hệ thống quản lý giao nhận hàng TMS
                                                    (Transportation Management System) của GSOT giúp doanh nghiệp vận
                                                    tải kiểm soát toàn bộ quá trình giao nhận hàng nhằm tăng lợi nhuận
                                                    và sự hài lòng của khách hàng. TMS gồm các tính năng hỗ trợ doanh
                                                    nghiệp trong các nghiệp vụ như: Kiểm soát hàng giao, nhận và thông
                                                    tin khách hàng thông qua mã vạch tự động tích hợp nhằm nâng cao sự
                                                    hài lòng của khách hàng, hỗ trợ quản lý thu – chi của doanh nghiệp,
                                                    hỗ trợ quản lý nợ công.
                                    </p>
                                    <p className="text m-0">
                                        TMS hỗ trợ công tác quản lý nhanh hơn và an toàn hơn
                                    </p>
                                    <p className="text m-0">
                                        TMS hỗ trợ quản lý và kiểm soát toàn bộ đơn hàng, nhân viên, tài xế,
                                                    người gửi và người nhận hàng đều theo mã vạch do TMS tự in một cách
                                                    tự động với số lượng theo nhu cầu của doanh nghiệp.
                                    </p>
                                    <p className="text m-0">
                                        TMS hỗ trợ quản lý được dòng tài chính của doanh nghiệp
                                    </p>
                                    <p className="text m-0">
                                        TMS hỗ trợ quản lý tài chính cho doanh nghiệp thông qua tính năng
                                                    kiểm soát thu/chi hàng ngày, cũng như quản lý được công nợ từ chi
                                                    tiết đến tổng quát giúp doanh nghiệp dễ dàng thống kê được dòng tài
                                                    chính của mình một cách nhanh chóng và chính xác nhất
                                    </p>
                                    <h5 className="text-title-2 mb-0">TÍNH NĂNG</h5>
                                    <p className="text-2 m-0">
                                        Kiểm soát giao nhận hàng thông qua các tính năng (Kiểm hàng lên, tạo
                                                    đơn hàng, kiểm hàng xuống)
                                    </p>
                                    <p className="text m-0">
                                        - Kiểm hàng xuống (nhận hàng từ người gửi): Thêm, sửa, xóa các thông
                                                    tin của nghiệp vụ kiểm hàng xuống (nhận hàng):
                                    </p>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-4 ">
                                        <div className="img-right">
                                            <img className="img-right1" src={img.icon1} alt/>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-8 img-left">
                                        <div className="img-left">
                                            <img className="img-left1" src={img.icon2} alt/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <p className="text-newbill">
                                        <samp className="text-newbill1">- Tạo đơn hàng</samp>
                                        (tại nơi nhận
                                                    hoặc tại bãi): Thêm, sửa, xóa các thông tin của đơn hàng được kiểm
                                                    soát thông qua mã vạch đơn hàng:
                                    </p>
                                    <div className="col-xs-12 col-sm-12 col-md-8 pl-0">
                                        <div className="img-right2">
                                            <img className="img-right2-1" src={img.icon3} alt/>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-4 pl-0">
                                        <div className="img-left2">
                                            <img className="img-left2-1" src={img.icon4} alt/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <p className="text-newbill mb-1">
                                        <samp className="text-newbill1">– Kiểm hàng lên</samp>(Kiểm soát quá
                                                        trình giao hàng): Thêm, sửa, xóa các thông tin của nghiệp vụ kiểm
                                                        hàng lên (giao hàng):
                                    </p>
                                    <div className="d-flex flex-row pr-20 dl-block">
                                        <div className="d-flex flex-row">
                                            <div className="circle">
                                                <div className="circle-red"/>
                                            </div>
                                            <span className="text-my-regular pl-2">Ngày nhận hàng</span>
                                        </div>
                                        <div className="d-flex flex-row">
                                            <div className="circle">
                                                <div className="circle-red"/>
                                            </div>
                                            <span className="text-my-regular pl-2">Xe giao hàng</span>
                                        </div>
                                        <div className="d-flex flex-row">
                                            <div className="circle">
                                                <div className="circle-red"/>
                                            </div>
                                            <span className="text-my-regular pl-2">Tài xế giao hàng
                                            </span>
                                        </div>
                                        <div className="d-flex flex-row">
                                            <div className="circle">
                                                <div className="circle-red"/>
                                            </div>
                                            <span className="text-my-regular pl-2">Người kiểm hàng
                                            </span>
                                        </div>
                                        <div className="d-flex flex-row">
                                            <div className="circle">
                                                <div className="circle-red"/>
                                            </div>
                                            <span className="text-my-regular pl-2">Chuỗi mã vạch</span>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-12 pl-0">
                                        <div className="img-i">
                                            <img className="w-100" src={img.icon5} alt/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mr-0 mt-4 pr-5"
                                    style={
                                        {position: "relative"}
                                }>
                                    <div style={
                                        {
                                            position: "absolute",
                                            background: "linear-gradient(to bottom, #07c767, #04856f)",
                                            width: "120%",
                                            height: "100%",
                                            left: "-20%"
                                        }
                                    }></div>
                                    <div className="col-6 col-sm-3 pl-0 pr-3 my-4">
                                        <div className="border-thin">
                                            <p className="text-title-bg mb-0">Quản lý khách hàng</p>
                                            <div className="w-25"
                                                style={
                                                    {
                                                        borderBottom: "2px white solid",
                                                        margin: "0 auto"
                                                    }
                                                }/>
                                            <p className="text-bg ">Quản lý người gửi hàng</p>
                                            <p className="text-bg">Quản lý địa chỉ gửi hàng</p>
                                            <p className="text-bg">Quản lý người nhận hàng</p>
                                            <p className="text-bg">Quản lý địa chỉ nhận hàng</p>
                                        </div>
                                    </div>
                                    <div className="col-6 col-sm-3 pl-0 pr-3 my-4">
                                        <div className="border-thin">
                                            <p className="text-title-bg mb-0">Danh mục quản lý</p>
                                            <div className="w-25"
                                                style={
                                                    {
                                                        borderBottom: "2px white solid",
                                                        margin: "0 auto"
                                                    }
                                                }/>
                                            <p className="text-bg">Quản lý nhân viên</p>
                                            <p className="text-bg">Quản lý loại hàng</p>
                                            <p className="text-bg">Quản lý đơn vị tính</p>
                                            <p className="text-bg">
                                                Quản lý xe giao hàng</p>
                                            <p className="text-bg">Quản lý danh sách mã vạch</p>
                                            <p className="text-bg">Quản lý doanh mục các khoản thu/chi</p>
                                        </div>
                                    </div>
                                    <div className="col-6 col-sm-3 pl-0 pr-0 my-4">
                                        <div className="border-thin">
                                            <p className="text-title-bg mb-0">Nghiệp vụ quản lý</p>
                                            <div className="w-25"
                                                style={
                                                    {
                                                        borderBottom: "2px white solid",
                                                        margin: "0 auto"
                                                    }
                                                }/>
                                            <p className="text-bg ">Quản lý đơn hàng</p>
                                            <p className="text-bg">Quản lý kiểm hàng lên</p>
                                            <p className="text-bg">
                                                Quản lý hàng xuống
                                            </p>
                                            <p className="text-bg">Hợp đồng xe giao hàng</p>
                                            <p className="text-bg">Thống kê tiền tài xế nhận</p>
                                            <p className="text-bg">Thống kê số tiền nhân viên tại bãi nhận</p>
                                        </div>
                                    </div>
                                    <div className="col-6 col-sm-3 pl-0 my-4">
                                        <div className="border-thin border-left-0">
                                            <div style={
                                                {position: "relative"}
                                            }>
                                                <div style={
                                                    {
                                                        position: "absolute",
                                                        top: "-1rem",
                                                        width: "100%"
                                                    }
                                                }>
                                                    <p className="text-center text-title-bg">Kiểm soát</p>
                                                </div>
                                                <p className="text-title-bg mb-0">Thu – Chi – Nợ
                                                </p>
                                            </div>
                                            <div className="w-25"
                                                style={
                                                    {
                                                        borderBottom: "2px white solid",
                                                        margin: "0 auto"
                                                    }
                                                }/>
                                            <p className="text-bg">– Quản lý và in phiếu thu/chi (tự động)</p>
                                            <p className="text-bg">– Tổng hợp thu chi</p>
                                            <p className="text-bg">– Theo dõi, tổng hợp nợ</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <p className="text-search mb-1">
                                        Tra cứu đơn hàng thông qua mã vạch
                                        <br/>– Kiểm soát tình trạng đơn hàng: Đã kiểm lên hoặc chưa, đã tạo
                                                    đơn hoặc chưa, đã kiểm xuống hay chưa.
                                    </p>
                                    <div className="col-xs-12 col-sm-12 col-md-12 pl-0">
                                        <div className=" img-i">
                                            <img className="w-100" src={img.icon6} alt/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-3 p-0 pl-5 pl-responsive">
                                <div className="col-md-12 p-0">
                                    <h5 className="title-right mb-0">DỰ ÁN KHÁC</h5>
                                </div>
                                <div className="boder1"/>
                                <div className="news">
                                    <a href>CMS (CONTAINER MANAGEMENT SYSTEM)</a>
                                    <br/>
                                    <a href>
                                        TRANG THÔNG TIN TRUNG TÂM DỮ LIỆU KINH TẾ VIỆT NAM VIETDATA.VN
                                    </a>
                                    <br/>
                                    <a href>WEBSITE TMĐT VÀ CỔNG THÔNG TIN TIE GROUP</a>
                                    <br/>
                                    <a href>HỆ THỐNG QUẢN LÝ RÁC THẢI</a>
                                    <br/>
                                    <a href>HRMS (HUMAN RESOURCE MANAGERMENT SYSTEM)</a>
                                    <br/>
                                </div>
                                <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fgsotgroup&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="100%"
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
                </section>
            </div>
        )
    }
}

