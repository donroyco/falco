import React from 'react';

interface Props {
  color: string;
  width?: string;
  height?: string;
}

export default class MenuArrow extends React.Component<Props> {
  render() {
    return (
      <svg
        width={this.props.width}
        height={this.props.height}
        viewBox="0 0 24 24"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          id="Symbols"
          stroke={this.props.color}
          strokeWidth="1"
          fill={this.props.color}
          fillRule="evenodd"
          strokeLinecap="square"
        >
          <path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z" />
          {/* <g id="MenuArrow" transform="translate(1.000000, 1.000000)" stroke={this.props.color}>
            <path d="M0.307692308,0 L7.69230769,7" id="Line-4" />
            <path
              d="M0.307692308,7 L7.69230769,14"
              id="Line-4"
              transform="translate(4.000000, 10.500000) scale(1, -1) translate(-4.000000, -10.500000) "
            />
          </g> */}
        </g>
      </svg>
    );
  }
}
