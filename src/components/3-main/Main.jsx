import { useState } from "react";
import "./main.css";
import { myProjects } from "./myProjects";
import { AnimatePresence, motion } from "framer-motion";

const Main = () => {
   const [currentActive, setcurrentActive] = useState("all");
   const [arr, setArr] = useState(myProjects);

   const handleClick = (buttonCategory) => {
      setcurrentActive(buttonCategory);

      const newArr = myProjects.filter((item) => {
         const ZZZ = item.category.find((myItem) => {
            return myItem === buttonCategory;
         });

         return ZZZ === buttonCategory;
      });

      setArr(newArr);
   };

   return (
      <main className="flex">
         <section className="flex  left-section">
            <button
               onClick={() => {
                  setcurrentActive("all");
                  setArr(myProjects);
               }}
               className={currentActive === "all" ? "active" : null}
            >
               all projects
            </button>

            <button
               onClick={() => {
                  handleClick("css");
               }}
               className={currentActive === "css" ? "active" : null}
            >
               HTML & CSS
            </button>

            <button
               onClick={() => {
                  handleClick("js");
               }}
               className={currentActive === "js" ? "active" : null}
            >
               JavaScript
            </button>
            <button
               onClick={() => {
                  handleClick("react");
               }}
               className={currentActive === "react" ? "active" : null}
            >
               React & MUI
            </button>
            <button
               onClick={() => {
                  handleClick("node");
               }}
               className={currentActive === "node" ? "active" : null}
            >
               Node & Express
            </button>
         </section>

         <section className=" flex right-section">
            <AnimatePresence>
               {arr.map((item) => {
                  return (
                     <motion.article
                        layout
                        initial={{ transform: "scale(0.4)" }}
                        animate={{ transform: "scale(1)" }}
                        transition={{
                           type: "spring",
                           damping: 8,
                           stiffness: 50,
                        }}
                        key={item.imgPath}
                        className="card"
                     >
                        <img
                           width={item.imgWidth}
                           height={item.imgHeight}
                           src={item.imgPath}
                           alt=""
                        />

                        <div style={{ width: "266px" }} className="box">
                           <h1 className="title">{item.projectTitle}</h1>
                           <p className="sub-title">{item.description}</p>

                           <div className="flex icons">
                              <div style={{ gap: "11px" }} className="flex">
                                 {item.goto == "Go To Project" ? (
                                    <a
                                       className="icon-github"
                                       href={item.githubUrl}
                                       target="_blank"
                                       rel="noopener noreferrer"
                                    ></a>
                                 ) : null}
                              </div>

                              <a
                                 className="link flex"
                                 href={item.url}
                                 target="_blank"
                                 rel="noopener noreferrer"
                              >
                                 {item.goto}
                                 {item.goto == "Go To Project" ? (
                                    <span
                                       style={{ alignSelf: "end" }}
                                       className="icon-arrow-right"
                                    ></span>
                                 ) : null}
                              </a>
                           </div>
                        </div>
                     </motion.article>
                  );
               })}
            </AnimatePresence>
         </section>
      </main>
   );
};

export default Main;
