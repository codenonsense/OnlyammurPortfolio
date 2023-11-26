import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id:1,
    item_name:"Blog writing",
    item_description:"Blog writing is the art of crafting engaging and informative content for online platforms. From personal reflections to business insights, skilled bloggers weave words to captivate readers, spark discussions, and share valuable perspectives across diverse topics.",
    item_img:"https://images.pexels.com/photos/768472/pexels-photo-768472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    item_link:"https://comeup.com/en/service/404058/write-a-professional-creative-and-informative-blog-and-articles-upto-1000-words",
  },
  {
    id:2,
    item_name:"Figma to Code Conversion",
    item_description:"Figma to Code Conversion seamlessly transforms design concepts crafted in Figma into functional code, bridging the gap between design and development. This process ensures accurate and efficient translation of visual ideas into interactive digital experiences.",
    item_img:"https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    item_link:"https://comeup.com/en/service/404251/covert-your-figma-adobe-xd-image-into-html-css-js",
  },
  {
    id:3,
    item_name:"Pinterest pin & pin banner creation",
    item_description:"Pinterest Pin & Pin Banner Creation is an artistic endeavor to design visually appealing and engaging content for Pinterest. Crafting attention-grabbing pins and banners to captivate audiences and drive engagement.",
    item_img:"https://images.pexels.com/photos/5426400/pexels-photo-5426400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    item_link:"https://www.upwork.com/services/product/marketing-pinterest-pins-social-media-management-pinterest-marketing-graphic-design-1720752077653962752",
  },
  {
    id:4,
    item_name:"Linkedin profile & banner creation",
    item_description:"LinkedIn Profile & Banner Creation involves crafting a professional and compelling online presence. Tailoring profiles and banners to showcase expertise, accomplishments, and personality, fostering a strong professional brand on the world's leading professional networking platform.",
    item_img:"https://images.pexels.com/photos/15406295/pexels-photo-15406295/free-photo-of-linkedin-job-search-app-on-an-iphone.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    item_link:"https://www.upwork.com/services/product/writing-translation-an-optimized-linkedin-profile-1716111234950275072",
  },
  ]

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.item_img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.item_name}</h2>
            <p>{item.item_description}</p>
            <button><a href={item.item_link} target="_blank">View Service</a></button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
