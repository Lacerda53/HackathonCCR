import React from 'react';

function Header() {
  return (
    <header style={{ backgroundColor: '#D2B1F7' }}>
      <div className="uk-container">
        <nav className="uk-navbar uk-navbar">
          <div className="uk-navbar-left">
            <button className="uk-icon-button uk-hidden@m uk-icon" uk-icon="menu" uk-toggle="target: #side-menu"><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="menu"><rect x="2" y="4" width="16" height="1"></rect><rect x="2" y="9" width="16" height="1"></rect><rect x="2" y="14" width="16" height="1"></rect></svg></button>
            <ul className="uk-navbar-nav uk-visible@m">
              <li ><a style={{ color: '#3C3543', fontSize: '14px', fontWeight: 600 }} href="#">Home</a></li>
              <li ><a style={{ color: '#3C3543', fontSize: '14px', fontWeight: 600 }} href="#">Como funciona</a></li>
              <li ><a style={{ color: '#3C3543', fontSize: '14px', fontWeight: 600 }} href="#">Alunos</a></li>
            </ul>
          </div>

          <div className="uk-navbar-right">
            <div className="uk-navbar-item">
                <button style={{width:'100px', padding: 0}} className="uk-button uk-text-primary uk-border-rounded uk-text-bold">Login</button>
                <button style={{width:'100px', padding: 0}} className="uk-button uk-button-primary uk-border-rounded uk-margin-left uk-text-bold">Criar conta</button>
            </div>
          </div>
        </nav>
        <div id="side-menu" className="uk-offcanvas" uk-offcanvas="mode: push; overlay: true">
          <div className="uk-offcanvas-bar">
            <button className="uk-offcanvas-close uk-icon uk-close" type="button" uk-close="">
            </button>

            <div className="uk-flex uk-flex-column uk-height-1-1">
              <div>
                <br />
                <br />
                <ul className="uk-nav">
                  <li ><a className="uk-text-secondary uk-text-bold" href="#">Home</a></li>
                  <li ><a className="uk-text-secondary uk-text-bold" href="#">Como funciona</a></li>
                  <li ><a className="uk-text-secondary uk-text-bold" href="#">Alunos</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;