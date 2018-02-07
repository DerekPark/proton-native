import DesktopComponent from './DesktopComponent';
import libui from 'libui-node';
import PropTypes from 'prop-types'

class Group extends DesktopComponent {
  
  constructor(root, props) {
    super(root, props);
    this.root = root;
    this.props = props;
    this.element = new libui.UiGroup();
    this.initialProps(props)
  }

  render(parent) {
    this.addParent(parent)
    this.renderChildNode(this);
  }
}

Group.PropTypes = {
  enabled: PropTypes.bool,
  visible: PropTypes.bool,
  margined: PropTypes.bool,
  title: PropTypes.string
}

Group.defaultProps = {
  enabled: true,
  visible: true,
  margined: false,
  title: ''
}

export default Group;
