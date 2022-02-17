import React from "react";
import './header.scss';
import logo from '../../img/logoW.png';
import imgbander from '../../img/banner_2.png';

const Header = () => {
    return (
        <>
            <div className="header">
                <div className="logo"><img className="logo-logo" src={logo} title="game 7 vien ngoc rong"></img></div>
                <div className="nav">
                    <ul>
                        <li><a href="/">Trang Chủ</a></li>
                        <li><a href="/review">Giới Thiệu</a></li>
                        <li><a href="/forum">Diễn Đàn</a></li>
                        <li><a href="https://www.facebook.com/ngoc.rong.online.9/">Fanpage</a></li>
                    </ul>

                </div>
            </div>
        </>
    )
}

export default Header;