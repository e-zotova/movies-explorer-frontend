import success from "../../images/success.svg";
import fail from "../../images/fail.svg";

function ApiError({ requestStatus, popupMessage, isOpen, onClose }) {
  return (
    <div className={`popup ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <img
          className="popup__result"
          src={requestStatus ? success : fail}
          alt="Статус запроса"
        />
        <div className="popup__text">{popupMessage}</div>
        <button
          type="reset"
          aria-label="Закрыть"
          className="button popup__close-button"
          onClick={onClose}
        />
      </div>
    </div>
  );
}

export default ApiError;
