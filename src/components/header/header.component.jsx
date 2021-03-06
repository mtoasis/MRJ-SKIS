import React from 'react'
import { ReactComponent as Logo } from '../../assets/Stickman Snowman.svg'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import { createStructuredSelector } from 'reselect'

import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors'

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink, OptionContainer } from './header.styles'

import { signOutStart } from '../../redux/user/user.actions'

import { connect } from 'react-redux'

const Header = ({ currentUser, hidden, signOutStart }) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>
                SHOP
        </OptionLink>
            <OptionLink to='/shop'>
                CONTACT
        </OptionLink>
            {currentUser ? (
                <OptionContainer onClick={signOutStart}>
                    SIGN OUT
                    </OptionContainer>
            ) : (
                    <OptionLink to='/signin'>
                        SIGN IN
                    </OptionLink>
                )}
            <CartIcon />
        </OptionsContainer>
        {hidden ?
            null
            : <CartDropdown />
        }

    </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);