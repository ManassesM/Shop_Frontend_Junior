import { ItemProps, ProductAttributesTypes } from 'queries/GET_PRODUCT_BY_ID'
import { PureComponent } from 'react'
import { DefaultPropsObject } from 'redux/features/defaultPropsSlice'
import { activeProp } from 'utils/ActiveProp'
import BoxColor from '../../../Attributes/BoxColor'
import BoxText from '../../../Attributes/BoxText'

import * as S from './style'

interface ItemsProps {
	id: string
	items: ItemProps[]
	type: ProductAttributesTypes
	defaultAttributes: DefaultPropsObject[]
}

export class Items extends PureComponent<ItemsProps> {
	render() {
		const isActive = (item: ItemProps) =>
			activeProp({
				item,
				props: this.props.defaultAttributes,
				section: this.props.id,
			})

		return (
			<S.ItemsContainer>
				{this.props.items?.map((item) => {
					if (this.props.type === 'text')
						return (
							<BoxText
								key={item.id}
								{...item}
								active={isActive(item)}
								isMinicart
							/>
						)
					if (this.props.type === 'swatch')
						return (
							<BoxColor
								key={item.id}
								{...item}
								active={isActive(item)}
								isMinicart
							/>
						)
					return null
				})}
			</S.ItemsContainer>
		)
	}
}

export default Items
