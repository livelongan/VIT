
import React, { useEffect, useRef } from 'react';
import lib from '../my-lib/util/my-lib.mjs'
import '../my-lib/util/style.css'
const Home: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (ref.current) {
      lib.setUI('#www')
    }
  }, [ref])
  return (
    <div id="www" ref={ref} />
  );
};
export default Home;