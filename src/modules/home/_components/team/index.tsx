import AnimatedText from "../../../../components/animatedText";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useContext } from "react";
import { ConfigContext } from "../../../../utils/configContext";

function Team() {
  const {
    home: { teamSection },
  } = useContext(ConfigContext)!;
  if (!teamSection) return null;

  const members = teamSection.teamMembers ?? [];

  return (
    <section id={teamSection.id ?? "team"} className="relative px-4 py-12">
      <div className="relative max-w-screen-lg mx-auto">
        <img
          src="/backgroundImagemeetourteam/meetourteambackground.svg"
          alt="team section background"
          className="absolute inset-0 w-full h-full object-contain -z-10 opacity-25"
        />
        <div className="mb-10 max-w-none flex flex-col items-center prose prose-lg text-center">
          <h1 className="mb-3">
            <AnimatedText text={teamSection.sectionTitle} />
          </h1>
          <motion.div
            className="h-2 bg-gradient-to-r from-primary to-secondary rounded-full overflow-hidden [--w:220px] md:[--w:360px]"
            whileInView={{ width: "var(--w)" }}
            viewport={{ amount: 1, once: true, margin: "0px 0px -100px 0px" }}
          />
          {teamSection.subtitle && (
            <motion.p
              initial={{ y: "100%", opacity: 0 }}
              whileInView={{ y: "0%", opacity: 0.7 }}
              viewport={{ once: true }}
              className="text-md max-w-xl"
            >
              {teamSection.subtitle}
            </motion.p>
          )}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={clsx("grid gap-6", {
            "grid-cols-1 sm:grid-cols-2 md:grid-cols-4": teamSection.layout === "minimal",
            "grid-cols-1 sm:grid-cols-2 md:grid-cols-3": teamSection.layout !== "minimal",
          })}
        >
        {members.map((member, index) => (
          <motion.div
            key={index}
            variants={{ hidden: { y: 40, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
            transition={{ delay: 0.15 + index * 0.1 }}
            className="group relative card shadow-md bg-base-100 border-2 border-primary/10 overflow-hidden flex flex-col -translate-x-3 -translate-y-3 transition-transform hover:translate-x-0 hover:translate-y-0"
          >
            <div className="absolute top-0 bottom-1 right-1 left-0 bg-secondary -z-10 rounded-[var(--rounded-box)]" />
            <div className="card-body items-center text-center p-6 flex-1">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden ring-2 ring-primary/20">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              {teamSection.showRole && member.role && (
                <p className="opacity-70 text-sm">{member.role}</p>
              )}
              {teamSection.showBio && member.bio && (
                <p className="opacity-70 text-sm mt-1">{member.bio}</p>
              )}
              {teamSection.showSocialLinks && member.socials && (
                <div className="mt-2 flex gap-3">
                  {member.socials.twitter && (
                    <a href={member.socials.twitter} className="opacity-70 hover:opacity-100">Tw</a>
                  )}
                  {member.socials.linkedin && (
                    <a href={member.socials.linkedin} className="opacity-70 hover:opacity-100">In</a>
                  )}
                  {member.socials.instagram && (
                    <a href={member.socials.instagram} className="opacity-70 hover:opacity-100">Ig</a>
                  )}
                </div>
              )}
            </div>
            <div className="w-full bg-secondary text-secondary-content text-center py-2 font-bold">
              {member.name}
            </div>
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10" />
          </motion.div>
        ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Team;
