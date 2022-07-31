import { useLocation, useNavigate } from 'react-router-dom';

const BtnGoBack = ref => {
  const location = useLocation();
  const navigate = useNavigate();

  const locationFrom = location.state?.from ?? '/';
  console.log(ref);

  const goBack = () => {
    // console.log(backBtn);
    // // const locationFrom = location?.state?.from ?? '/';
    navigate(locationFrom);
  };

  return <button onClick={goBack}> Go back</button>;
};

export default BtnGoBack;
