import React from 'react';

function Navbar({ onSearch }) {
    const handleSearchChange = (event) => {
        onSearch(event.target.value);
    };

    return (
        <div className='container'>
            <nav className="navbar" style={{ backgroundColor: '#e3f2fd' }}>
                <div className="container-fluid">
                    <a className="navbar-brand">Dishes</a>
                    <form className="d-flex" role="search" onSubmit={(e) => e.preventDefault()}>
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            onChange={handleSearchChange}
                        />
                    </form>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
