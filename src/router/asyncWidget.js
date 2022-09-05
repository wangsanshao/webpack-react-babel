export default async(Component) => {
  let Component_ = Component
  const widget = Component
  if (typeof widget.then === 'function') {
    const default_ = await Component()
    Component_ = default_.default
  } else {
    Component_ = await Component
  }
  return Component_
}
