import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const Card = styled(motion.a)`
  width: 100%;
  padding: 15px 20px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  backdrop-filter: blur(10px);
  text-decoration: none;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 15px;
  transition: all 0.3s ease;
  margin: 8px 0;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }
`;

const Icon = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

const Title = styled.span`
  font-size: 1.1rem;
  font-weight: 500;
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