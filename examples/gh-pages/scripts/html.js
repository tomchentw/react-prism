import {default as React, PropTypes} from "react";

class ReactHtml extends React.Component {

  static get propTypes () {
    return {
      componentString: PropTypes.string.isRequired,
      clientAssets: PropTypes.object.isRequired,
    };
  }

  _render_link_to_stylesheet_ (clientAssets) {
    if (clientAssets["client"]) {
      return (
        <link rel="stylesheet" href={clientAssets["client"].replace(/js$/, "css")} />
      );
    }
  }

  render () {
    const {props, state} = this,
          {clientAssets} = props,
          innerHtml = {__html: props.componentString};

    return (
      <html>
        <head>
          <title>React Prism | tomchentw</title>
          {this._render_link_to_stylesheet_(clientAssets)}
          <script type="text/javascript" src="prism.min.js" />
        </head>
        <body>
          <div id="react-container" dangerouslySetInnerHTML={innerHtml} />
          <script type="text/javascript" src={clientAssets["assets/client"] || clientAssets["client"]} />
        </body>
      </html>
    );
  }
}

export default ReactHtml;
