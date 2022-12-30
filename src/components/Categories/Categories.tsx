

type CategoriesProps = {
	value: number,
	onClickCategory: any
}


function Categories({ value, onClickCategory }: CategoriesProps): JSX.Element {



	const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];


	return (
		<div className="categories">
			<ul>
				{categories.map((el, index) => {
					return <li
						key={index}
						onClick={() => onClickCategory(index)}
						className={value === index ? "active" : ""}
					>
						{el}
					</li>
				})}
			</ul>
		</div>
	);
}


export default Categories;