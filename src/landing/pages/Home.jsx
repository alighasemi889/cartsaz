import React, { useRef } from "react";
import createCardIcon from "/images/Home/feature-image-one.svg";
import createProfileIcon from "/images/Home/create-profile.svg";
import timeManagementIcon from "/images/Home/time-mangement.svg";
import createProductIcon from "/images/Home/create-products.svg";
import HeroIcon from "/images/Home/hero-btn.svg";
import ArrowDown from "/images/Home/arrow-down.svg";
import displayIcon2 from "/images/Home/iphone14-display-style.svg";
import Layout from "./Layout";
function Home() {
  const cartSazFeatures = [
    {
      id: 1,
      title: "ثبت محصول",
      des: "قبل از هر چیزی محصولات خود را ثبت کنید و برای آن ها عکس بگذارید تا به اسانی در سبد خرید درج شود.",
      image: createProductIcon,
    },
    {
      id: 2,
      title: "مدیریت زمان",
      des: "به راحتی با ساخت سبدهای خرید اختصاصی زمان خود را کاهش دهید و آن را به راحتی مدیریت کنید.",
      image: timeManagementIcon,
    },
    {
      id: 3,
      title: "ثبت پروفایل",
      des: "در کارت سایز پروفایل شما ثبت میشود وکسی جزء شما نمی تواند وارد حساب کاربری شود.تمامی اطلاعات محفوظ می باشد.",
      image: createProfileIcon,
    },
    {
      id: 4,
      title: "ایجاد سبد خرید اختصاصی",
      des: "با ایجاد سبد خرید اختصاصی بدون نیاز به کاربران سبد خرید های آن ها را خودتان بسازید و برای هر کدام یک لینک اختصاصی دریافت کنید.",
      image: createCardIcon,
    },
  ];
  const arrowDownRef = useRef();
  const handleScroll = () => {
    arrowDownRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "end",
    });
  };
  return (
    <Layout>
      {/* hero section */}
      <section className="container mx-auto my-8">
        <div className="flex flex-col items-center">
          <h6 className="font-iranYekan font-bold text-3xl lg:text-4xl my-4">
            سامانه مدیریت <span className="text-blue-700">هوشمند</span>
            <br /> سفارش های اینترنتی
          </h6>
          <button className="flex items-center cursor-pointer gap-x-2 text-sm lg:text-lg bg-blue-400 text-white rounded-[32px] py-2 px-4">
            <img className="w-6 h-6" src={HeroIcon} alt="hero icon cartsaz" />
            مشاهده ویدئو معرفی
          </button>
          <p className="text-black font-bold text-justify text-sm text-iranYekan md:max-w-md lg:max-w-2xl my-4">
            کارت ساز آمده تا دیگر نیازی به یادداشت سفارش های خود در دفتر و یا
            سررسید نباشید. به راحتی سفارش خود را مدیریت کنید و آن را تعیین وضعیت
            کنید.حتی به راحتی برگه ارسال را پرینت کنید و آن را اختصاصی استفاده
            کنید
          </p>
          <button onClick={handleScroll}>
            <img
              className="cursor-pointer animate-infinite-arrow"
              src={ArrowDown}
              alt=""
            />
          </button>
        </div>
      </section>

      {/* display style */}
      <section ref={arrowDownRef} className="mx-auto max-w-screen-xl my-8">
        <div className="flex flex-col my-3 px-6 lg:px-0">
          <div className="basis-1/2 flex flex-col items-center">
            <button className="mb-8 bg-orange-100 lg:bg-white inline-flex justify-center items-center w-28 h-12 rounded-[80px] lg:border-b lg:border-gray text-orange-400 text-base font-light font-iranYekan py-0.5 px-2">
              حالت نمایش
            </button>
            <p className="text-center my-4 text-gray text-base font-normal mt-4 mb-2">
              سیستم کارت ساز کاملا تحت وب اجرا شده است و نیازی به هیچ سخت افزار
              خاصی برای دیتاهای خود ندارید.
              <br />
              به راحتی مشتریان را مدیریت کنید و سفارشات خود را به موقع ارسال و
              آن ها را جمع آوری کنید.
            </p>
            {/* <div className='bg-displaySection bg-no-repeat bg-contain bg-right-bottom h-[500px] w-full'> </div> */}
          </div>
        </div>
        <div className="">
          <div className="relative bg-displaySection bg-no-repeat bg-contain bg-right h-[500px] w-full">
            <div className="absolute bottom-0 left-0">
              <img src={displayIcon2} alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* features part */}
      <section className=" mx-auto max-w-screen-xl my-8">
        <div className="flex flex-col my-3 px-6 lg:px-0">
          <div className="basis-1/2 flex flex-col items-center">
            <button className="mb-8 bg-orange-100 lg:bg-white inline-flex justify-center items-center w-24 h-12 rounded-[80px] lg:border-b lg:border-gray text-orange-400 text-base font-light font-iranYekan py-0.5 px-2">
              امکانات
            </button>
            <h3 className="text-center text-black text-2xl  font-iranYekanBold font-bold">
              جدیدترین مدل مدیریت <br className="lg:hidden" />
              سبد خرید ها
            </h3>
            <p className="text-center text-gray text-base font-normal mt-2">
              بیش از 100 ها فروشگاه سبد خرید های خود را در کارت ساز با امکانات
              متفاوت این سامانه مدیریت میکنند.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-8 lg:mx-0">
          {cartSazFeatures.map((item) => {
            return (
              <div key={item.id} className="">
                <div className="card-style">
                  <img
                    className="w-20 h-20"
                    src={item.image}
                    alt="cartsaz icon"
                  />
                  <h5 className="text-black font-bold text-md font-iranYekanBold text-center">
                    {item.title}
                  </h5>
                  <p className="text-gray text-sm text-justify font-light font-iranYekan">
                    {item.des}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </Layout>
  );
}

export default Home;
