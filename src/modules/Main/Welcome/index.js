import React from 'react';
import image from '../../../assets/img/welcome.png'
import LazyImage from '../../../components/LazyImage'
import Svg01 from '../../../assets/icons/01.svg'
import Svg02 from '../../../assets/icons/02.svg'
import Svg03 from '../../../assets/icons/03.svg'

function Welcome() {
  return (
    <div>
      <div className="" style={{ backgroundColor: '#E3D1F8' }}>
        <div className="uk-container">
          <div className="uk-flex ul-flex-center uk-flex-middle uk-grid" uk-grid="">
            <div className="uk-width-expand uk-text-left uk-text-left@s uk-first-column">
              <h1 className="uk-text-bold uk-text-primary-dark uk-title-welcome" uk-scrollspy="cls: uk-animation-slide-top-medium; repeat: true">
                E se você pudesse ir a qualquer lugar?
            </h1>
              <h4 className="uk-text-muted" uk-scrollspy="cls: uk-animation-slide-left-small; repeat: true">
                Conectamos você ao seu futuro, indicando novos caminhos até o seu sucesso profissional.
            </h4>
            </div>
            <div className="uk-flex uk-flex-center uk-flex-middle uk-flex-last@m">
              <div uk-scrollspy="cls: uk-animation-slide-bottom; repeat: true">
                <LazyImage image={image} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="uk-container">
        <div style={{ marginTop: '-40px' }} className="uk-grid uk-child-width-1-3@m uk-grid-small uk-grid-match">
          <div>
            <div className="uk-card uk-card-default uk-text-left uk-card-body uk-margin-bottom uk-border-rounded">
              <img src={Svg01} width="25px" alt="" />
              <br />
              <br />
              <div className="uk-text-bold uk-text-secondary uk-text-large">
                Escolas
            </div>
              <div className="uk-margin-top">
                Agregue valor a seus alunos, oferecendo uma plataforma inovadora que guia os tripulantes por sua carreira.
            </div>
            </div>
          </div>
          <div>
            <div className="uk-card uk-card-default uk-text-left uk-card-body uk-margin-bottom uk-border-rounded">
              <img src={Svg02} width="25px" alt="" />
              <br />
              <br />
              <div className="uk-text-bold uk-text-secondary uk-text-large">
                Alunos
            </div>
              <div className="uk-margin-top">
                Descubra, baseado em seus interesses, o que você pode ser, sem pressões e rótulos!
            </div>
            <br/>
              <a href="#" className="uk-text-primary uk-text-meta uk-text-bold">
                Explore <span uk-icon="icon: arrow-right"></span>
              </a>
            </div>
          </div>
          <div>
            <div className="uk-card uk-card-default uk-text-left uk-card-body uk-margin-bottom uk-border-rounded">
              <img src={Svg03} width="25px" alt="" />
              <br />
              <br />
              <div className="uk-text-bold uk-text-secondary uk-text-large">
                Voluntários
            </div>
              <div className="uk-margin-top">
                Ganhe horas de atividade complementar realizando mentorias de acordo com seu tempo livre
            </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}

export default Welcome;