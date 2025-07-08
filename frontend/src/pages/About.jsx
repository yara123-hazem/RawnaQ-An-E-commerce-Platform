import React from 'react'
import Title from "../components/Title";
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Welcome to Rawnaq, your premier online destination for exquisite wear that blends timeless elegance with contemporary trends. "Rawnaq" in Arabic signifies splendor and beauty, and that's precisely what we aim to bring to your wardrobe. We believe that true style is about more than just clothing; it's about confidence, self-expression, and celebrating your unique identity. Our curated collections feature high-quality fabrics, impeccable craftsmanship, and designs that empower you to look and feel your absolute best for every occasion.</p>
        <p>At Rawnaq, we're passionate about helping you discover pieces that not only complement your style but also tell your personal story. From sophisticated everyday wear to stunning ensembles for special events, each item is carefully selected to ensure it meets our high standards of quality and design. We invite you to explore our collections and experience the true meaning of "Rawnaq" – splendor and beauty – within your own unique style.</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>At Rawnaq, our mission is to empower individuals to express their unique style and confidence through high-quality, elegantly designed wear. We are dedicated to offering a diverse range of fashion that embodies splendor and beauty, ensuring every piece not only looks exceptional but also makes you feel extraordinary. We strive to be your trusted source for fashion that celebrates individuality and enhances your personal sense of "rawnaq" – true radiance and self-assurance.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}></Title>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>At Rawnaq, quality is not just a promise; it's the cornerstone of everything we do. We are committed to delivering exceptional wear that stands the test of time, both in style and durability. Our rigorous quality assurance process begins with the meticulous selection of premium fabrics and materials, sourced from trusted suppliers who share our commitment to excellence.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>At Rawnaq, we understand that your time is valuable, and your shopping experience should be as seamless and enjoyable as possible. That's why we've designed our online store with your ultimate convenience in mind. From effortless Browse through our intuitively organized collections to a streamlined checkout process, every step is optimized for ease.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Custumer Service:</b>
          <p className='text-gray-600'>At Rawnaq, your satisfaction is our top priority, and we are committed to providing an exceptional customer service experience that mirrors the splendor of our fashion. Our dedicated support team is here to assist you every step of the way, from answering your product inquiries and helping with sizing, to providing real-time order updates and facilitating seamless returns or exchanges.</p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  )
}

export default About
