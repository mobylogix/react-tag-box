import TagProp from './utils'
import TagContainer from './TagBoxContainer'

export default class TagBox extends TagContainer {
  tags() {
    return this.props.tags
  }
}
