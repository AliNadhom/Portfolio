import Lottie from "lottie-react";
import "./hero.css";
import devAnimation from "../../animation/dev.json";
import { useRef } from "react";
import { motion } from "framer-motion";

const Hero = () => {
   const lottieRef = useRef();

   return (
      <section className="hero flex">
         <div className="left-section  ">
            <div className="parent-avatar flex">
               <motion.img
                  initial={{ transform: "scale(0)" }}
                  animate={{ transform: "scale(1.1)" }}
                  transition={{ damping: 6, type: "spring", stiffness: 100 }}
                  src="/me.jpg"
                  className="avatar"
                  alt=""
               />
               <div className="icon-verified"></div>
            </div>

            <motion.h1
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 2.2 }}
               className="title"
            >
               Full Stack Developer
            </motion.h1>

            <p className="sub-title">
               As a passionate full-stack developer specializing in creating
               captivating and user-centric web applications. With a robust
               background in front-end technologies such as HTML, CSS, and
               JavaScript, combined with proficiency in back-end frameworks and
               databases, I excel in transforming creative concepts into
               functional, polished digital experiences. My passion lies in
               leveraging technology to deliver seamless solutions that meet
               both aesthetic and functional requirements, ensuring optimal user
               engagement and satisfaction.
            </p>

            <div className="all-icons flex">
               <a
                  href="https://www.instagram.com/ali.aldulaiimi/"
                  className="icon icon-instagram"
                  target="_blank"
                  rel="noopener noreferrer"
               ></a>

               <a
                  className="icon icon-github"
                  href="https://github.com/AliNadhom"
                  target="_blank"
                  rel="noopener noreferrer"
               ></a>
               <a
                  className="icon icon-linkedin"
                  href="https://www.linkedin.com/in/ali-nadhom-85b584318/"
                  target="_blank"
                  rel="noopener noreferrer"
               ></a>
            </div>
         </div>

         <div className="right-section animation ">
            <Lottie
               lottieRef={lottieRef}
               className=""
               onLoadedImages={() => {
                  // @ts-ignore
                  // https://lottiereact.com/
                  lottieRef.current.setSpeed(0.5);
               }}
               animationData={devAnimation}
            />
         </div>
      </section>
   );
};

export default Hero;
