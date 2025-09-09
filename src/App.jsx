import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import LinkCard from './components/LinkCard';

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #1a472a 0%, #4b0082 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  position: relative;
  overflow: hidden;
`;

const BackgroundCards = styled(motion.div)`
  position: absolute;
  width: 100px;
  height: 140px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  border: 2px solid rgba(80, 200, 120, 0.3);
  pointer-events: none;
`;

const ProfileImage = styled(motion.img)`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 3px solid #50C878;
  margin-bottom: 20px;
  z-index: 1;
`;

const Name = styled(motion.h1)`
  color: #fff;
  font-size: 1.8rem;
  margin-bottom: 10px;
  text-align: center;
  text-shadow: 0 0 10px rgba(75, 0, 130, 0.8);
  z-index: 1;
`;

const Bio = styled(motion.p)`
  color: #ccc;
  text-align: center;
  margin-bottom: 30px;
  max-width: 600px;
  font-size: 1.1rem;
  z-index: 1;
  span {
    color: #50C878;
    font-weight: bold;
  }
`;

const LinksContainer = styled.div`
  width: 100%;
  max-width: 600px;
  z-index: 1;
`;

const floatingCards = Array(5).fill(null).map((_, i) => ({
  x: Math.random() * window.innerWidth,
  y: Math.random() * window.innerHeight,
  rotate: Math.random() * 360,
  scale: 0.8 + Math.random() * 0.4,
}));

function App() {
  return (
    <Container>
      {floatingCards.map((card, index) => (
        <BackgroundCards
          key={index}
          initial={card}
          animate={{
            x: [card.x - 100, card.x + 100],
            y: [card.y - 100, card.y + 100],
            rotate: [card.rotate, card.rotate + 360],
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        />
      ))}
      <ProfileImage
        src="https://github.com/EmanuelGaleno.png"
        alt="Profile"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      />
      <Name
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Emanuel Galeno
      </Name>
      <Bio
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <span>Backend Java Developer</span>
      </Bio>
      <LinksContainer>
        <LinkCard
          icon="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png"
          title="Spotify"
          url="https://open.spotify.com/user/duelonix"
        />
        <LinkCard
          icon="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
          title="GitHub"
          url="https://github.com/EmanuelGaleno"
        />
        <LinkCard
          icon="https://cdn-icons-png.flaticon.com/512/174/174857.png"
          title="LinkedIn"
          url="https://www.linkedin.com/in/emanuel-galeno/"
        />
      </LinksContainer>
    </Container>
  );
}

export default App;
