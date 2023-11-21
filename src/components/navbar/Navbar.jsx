import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img src="/white farida logo.png" alt="" />
        </motion.span>
        <div className="social">
          <a href="https://www.facebook.com/farida.banu/" target="_blank">
            <img src="/facebook.png" alt="" />
          </a>
          <a href="https://www.instagram.com/the_farida.banu/" target="_blank">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="https://www.youtube.com/channel/UCrTf3GKaT3CAraTMcSwySVw" target="_blank">
            <img src="/youtube.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/farida-akhter-banu-478377299/" target="_blank">
            <img className="linkedin" src="/linkedin.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
