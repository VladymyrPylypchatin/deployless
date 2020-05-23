import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const Logo = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'brand',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <h1 className="m-0">
        <Link to="/" style={{
          fontSize: 24,
          color: '#6163FF',
        }}>
          DEPLOYLESS
        </Link>
      </h1>
    </div>
  );
}

export default Logo;