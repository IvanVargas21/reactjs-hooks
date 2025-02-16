import PropTypes from 'prop-types'
function List (props) {
    const itemList = props.items
    const category = props.category


    const listItems = itemList.map(item => <li key={item.id}>{item.name} <b>{item.calorie}</b></li>)
    return (
        <>
        <h3 className="list-category">{category}</h3>
        <ul className="list-items">
            {listItems}
        </ul>
        </>
    )
}
List.defaultProps = {
    category: "Category",
    items: [],
}
List.propTypes ={
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number, name: PropTypes.string, calories: PropTypes.number}))
}
export default List