import React from "react";
import './homepage.scss';
import logobanner from '../../img/banner_2.png';
import jar from '../../img/jar.png';
import android from '../../img/android.png';
import play from '../../img/play.png';
import pc from '../../img/pc.png';
import wp from '../../img/wp.png';
import napngoc from '../../img/napngoc.png';
import news from '../../img/new.gif';
import td_danhthuong from '../../img/TD_Danhthuong.gif';
import xd_danhthuong from '../../img/XayDa_DanhThuong.gif';
import td_kaioken from '../../img/TD_kaioshen.gif';
import xd_kame from '../../img/XD_Kame.gif';


const Homepage = () => {
    return (
        <div className="homepage">
            <div className='logobanner'><img className='logobanner-logobanner' src={logobanner}></img></div>
            <div className="dowload">
                <span>
                    <figure><a href="/" title="game 7 vien ngoc rong">
                        <img src={jar}></img></a>
                        <figcaption>203-JAD</figcaption>
                    </figure>
                    <figure><a href="/" title="game 7 vien ngoc rong">
                        <img src={android}></img></a>
                        <figcaption>203-JAD</figcaption>
                    </figure>
                    <figure><a href="/" title="game 7 vien ngoc rong">
                        <img src={play}></img></a>
                        <figcaption>203-JAD</figcaption>
                    </figure>
                    <figure><a href="/" title="game 7 vien ngoc rong">
                        <img src={pc}></img></a>
                        <figcaption>203-JAD</figcaption>
                    </figure>
                    <figure><a href="/" title="game 7 vien ngoc rong">
                        <img src={wp}></img></a>
                        <figcaption>203-JAD</figcaption>
                    </figure>
                    <figure><a href="/" title="game 7 vien ngoc rong">
                        <img src={napngoc}></img></a>
                        <figcaption>203-JAD</figcaption>
                    </figure>
                </span>
            </div>
            <br></br>
            <div className="advertisement">
                <a href="/">
                    <img src={news}></img>
                    " Ng?? long tranh b?? - ??ua top m??y ch??? m???i - Ho??? Long "
                    <img src={news}></img>
                </a>
            </div>
            <div className="line"></div>
            <span className="title">Gi???i Thi???u</span>
            <hr></hr>
            <div className="content">
                <p style={{ margin: '0px 0px 0px 4px' }}>
                    Ng???c R???ng Online l?? Tr?? Ch??i Tr???c Tuy???n v???i c???t truy???n xoay quanh b??? truy???n tranh 7 vi??n Ng???c R???ng. Ng?????i ch??i
                    s??? h??a thanh th??nh m???t trong nh???ng anh h??ng c???a 3 h??nh tinh: Tr??i ?????t, Xayda, Nam???c. C??ng luy???n t???p, t??ng c?????ng
                    s???c m???nh v?? k??? n??ng. ??o??n k???t c??ng chi???n ?????u ch???ng l???i c??c th??? l???c hung ??c. C??ng nhau tranh t??i.
                    <br />?????c ??i???m n???i b???t:
                    <br />- Th??? lo???i h??nh ?????ng, nh???p vai. Tr???c ti???p ??i???u khi???n nh??n v???t h??nh ?????ng. D??? ch??i, d??? ??i???u khi???n nh??n v???t. ????? h???a
                    s???c n??t. C?? phi??n b???n ????? h???a cao cho ??i???n tho???i m???nh v?? phi??n b???n pixel cho m??y c???u h??nh th???p.
                    <br />- C???t truy???n b??m s??t nguy??n t??c. Ng?????i ch??i s??? g???p t???t c??? nh??n v???t t??? Bunma, Quy l??o kame, Jacky-chun, T??u P???y
                    P???y... cho ?????n Fide, Pic, Poc, X??n, Broly, ?????i Bojack.
                    <br />- ?????c ??i???m n???i b???t nh???t: Tham gia ????nh doanh tr???i ?????c nh??n. Tham gia ?????i h???i v?? thu???t. Tham gia s??n l??ng ng???c
                    r???ng ????? mang l???i ??i???u ?????c cho b???n th??n.
                    <br />- T????ng th??ch t???t c??? c??c d??ng m??y tr??n th??? tr?????ng hi???n nay: M??y t??nh PC, ??i???n tho???i di ?????ng Nokia Java, Android,
                    iPhone, Windows Phone, v?? m??y t??nh b???ng Android, iPad.
                </p>

                <ul>
                    <li><img src={td_danhthuong} style={{ height: '90px', with: '96px' }}></img></li>
                    <li><img src={xd_danhthuong} style={{ height: '90px', with: '90px' }}></img></li>
                    <li> <img src={td_kaioken} style={{ height: '90px', with: '98px' }}></img></li>
                    <li><img src={td_kaioken} style={{ height: '90px', with: '98px' }}></img></li>
                </ul>
                <p style={{ display: "block", textAlign: 'center', color: '#fe5604' }}>Xem th??m</p>
            </div>
            <div className="line"></div>
            <span className="title">H?????n d???n t??n th???</span>
            <hr></hr>
            <div className="content">
                <p style={{ margin: '0px 0px 0px 4px' }} >
                    <b>1. ????ng k?? t??i kho???n</b>
                    <br />
                    Ng???c R???ng Online s??? d???ng T??i Kho???n ri??ng, kh??ng chung v???i b???t k??? Tr?? Ch??i n??o kh??c.
                    <br />B???n c?? th??? ????ng k?? t??i kho???n mi???n ph?? ngay trong game, ho???c tr??n trang Di???n ????n.
                    <br />Khi ????ng k??, b???n n??n s??? d???ng ????ng s??? ??i???n tho???i ho???c email th???t c???a m??nh. N???u s??? d???ng th??ng tin sai, ng?????i c?? s??? ??i???n tho???i ho???c email th???t s??? c?? th??? l???y m???t kh???u c???a b???n.
                    <br />S??? ??i???n tho???i v?? email c???a b???n s??? kh??ng hi???n ra cho ng?????i kh??c th???y. Admin kh??ng bao gi??? h???i m???t kh???u c???a b???n.
                    <br />
                    <br /><b>2. H?????ng d???n ??i???u khi???n</b>
                    <br />
                    <br />?????i v???i m??y b??n ph??m: D??ng ph??m m??i t??n, ph??m s???, ????? ??i???u khi???n nh??n v???t. Ph??m ch???n gi???a ????? t????ng t??c.
                    <br />?????i v???i m??y c???m ???ng: D??ng tay ch???m v??o m??n h??nh c???m ???ng ????? di chuy???n. Ch???m nhanh 2 l???n v??o 1 ?????i t?????ng ????? t????ng t??c.
                    <br />?????i v???i PC: D??ng chu???t, click chu???t ph???i ????? di chuy???n, click chu???t tr??i ????? ch???n, click ????i v??o ?????i t?????ng ????? t????ng t??c
                    <br />
                    <b>3. M???t s??? th??ng tin c??n b???n</b>
                    <br />
                    <br />- ?????u th???n d??ng ????? t??ng KI v?? HP ngay l???p t???c.
                    <br /> - B???n ch??? mang theo ng?????i ???????c 10 h???t ?????u. N???u mu???n mang nhi???u h??n, h??y xin t??? b???n b?? trong Bang.
                    <br />- T???t c??? c??c s??ch k??? n??ng ?????u c?? th??? h???c mi???n ph?? t???i Quy L??o Kame, khi b???n c?? ????? ??i???m ti???m n??ng.
                    <br />- B???n kh??ng th??? bay, d??ng k??? n??ng, n???u h???t KI.
                    <br /> - T???n c??ng qu??i v???t c??ng b???n b?? trong Bang s??? mang l???i nhi???u ??i???m ti???m n??ng h??n ????nh m???t m??nh.
                    <br />- T???p luy???n v???i b???n b?? t???i khu v???c th??ch h???p s??? mang l???i nhi???u ??i???m ti???m n??ng h??n ????nh qu??i v???t.
                    <br />- Khi ???????c n??ng c???p, ?????u th???n s??? ph???c h???i nhi???u HP v?? KI h??n.
                    <br />- V??o tr?? ch??i ?????u ?????n m???i ng??y ????? nh???n ???????c Ng???c mi???n ph??.
                    <br />- ????i g?? s??? ph???c h???i 100% HP, KI. C?? chua ph???c h???i 100% KI. C?? r???t ph???c h???i 100% HP.
                    <br />- C??y ?????u th???n k???t m???t h???t sau m???t th???i gian, cho d?? b???n ??ang offline.
                    <br />- Sau 3 ng??y kh??ng tham gia tr?? ch??i, b???n s??? b??? gi???m s???c m???nh do l?????i luy???n t???p.
                    <br /> - B???n s??? gi???m th??? l???c khi ????nh qu??i, nh??ng s??? t??ng l???i th??? l???c khi kh??ng ????nh n???a.
                    <br />
                    Ngo??i ra, b???n c?? th??? tham kh???o nh???ng th??ng tin sau ????? c?? th??? d??? d??ng tham gia tr?? ch??i h??n.
                </p>
                <div className="line"></div>
                <span className="title">B???n n??n t???i phi??n b???n n??o ?</span>
                <hr></hr>
                <div className="content">
                    <p style={{ margin: '0px 0px 0px 4px' }}>
                        <br />
                        <br />N???u b???n d??ng ??i???n tho???i Nokia c??, c?? b??n ph??m nh?? Nokia 6300, Nokia E72, Nokia X2, Nokia C2, H??y t???i b???n JAVA
                        <br />
                        <br />N???u b???n d??ng m??y c???m ???ng s??? d???ng Android nh??: Samsung Galaxy Y, HTC, LG, Sky, HKPhone. H??y t???i b???n Android APK ho???c Android Playstore ?????u ???????c.
                        <br />
                        <br />N???u b???n d??ng ??i???n tho???i c???m ???ng c???a NOKIA Lumia, ho???c c??c m??y HTC ch???y Windows Phone, h??y t???i b???n cho Windows Phone.
                        <br />
                        <br /> N???u b???n d??ng m??y vi t??nh c?? nh??n, laptop ch???y Windows XP - Windows 7, h??y t???i b???n PC.
                        <br />

                        <br />N???u b???n d??ng iPhone, iPod, iPad, h??y t???i b???n iPhone Appstore. N???u b???n bi???t ch???c r???ng m??y m??nh ???? jailbreak, c?? c??i AppSync ho???c AppstoreVN, h??y c??i t??? b???n iPhone jailbreak ????? t???c ????? nhanh h??n.
                        <br />
                        <br />
                    </p>

                </div>

            </div>
        </div>
    )
}

export default Homepage;