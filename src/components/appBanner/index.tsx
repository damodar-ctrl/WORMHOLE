import { useContext } from "react";
import { ConfigContext } from "../../utils/configContext";
import Spill from "./svgs/spill";
import IphoneFrame from "../../components/iphoneFrame";
import { motion } from "framer-motion";
import clsx from "clsx";

function AppBanner() {
  const { googlePlayLink, appStoreLink, appBanner, topNavbar } =
    useContext(ConfigContext)!;

  if (!appBanner) return null;
  return (
    <motion.section
      id={appBanner.id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      className="relative max-w-screen-lg mx-auto px-4 -mb-6 z-10 md:-mb-10 lg:-mb-14"
    >
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            scale: 0.9,
          },
          visible: {
            opacity: 1,
            scale: 1,
          },
        }}
        transition={{
          mass: 0.4,
          type: "spring",
          duration: 0.2,
        }}
      >
        <div className="p-4 bg-primary text-primary-content rounded-t-[var(--rounded-box)] flex flex-col items-center md:flex-row md:items-center md:justify-between gap-8 lg:gap-12">
          <div className="flex flex-col items-center md:items-start justify-center gap-3 md:gap-4 text-center md:text-left z-10 w-full md:w-auto md:flex-shrink-0 md:max-w-[45%] lg:max-w-[48%]">
            <motion.h2
              initial={{ opacity: 0, y: "-100%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-0 mb-2 text-4xl md:text-5xl lg:text-6xl leading-tight"
            >
              {appBanner.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-primary-content/70 whitespace-pre-wrap m-0 mt-1 md:text-lg max-w-2xl"
            >
              {appBanner.subtitle}
            </motion.p>
            <motion.ul
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="list-none flex flex-wrap md:flex-nowrap gap-4 my-4 p-0 w-full justify-center md:justify-start"
            >
              {googlePlayLink && (
                <li className="m-0 p-0">
                  <img
                    className="h-14"
                    alt="google play logo"
                    src="/stores/google-play.svg"
                  />
                </li>
              )}

            </motion.ul>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="relative flex justify-center mt-2 md:mt-0 z-0 w-full md:w-auto md:flex-shrink-0 md:max-w-[50%] lg:max-w-[48%]"
          >
            {appBanner.screenshots.map((src, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: {
                    scale: index > 0 ? 0.9 : 1,
                    opacity: 0,
                    rotate: 0,
                  },
                  visible: {
                    scale: index > 0 ? 0.9 : 1,
                    opacity: 1,
                    rotate: index === 0 ? 0 : index === 1 ? "-30deg" : "30deg",
                  },
                }}
                transition={{
                  stiffness: 150,
                  mass: 0.5,
                  type: "spring",
                  delay: index > 0 ? 0.8 : 0.5,
                }}
                className={clsx(
                  "h-[24rem] sm:h-[28rem] md:h-[30rem]",
                  index === 0 && "relative z-20 block",
                  index === 1 && "absolute origin-bottom-left hidden xl:block",
                  index === 2 && "absolute origin-bottom-right hidden xl:block"
                )}
              >
                <IphoneFrame src={src} />
              </motion.div>
            ))}
          </motion.div>
        </div>
        <Spill className="-translate-y-1" />
      </motion.div>
    </motion.section>
  );
}

export default AppBanner;
