import '../../../sass/components/ModalLibrary/Modal-library.css';
import '../../../sass/utils/_reset.scss';
import { createPortal } from 'react-dom';
import sprite from '../../../sprites/library-sprite.svg';
import { useEffect } from 'react';

const modalRoot = document.querySelector('#modal-root');

function ModalLibrary({ onClose }) 
{
    const onKeyDown = event => {
    if (event.code === 'Escape') {
      onClose();
    }
  };

  const onBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  });
  return createPortal(
    <div className="backdrop" onClick={onBackdropClick}>
      <div className="modal">
        <div className="wrapper">
          <div className="firstStep">
            <h4 className="stepsTitle">Крок 1.</h4>
            <div className="flex-wrapper">
              <div className="flex-cont">
                <svg className="main-icon" width="30" height="25">
                  <use href={sprite + '#library-icon'} />
                </svg>
                <h5 className="stepsSuptitle">Створіть особисту бібліотеку</h5>
              </div>
              <div className="flex-wrapper">
                <div className="flex-cont">
                  <svg className="arrow-icon" width="30" height="25">
                    <use href={sprite + '#library-arrow'} />
                  </svg>
                  <p className="stepsParagrath">
                    Додайте до неї книжки, які маєте намір прочитати.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="secondStep">
            <h4 className="stepsTitle">Крок 2.</h4>
            <div className="flex-wrapper">
              <div className="flex-cont">
                <svg className="main-icon" width="30" height="25">
                  <use href={sprite + '#library-flag'} />
                </svg>
                <h5 className="stepsSuptitle">
                  Сформуйте своє перше тренування
                </h5>
              </div>
              <div className="flex-wrapper">
                <div className="flex-cont">
                  <svg className="arrow-icon" width="30" height="25">
                    <use href={sprite + '#library-arrow'} />
                  </svg>
                  <p className="stepsParagrath">
                    Визначте ціль, оберіть період, розпочинайте тренування.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button className="modal-button" type="button" onClick={() => onClose()}>
            Ok
          </button>
        </div>
      </div>
    </div>,
    modalRoot
  );
}

export default ModalLibrary;
