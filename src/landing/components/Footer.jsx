import signUpIcon from '../../../public/images/footer/footerbtn.svg';
import TelegramIcon from '../../../public/images/footer/telegram.svg';
import InstaIcon from '../../../public/images/footer/instagram.svg';
import { Link } from 'react-router-dom';
import  Logo  from '../../assets/logo.svg';

function Footer() {
  return (
    <footer className='conatiner mx-auto my-4 w-full'>
        <div className='flex flex-col bg-no-repeat items-center justify-center  h-80 lg:h-56 w-full bg-center bg-cover bg-footer-section'>
             <h1 className='text-white mt-8 font-iranYekanBold text-center text-2xl lg:text-3xl font-bold'>هم اکنون ثبت نام کنید!</h1>
             <p className=' mx-8 text-white my-4 text-center font-iranYekan font-normal text-base lg:text-lg'>
                ثبت نام در کارت ساز رایگان است.همین الان ثبت نام کنید و کارت ساز را تست کنید.</p>
             <button className='flex bg-orange-400 p-2 lg:px-3 lg:py-2 rounded-3xl text-white gap-x-2 font-normal font-iranYekan hover:shadow-md'>
                <img className='w-6 h-6' src={signUpIcon} alt="" />
             ثبت نام رایگان
             </button>
        </div>

        <div className='mx-auto xl:max-w-screen-xl mt-6'>
          <h4 className='text-black text-2xl font-iranYekan font-bold'><span className='text-blue-300'> کارت ساز </span>چیست ؟</h4>
          <p className='my-4 text-gray text-sm text-justify font-iranYekan'>کارت ساز یک سیستم نوین است که به شما اجازه میدهد برای مشتریان خود سبد خرید(cart) اختصاصی ایجاد کنید و سپس با ارسال لینک از آن ها بخواهید که سبد خرید خود را کامل کنند. در این حالت شما دیگر نیازی به یادداشت موارد خاسته شده ندارید و به راحتی میتوانید سفارشات خود را ثبت کنید.کارت ساز آمده تا زمان شما مدیریت شود , مشتریان خود را رهگیری کنید , سفارشات را طبقه بندی کنید.کارت ساز در ابتدای مسیر خود می باشد و قصدش کمک به کسب و کار های نوپا و کوچک بر بستر شبکه های اجتماعی همانند اینستاگرام,تلگرام و واتساپ می باشد.</p>
        </div>
        <hr className='h-1 border-0 my-4 bg-gray rounded-md mx-auto max-w-screen-xl'/> 
        <div className='flex flex-col mx-auto lg:flex-row justify-between items-center  max-w-screen-xl'>
          <div className='flex justify-center items-center'>
          <Link to="/" className="flex items-center"> 
                <img src={Logo} className=" h-8 lg:h-10 sm:h-10" alt="CartSaz Logo" />
            </Link>
            <p className='hidden md:block text-gray text-sm lg:text-base mb-0 mr-4 font-iranYekan'>کارت ساز 1402</p>
          </div>
            <div className='flex'>
            <img className='w-5 h-5 mr-1 lg:mx-3 cursor-pointer ease-out duration-200 ' src={InstaIcon} alt="" />
            <img className='w-5 h-5 mx-1 lg:mx-3 cursor-pointer ease-out duration-200 ' src={TelegramIcon} alt="" />
            </div>
      
        </div>   
    </footer>
  )
}

export default Footer