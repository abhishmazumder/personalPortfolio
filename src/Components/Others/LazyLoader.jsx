import { useEffect, useState } from 'react';
import { Center, Heading } from '@chakra-ui/react';
import PropTypes from "prop-types";

const LazyLoader = ({
  delay = 250,
}) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true);
    }, delay);
    return () => {
      clearTimeout(timeout);
    };
  }, [delay]);

  return show ? <Center
  h={"100%"}
  minH={"100vh"}
>
  <Heading
    as="h1"
    fontSize={"lg"}
    fontFamily={"primary"}
    opacity={"0.5"}
  >
    abhishek.
  </Heading>
</Center> : null;
};

LazyLoader.propTypes = {
    delay: PropTypes.number,
  };

export default LazyLoader;