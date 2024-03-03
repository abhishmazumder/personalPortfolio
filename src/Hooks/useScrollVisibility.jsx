import { useEffect, useRef, useState } from "react";

const useScrollVisibility = () => {
  const [isHeaderVisible, setHeaderVisible] = useState(false);
  const [isContentVisible, setContentVisible] = useState(false);

  const headerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.target === headerRef.current) {
          setHeaderVisible((prev) =>
            prev === false ? entry.isIntersecting : prev
          );
        } else if (entry.target === contentRef.current) {
          setContentVisible((prev) =>
            prev === false ? entry.isIntersecting : prev
          );
        }
      });
    };

    const headerObserver = new IntersectionObserver(handleIntersection, {
      threshold: 0,
    });

    const contentObserver = new IntersectionObserver(handleIntersection, {
      threshold: 0,
    });

    if (headerRef.current) {
      headerObserver.observe(headerRef.current);
    }

    if (contentRef.current) {
      contentObserver.observe(contentRef.current);
    }

    return () => {
      headerObserver.disconnect();
      contentObserver.disconnect();
    };
  }, []);

  return [headerRef, contentRef, isHeaderVisible, isContentVisible];
};

export default useScrollVisibility;
