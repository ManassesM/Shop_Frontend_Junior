import emptyCart from 'assets/icons/emptyCart.svg'
import Modal from 'components/Modal'
import MiniCartContainer from 'containers/MiniCart'
import { PureComponent } from 'react'
import { connect } from 'react-redux'
import { CartAmountProps } from 'redux/features/cartAmountSlice'
import { CartModalProps, toggleCartModal } from 'redux/features/cartModalSlice'
import {
	CurrencyModalProps,
	toggleCurrencyModal,
} from 'redux/features/currencyModalSlice'
import { AppDispatch, RootState } from 'redux/store'
import { ReturnCartObjectProps } from 'utils/CartObject'
import { getFromLocalStorage } from 'utils/LocalStorage'

import * as S from './style'

interface MiniCartProps {
	cartAmount: CartAmountProps
	cartModal: CartModalProps
	currencyModal: CurrencyModalProps
	toggleCurrencyModal: () => void
	toggleCartModal: () => void
}

export class MiniCart extends PureComponent<MiniCartProps> {
	render() {
		const cartProducts = getFromLocalStorage<ReturnCartObjectProps[]>('cart')

		const getAmount = (): number => cartProducts?.length
		const amount = getAmount()

		const handleToggleModal = () => {
			if (this.props.currencyModal.open) this.props.toggleCurrencyModal()
			this.props.toggleCartModal()
		}

		return (
			<>
				<S.MiniCartContainer onClick={handleToggleModal}>
					<S.MiniCart src={emptyCart} width={20} height={20} />
					{amount ? <S.CartAmount>{amount}</S.CartAmount> : null}
				</S.MiniCartContainer>
				<Modal
					close={this.props.cartModal.open}
					onClose={handleToggleModal}
					width={325}
					height={677}
					hasBg
				>
					<MiniCartContainer />
				</Modal>
			</>
		)
	}
}

const mapStateToProps = (state: RootState) => ({
	currencyModal: state.currencyModal,
	cartModal: state.cartModal,
	cartAmount: state.cartAmount,
})

const mapDispatchToProps = (dispatch: AppDispatch) => {
	return {
		toggleCurrencyModal: () => {
			dispatch(toggleCurrencyModal())
		},
		toggleCartModal: () => {
			dispatch(toggleCartModal())
		},
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MiniCart)
