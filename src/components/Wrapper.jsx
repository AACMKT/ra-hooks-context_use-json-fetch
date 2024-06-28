export const Wrapper = (props) => {
    const { text } = props;
    return (
        <div className='content-box'><p className='title'>{text}</p>{ props.children }</div>
    )
}