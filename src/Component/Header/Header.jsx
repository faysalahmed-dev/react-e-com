import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTyeps from 'prop-types';
import { createStructuredSelector } from 'reselect';

import { selectCartHidden } from '../../Redux/Cart/Cart.selector';
import { selectCurrentUser } from '../../Redux/User/User.selector';
import { ReactComponent as Logo } from '../../Assets/logo.svg';
import NavItem from '../Nav-item/Nav-item';
import CartItem from '../Cart-item/Cart-item';
import CardDropDown from '../Card-drop-down/Card-drop-down';
import styles from './Header.module.scss';

import userAction from '../../Redux/User/User.actions';

const Header = ({ currentUser, hidden, singOutUser }) => {
    return (
        <header className={styles.header}>
            <Link to="/" className={styles.logoContainer}>
                <Logo />
            </Link>
            <nav>
                <ul className={styles.navItems}>
                    <NavItem to="/contact">Contact</NavItem>
                    <NavItem to="/shop">Shop</NavItem>
                    {currentUser ? (
                        <NavItem to="/singin" onClick={singOutUser}>
                            Sing out
                        </NavItem>
                    ) : (
                        <NavItem to="/singin">Sing In</NavItem>
                    )}
                    <CartItem />
                </ul>
                {hidden ? null : <CardDropDown />}
            </nav>
        </header>
    );
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});
const mapDispatchToProps = dispatch => ({
    singOutUser: () => dispatch(userAction.singOutStart())
});

Header.propTyeps = {
    hidden: PropTyeps.bool.isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);
