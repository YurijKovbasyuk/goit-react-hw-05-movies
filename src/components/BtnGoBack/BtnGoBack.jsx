import { useLocation, useNavigate } from 'react-router-dom';

const BtnGoBack = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const goBack = () => {
    const locationFrom = location.state?.from || '/';
    navigate(locationFrom);
  };

  return <button onClick={goBack}>&#50dcf5e1; Go back</button>;
};

export default BtnGoBack;
