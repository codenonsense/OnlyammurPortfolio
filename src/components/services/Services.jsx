import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

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

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        { items.map((item) => (
          <motion.div
          className="box"
          key={item.id}
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>{item.item_name}</h2>
          <p>
            {item.item_description}
          </p>
          <button><a href={item.item_link} target="_blank">Go</a></button>
        </motion.div>
        ))
          
        }
      </motion.div>
    </motion.div>
  );
};

export default Services;
