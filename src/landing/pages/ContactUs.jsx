import React from 'react'
import Layout from './Layout';
import './contact.css';
import contactIcon from '../../../public/images/Contact/contactUs.svg';
import instagramIcon from '../../../public/images/Contact/instagram.svg';
import whatsappIcon from '../../../public/images/Contact/whatsapp.svg';
import { Link } from 'react-router-dom';
function ContactUs() {
  return (
    <Layout>
      <div className='container my-5'>
        <div className="row">
        <div className="col-12 col-md-6">
             <h3 className='title'>تماس با ما</h3>
             <p className='desc'>
                      جهت ارتباط با ما میتوانید با یکی از مسیرهای زیر با ما در ارتباط باشید
             </p>
             <Link to={'https://www.instagram.com/rezaei.maryam78'} className='btn-style mt-5'>
                <img src={instagramIcon} alt="" />
                پیام در دایرکت اینستاگرام
             </Link>
             <Link to={'https://wa.me/+989214875148'} className='btn-whatsapp mt-2'>
                <img src={whatsappIcon} alt="CARTSAZ whatsapp" />
                پیام در واتس آپ 
             </Link>
             <p className='desc mt-5'>
                     همچنین می توانید از ایمیل زیر جهت ارسال  پیام استفاده کنید
             </p>
             <Link className='link-style' 
             to={'https://mail.google.com/mail/?view=cm&fs=1&to=mari.re9978@gmail.com'}
             >cartsaz.com@gmail.com</Link>
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
          <img className='img-contactUs' src={contactIcon} alt="" />
        </div>
        </div>
        
      </div>
    </Layout>
  )
}

export default ContactUs