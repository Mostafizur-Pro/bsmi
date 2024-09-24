import { motion } from 'framer-motion';

const TraditionalPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8"
    >
      {/* Header */}
      <h2 className="text-3xl font-bold text-center text-red-600 mb-8">
        The Definition of Traditional Karate
      </h2>

      {/* Introduction */}
      <p className="text-center text-gray-600 mb-12 italic">
        “In traditional karate victory is not an ultimate aim. Traditional Karate is an art of self-defense which uses only the human body itself, in the most effective way.”
        <br />
        <span className="text-sm">– BSMI Constitution, Article 1, paragraph 1.3</span>
      </p>

      {/* Content */}
      <div className="space-y-8 text-gray-700 leading-relaxed">
        <p>
          Although today there are many different Karate sports, originally there was only one. The first or Traditional Karate (Karate-Do) was the original Karate from which these later sports borrowed the name “Karate,” as it is commonly and widely used today.
        </p>

        <p>
          Karate has its roots in <strong>“Tode”</strong> – a weaponless self-defense system developed in Okinawa, influenced by Chinese martial arts with more than two thousand years of history. In mainland Japan, it was established as a part of the <strong>Budo</strong> (Japanese martial arts) system; therefore, “Traditional Karate” is a general term for Karate that follows Budo principles.
        </p>

        <p>
          After World War II, Karate’s value for self-defense, physical fitness, competition, and overall mental and physical development became increasingly recognized. However, as a martial art, it necessitated long and repeated careful study. Because the practice of Karate soon came to approach the semblance of a “boom” in popularity, the requirements of long and repeated careful study were overridden by demands for more rapid results and quicker development. The result was the emergence of many new sports using the name of Karate. To avoid confusion with these new sports, the public began distinguishing the original Karate as “Traditional Karate.”
        </p>

        <p>
          The international governing body of Traditional Karate is the <strong>Bangladesh Sports Martial Arts Institute (BSMI)</strong>, composed of Traditional Karate national federations from each member country. Each member national federation is the governing body for Traditional Karate in its respective country. Worldwide, members of BSMI practice many different “styles” of Karate (such as Shotokan, Goju-ryu, etc.). These “styles” are comparable to schools or academies and have their own unique training systems developed by Karate masters over many centuries.
        </p>

        <p>
          However, even under the same style, groups affiliated with BSMI pursue <strong>Budo Karate</strong>, while others not belonging to BSMI practice so-called “karate sports,” which are merely punching/kicking games with no Budo principles.
        </p>
      </div>
    </motion.div>
  );
};

export default TraditionalPage;
