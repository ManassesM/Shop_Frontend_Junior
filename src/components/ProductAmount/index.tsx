import minus from 'assets/icons/minus.svg'
import plus from 'assets/icons/plus.svg'
import { Image } from 'components/Image'
import { PureComponent } from 'react'

import * as S from './style'

interface ProductAmountProps {
	isMiniCart?: boolean
	itemAmount?: number
}

export class ProductAmount extends PureComponent<ProductAmountProps> {
	render() {
		return (
			<S.ProductAmount>
				<S.Box isMinicart={this.props?.isMiniCart}>
					<Image
						src={plus}
						width={this.props?.isMiniCart ? 8 : 15}
						height={this.props?.isMiniCart ? 8 : 15}
					/>
				</S.Box>
				<p>{this.props.itemAmount}</p>
				<S.Box isMinicart={this.props?.isMiniCart}>
					<Image
						src={minus}
						width={this.props?.isMiniCart ? 8 : 15}
						height={this.props?.isMiniCart ? 8 : 15}
					/>
				</S.Box>
			</S.ProductAmount>
		)
	}
}

export default ProductAmount
