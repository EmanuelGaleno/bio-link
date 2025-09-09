import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const Card = styled(motion.a)`
  width: 100%;
  padding: 20px;
  background: rgba(26, 71, 42, 0.4);
  border: 2px solid rgba(80, 200, 120, 0.3);
  border-radius: 10px;
  backdrop-filter: blur(10px);
  text-decoration: none;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 15px;
  transition: all 0.3s ease;
  margin: 12px 0;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      45deg,
      transparent,
      rgba(80, 200, 120, 0.1),
      transparent
    );
    transform: translateX(-100%);
    transition: transform 0.5s;
  }
  
  &:hover {
    transform: translateY(-2px);
    border-color: rgba(80, 200, 120, 0.6);
    box-shadow: 0 0 20px rgba(75, 0, 130, 0.3);
    
    &::before {
      transform: translateX(100%);
    }
  }
`;

const Icon = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  filter: drop-shadow(0 0 5px rgba(80, 200, 120, 0.5));
`;

const Title = styled.span`
  font-size: 1.1rem;
  font-weight: 500;
  text-shadow: 0 0 5px rgba(75, 0, 130, 0.5);
`;

const LinkCard = ({ icon, title, url }) => {
  return (
    <Card 
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Icon src={icon} alt={title} />
      <Title>{title}</Title>
    </Card>
  );
};

export default LinkCard;