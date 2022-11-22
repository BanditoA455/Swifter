import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../../css/NavMenu.css';

export class NavMenu extends Component {
    render() {
        return (
            <header>
                <Nav className='nav-bar'>
                    <div className='regular-link-container'>
                        <NavItem className='regular-link'>
                            <NavLink tag={Link} className='text-color' to="/home">Home</NavLink>
                        </NavItem>
                        
                        <NavItem className='regular-link'>
                            <NavLink tag={Link} className='text-color' to="/high-scores">High scores</NavLink>
                        </NavItem>
                        
                        
                        <NavItem className='regular-link'>
                            <NavLink tag={Link} className='text-color' to="/users">Users</NavLink>
                        </NavItem>
                        
                        
                        <NavItem className='regular-link'>
                            <NavLink tag={Link} className='text-color' to="/game-modes">Game modes</NavLink>
                        </NavItem>
                        
                    </div>
                </Nav>
            </header>
        );
    }
}
