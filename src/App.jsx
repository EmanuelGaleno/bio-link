import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import LinkCard from './components/LinkCard';

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #1a472a 0%, #2c1810 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
`;

const ProfileImage = styled(motion.img)`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 3px solid #50C878;
  margin-bottom: 20px;
`;

const Name = styled(motion.h1)`
  color: #fff;
  font-size: 1.8rem;
  margin-bottom: 10px;
  text-align: center;
`;

const Bio = styled(motion.p)`
  color: #ccc;
  text-align: center;
  margin-bottom: 30px;
  max-width: 600px;
`;

const LinksContainer = styled.div`
  width: 100%;
  max-width: 600px;
`;

function App() {
  return (
    <Container>
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
        Desenvolvedor Full Stack | Java | Spring Boot | React
      </Bio>
      <LinksContainer>
        <LinkCard
          icon="https://cdn-icons-png.flaticon.com/512/174/174857.png"
          title="LinkedIn"
          url="https://www.linkedin.com/in/emanuel-galeno/"
        />
        <LinkCard
          icon="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
          title="GitHub"
          url="https://github.com/EmanuelGaleno"
        />
        <LinkCard
          icon="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png"
          title="Spotify"
          url="https://open.spotify.com/user/duelonix"
        />
      </LinksContainer>
    </Container>
  );
}

export default App;
