

import styles from './Footer.module.scss'

import clsx from "clsx";

import { IoLocationOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdOutlineRssFeed } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import {
  payment1,
  payment2,
  payment3,
  payment4,
  payment5,
} from "./Delivery/imageDelivery";
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Footer() {

  return (
    <section className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerContainerContent}>
          <div>
            <h5>GIỚI THIỆU</h5>
            <div className={styles.inline}></div>
            <p>
              A nhô A nhô
            </p>
          </div>
          <div>
            <h5>ĐỊA CHỈ</h5>
            <div className={styles.inline}></div>
            <div>
              <IoLocationOutline className={styles.icon} />
              <p>12 ngõ 45 Cụ Lộc</p>
            </div>
            <div>
              <FaPhoneAlt className={styles.icon} />
              <p>0911173008</p>
            </div>
            <div>
              <MdEmail className={styles.icon} />
              <p>tuancandongsang@gmail.com</p>
            </div>
          </div>
          <div>
            <h5>MENU</h5>
            <div className={styles.inline}></div>
            <div>
              <NavLink to="/home">
                Trang chủ
              </NavLink>
              <NavLink to="todos">
                ToDo
              </NavLink>
            </div>
            <div>
              <NavLink to="/employee">
                Employee
              </NavLink>
              <NavLink to="/Chamcong/nhansu">
                Chamcong
              </NavLink>
            </div>
            <div>
              <NavLink to=" ">
                Liên hệ
              </NavLink>
              <NavLink to="/introduce">
                Gioi thieu
              </NavLink>
            </div>

          </div>
          <div>
            <h5>MẠNG XÃ HỘI</h5>
            <div className={styles.inline}></div>
            <div style={{ display: "flex" }}>
              <div className={clsx(styles.link, styles.linkFacebook)}>
                <a href="/home">
                  <FaFacebookF style={{ fontSize: 22 }} />
                </a>
              </div>
              <div className={clsx(styles.link, styles.linkInstagram)}>
                <a href="/home">
                  <FaInstagram style={{ fontSize: 22 }} />
                </a>
              </div>
              <div className={clsx(styles.link, styles.linkTwitter)}>
                <a href="/home">
                  <FaTwitter />
                </a>
              </div>
              <div className={clsx(styles.link, styles.linkPinterest)}>
                <a href="/home">
                  <FaPinterest />
                </a>
              </div>
              <div className={clsx(styles.link, styles.linkFeed)}>
                <a href="/home">
                  <MdOutlineRssFeed style={{ fontSize: 25 }} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footerContainerContent2}>
          <h5>ĐĂNG KÝ NHẬN THÔNG TIN</h5>
          <input placeholder="Email" />
          <Button variant="danger" style={{ marginRight: 50 }}>
            ĐĂNG KÝ
          </Button>
          <img src={payment1} alt="" />
          <img src={payment2} alt="" />
          <img src={payment3} alt="" />
          <img src={payment4} alt="" />
          <img src={payment5} alt="" />
        </div>
        <p className={styles.nameDesign}>
          Bản quyền thuộc về.Thiết kế Website Đông Sàng
        </p>
      </div>
    </section>
  );
}

export default Footer;