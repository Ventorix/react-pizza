import React from "react";
import classNames from 'classnames';

const Button = (props) => {
	return (
		<button
			className={classNames('button', {
				'button--outline' : props.outline,
			})}>{props.children}
		</button>
	);
	/*render () {
		return <button className={classNames('button', {
			'button--outline' : this.props.outline,
			})}>{this.props.children}
		</button>;
	};*/
};

export default Button;
