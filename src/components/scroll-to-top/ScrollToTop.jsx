import React, { useRef } from 'react';
import { withRouter } from 'react-router-dom';

const ScrollToTop = props => {
  const mounted = useRef(props.location);

  if (mounted.props !== props.location) {
    window.scrollTo(0, 0);
  }
  return <div></div>;
};

export default withRouter(ScrollToTop);
